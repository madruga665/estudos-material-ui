import BasicCard from "../../BasicCard";
import Footer from "../../Footer";
import Header from "../../Header";
import { CardContainer, HomePageContainer } from "./styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header pageTitle='Meu App de estudos da Material UI' />
      <CardContainer>
        <BasicCard
          title='Formulário'
          description='Formulário simples feito com os componentes da Material UI e validações feitas com yup'
        />
      </CardContainer>
      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
