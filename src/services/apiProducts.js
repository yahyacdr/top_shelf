import supabase from "../utils/supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("Products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products could not get loaded");
  }

  return data;
}
