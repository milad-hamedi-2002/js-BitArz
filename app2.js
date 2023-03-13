const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const sendRequest = async function(url){
  const response = await fetch(url);
  
  const data = await response.json();
  console.log(data)
  

}







 // Requiring fs module in which
    // writeFile function is defined.
    //const fs = require('fs')
      
    // Data which will write in a file.
    let result = sendRequest(url)
      
    // Write data in 'Output.txt' .
    //fs.writeFile('Output.txt', result, (err) => {
          
        // In case of a error throw err.
        //if (err) throw err;
    //})



 

 
