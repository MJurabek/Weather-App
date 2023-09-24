const changeLocation = document.getElementById("change-location");
const card = document.getElementById("card");
const details = document.getElementById("details");
const weatherIcon = document.getElementById("weather-icon");
const overlay = document.getElementById("overlay");

//update

const updateUI = async (data) => {
  details.innerHTML = `
    <h5 class="mb-3">${data.name}, ${data.sys.country}</h5>
      <p class="mb-3">${data.weather[0].main}</p>
      <div class="display-4 mb-3">
          <span>${Math.round(data.main.temp) - 273}</span>
      <span>&deg;C</span>
      </div>
    `;

  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

//get weather

const weather = async (city) => {
  const data = await getData(city);
  return data;
};

//get location

changeLocation.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = changeLocation.city.value;
  changeLocation.reset();
  weather(value).then((data) => updateUI(data));

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
});

function loader(state) {
  if (state) {
    overlay.classList.remove("d-none");
  } else {
    overlay.classList.add("d-none");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  changeLocation.city.focus();
});
