import { GlobalStyle } from "./GlobalStyles";
import { CartProvider } from "./providers/cart";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <CartProvider>
          <Routes />
        </CartProvider>
      </>
    </div>
  );
}

export default App;
