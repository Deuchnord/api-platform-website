"use client";
import React, { useContext } from "react";
import SpeakerList from "components/con/speakers/SpeakerList";
import SectionTitle from "components/con/common/typography/SectionTitle";
import { Speaker } from "types/con";
import SectionSubTitle from "components/con/common/typography/SectionSubtitle";
import { LanguageContext } from "contexts/con/LanguageContext";

interface Speakers {
  speakers: Speaker[];
}

export default function SpeakerPageListTemplate({ speakers }: Speakers) {
  const { t, Translate } = useContext(LanguageContext);
  return (
    <div className="container flex flex-col items-center pt-10 | sm:pt-20">
      <SectionTitle h1 dark>
        <Translate translationKey="speakers.title" />
      </SectionTitle>
      <SectionSubTitle dark>{t("speakers.subtitle")}</SectionSubTitle>
      <div className="pb-36 text-white">
        <SpeakerList speakers={speakers} />
      </div>
    </div>
  );
}
