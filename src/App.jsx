import "./assets/css/style.css"
import SideBar from "./components/SideBar"
import AppRouter from "./components/AppRouter"

function App() {

  return (
    <main className="wrapper">
      <SideBar />
      <div className="content">
        <AppRouter />
      </div>
    </main>
  )

}

export default App
