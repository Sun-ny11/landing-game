import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Icon } from './components/icon/Icon';
import { Glasses } from './layout/section/glasses/Glasses';
import { Console } from './layout/section/console/Console';
import { Price } from './layout/section/price/Price';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Glasses/>
            <Console/>
            <Price/>
            <Footer/>
        </div>
    );
}

export default App;

