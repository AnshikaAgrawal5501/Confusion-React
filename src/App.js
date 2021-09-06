import React from 'react';
import Header from './Components/HeaderComponent';
import Main from './Components/MainComponent';
import Footer from './Components/FooterComponent';
import { BrowserRouter} from 'react-router-dom';
import { Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
