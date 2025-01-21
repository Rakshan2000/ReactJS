import { Link } from "react-router-dom";

function notfound(){
    return(<>
        <h1>Page Not Found</h1>
        <button><Link to='/recipe-list'>Click here to Recipe Page</Link></button>
    </>);
}

export default notfound;