import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Price() {
  const apiKey = "pk_f9e92c20f004457882e4c1a570e2abe4";
  // Grabbing the Currency symbol from the URL Params
  const { symbol } = useParams();
  // Using the other two variables to create our URL
  const url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${apiKey}`;
  //state to hold the coin data
  const [stock, setStock] = useState(null);
//   const [updatePrice, setUpdatePrice] = useState(0);
  //function to fetch coin data
  const getStock = async () => {
    const data = await fetch(url).then((res) => res.json());
    setStock(data);
  };
  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getStock();
    // setTimeout(() => {
    //     setUpdatePrice(updatePrice + 1);
    // }, 5000)
  }, []); //updatePrice
  // loaded function for when data is fetched
  const loaded = () => (
    <div>
      <h1>
        {stock.companyName} ({stock.symbol})
      </h1>
      <h2>{stock.close}</h2>
      <a href="https://iexcloud.io">IEX Cloud</a>
    </div>
  );

  // function for when data doesn't exist
  const loading = () => <h1>Loading...</h1>;

  // if coin has data, run the loaded function, otherwise run loading
  return stock ? loaded() : loading();
}

