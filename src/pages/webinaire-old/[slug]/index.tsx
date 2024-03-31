import Header from "@/components/Header";
import { Wrapper as WebinaireWapper } from "@/components/webinaire/form/context";
import WebinaireForm from "@/components/webinaire/form/webinaireForm";
import { useWebinaire } from "@/hooks/webinaire";
import styles from "@/styles/SignIn.module.css";
import { getFormattedTime, getHumanDate } from "@/utils";
import { GetServerSideProps, Metadata } from "next";
import Head from "next/head";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Webinaire",
  description: "description metadonnees",
};

const Webinaire = ({ slug }: { slug: string }) => {
  const { viewQuery } = useWebinaire({ slug });
  return viewQuery.data ? (
    <WebinaireWapper view={viewQuery.data}>
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
            <img
              src={viewQuery.data.image.link}
              className="w-full object-cover max-h-[350px]"
              height={400}
              width={400}
              alt={viewQuery.data.image.name}
            />
            <h1
              className={`${styles.form__title} text-center !text-2xl !font-bold lg:!text-left lg:!text-4xl`}
            >
              {viewQuery.data.title}
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
              <p className="">
                Le webinaire débutera{" "}
                {getHumanDate(
                  new Date(viewQuery.data.plannings.at(-1)?.startDate || "")
                )}{" "}
                à {viewQuery.data.plannings.at(-1)?.startHour.slice(0 , -3)} pour se terminer{" "}
                {getHumanDate(
                  new Date(viewQuery.data.plannings.at(-1)?.endDate || "")
                )}{" "}
                à{" "}
                {viewQuery.data.plannings.at(-1)?.endHour.slice(0 , -3)}
              </p>
            </div>
          </aside>

          <WebinaireForm />
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
