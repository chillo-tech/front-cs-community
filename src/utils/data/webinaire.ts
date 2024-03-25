const EMAIL_ERROR_MESSAGE = "Votre mail est invalide";
const EMAIL_PATTERN = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

const CONNAISSANCE_WEBINAIRE_CHOIX = [
  {
    value: "social_networks",
    label: "Les réseaux sociaux",
  },
  {
    value: "newsletter",
    label: "Par newsletter",
  },
  {
    value: "search_engine",
    label: "Via un moteur de recherche",
  },
  {
    value: "website-blog",
    label: "Via un site web ou un blog",
  },
  {
    value: "friends-collegues_pov",
    label: "Par recommandation d'un ami ou d'un collegure",
  },
  {
    value: "web_ads",
    label: "Dans publicité en ligne",
  },
  {
    value: "event-webinar",
    label: "Durant un évènement ou le précédent webinaire",
  },
  {
    value: "other",
    label: "Autre",
  },
] as const;

export { CONNAISSANCE_WEBINAIRE_CHOIX, EMAIL_ERROR_MESSAGE, EMAIL_PATTERN };
