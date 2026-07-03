interface Params {
    path: string;
    fields?: string;
    sort?: string;
    search?: string;
    limit?: number;
    filter?: any;
  }
  const boChilloData = async (params: Params) => {
    const backofficePath = `items${params.path}`;
    let qparams = new URLSearchParams({
      ...(params.fields ? { fields: params.fields } : {}),
    }).toString();
  
    if (params.filter) {
      qparams = `${qparams}&filter=${params.filter}`;
    }
    const path = `${process.env.BO_CHILLO_API ? process.env.BO_CHILLO_API: ''}/${backofficePath}`; 
  try {
    console.log('====================================');
    console.log({path});
    console.log('====================================');
    const response = await fetch(`${path}?${qparams}`, {
      headers: {
        Authorization: `Bearer ${process.env.BO_CHILLO_API_TOKEN}`,
      },
    });
    const data = await response.json();
    return {data};
  } catch (error) {
    console.log({error});
      return {data: {}}
  }
  };
  export const dynamic = "force-dynamic";
  export { boChilloData };
  
  