import './App.css';
import Header from '../../containers/Header/Header';
import Home from '../Home/Home';
import CreateGoods from '../CreateGoods/CreateGoods';
import SearchGoods from '../SearchGoods/SearchGoods';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const main = [
  {"link" : "/" , "name" : "Главная"}, 
  {"link" : "/createGoods", "name" : "Создание Товара"}, 
  {"link" : "/searchGoods" ,"name" : "Поиск Товар"}
]

function App() {
    
  return (
    <div className='App'>
      <Router>
        <Header main={main}/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/createGoods" element={<CreateGoods/>}/>
          <Route path="/searchGoods" element={<SearchGoods/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
