import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import HomePage from "../../features/home/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/testErrors";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activities" element={<ActivityDashboard />} />
          <Route path="/activities/:id" element={<ActivityDetails />} />
          <Route
            key={location.key}
            path="/createActivity"
            element={<ActivityForm />}
          />
          <Route
            key={location.key}
            path="/manage/:id"
            element={<ActivityForm />}
          />
          <Route path="/errors" element={<TestErrors />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
