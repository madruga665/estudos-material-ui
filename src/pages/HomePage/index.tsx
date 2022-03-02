import Footer from "../../Footer";
import Header from "../../Header";
import { HomePageContainer } from "./styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header pageTitle='Meu App de estudos da Material UI' />
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
