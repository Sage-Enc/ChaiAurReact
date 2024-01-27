import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="text-5xl font-bold text-slate-950 rounded-md py-16 mb-4">
        Hello world!
      </h1>
      <div className="flex">
        <Card username = "Sage" position="CEO & Founder"/>
        <Card username = "Phoenix" position="CMO & Co-Founder"/>
        <Card username = "Jett" position="CFO & Co-Founder"/>
        <Card username = "Raze" position="CTO & Co-Founder"/>
      </div>
      
    </>
  );
}

export default App;
