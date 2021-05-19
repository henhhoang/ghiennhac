import AuthConTextProvider from "./contexts/AuthContext";
import Header from "./components/Header";
import Wapper from "./components/Wapper";
import './components/style/Reponsive.scss'

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <AuthConTextProvider>
        <Header />
        <Wapper />
      </AuthConTextProvider>
    </div>
  );
}

export default App;
