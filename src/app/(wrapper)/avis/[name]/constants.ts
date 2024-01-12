const DEFAULT_FORM = {
  name: "docker",
  left: {
    desc: `<p>
          Après cette formation
          Vous pouvez nous contacter pour une de nos formations suivantes
          <ul>
          <li>Kubernetes</li>
          <li>Ansible</li>
          <li>Terraform</li>
          </ul>
      </p>`,
    title: `Maîtrisez Docker et gérez vos conteneurs efficacement`,
  },
  right: {
    bottom:
      "Nous ne traitons les données recueillies que pour faciliter la prise de contact.",
    desc: `Les évaluations nous permmettent de constament nous améliorer.
          Globalement vous êtes ...`,
    fields: [
      {
        fieldType: "email",
        label: "votre email",
        name: "email",
      },
      {
        fieldType: "textarea",
        label: "message",
        name: "message",
      },
      {
        fieldType: "checkbox",
        label: "vots impressions",
        name: "impression",
        choices: ["satisfait", "pas satisfait"],
      },
    ],
    title: "Merci de nous donner votre avis",
  },
};

export { DEFAULT_FORM };
