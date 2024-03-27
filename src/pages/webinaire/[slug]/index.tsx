import Header from "@/components/Header";
import { Wrapper as WebinaireWapper } from "@/components/webinaire/form/context";
import Head from "next/head";
import WebinaireForm from "@/components/webinaire/form/webinaireForm";
import { useWebinaire } from "@/hooks/webinaire";
import styles from "@/styles/SignIn.module.css";
import { capitalize, getHumanDate } from "@/utils";
import { formatSnakeCase } from "@/utils/formatSnakeCase";
import { GetServerSideProps, Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Webinaire",
  description: "description metadonnees",
};

const Webinaire = ({ slug }: { slug: string }) => {
  const { viewQuery } = useWebinaire({ slug });
  return viewQuery.data ? (
    <WebinaireWapper>
      <Head>
        <title>Webinaire</title>
        <meta
          name="description"
          content="Formulaire de webinaire propulsé par chillo tech"
        />
      </Head>
      <section className={`${styles.wrapper} !overflow-y-hidden`}>
        <nav className={`${styles.navigation}`}>
          <Header
            data={{
              leftComponent: {
                title: ``,
                description: "",
              },
              metaData: {
                title: "Webinaire",
                description: "Webinaire propose par chillo tech",
              },
            }}
          />
        </nav>
        <main
          className={` container mx-auto my-5 mb-10 flex w-full flex-col items-start justify-between gap-10 px-2 lg:flex-row  lg:items-center`}
        >
          <aside className={`w-full shrink-0 space-y-5 pr-0 lg:w-1/2 lg:pr-3`}>
            <Image
              src={viewQuery.data.image_webinaire.link}
              className="w-full object-cover"
              height={400}
              width={400}
              alt={viewQuery.data.image_webinaire.name}
            />
            <h1
              className={`${styles.form__title} text-center !text-2xl !font-bold lg:!text-left lg:!text-4xl`}
            >
              {viewQuery.data.titre}
            </h1>
            <div>
              <p
                className={`${styles.form__title} !m-0 !text-center lg:!text-left`}
              >
                Description
              </p>
              <p
                className={`${styles.form_control__label} !text-center font-light lg:!text-left`}
              >
                {viewQuery.data.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <p className="text-light rounded-[35px] bg-gray-300 px-2 py-1 text-sm ">
                {capitalize(viewQuery.data.langue)}
              </p>
              <p className="text-light rounded-[35px] bg-gray-300 px-2 py-1 text-sm ">
                {getHumanDate(new Date(viewQuery.data.date_et_heure_prevue))}
              </p>
              <p className="text-light rounded-[35px] bg-gray-300 px-2 py-1 text-sm ">
                {capitalize(formatSnakeCase(viewQuery.data.plateforme))}
              </p>
              <p className="text-light rounded-[35px] bg-gray-300 px-2 py-1 text-sm ">
                {viewQuery.data.duree} min
              </p>
            </div>
            <div>
              <p
                className={`${styles.form__title} !m-0  !text-center lg:!text-left`}
              >
                Objectif
              </p>
              <p className="text-center font-light lg:text-left">
                {viewQuery.data.objectif_webinaire}
              </p>
            </div>
            <div>
              <p
                className={`${styles.form__title} !m-0  !text-center lg:!text-left`}
              >
                Cible
              </p>
              <p className="text-center  font-light lg:text-left">
                {viewQuery.data.public_cible}
              </p>
            </div>
          </aside>
          {viewQuery.data.formulaire && (
            <WebinaireForm formView={viewQuery.data.formulaire} />
          )}
        </main>
      </section>
    </WebinaireWapper>
  ) : null;
};

export default Webinaire;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug || "";
  return { props: { slug } };
};
