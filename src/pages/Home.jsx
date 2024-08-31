
import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import VolunteerNeedNow from "../components/VolunteerNeedNow";
import FamousGroup from "./FamousGroup";
import ContactPage from "./ContactPage";


const Home = () => {

    return (
        <div>
            <Helmet>
                <title>TH Volunteers || Home</title>
            </Helmet>
            <Carousel></Carousel>
            <VolunteerNeedNow ></VolunteerNeedNow>
            <FamousGroup></FamousGroup>
            <ContactPage></ContactPage>
        </div>
    );
};

export default Home;