import Navbar from "./components/Navbar"
import { NavBarProvider } from "./components/provider/navItemsProvider"



function App() {

  console.log("rodando")
  return (
    <NavBarProvider>
      
        <Navbar />
      
    </NavBarProvider>


  )
}

export default App