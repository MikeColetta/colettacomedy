import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomNavbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home/Home"
import About from './pages/About/About';
import Media from './pages/Media/Media';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CustomNavbar />
      <Switch>
        <Route exact path= "/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
