"""Download the replaceable stock photographs used by the school demo."""

from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import json
import urllib.request


ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / "public" / "images" / "demo"
ASSETS = {
    "classroom": ("1509062522246-3755977927d7", 1800),
    "campus": ("1580582932707-520aed937b7b", 1200),
    "library": ("1507842217343-583bb7270b66", 1000),
    "sports": ("1546519638-68e109498ffc", 1000),
    "art": ("1513364776144-60967b0f800f", 1000),
    "science": ("1532094349884-543bc11b234d", 1200),
    "teacher-dilnoza": ("1580489944761-15a19d654956", 800),
    "teacher-aziz": ("1500648767791-00dcc994a43e", 800),
    "teacher-nargiza": ("1494790108377-be9c29b29330", 800),
    "reading": ("1503676260728-1c00da094a0b", 1000),
    "students": ("1427504494785-3a9ca7044f45", 1200),
}


def download(item):
    name, (photo_id, width) = item
    source = f"https://images.unsplash.com/photo-{photo_id}?fm=webp&fit=crop&w={width}&q=82"
    target = DESTINATION / f"{name}.webp"
    request = urllib.request.Request(source, headers={"User-Agent": "School29-Demo/1.0"})
    with urllib.request.urlopen(request, timeout=90) as response:
        payload = response.read()
    if len(payload) < 1000 or payload[:4] != b"RIFF" or payload[8:12] != b"WEBP":
        raise ValueError(f"Unexpected image response for {name}")
    target.write_bytes(payload)
    print(f"Downloaded {name}: {len(payload)} bytes", flush=True)
    return {"file": f"/images/demo/{name}.webp", "source": source, "kind": "Unsplash stock photograph; demo use, not the actual school"}


if __name__ == "__main__":
    DESTINATION.mkdir(parents=True, exist_ok=True)
    with ThreadPoolExecutor(max_workers=4) as executor:
        records = list(executor.map(download, ASSETS.items()))
    (ROOT / "scripts" / "demo-image-sources.json").write_text(
        json.dumps(records, indent=2) + "\n", encoding="utf-8"
    )
