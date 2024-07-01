import supabase from "../utils/supabase";

export async function getReviews() {
  const { data, error } = await supabase.from("Reviews").select("*");

  if (error) {
    console.error(error);
    throw new Error("Reviews could not get loaded");
  }

  return data;
}

export async function addReview(name, review, rate, productId) {
  const { data, error } = await supabase
    .from("Reviews")
    .insert([{ name, review, rate, product: productId }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Reviews could not be added");
  }

  return data;
}
