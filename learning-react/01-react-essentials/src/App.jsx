import Header from "./components/Header/Header.jsx";
import CoreConceptsHandler from "./components/CoreConceptsHandler.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConceptsHandler />
        <Examples />
      </main>
    </>
  );
}

export default App;
