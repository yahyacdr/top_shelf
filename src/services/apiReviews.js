import supabase from "../utils/supabase";

export async function getReviews() {
  const { data, error } = await supabase.from("Reviews").select("*");

  if (error) {
    console.error(error);
    throw new Error("Reviews could not get loaded");
  }

  return data;
}
