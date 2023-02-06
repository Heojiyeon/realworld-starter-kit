import Title from "../../components/Title";
import Feeds from "../../components/Feeds";
import Tags from "../../components/Tags";
import { HomeContainer } from "./style";

const Home = () => {
  return (
    <HomeContainer>
      <Title />
      <div>
        <Feeds />
        <Tags />
      </div>
    </HomeContainer>
  );
};

export default Home;
