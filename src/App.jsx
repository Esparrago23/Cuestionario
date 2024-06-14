import { HelmetProvider } from "react-helmet-async"
import CreadorPAbiertas from "./pages/CreadorPAbiertas"

function App() {
  return (
    <HelmetProvider>
      <CreadorPAbiertas />
    </HelmetProvider>
  )
}

export default App