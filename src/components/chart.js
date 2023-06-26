import { useNavigate } from "react-router-dom";


function Chart() {//여기서 install 해서 쓰면됨
    let navigate = useNavigate();

    return (<>
        <div onClick={() => { navigate('/detail') }}>
            개별차트 컴포넌트임
        </div>
    </>)
}
export default Chart;