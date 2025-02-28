import { Routes, Route } from "react-router";
import NavigationComponent from "../components/NavigationComponent";
import Home from "../pages/Home";
import EventCalendar from "../pages/EventCalendar";

const AppRoutes = () => {
  return (
    <>
      <NavigationComponent />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/events" element={<EventCalendar />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
