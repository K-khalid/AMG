import { supabase } from "../supabase";

export async function createAndUpdateOrder({ dataInfo, id }) {
  let query = supabase.from("orders");

  if (id) {
    query = query.update({ ...dataInfo }).eq("id", id);
  }

  if (!id) {
    query = query.insert([{ ...dataInfo }]);
  }

  const { data, error } = await query.select();

  if (error) throw new Error(error.message);
  console.log(id, "From Table");
  console.log(dataInfo);
  return data;
}

export async function getOrders() {
  const { data: orders, error } = await supabase.from("orders").select("*");

  if (error) throw new Error(error.message);

  return orders;
}

export async function getUserOrders() {
  // const userEmail = await supabase.auth.getUser()?.data?.user?.email;
  const { data: user, error: authError } = await supabase.auth.getUser();
  if (authError) throw new Error(authError);

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")
    .eq("requestedBy", user.user.email);

  if (error) throw new Error(error.message);

  return orders;
}

export async function getOrder(id) {
  const { data: order, error } = await supabase
    .from("orders")
    .select("id", id)
    .single();

  if (error) throw new Error(error.message);
  return order;
}

export async function deleteOrder(id) {
  const { error } = await supabase.from("orders").delete().eq("id", id);
  if (error) throw new Error(`Order could not to be deleted`); //`Order could not to be deleted`
}

export async function takeOrder({ id, action }) {
  const { data: user, error: error1 } = await supabase.auth.getUser();
  if (error1) throw new Error(error1.message);
  let updateObj = {};
  if (action === "take")
    updateObj = {
      name: user.user.user_metadata.fullName,
      email: user.user.email,
    };
  else updateObj = null;
  const { error: error2 } = await supabase
    .from("orders")
    .update({
      takeBy: updateObj,
      status: updateObj ? "Accepted" : "Pending",
    })
    .eq("id", id);
  if (error2) throw new Error(error2.message);
}
