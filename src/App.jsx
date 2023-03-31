import "./App.css";
// j'appelle l'import comment je veux, c'est une fonction que je recup
import articleFunction from "./components/Article";

function App() {
  return (
    <div className="App">
      {articleFunction("Mon Titre", "Mon super contenu!")}
    </div>
  );
}

export default App;
