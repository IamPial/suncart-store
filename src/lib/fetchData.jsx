export const getAllProducts = async () => {
  const res = await fetch("https://suncart-store-one.vercel.app/data.json");
  const data = await res.json();
  return data;
};
