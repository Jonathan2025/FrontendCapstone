import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      {/* wrap the header and main in AuthProvider */}
      <AuthProvider>
        <Header />
        <Main />
      </AuthProvider>
     
    </div>
  )
}

export default App;
