document.getElementById("btn").addEventListener("click", get_data);
async function get_data(){
    try{
var coin = await fetch("https://api.coincap.io/v2/assets");
var btcoin = await coin.json();
console.log(btcoin);
var coin = btcoin.data;
console.log(coin);
for(var i = 0; i < coin.length; i++){
    var name = coin[i].name;
    var rank = coin[i].rank;
    var symbol = coin[i].symbol;
    document.getElementById("result").textContent += `The name of the crypto is ${name}`;
    document.getElementById("result").textContent += `The Rank of the crypto is ${rank}`;
    document.getElementById("result").textContent += `The Symbol of the crypto is ${symbol}`;}   
    }catch{
        console.log("Error fetching data!");
    }
}

