import React from "react";
import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("Hello");

  return (
    <section className="">
      <h1 className="">{t("title")}</h1>
      <h2 className="">{t("piska")}</h2>
    </section>
  );
}
