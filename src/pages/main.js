import StockChart from "../components/stockChart";
import StockIndex from "../components/stockIndex";
import StockInfo from "../components/stockInfo";
import "../css/main.css";

function Main() {
    return (<>
        <div className="mainpage">
            <div className="left-section">
                <StockChart />
                <StockIndex />
            </div>
            <StockInfo />
        </div>
    </>)
}
export default Main;