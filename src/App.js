import React from 'react';
import Header from './components/Header';
import { GlobalStyle } from './GlobalStyle';
import Content from "./components/Content";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timing: 1500
        };
    }

    componentDidMount() {
        this.updateTiming();
    }

    updateTiming = () => {
        let timing = 501 + Math.random() * 1000
        console.log("TID: " + timing);
        this.setState({timing: timing});

        let cycles = 10;
        if (cycles * timing > 8000) {
            cycles = parseInt(8000 / timing);
        }
        setTimeout(() => this.updateTiming(), cycles * timing);
    }


    render() {
        return (
            <div className="App">
                <Header />
                <Content timing={this.state.timing} />
                <GlobalStyle timing={this.state.timing} />
            </div>
        );
    }
}

export default App;
