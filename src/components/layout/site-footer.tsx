import Link from "next/link";
import { healthTopics } from "@/config/topics";
import { primaryNavigation, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <p className="footer-brand">{siteConfig.siteName}</p>
          <p>Clear educational information about women’s health under the supervision of {siteConfig.author.name}, {siteConfig.author.credentials}.</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2>Explore</h2>
          <ul>{primaryNavigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
        </nav>
        <nav aria-label="Health topics">
          <h2>Health topics</h2>
          <ul>{healthTopics.map((topic) => <li key={topic.slug}><Link href={`/articles?topic=${topic.slug}`}>{topic.title}</Link></li>)}</ul>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>{siteConfig.medicalDisclaimer} Consult an appropriate healthcare professional about medical questions and seek urgent care for emergencies.</p>
        <p>{siteConfig.copyright}</p>
      </div>
    </footer>
  );
}
