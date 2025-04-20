import { Routes, Route, useLocation } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination"
import Crew from "./pages/Crew/Crew"
import Technology from "./pages/Technology/Technology"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname.startsWith("/destination")) return "bg-destination";
    if (location.pathname.startsWith("/crew")) return "bg-crew";
    if (location.pathname.startsWith("/technology")) return "bg-technology";
    if (location.pathname.startsWith("/")) return "bg-home";
    return "bg-default";
  }

  return (
    <div className={`bg ${getBackgroundClass()}`}>
      <Routes >
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
