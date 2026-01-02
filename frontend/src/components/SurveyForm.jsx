import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

const SurveyForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    service: "4.5 inch",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp Message
    const phoneNumber = "919100111643";
    const message = `Hello JMJ Borewells, I requested a site survey.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Village:* ${formData.village}%0A*Service:* ${formData.service}`;

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="glass-panel" style={{ padding: "30px" }}>
      <h3
        className="gradient-text"
        style={{ fontSize: "2rem", marginBottom: "10px" }}
      >
        {t("location", "survey_title")}
      </h3>
      <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
        {t("location", "survey_desc")}
      </p>

      {submitted ? (
        <div
          style={{
            padding: "20px",
            background: "rgba(34, 197, 94, 0.2)",
            borderRadius: "8px",
            color: "#22c55e",
            fontWeight: "bold",
          }}
        >
          {t("location", "success")}
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            name="name"
            placeholder={t("location", "name")}
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--glass-border)",
              background: "var(--glass-bg)",
              color: "var(--text-main)",
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("location", "phone")}
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--glass-border)",
              background: "var(--glass-bg)",
              color: "var(--text-main)",
            }}
          />
          <input
            type="text"
            name="village"
            placeholder={t("location", "village")}
            value={formData.village}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid var(--glass-border)",
              background: "var(--glass-bg)",
              color: "var(--text-main)",
            }}
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="survey-select"
          >
            <option value="4.5 inch">{t("location", "service_45")}</option>
            <option value="6.5 inch">{t("location", "service_65")}</option>
          </select>

          <button
            type="submit"
            className="btn-primary"
            style={{ marginTop: "10px" }}
          >
            {t("location", "submit")}
          </button>
        </form>
      )}
    </div>
  );
};

export default SurveyForm;
