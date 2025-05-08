import { Routes, Route, useLocation, Navigate } from "react-router-dom"
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

          <Route path="/destination" element={<Navigate to="/destination/moon" replace />} />
          <Route path="destination/:moon" element={<Destination />} />

          <Route path="/crew" element={<Navigate to="/crew/douglas" replace />} />
          <Route path="crew/:crewmate" element={<Crew />} />

          <Route path="/technology" element={<Navigate to="/technology/launch" replace />} />
          <Route path="technology/:terminology" element={<Technology />} />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
