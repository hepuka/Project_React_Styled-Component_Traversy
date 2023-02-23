import { Container } from "./Components/styles/Container.styled";
import { GlobalStyles } from "./Components/styles/Global";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { ThemeProvider } from "styled-components";
import content from "./content";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
