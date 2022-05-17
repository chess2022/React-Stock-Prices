import { Link } from "react-router-dom"

export default function Stocks() {
    const stocks = [
      {
        name: "Apple Inc.",
        symbol: "AAPL",
        lastPrice: 140.64,
        change: -0.280,
        high: 141.74,
        low: 140.35,
        open: 141.5,
      },
      {
        name: "Microsoft Corporation",
        symbol: "MSFT",
        lastPrice: 64.98,
        change: 0.109,
        high: 65.45,
        low: 64.76,
        open: 65.12,
      },
      {
        name: "Alphabet Inc.",
        symbol: "GOOGL",
        lastPrice: 835.14,
        change: -4.509,
        high: 844,
        low: 829.1,
        open: 842,
      },
      {
        name: "Facebook, Inc.",
        symbol: "FB",
        lastPrice: 140.34,
        change: 0.810,
        high: 141.02,
        low: 139.76,
        open: 140.08,
      },
      {
        name: "Oracle Corporation",
        symbol: "ORCL",
        lastPrice: 44.65,
        change: -0.300,
        high: 45.09,
        low: 44.575,
        open: 44.91,
      },
      {
        name: "Intel Corporation",
        symbol: "INTL",
        lastPrice: 36.16,
        change: -0.370,
        high: 36.78,
        low: 36.125,
        open: 36.58,
      },
    ];
    return (
      <div className="stocks">
        <div className="stocks--rows">
          <div>COMPANY</div>
          <div> LAST PRICE </div>
          <div>% CHANGE</div>
          <div> HIGH</div>
          <div>LOW</div>
          <div> OPEN</div>
        </div>
        {/* <tr className="line"></tr> */}
        {stocks.map(
          ({ name, symbol, lastPrice, change, high, low, open }, idx) => (
            <Link key={idx} to={`/stocks/${symbol}`}>
              <div className="stocks--rows" id="stocks--header">
                <div>
                  {name} ({symbol})
                </div>
                <div> ${lastPrice} </div>
                <div>{change}%</div>
                <div> ${high} </div>
                <div>${low}</div>
                <div> ${open}</div>
              </div>
              <div className="line"></div>
            </Link>
          )
        )}
        <small>
          <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
        </small>
      </div>
    );
}