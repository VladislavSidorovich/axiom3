import './App.css';
import Header from "./components/header";
import HowWeWork from "./components/howWeWork";
import Strategies from "./components/strategies";
import Feedback from "./components/feedback";
import Footer from "./components/footer";

function App() {
  return (
    <div className="main">
      <Header/>
      <HowWeWork/>
      <Strategies/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
