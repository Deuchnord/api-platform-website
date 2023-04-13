import React from "react";
import LayoutBase from "components/con/layout/LayoutBase";
import ContactCard from "components/con/layout/ContactCard";
import Script from "next/script";
import { editions } from "data/con/editions";

export async function generateStaticParams() {
  return [{ edition: "2021" }, { edition: "2022" }, { edition: "2023" }];
}

export const dynamicParams = false;
export const dynamic = "force-static";

async function EditionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    edition: string;
  };
}) {
  const { edition } = params;
  const nav = await import(`data/con/${edition}/nav`);
  const footer = await import(`data/con/${edition}/footer`);
  const currentEdition = editions.find((e) => e.year === edition);

  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `API Platform Conference ${edition}$`,
    description:
      "The international conference dedicated to API Platform and its ecosystem",
    url: `https://api-platform.com/con/${edition}/`,
    eventStatus: "http://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    startDate: currentEdition?.startDate,
    endDate: currentEdition?.endDate,
    organizer: {
      "@type": "Organization",
      name: "Les-Tilleuls.coop",
      url: "https://les-tilleuls.coop/en",
    },
    location: [
      {
        "@type": "Place",
        name: "Euratechnologies",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lille",
          addressRegion: "Hauts de France",
          postalCode: "59000",
          streetAddress: "Place de Saintignon, 165 avenue de Bretagne",
        },
      },
      {
        "@type": "VirtualLocation",
        url: `https://api-platform.com/con/${edition}/`,
      },
    ],
    image: `${process.env.NEXT_ROOT_URL}/images/con/og-${edition}`,
  };

  return (
    <LayoutBase edition={edition} nav={nav.default} footer={footer.default}>
      <Script type="application/ld+json">{JSON.stringify(eventData)}</Script>
      {children}
      <ContactCard />
    </LayoutBase>
  );
}

export default EditionLayout;
