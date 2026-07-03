import { AvisCardContainer } from "@/components";
import Footer from "@/components/Footer";
import Debug from "@/components/shared/Debug";
import LandingPageHeader from "@/components/shared/LandingPageHeader";
import { readEvent } from "@/services";
import { genMetaObj } from "@/utils";
import { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const intersemibold = Montserrat({ subsets: ["latin"], weight: "600" });
export const dynamic = "force-static";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  let metadata = {};
  try {
    const data = await readEvent({ slug });
    const { metadatas_id: params } = data.events_metadatas[0];
    metadata = genMetaObj(params);
  } catch (error) {
    console.log(error);
  }
  return metadata;
}

export const fetchCache = "force-no-store";

async function layout({
  params: { slug },
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const data = await readEvent({ slug });
  return (
    <section className="min-h-screen relative bg-[#F5F5F5] text-[#2C3E50]">
      <div className="container">
        <Debug data={data} />
        <div className="md:w-4/5 mx-auto flex flex-col justify-between">
          {data && data.heros ? <LandingPageHeader heros={data.heros} /> : null}
          <p>evenement</p>
          <p>Programme</p>
          <p>Profil</p>
          <AvisCardContainer />
          {children}
          <p>Information</p>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default layout;
