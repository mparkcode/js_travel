const fetchCountyData = async name => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
  console.log(response.data)
}

const input = document.querySelector('input');
input.addEventListener('input', ()=>{
  fetchCountryData(event.target.value);
})