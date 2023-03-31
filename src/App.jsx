import "./App.css";
// j'appelle l'import en Pascal Case, c'est un composant (ça reste une fonction, mais c'est un composant au sens React du terme)
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article title="Mon Titre" content="Mon super contenu!" />
    </div>
  );
}

export default App;
