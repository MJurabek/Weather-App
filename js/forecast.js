const KEY = "57976cf5a259d8ee96f29fb167afb4e4";

// get data

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";

  const query = `?q=${city}&appid=${KEY}`;
  loader(true);

  const req = await fetch(base + query);
  const data = await req.json();
  loader(false);
  return data;
};
