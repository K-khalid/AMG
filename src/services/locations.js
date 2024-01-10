const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

export async function getAddress({ lat, lng } = {}) {
  const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
  if (!res.ok) throw new Error("Can't fetch your address");
  const Address = await res.json();
  return Address;
}
