import './App.css';
import AddLink from './AddLink.js';
import AddReportOne from './AddReportOne.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddLink name="투표 결과" url="#" />

        <br/>

        {
          candidatesInfo.map((hubo) => <AddReportOne name={hubo.name} id={hubo.id} count={hubo.count} percent={hubo.percent} />)
        }

      </header>
    </div>
  );
}

const candidatesInfo = [
  { name: "김일돌", id: 1, count: 1, percent: 20 },
  { name: "김일돌", id: 2, count: 4, percent: 80 },
]

export default App;
