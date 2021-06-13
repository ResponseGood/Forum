import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';


let Response = () => {
  fetch('api/v1/get_all_posts').then(
      console.log(Response)
  )
}


function App() {
  Response()
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
