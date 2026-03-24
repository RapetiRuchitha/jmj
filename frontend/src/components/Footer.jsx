import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Clock,
  Shield,
  X,
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
import s from "./Footer.module.css";

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        {/* Brand */}
        <div>
          <div className={s.brand}>
            <img
              src="images/logo.png"
              alt="JMJ Borewells Logo"
              className={s.brandLogo}
            />
            <span className={s.brandName}>JMJ Borewells</span>
          </div>
          <p className={s.brandDesc}>
            {language === "en"
              ? 'Leading borewell drilling company in Vizag region for over 25 years. Specializing in high-precision 4.5" and 6.5" drilling services.'
              : 'విశాఖ రీజియన్‌లో 25 ఏళ్లుగా నమ్మకమైన బోర్‌వెల్ సేవలందిస్తున్నాము. 4.5" మరియు 6.5" డ్రిల్లింగ్‌లో మాకు సాటి ఎవరూ లేరు.'}
          </p>
          <div className={s.socialRow}></div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={s.colTitle}>
            {language === "en" ? "Quick Links" : "లింకులు"}
          </h4>
          <div className={s.linkList}>
            {["home", "services", "location", "about"].map((link) => (
              <button
                key={link}
                className={s.footerLink}
                onClick={() => scrollTo(link)}
              >
                <ChevronRight size={14} className={s.linkIcon} />
                {t("nav", link === "services" ? "plans" : link)}
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className={s.colTitle}>
            {language === "en" ? "Our Services" : "మా సేవలు"}
          </h4>
          {(language === "en"
            ? [
                '4.5" Domestic Borewell',
                '6.5" High Yield Borewell',
                "Borewell Pressing/Flushing",
                "Geological Water Source Survey",
              ]
            : [
                '4.5" ఇంటి బోర్‌వెల్',
                '6.5" హై యీల్డ్ బోర్‌వెల్',
                "బోర్‌వెల్ ప్రెస్సింగ్",
                "భూగర్భ జల సమీక్ష",
              ]
          ).map((svc, i) => (
            <div key={i} className={s.serviceItem}>
              <ChevronRight size={14} className={s.serviceIcon} />
              {svc}
            </div>
          ))}
        </div>

        {/* Contact + Hours */}
        <div>
          <h4 className={s.colTitle}>
            {language === "en" ? "Get in Touch" : "సంప్రదించండి"}
          </h4>
          <div className={s.contactItem}>
            <MapPin size={20} className={s.contactIcon} />
            <span className={s.contactText}>{t("location", "address")}</span>
          </div>
          <div className={s.contactItem}>
            <Phone size={18} className={s.contactIcon} />
            <a href="tel:+919392812362" className={s.contactLink}>
              +91 93928 12362
            </a>
          </div>
          <div className={s.contactItem}>
            <Mail size={18} className={s.contactIcon} />
            <a href="mailto:jmjborewell@gmail.com" className={s.contactLink}>
              jmjborewell@gmail.com
            </a>
          </div>
          <div className={s.contactItem}>
            <Clock size={18} className={s.contactIcon} />
            <span className={s.contactText}>
              {language === "en"
                ? "Mon - Sun: 9:00 AM – 8:00 PM"
                : "సోమ - ఆది: ఉ. 9:00 – రా. 8:00"}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={s.bottomBar}>
        <div className={s.copyright}>
          © {currentYear} JMJ Borewells.{" "}
          {language === "en"
            ? "All Rights Reserved."
            : "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."}
        </div>
        <div className={s.legalLinks}>
          <button className={s.legalLink} onClick={() => setShowPrivacy(true)}>
            <Shield size={13} />
            {language === "en" ? "Privacy Policy" : "గోప్యతా విధానం"}
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className={s.modalOverlay} onClick={() => setShowPrivacy(false)}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <h3>{language === "en" ? "Privacy Policy" : "గోప్యతా విధానం"}</h3>
              <button
                className={s.modalClose}
                onClick={() => setShowPrivacy(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className={s.modalBody}>
              {language === "en" ? (
                <>
                  <p>
                    <strong>Last updated:</strong> March 2026
                  </p>
                  <h4>Information We Collect</h4>
                  <p>
                    When you submit a site survey request, we collect your name,
                    phone number, village/landmark, and service preference. This
                    information is used solely to contact you regarding your
                    borewell service inquiry.
                  </p>
                  <h4>How We Use Your Information</h4>
                  <p>
                    Your personal information is used exclusively to respond to
                    your service inquiry, provide quotes, and schedule site
                    surveys. We do not sell, rent, or share your information
                    with third parties.
                  </p>
                  <h4>Data Security</h4>
                  <p>
                    We take reasonable measures to protect your personal
                    information from unauthorized access, alteration, or
                    disclosure.
                  </p>
                  <h4>Contact</h4>
                  <p>
                    For questions about this policy, contact us at{" "}
                    <strong>jmjborewell@gmail.com</strong> or call{" "}
                    <strong>+91 93928 12362</strong>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>చివరి అప్‌డేట్:</strong> మార్చి 2026
                  </p>
                  <h4>మేము సేకరించే సమాచారం</h4>
                  <p>
                    మీరు సైట్ సర్వే రిక్వెస్ట్ సమర్పించినప్పుడు, మీ పేరు, ఫోన్
                    నెంబర్, గ్రామం/ల్యాండ్‌మార్క్ మరియు సర్వీస్ ప్రాధాన్యతను
                    సేకరిస్తాము.
                  </p>
                  <h4>మీ సమాచారాన్ని ఎలా ఉపయోగిస్తాము</h4>
                  <p>
                    మీ వ్యక్తిగత సమాచారం మీ సేవా విచారణకు ప్రతిస్పందించడానికి,
                    కోట్‌లు అందించడానికి మరియు సైట్ సర్వేలను షెడ్యూల్ చేయడానికి
                    మాత్రమే ఉపయోగించబడుతుంది.
                  </p>
                  <h4>డేటా భద్రత</h4>
                  <p>
                    మీ వ్యక్తిగత సమాచారాన్ని అనధికార యాక్సెస్ నుండి
                    రక్షించడానికి మేము సహేతుక చర్యలు తీసుకుంటాము.
                  </p>
                  <h4>సంప్రదించండి</h4>
                  <p>
                    ఈ విధానం గురించి ప్రశ్నలకు, <strong>jmjborewell@gmail.com</strong> లేదా <strong>+91 93928 12362</strong>కు కాల్ చేయండి.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
