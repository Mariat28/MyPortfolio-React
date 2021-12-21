import Landing from "./components/LandingPage";
import WhyMe from "./components/WhyHireMe";
function App() {
  return (
    <>
    <div className="App flex justify-between h-screen  overflow-hidden">
      <Landing />
    </div>
    <div className=" h-auto">
        <WhyMe />
      </div></>
  );
}

export default App;
