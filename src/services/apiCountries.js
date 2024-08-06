export async function getAllCountries(min = false, max = false) {
  let qry = supabase.from("products").select("*");
  if ((min || min === 0) && max) qry = qry.range(min, max);
  const { data, error } = await qry;

  if (error) {
    console.error(error);
    throw new Error("Products could not get loaded");
  }

  return data;
}
