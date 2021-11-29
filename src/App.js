import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form'
// import background from "./assets/background.png"

function App() {
  return (
    <div className="App">
      <div class="typewriter-container">
        <div class="typewriter">
          <h1 className="text-center mt-3">To Do List App</h1>
        </div>
      </div>
      <Form />
    </div>
  );
}

export default App;
