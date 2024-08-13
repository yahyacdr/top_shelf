import supabase from "../utils/supabase";

export async function placeOrder(order) {
  const { data, error } = await supabase
    .from("orders")
    .insert([...order])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Orders could not placed");
  }

  return !!data;
}
