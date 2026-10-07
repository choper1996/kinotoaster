import './App.css'
import { Grid } from "./components/Grid/Grid.tsx";
import { IMAGES } from "./constants.ts";

function App() {

  return (
    <div>
      <img style={{ width: "20rem" }} src="/logo.svg" alt="kinotoaster" />
      <Grid items={IMAGES}  />
    </div>
  )
}

export default App
