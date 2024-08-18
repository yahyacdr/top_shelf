export async function getAddress() {
  const apiKey = "c00150f961054f6f9f5dcd80d049c54e";

  const res = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
