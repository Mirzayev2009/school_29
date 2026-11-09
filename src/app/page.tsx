import Image from "next/image";
import { SiteHeader, SchoolMark } from "@/components/site-header";
import { PageMotion } from "@/components/page-motion";
import { LearningTabs } from "@/components/learning-tabs";
import { PhotoGallery } from "@/components/photo-gallery";
import { ArrowIcon, ArrowUpRightIcon, PinIcon } from "@/components/icons";
import {
  activities,
  highlights,
  navigation,
  school,
} from "@/lib/school-data";

export default function Home() {
  return (
    <PageMotion>
      <a className="skip-link" href="#asosiy">
        Asosiy mazmunga o‘tish
      </a>
      <SiteHeader />
      <main id="asosiy">
        <section className="hero" id="bosh-sahifa" aria-labelledby="hero-title">
          <div className="hero-photo photo-frame">
            <Image
              src={school.heroImage}
              alt="Samarqand shahar 29-maktabining binosi"
              fill
              sizes="100vw"
              preload
            />
          </div>
          <div className="container">
            <div className="hero-head">
              <h1 id="hero-title">
                <span className="hero-title-line">
                  <span>Katta orzular</span>
                </span>
                <span className="hero-title-line">
                  <span>shu yerdan</span>
                </span>
                <span className="hero-title-line">
                  <span>boshlanadi.</span>
                </span>
              </h1>
              <div className="hero-description">
                <p>
                  {school.fullName}. {school.description}
                </p>
                <a className="button button-light" href="#maktab">
                  Maktab haqida <ArrowUpRightIcon />
                </a>
              </div>
            </div>
            <div className="hero-bottom">
              <span>{school.fullName}</span>
              <a className="scroll-link" href="#maktab">
                Birga o‘rganamiz <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section
          id="maktab"
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="about-title">
                Samarqanddagi
                <br />
                29-maktab.
              </h2>
              <p>
                Maktab manzili, o‘quvchilar soni va maktab muhitidan olingan
                suratlar.
              </p>
            </div>
            <div className="about-layout">
              <div className="about-copy">
                <p className="large-copy">
                  Maktab {school.address.street} manzilida joylashgan. Unda
                  2 100 dan ortiq o‘quvchi ta’lim oladi.
                </p>
                <p>
                  Maktab binosi, sinf xonalari, kutubxona va dars jarayonidan
                  olingan suratlarni ko‘ring.
                </p>
                <a className="text-link" href="#galereya">
                  Maktab suratlarini ko‘ring <ArrowUpRightIcon />
                </a>
              </div>
              <div className="about-photo photo-frame">
                <Image
                  src="/images/school/school-campus.png"
                  alt="Samarqand shahar 29-maktabining binosi va old maydoni"
                  fill
                  sizes="(max-width: 800px) 90vw, 50vw"
                />
              </div>
            </div>
            <dl className="school-stats">
              {school.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="talim"
          className="section learning-section"
          aria-labelledby="learning-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="learning-title">
                Har bir bosqichda
                <br />
                yangi imkoniyat.
              </h2>
              <p>
                Ilk harflardan mustaqil qarorlargacha — har bir yoshga mos
                bilim, e’tibor va qo‘llab-quvvatlash.
              </p>
            </div>
            <LearningTabs />
          </div>
        </section>

        <section
          id="hayot"
          className="section life-section"
          aria-labelledby="life-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="life-title">
                Dars tugaydi.
                <br />
                Kashfiyotlar davom etadi.
              </h2>
              <p>
                Maydondagi birinchi g‘alaba, chizilgan yangi rasm yoki qo‘ldan
                qo‘yilmaydigan kitob. Har kunning o‘z hikoyasi bor.
              </p>
            </div>
            <div className="activity-grid">
              {activities.map((activity) => (
                <article className="activity" key={activity.name}>
                  <div className="activity-photo photo-frame">
                    <Image
                      src={activity.image}
                      alt={activity.alt}
                      fill
                      sizes="(max-width: 600px) 90vw, 30vw"
                    />
                  </div>
                  <h3>{activity.name}</h3>
                  <p>{activity.description}</p>
                </article>
              ))}
            </div>
            <a className="text-link" href="#galereya">
              Maktab suratlarini ko‘ring <ArrowUpRightIcon />
            </a>
          </div>
        </section>

        <section
          id="voqealar"
          className="section highlights-section"
          aria-labelledby="highlights-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="highlights-title">
                Eslab qolishga
                <br />
                arziydigan lahzalar.
              </h2>
              <p>
                Birgalikda o‘rganamiz, sinab ko‘ramiz va kichik yutuqlardan ham
                quvonamiz.
              </p>
            </div>
            <div className="highlights-grid">
              {highlights.map((item) => (
                <article className="highlight" key={item.title}>
                  <div className="highlight-photo photo-frame">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 700px) 90vw, 45vw"
                    />
                  </div>
                  <div className="highlight-description">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="galereya"
          className="section gallery-section"
          aria-labelledby="gallery-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="gallery-title">
                Maktab hayoti,
                <br />
                suratlarda.
              </h2>
              <p>
                Samimiy lahzalar, tanish joylar va har kuni yangidan
                boshlanadigan hikoyalar. Suratni kattalashtirish uchun ustiga
                bosing.
              </p>
            </div>
            <PhotoGallery />
          </div>
        </section>

        <section
          id="boglanish"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container">
            <div className="contact-head">
              <h2 id="contact-title">
                Tanishishga
                <br />
                doim tayyormiz.
              </h2>
              <p>
                Maktab haqida savolingiz bormi?
                <br />
                Sizni tinglashdan xursandmiz.
              </p>
            </div>
            <div className="contact-details">
              <div className="contact-location">
                <PinIcon />
                <div>
                  <h3>{school.location}</h3>
                  <address className="school-address">
                    {school.address.street}
                    <br />
                    {school.address.region}
                  </address>
                </div>
                <a
                  className="button button-light"
                  href={school.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manzilni xaritada ko‘ring <ArrowUpRightIcon />
                </a>
              </div>
              <div className="contact-note">
                <div className="contact-links">
                  {school.contacts.map((contact) => (
                    <a
                      key={contact.label}
                      className="contact-link"
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noopener noreferrer" : undefined}
                    >
                      <span>
                        <span className="contact-link-label">{contact.label}</span>
                        <span className="contact-link-value">{contact.value}</span>
                      </span>
                      <ArrowUpRightIcon />
                    </a>
                  ))}
                </div>
                <a className="text-link" href="#bosh-sahifa">
                  Sahifa boshiga qaytish <ArrowUpRightIcon />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <a
              href="#bosh-sahifa"
              className="logo-link"
              aria-label="29-maktab — bosh sahifa"
            >
              <SchoolMark />
            </a>
            <nav aria-label="Pastki navigatsiya">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <span className="footer-motto">
              Birga o‘rganamiz.
              <br />
              Birga ulg‘ayamiz.
            </span>
          </div>
          <div className="footer-bottom">
            <p>© 2026 {school.fullName}.</p>
            <p>{school.address.region}</p>
          </div>
        </div>
      </footer>
    </PageMotion>
  );
}
