import React from "react";
import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("Hello");

  return (
    <section>
      <h1>{t("title")}</h1>
      <h2>{t("piska")}</h2>
    </section>
  );
}
