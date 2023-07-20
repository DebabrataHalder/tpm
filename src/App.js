
import './App.css';

function App() {
  return (
    <div className="flex flex-col">
      <div  className="flex flex-col m-0 border-solid border-2 border-indigo-600 items-center fit">
        <p>Temperature and Pressure </p>
        <p>Monitor</p>

      </div>
      <div className="flex ">
        <div  className="flex flex-col m-3 p-2 border-solid border-2 border-indigo-600
        items-center fit">
          <p>Wind box</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <div  className="flex flex-col m-3 p-2 border-solid border-2 border-indigo-600
        items-center fit">
          <p>Temperature</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
        <div  className="flex flex-col m-3 p-2 border-solid border-2 border-indigo-600
        items-center fit">
          <p>Pressure</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
        </div>
      </div>


    </div>
  );
}

export default App;
