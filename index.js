const express = require('express')
const request = require('request-promise')
const axios = require("axios")
const cheerio = require("cheerio")

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send(`Welcome to Market Snapshot Scraper API.
  Endpoints: gainers, losers, volatile, active, overbought, oversold.
  ex: https://marketsnapshot-scraper.herokuapp.com/gainers`)
})

// GET Gainers (top 100 stock gainers ) 

app.get('/gainers/', async (req, res) => {
  const result = []
  const url =
      "https://www.tradingview.com/markets/stocks-usa/market-movers-gainers/";

    var html 
    try {
      const { data } = await axios.get(url);
      html = data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }

    const selector = cheerio.load(html);

    const searchResults = selector("tbody")
        .find("tr > td > div > div > a");

    for (let a = 0; a < searchResults.length; a++) {
      if (result[searchResults[a].firstChild.data] === undefined) {
        
        result[a] = searchResults[a].firstChild.data
      }

      // console.log(typeof result[a])
    }
    
    const mill = new Date()
    const time = new Date(mill).toLocaleString()
    // console.log(time)
    // console.log(result)
    res.send({time: time, topGainers: result})
    
})

// Get losers

app.get('/losers/', async (req, res) => {
  const result = []
  const url =
      "https://www.tradingview.com/markets/stocks-usa/market-movers-losers/";

    var html 
    try {
      const { data } = await axios.get(url);
      html = data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }

    const selector = cheerio.load(html);

    const searchResults = selector("tbody")
        .find("tr > td > div > div > a");

    for (let a = 0; a < searchResults.length; a++) {
      if (result[searchResults[a].firstChild.data] === undefined) {
        
        result[a] = searchResults[a].firstChild.data
      }

      // console.log(typeof result[a])
    }
    
    const mill = new Date()
    const time = new Date(mill).toLocaleString()
    // console.log(time)
    // console.log(result)
    res.send({time: time, topLosers: result})
    
})
// Get active

app.get('/active/', async (req, res) => {
  const result = []
  const url =
      "https://www.tradingview.com/markets/stocks-usa/market-movers-active/";

    var html 
    try {
      const { data } = await axios.get(url);
      html = data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }

    const selector = cheerio.load(html);

    const searchResults = selector("tbody")
        .find("tr > td > div > div > a");

    for (let a = 0; a < searchResults.length; a++) {
      if (result[searchResults[a].firstChild.data] === undefined) {
        
        result[a] = searchResults[a].firstChild.data
      }

      // console.log(typeof result[a])
    }
    
    const mill = new Date()
    const time = new Date(mill).toLocaleString()
    // console.log(time)
    // console.log(result)
    res.send({time: time, mostActive: result})
    
})
// Get volitile

app.get('/volatile/', async (req, res) => {
  const result = []
  const url =
      "https://www.tradingview.com/markets/stocks-usa/market-movers-most-volatile/";

    var html 
    try {
      const { data } = await axios.get(url);
      html = data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }

    const selector = cheerio.load(html);

    const searchResults = selector("tbody")
        .find("tr > td > div > div > a");

    for (let a = 0; a < searchResults.length; a++) {
      if (result[searchResults[a].firstChild.data] === undefined) {
        
        result[a] = searchResults[a].firstChild.data
      }

      // console.log(typeof result[a])
    }
    
    const mill = new Date()
    const time = new Date(mill).toLocaleString()
    // console.log(time)
    // console.log(result)
    res.send({time: time, mostVolatile: result})
    
})
// Get overbougt

app.get('/overbought/', async (req, res) => {
  const result = []
  const url =
      "https://www.tradingview.com/markets/stocks-usa/market-movers-overbought/";

    var html 
    try {
      const { data } = await axios.get(url);
      html = data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }

    const selector = cheerio.load(html);

    const searchResults = selector("tbody")
        .find("tr > td > div > div > a");

    for (let a = 0; a < searchResults.length; a++) {
      if (result[searchResults[a].firstChild.data] === undefined) {
        
        result[a] = searchResults[a].firstChild.data
      }

      // console.log(typeof result[a])
    }
    
    const mill = new Date()
    const time = new Date(mill).toLocaleString()
    // console.log(time)
    // console.log(result)
    res.send({time: time, overbought: result})
    
})
// Get oversold

app.get('/oversold/', async (req, res) => {
  const result = []
  const url =
      "https://www.tradingview.com/markets/stocks-usa/market-movers-oversold/";

    var html 
    try {
      const { data } = await axios.get(url);
      html = data;
    } catch {
      console.error(
        `ERROR: An error occurred while trying to fetch the URL: ${url}`
      );
    }

    const selector = cheerio.load(html);

    const searchResults = selector("tbody")
        .find("tr > td > div > div > a");

    for (let a = 0; a < searchResults.length; a++) {
      if (result[searchResults[a].firstChild.data] === undefined) {
        
        result[a] = searchResults[a].firstChild.data
      }

      // console.log(typeof result[a])
    }
    
    const mill = new Date()
    const time = new Date(mill).toLocaleString()
    // console.log(time)
    // console.log(result)
    res.send({time: time, oversold: result})
    
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))