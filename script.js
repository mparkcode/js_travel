const fetchData = async () => {
  const name = 'ireland'
  const response = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
  console.log(response.data)
}

fetchData();