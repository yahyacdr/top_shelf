import supabase from "../utils/supabase";

export async function registerVisitor(visitor) {
  const { data, error } = await supabase
    .from("visitors")
    .insert([...visitor])
    .select("id");

  if (error) {
    console.error(error);
    throw new Error("Error registering visitor");
  }

  return data;
}
