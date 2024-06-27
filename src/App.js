import Navbar from "./components/Navbar";
import Travelcard from "./components/Traveldetails";
import {traveldata} from "./components/data";
console.log(traveldata);
function App() {
  const datas = traveldata.map(newdata => {
    return <Travelcard key={newdata.id} {...newdata}/>
  })
  return (
    <div className="App container-fluid bg-light">
      <header className="App-header">
      <Navbar/>
      </header>
      <main>
        {datas}
      </main>
    </div>
  );
}

export default App;
