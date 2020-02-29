const fetchCountryData = async name => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  return response.data;
}

const input = document.querySelector('input');
const dropdown = document.querySelector('#dropdown');
input.addEventListener('input', async ()=>{
  const countries = await fetchCountryData(event.target.value);
  dropdown.innerHTML = '';
  countries.forEach(country => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src=${country.flag} />
      <h1>${country.name}</h1>
    `;
    dropdown.appendChild(div)
  })
})