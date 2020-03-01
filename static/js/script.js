const fetchCountryData = async name => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  return response.data;
}

const fetchWeatherData = async country => {
  const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params : {
      lat: country.latlng[0],
      lon: country.latlng[1],
      appid: weather_key
      }
  });
  return response.data;
}

const fetchPhotoData = async country => {
  const response = await axios.get('https://pixabay.com/api/', {
    params : {
      key: photo_key,
      q: country.name,
      }
  });
  return response.data;
}

const input = document.querySelector('input');
const dropdown = document.querySelector('#dropdown');
input.addEventListener('input', async ()=>{
  const countries = await fetchCountryData(event.target.value).catch((err) => {
    dropdown.innerHTML = '';
  });
  if(!countries) return;
  dropdown.innerHTML = '';
  countries.forEach(country => {
    const countryOption = document.createElement('a');
    countryOption.classList.add('horizontally', 'fitted', 'item');
    countryOption.innerHTML = `
    <div class="flag-img">
      <img class="ui middle aligned mini image" src="${country.flag}" />
    </div>
      ${country.name}
    `;
    countryOption.addEventListener('click', ()=>{
      dropdown.innerHTML = '';
      input.value = country.name;
      console.log(country)
      onCountrySelect(country)
    })
    dropdown.appendChild(countryOption)
  })
})

const onCountrySelect = async country => {
  const weatherData = fetchWeatherData(country);
  const photoData = fetchPhotoData(country);
  const results = await Promise.all([weatherData, photoData]);
  console.log(results);
}