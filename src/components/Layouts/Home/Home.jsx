import { Outlet } from "react-router-dom";
import "./Home.css"
import Header from "../../Header/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;