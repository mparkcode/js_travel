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
      onCountrySelect(country)
    })
    dropdown.appendChild(countryOption)
  })
})

const onCountrySelect = country => {

}