import { getRandomNumberBetween } from "../utils/helper";
import supabase from "../utils/supabase";

export async function getProducts(min, max) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .range(min, max);

  if (error) {
    console.error(error);
    throw new Error("Products could not get loaded");
  }

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
  let qry = supabase.from("products").select("*").range(0, 32);

  if (filter.method === "eq") qry = qry.eq(filter.column, filter.value);

  if (filter.method === "gt") qry = qry.gt(filter.column, filter.value);

  if (filter.method === "order")
    qry = qry
      .order(filter.column, { ascending: false })
      .limit(Number(filter.value));

  if (filter.method === "ilike") qry = qry.ilike(filter.column, filter.value);

  if (filter.method === "random") {
    const random = getRandomNumberBetween(1, 159 - filter.value);
    qry = qry.gte("id", random).lt("id", random + filter.value);
  }

  if (filter.method === "all") {
    const count = await getTableCount("products");

    const pagesIndexes = Array.from({ length: count / 33 }, (_, i) => {
      const value = (i + 1) * 33;
      return value;
    });

    const pages = [];

    pagesIndexes.forEach(async (page) => {
      pages.push(await getProducts(page - 33, page - 1));
    });

    pages.push(
      await getProducts(pagesIndexes[pagesIndexes.length - 1] + 1, count)
    );

    return pages;
  }

  const { data: products, error } = await qry;

  if (error) {
    console.error(error);
    throw new Error("Products could not be added");
  }

  return [products];
}

async function getTableCount(table) {
  const { count } = await supabase
    .from(table)
    .select("*", { count: "exact", head: true });

  return count;
}
