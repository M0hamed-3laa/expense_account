import Home from "./pages/Home/Home";
import Root from "./pages/Root";
import { Route, Routes } from "react-router-dom";
import Create from "./create/Create";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
            <Route path="logout" element={<Logout />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
