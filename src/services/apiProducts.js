import supabase from "../utils/supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products could not get loaded");
  }

  console.log(data);

  return data;
}

export async function addProducts(cannab) {
  const { data, error } = await supabase
    .from("products")
    .insert([...cannab])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Products could not be added");
  }

  console.log(!!data);

  return !!data;
}

export async function getProductWithFilter(filter) {
  let qry = supabase.from("products").select("*");

  if (filter.method === "eq") qry = qry.eq(filter.column, filter.value);

  if (filter.method === "gt") qry = qry.gt(filter.column, filter.value);

  if (filter.method === "order")
    qry = qry
      .order(filter.column, { ascending: false })
      .limit(Number(filter.value));

  if (filter.method === "ilike") qry = qry.ilike(filter.column, filter.value);

  const { data: products, error } = await qry;

  if (error) {
    console.error(error);
    throw new Error("Products could not be added");
  }

  console.log(products);

  return products;
}
