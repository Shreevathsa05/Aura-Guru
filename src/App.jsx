import './App.css'
import ApiDocs from './Components/ApiDocs'
import JsonConverter from './Components/JsonConverter'
import Home from './Components/Home'
import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Show from './Components/Show'
import ErrorPage from './Components/ErrorPage'

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ApiDocs" element={<ApiDocs />} />
          <Route path="Show" element={<Show />} />
          <Route path="JsonConverter" element={<JsonConverter />} />

          {/* Wildcard Route to Catch All Unmatched Routes */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
