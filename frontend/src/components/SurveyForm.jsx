import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import s from "./SurveyForm.module.css";

const SurveyForm = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    service: "4.5 inch",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (field, value) => {
    const errs = {};
    if (field === "name" || !field) {
      const name = field ? value : formData.name;
      if (touched.name && name.trim().length < 2) {
        errs.name =
          language === "en"
            ? "Name must be at least 2 characters"
            : "\u0C2A\u0C47\u0C30\u0C41 \u0C15\u0C28\u0C40\u0C38\u0C02 2 \u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C32\u0C41 \u0C09\u0C02\u0C21\u0C3E\u0C32\u0C3F";
      }
    }
    if (field === "phone" || !field) {
      const phone = field ? value : formData.phone;
      if (touched.phone && !/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ""))) {
        errs.phone =
          language === "en"
            ? "Enter a valid 10-digit mobile number"
            : "\u0C1A\u0C46\u0C32\u0C4D\u0C32\u0C41\u0C2C\u0C3E\u0C1F\u0C41 \u0C05\u0C2F\u0C4D\u0C2F\u0C47 10 \u0C05\u0C02\u0C15\u0C46\u0C32 \u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F";
      }
    }
    if (field === "village" || !field) {
      const village = field ? value : formData.village;
      if (touched.village && village.trim().length < 2) {
        errs.village =
          language === "en"
            ? "Please enter your village or landmark"
            : "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C2E\u0C40 \u0C17\u0C4D\u0C30\u0C3E\u0C2E\u0C02 \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C02\u0C21\u0C3F";
      }
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldErrors = validate(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, phone: true, village: true });
    const allErrors = validate();
    setErrors(allErrors);
    if (Object.keys(allErrors).length > 0) return;

    setIsSubmitting(true);

    const serviceLabel =
      formData.service === "4.5 inch"
        ? language === "en"
          ? "4.5 Inch (Residential)"
          : "4.5 \u0C05\u0C02\u0C17\u0C41\u0C33\u0C3E\u0C32\u0C41 (\u0C07\u0C02\u0C1F\u0C3F\u0C15\u0C3F)"
        : formData.service === "6.5 inch"
          ? language === "en"
            ? "6.5 Inch (Heavy Duty)"
            : "6.5 \u0C05\u0C02\u0C17\u0C41\u0C33\u0C3E\u0C32\u0C41 (\u0C35\u0C4D\u0C2F\u0C35\u0C38\u0C3E\u0C2F\u0C02)"
          : language === "en"
            ? "Borewell Pressing"
            : "\u0C2C\u0C4B\u0C30\u0C4D\u200C\u0C35\u0C46\u0C32\u0C4D \u0C2A\u0C4D\u0C30\u0C46\u0C38\u0C4D\u0C38\u0C3F\u0C02\u0C17\u0C4D";

    const lines =
      language === "en"
        ? [
            "💧 *New Borewell Survey Request*",
            "",
            "👤 *Name:* " + formData.name,
            "📱 *Phone:* " + formData.phone,
            "📍 *Village / Location:* " + formData.village,
            "🛠️ *Service Required:* " + serviceLabel,
            "",
            "_Sent from the JMJ Borewells website_",
          ]
        : [
            "💧 *కొత్త బోర్‌వెల్ సర్వే రిక్వెస్ట్*",
            "",
            "👤 *పేరు:* " + formData.name,
            "📱 *ఫోన్:* " + formData.phone,
            "📍 *గ్రామం / ప్రాంతం:* " + formData.village,
            "🛠️ *అవసరమైన సేవ:* " + serviceLabel,
            "",
            "_JMJ Borewells వెబ్‌సైట్ నుండి పంపబడింది_",
          ];

    const message = lines.join("\n");
    const whatsappUrl =
      "https://wa.me/919392812362?text=" + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setFormData({ name: "", phone: "", village: "", service: "4.5 inch" });
    setTouched({});
    setErrors({});
    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className={s.panel}>
      <h3 className={s.title}>{t("location", "survey_title")}</h3>
      <p className={s.desc}>{t("location", "survey_desc")}</p>

      {submitted ? (
        <div className={s.success}>
          <CheckCircle size={20} />
          {language === "en"
            ? "WhatsApp opened! Please tap Send to complete your request."
            : "WhatsApp \u0C24\u0C46\u0C30\u0C35\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F! Send \u0C28\u0C4A\u0C15\u0C4D\u0C15\u0C02\u0C21\u0C3F."}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={s.form} noValidate>
          <div className={s.fieldGroup}>
            <input
              type="text"
              name="name"
              placeholder={t("location", "name")}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`${s.input} ${errors.name ? s.inputError : ""}`}
              autoComplete="name"
            />
            {errors.name && <span className={s.errorText}>{errors.name}</span>}
          </div>
          <div className={s.fieldGroup}>
            <input
              type="tel"
              name="phone"
              placeholder={t("location", "phone")}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`${s.input} ${errors.phone ? s.inputError : ""}`}
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
            />
            {errors.phone && (
              <span className={s.errorText}>{errors.phone}</span>
            )}
          </div>
          <div className={s.fieldGroup}>
            <input
              type="text"
              name="village"
              placeholder={t("location", "village")}
              value={formData.village}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`${s.input} ${errors.village ? s.inputError : ""}`}
            />
            {errors.village && (
              <span className={s.errorText}>{errors.village}</span>
            )}
          </div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={s.select}
          >
            <option value="4.5 inch">{t("location", "service_45")}</option>
            <option value="6.5 inch">{t("location", "service_65")}</option>
            <option value="Pressing Service">
              {t("services", "pressing_title")}
            </option>
          </select>
          <button type="submit" className={s.submitBtn} disabled={isSubmitting}>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              style={{ flexShrink: 0 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.529 5.85L0 24l6.335-1.505A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.366l-.36-.213-3.76.894.949-3.657-.234-.374A9.818 9.818 0 1112 21.818z" />
            </svg>
            {isSubmitting
              ? language === "en"
                ? "Opening WhatsApp..."
                : "\u0C24\u0C46\u0C30\u0C41\u0C1A\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C2E\u0C41..."
              : language === "en"
                ? "Send via WhatsApp"
                : "WhatsApp \u0C32\u0C4B \u0C2A\u0C02\u0C2A\u0C02\u0C21\u0C3F"}
          </button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
