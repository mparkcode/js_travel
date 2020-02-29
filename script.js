const fetchCountryData = async name => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
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
    const countyOption = document.createElement('a');
    countyOption.classList.add('fitted', 'item');
    countyOption.innerHTML = `
      <img class="ui middle aligned mini image" src="${country.flag}" />
      <span>${country.name}</span>
    `;
    dropdown.appendChild(countyOption)
  })
})