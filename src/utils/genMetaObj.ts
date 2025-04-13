import { Metadata } from "next";

export const genMetaObj = (entry: any) => {
  const metadata: Metadata = {};

  metadata.title = entry.title;
  metadata.description = entry.description;

  metadata.authors = entry.authors || "chillo tech";
  metadata.robots = entry.robots || "all";
  metadata.openGraph = {};
  metadata.openGraph.url = entry.opengraph_url;
  metadata.openGraph.title = entry.opengraph_title || entry.title;
  metadata.openGraph.siteName = "chillo";
  metadata.openGraph.description =
    entry.opengraph_description || entry.description;
  metadata.openGraph.images = [
    {
      url: `${process.env.SITE_URL}/assets/${entry.opengraph_image}.png`,
      width: 1200,
      height: 630,
      alt: entry.title,
    },
  ];
  //   @ts-ignore
  //   metadata.openGraph.type = entry.opengraph_type || 'website';
  metadata.openGraph.locale = "fr_FR";

  metadata.appLinks = {
    web: { url: process.env.SITE_URL || "" },
  };

  metadata.creator = entry.author || "chillo.tech";

  metadata.twitter = {};
  metadata.twitter.creator = entry.twitter_creator;
  metadata.twitter.site = entry.twitter_site || process.env.SITE_URL;
  metadata.twitter.description = entry.twitter_description || entry.description;
  metadata.twitter.creator = entry.twitter_creator;
  metadata.twitter.title = entry.twitter_title;
  //   @ts-ignore
  metadata.twitter.card = entry.twitter_card;

  return metadata;
};
