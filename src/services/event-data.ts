import { boChilloData } from "./bo-chillo-data";


const fields = `
  id,
  title,
  subtitle,
  abstract,
  description,
  events_metadatas.metadatas_id.*
  
`;
/**
  companies_links.links_id.title,
  companies_links.links_id.url,
  companies_links.links_id.icon,
  companies_links.links_id.description,
  companies_links.links_id.linkimage,
  companies_socials_links.links_id.title,
  companies_socials_links.links_id.url,
  companies_socials_links.links_id.icon,
  companies_socials_links.links_id.description,
  companies_socials_links.links_id.linkimage,
  companies_menus.menus_id.status,
  companies_menus.menus_id.title,
  companies_menus.menus_id.subtitle,
  companies_menus.menus_id.path,
  companies_menus.menus_id.abstract,
  companies_menus.menus_id.description
 */
// export const revalidate = 3600;
export const 
readEvent = async ({slug}: any) => {
    
  const { data } = await boChilloData({
    path: `/events/${slug.split('-').pop()}`,
    fields

  });
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  const { data: event } = data;
  return event ? event : {};
};