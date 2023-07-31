import { Header, Content} from "./components";

function App() {
  return (
    <div className="App">
        <div className='header'>
          <Header/>
        </div>
        <div className='content'>
          <Content/>
        </div>
        <div className='footer'></div>
    </div>
  );
}

export default App;
