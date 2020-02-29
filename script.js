const fetchCountryData = async name => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
  return response.data
}

const input = document.querySelector('input');
input.addEventListener('input', async ()=>{
  const countries = await fetchCountryData(event.target.value);
  countries.forEach(country => {
    console.log(country);
  })
})