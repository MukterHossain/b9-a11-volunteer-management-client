// import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import VolunteerNeedNow from "../components/VolunteerNeedNow";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Home</title>
            </Helmet>
            <Carousel></Carousel>
            <VolunteerNeedNow ></VolunteerNeedNow>
        </div>
    );
};

export default Home;