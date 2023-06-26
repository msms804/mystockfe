import '../css/stockChart.css';
import Chart from './chart';

function StockChart() {
    return (<>
        <div className="stockChart">
            차트 컴포넌트임(이거에 그 D3.js?로 차트만들거야)
            <Chart />
        </div>
    </>)
}
export default StockChart;