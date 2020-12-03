import React from 'react';

import shadow01 from '../../assets/images/shadow_01.png';
import GameImage from "../GameImage";
import {Container, Wrapper} from "./Content.styles";
import TextOverlay from "../TextOverlay";
import Picker from "../Picker";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: "initial",
            texts: [
                "IHIIIIiIII",
                "HIHIHIHI",
                "IAIAIAHHAAA",
                "HIIHIHHIHIIIIiiii!!!"
            ],
            update: false,
            textIndex: 0,
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        if (!this.state.update) {

            let index = this.state.textIndex + 1;
            if (index >= this.state.texts.length) {
                index = 0;
            }
            this.setState({ animate: "animate", update: true, textIndex: index });
            setTimeout(() => this.setState({animate: "standard", update: false}), this.props.timing);
        }
    }

    render() {
        return (
            <Wrapper>
                <Container onClick={this.clickHandler}>
                  <GameImage className={this.state.animate} image={shadow01} />
                  <TextOverlay className={this.state.animate} updateText={this.state.texts[this.state.textIndex]}/>
                </Container>
                <Picker timing={this.props.timing} itemHandler={this.clickHandler}/>
            </Wrapper>
        );
    }
}

export default Content;