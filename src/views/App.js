import logo from './logo.svg';
import './App.scss';
import TestComponent from './testComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>That's cool</code>
        </p>
        <TestComponent/>
      </header>
    </div>
  );
}

export default App;
