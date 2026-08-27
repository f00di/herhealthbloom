import Link from "next/link";
import { healthTopics } from "@/config/topics";
import { primaryNavigation, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <p className="footer-brand">{siteConfig.siteName}</p>
          <p>Evidence-Based information and Education in Gynecology, Pregnancy, and Breast Health</p>
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
        <p>{siteConfig.medicalDisclaimer} Always seek the advice of your healthcare provider with any questions you may have regarding a medical condition, pregnancy, or reproductive health. Never disregard professional medical advice or delay seeking it because of something you have read or seen on this website.</p>
        <p>{siteConfig.copyright}</p>
      </div>
    </footer>
  );
}
