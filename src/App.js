import "./App.css";
import InterviewAccord from "./components/InterviewAccord";
import Header from "./components/Header";


const App = () => {
  return (
    <>
      <Header/>
      <div className="app">
        <div className="main">
          <InterviewAccord />
        </div>
      </div>
    </>
  );
};

export default App;
