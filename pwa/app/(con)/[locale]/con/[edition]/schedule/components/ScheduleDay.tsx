"use client";
import React, { useContext } from "react";
import { getConferenceDate, sortByStartDate } from "utils/con";
import { Conference, Day } from "types/con";
import SlotItem from "./SlotItem";
import Overline from "components/con/common/typography/Overline";
import styles from "./ScheduleDay.module.css";
import classNames from "classnames";
import { LanguageContext } from "contexts/con/LanguageContext";

function ExtraSlotItem({ conference }: { conference: Conference }) {
  return (
    <div
      className={classNames(
        "w-full h-full px-1 py-2 flex items-center justify-center uppercase font-bold",
        conference.type === "break" &&
          "border-blue border-dotted border-2 text-blue-dark",
        conference.type === "empty" && "hidden lg:block lg:min-h-[80px]",
        conference.type === "upcoming" && "bg-grey opacity-40"
      )}
    >
      <span className="h6">{conference.title}</span>
    </div>
  );
}

function ScheduleByTrack({
  track,
  conferences: allConferences,
}: {
  track?: string;
  conferences: Conference[];
}) {
  const { t } = useContext(LanguageContext);
  const conferences = allConferences
    .filter((conference) => conference.track === track || !conference.track)
    .sort(sortByStartDate);

  return (
    <div className="grid-cols-1 gap-1 grid bg-white p-2">
      {track ? (
        <div className={styles["track-header"]}>
          <div className="h5" data-value="day">
            {t("conferences.track", { track })}
          </div>
        </div>
      ) : null}
      {conferences.map((conference) => (
        <div key={`${conference.title} ${conference.start} ${conference.date}`}>
          {conference.type === "conference" ? (
            <SlotItem conference={conference} />
          ) : (
            <ExtraSlotItem conference={conference} />
          )}
        </div>
      ))}
    </div>
  );
}

interface ScheduleDayProps {
  day: Day;
  conferences: Conference[];
}

export default function ScheduleDay({ day, conferences }: ScheduleDayProps) {
  const times = conferences.reduce((acc, conference) => {
    if (!acc.includes(conference.start)) acc.push(conference.start);
    if (!acc.includes(conference.end)) acc.push(conference.end);
    return acc;
  }, [] as string[]);
  return day ? (
    <div className="mb-14 last:mb-0" key={day.title}>
      <h2 className="text-white font-title text-4xl font-bold">{day.title}</h2>
      <Overline className="text-white/80 py-2">
        {" "}
        {getConferenceDate(day.date)}
      </Overline>
      {day.tracks ? (
        day.tracks.map((track) => (
          <div key={track} className="lg:hidden">
            <ScheduleByTrack conferences={conferences} track={track} />
          </div>
        ))
      ) : (
        <div className="lg:hidden">
          <ScheduleByTrack conferences={conferences} />
        </div>
      )}
      <div className="bg-white my-5 hidden max-w-5xl mx-auto | lg:block">
        {day.single ? (
          <ScheduleByTrack conferences={conferences} />
        ) : (
          <div className="p-2">
            {day.tracks ? (
              <div
                className={classNames(
                  styles["track-header"],
                  styles["schedule-grid"]
                )}
              >
                {day.tracks.map((track) => (
                  <span
                    key={track}
                    style={{ gridColumn: `track-${track}`, gridRow: "tracks" }}
                    aria-hidden="true"
                  >
                    {`Track ${track}`}
                  </span>
                ))}
              </div>
            ) : null}
            <div
              className={classNames("grid gap-x-1", styles["schedule-grid"])}
            >
              {times.map((time) => (
                <div
                  key={time}
                  className="text-xs"
                  style={{
                    gridColumn: "times",
                    gridRow: `time-${time.replace(":", "")}`,
                  }}
                >
                  {time}
                </div>
              ))}
              {conferences.map((conference) => {
                return (
                  <div
                    id={conference.type}
                    key={`${conference.title} ${conference.start} ${conference.date}`}
                    style={{
                      gridColumn: conference.track
                        ? `track-${conference.track}`
                        : "track-EN / track-FR-end",
                      gridRow: `time-${conference.start.replace(
                        ":",
                        ""
                      )}/time-${conference.end.replace(":", "")}`,
                    }}
                  >
                    {conference.type === "conference" ? (
                      <SlotItem conference={conference} />
                    ) : (
                      <ExtraSlotItem conference={conference} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
}
