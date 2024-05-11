// import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import VolunteerNeedNow from "../components/VolunteerNeedNow";


const Home = () => {

    return (
        <div>
            <Carousel></Carousel>
            <VolunteerNeedNow ></VolunteerNeedNow>
        </div>
    );
};

export default Home;