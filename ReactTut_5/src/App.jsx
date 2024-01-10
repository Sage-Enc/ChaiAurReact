import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold text-slate-950 rounded-md py-16 mb-4">
        Hello world!
      </h1>
      <div className="flex">
        <Card username = "Sage"/>
        <Card username = "Phoenix"/>
        <Card username = "Jett"/>
        <Card username = "Raze"/>
      </div>
      
    </>
  );
}

export default App;
