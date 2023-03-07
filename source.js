const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const sendRequest = async function(url){
  const response = await fetch(url);
  if(response.status===200){
    const data = await response.json();
    return data;
  }else{
    throw new console.error('not found ...');
  }
}

sendRequest(url)
  .then(data => console.log(data))
  .catch(error => console.log(error))
