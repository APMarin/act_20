import Parrafo from './components/Parrafo'
import Contador from './components/Contador'
import User from './components/User'
import Foco from './components/Foco'

function App() {
  return (
    <div>
    <h1>Focos</h1>
    <Foco lugar = "sala"></Foco>
    <Foco lugar = "cocina"></Foco>
    <Foco lugar = "recamara principal"></Foco>
    <Foco lugar = "recamara de los niños"></Foco>
    <Foco lugar = "comedor"></Foco>
    <Foco lugar = "estancia"></Foco>
    <hr></hr>
    <h1>Párrafo</h1>
    <Parrafo></Parrafo>
    <hr></hr>
    <h1>Contador</h1>
    <Contador></Contador>
    <hr></hr>
    <h1>Consumir api usuarios</h1>
    <User></User>
     
    </div>
  );
}

export default App;
