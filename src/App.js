import './App.sass';
import Calculator from './ components/calculator/Calculator'

const App = () => {
  // document.onkeydown = (e) => false
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App;
