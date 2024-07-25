import { PAGE_LENGTH } from "../consts";
import { getRandomNumberBetween } from "../utils/helper";
import supabase from "../utils/supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select("*");

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
  const count = await getTableCount("products");

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
    const pagesIndexes = Array.from({ length: count / PAGE_LENGTH }, (_, i) => {
      const value = (i + 1) * PAGE_LENGTH;
      return value;
    });

    const products = [];

    pagesIndexes.forEach(async (page) => {
      products.push(await getProducts(page - PAGE_LENGTH, page - 1));
    });

    products.push(
      await getProducts(pagesIndexes[pagesIndexes.length - 1] + 1, count)
    );

    products.sort((a, b) => a.length - b.length).reverse();

    return { products, count };
  }

  const { data: products, error } = await qry;

  if (error) {
    console.error(error);
    throw new Error("Products could not be added");
  }

  return { products, count };
}

async function getTableCount(table) {
  const { count } = await supabase
    .from(table)
    .select("*", { count: "exact", head: true });

  return count;
}
