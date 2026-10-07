import './App.css'
import logo from "./assets/logo.svg"
import { Grid } from "./components/Grid/Grid.tsx";
import { IMAGES } from "./constants.ts";

function App() {

  return (
    <div>
      <div style={{ padding: "2rem" }}>
        <img style={{ width: "100%" }} src={logo} alt="kinotoaster" />
      </div>
      <Grid items={IMAGES}  />
    </div>
  )
}

export default App
