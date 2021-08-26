import './App.css';
import Timeline from './Components/Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <h1 className="project-name">KINGS OF JUDAH</h1>
      <p>Welcome to the Kings Project. The Kings Project is glossary of sorts for the rulers of Judah and follows
          the timeline of the throne of Judah from King David onwards. As such Queen Athaliah is listed amoung the kings 
          because she would have ascended to the throne even though she is not a decendent of David.
      </p> 
      <div className="container">
        <Timeline />
      </div>
    </div>
  );
}

export default App;
