const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.send();
xhr.onload = function(){
    var data = JSON.parse(xhr.response);
    console.log(data);
    var counFromAsiaContinent = data.filter((ele) => ele.region === "Asia");
    counFromAsiaContinent.forEach((e) => {
        console.log(e.name.common, "'countries based on asia region'");
    })
    var population = data.filter((ele) => ele.population < 200000);
    population.forEach((e) => {
        console.log(e.name.common, "'countries based on population'");
    })
    data.forEach((element,i) => {
        console.log(element.name.common, "'country name'");
        console.log(element.capital, "'capital'");
        console.log(element.flag, "'flag'");
    })
    var totalPopulation = data.reduce((acc, cv) => acc + cv.population, 0);
    console.log(totalPopulation, "'totalPopulation'");

    var usd = data.filter((ele) => ele.currencies && ele.currencies.USD);
    usd.forEach((ele) => {
        console.log(ele.name.common, "'country name that uses USD'");
    })
    console.log(usd, "'usd dollars'");

}