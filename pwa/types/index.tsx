import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "octokit";
import { ReactNode } from "react";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

export interface Reference {
  name: string;
  logo: string;
  link: string;
  highlight?: boolean;
}

export interface GuideFrontMatter {
  position: number;
  name: string;
  slug: string;
  executable?: boolean;
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterPart {
  title: string;
  links: FooterLink[];
  link?: string;
}

export type Contributor = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listContributors
>[number] & {
  repos: { repo: string; contributions: number; url?: string }[];
  additions: number;
  deletions: number;
  rank: number;
  bio?: string | null;
  location?: string | null;
  company?: string | null;
  blog?: string | null;
  isCoreTeam?: boolean;
};

export type DocLink = {
  title: string;
  link: string;
};

export interface DocReferenceLink extends DocLink {
  type?: string;
}

export interface BreadCrumbLink {
  title: string;
  link?: string;
}

export type MdxComponent = React.ExoticComponent<{
  components: Record<string, (props: any) => ReactNode>;
}>;

export interface Event {
  creator?: string;
  picture?: string;
  cover?: string;
  venue: {
    address?: string;
    city?: string;
    country?: string;
    name?: string;
  };
  startDate: {
    date: string;
    time?: string;
  };
  endDate?: {
    date: string;
    time?: string;
  };
  link?: string;
  speakers?: { name: string; github?: string; link?: string }[];
  subscriptionLink?: string;
  video?: string;
  type: string;
  title: string;
  slug: string;
}

export interface EventWithContent extends Event {
  Mdx: MdxComponent;
}

export type ChipColor =
  | "yellow"
  | "green"
  | "blue"
  | "grey"
  | "pink"
  | "current";
