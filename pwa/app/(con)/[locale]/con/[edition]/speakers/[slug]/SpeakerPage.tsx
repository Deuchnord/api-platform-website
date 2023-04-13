"use client";
import React, { useContext } from "react";
import { Conference, Speaker } from "types/con";
import SectionTitle from "components/con/common/typography/SectionTitle";
import SpeakerImage from "components/con/speakers/SpeakerImage";
import SpeakerDescription from "components/con/speakers/SpeakerDescription";
import SpeakerConferenceSlot from "./SpeakerConferenceSlot";
import { LanguageContext } from "contexts/con/LanguageContext";

interface SpeakerProps {
  speakerData: Speaker;
  conferences: Conference[];
}

export default function SpeakerPageTemplate({
  speakerData,
  conferences,
}: SpeakerProps) {
  const { company, job, name, image, placeholder } = speakerData;
  const firstname = name.split(" ")[0];
  const { t } = useContext(LanguageContext);

  return (
    <div className="container xl:max-w-8xl flex flex-col items-center pt-10 pb-72 | sm:pt-20">
      <div className="text-white pb-14">
        <SectionTitle h1 dark lined>
          <strong>{name}</strong>
        </SectionTitle>
        <p className="text-xl text-center uppercase font-light">
          {`${job}`}
          {company ? (
            <>
              {" "}
              @ <span className="font-normal">{company}</span>
            </>
          ) : null}
        </p>
      </div>
      <div className="flex flex-col flex-wrap items-center bg-grey px-10 py-10 | lg:flex-row lg:items-start | sm:py-20">
        <div className="w-72 h-72 | md:w-80 md:h-80 | lg:w-[400px] lg:h-[400px]">
          <SpeakerImage image={image} placeholder={placeholder} />
        </div>
        <div className="flex-1 | sm:px-6">
          <SpeakerDescription speaker={speakerData} />
        </div>
        {0 < conferences.length ? (
          <div className="w-full relative z-10 max-w-3xl -mb-40 mt-12 mx-auto">
            <h2 className="font-title font-bold uppercase text-xl mb-2">
              {t("speakers.speaker_schedule", { speaker: firstname })}
            </h2>
            {conferences.map((conference) => (
              <SpeakerConferenceSlot
                key={conference.title}
                conference={conference}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
