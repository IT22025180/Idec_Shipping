import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <img src={logo} className="h-24 mx-auto mb-4 animate-spin-slow" alt="logo" />
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Tailwind CSS is working!</h1>
        <p className="text-gray-700">Edit <code>App.js</code> and save to test hot reload.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
