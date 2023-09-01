import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>School of Music | Home</title>
            </Helmet>
            <Slider></Slider>

        </div>
    );
};

export default Home;