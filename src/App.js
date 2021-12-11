import './App.css';
import About from './components/About';
import Dishes from './components/Dishes';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Order from './components/Order';
import Review from './components/Review';
import { homeImages, dishesData, menuData, reviewData } from './Data';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Home slides={homeImages} />
        <Dishes dishes={dishesData} />
        <About />
        <Menu items={menuData} />
        <Review people={reviewData} />
        <Order />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
