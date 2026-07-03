interface Params {
  path: string;
  fields?: string;
  sort?: string;
  search?: string;
  limit?: number;
  filter?: string;
}
const fetchData = async (params: Params) => {
  if (params.path.includes("metrics")) {
    return {menu : {}}
  }
  const backofficePath = params.path.replaceAll("/api/backoffice", "items");
  let qparams = new URLSearchParams({
    ...(params.fields ? { fields: params.fields } : {}),
  }).toString();
  if (params.filter) {
    qparams = `${qparams}&filter=${params.filter}`;
  }

  const path = `${process.env.NEXT_PUBLIC_BACKOFFICE_API}/${backofficePath}`;

  try {
    const response = await fetch(`${path}?${qparams}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKOFFICE_API_TOKEN}`,
      },
    });
    const data = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
    console.log({ data: {} });
    return { data: {} };
  }
};
export const dynamic = "force-dynamic";
export { fetchData };
