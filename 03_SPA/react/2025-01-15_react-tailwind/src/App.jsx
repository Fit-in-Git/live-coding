import "./App.css";
function App() {
  return (
    <>
      <h2 className="bg-yellow-500 rounded-3xl">Welcome</h2>
      <p className="bg-indigo-300 w-1/2">This is my Website</p>
      <p className="bg-green-600 mr-3 p-4">Margin & Padding</p>

      <div className="bg-red-300 flex hover:flex-col">
        <p>react</p>
        <p>JS</p>
        <p>CSS</p>
      </div>

      <div className="grid grid-cols-4">
        <p>VW</p>
        <p>Audi</p>
        <p>Mercedes</p>
        <p>Skoda</p>
        <p>BMW</p>
        <p>Opel</p>
        <p>Honda</p>
        <p>Jeep</p>
      </div>
      <div className="bg-orange-500 sm:bg-blue-400 sm:text-right">RESPONSIVE</div>
      <p className="laptop:bg-lime-700">Custom Responsive</p>

    </>

  );
}

export default App;
