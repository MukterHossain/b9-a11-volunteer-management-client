import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import VolunteerNeedNow from "../components/VolunteerNeedNow";


const Home = () => {
    const volunteers =useLoaderData()
    console.log(volunteers)
    return (
        <div>
            <Carousel></Carousel>
            <VolunteerNeedNow volunteers={volunteers}></VolunteerNeedNow>
        </div>
    );
};

export default Home;