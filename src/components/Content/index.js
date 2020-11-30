import React from 'react';

import shadow01 from '../../assets/images/shadow_01.png';
import GameImage from "../GameImage";
import {Wrapper} from "./Content.styles";
import TextOverlay from "../TextOverlay";


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
            console.log("CLICK!");

            let index = this.state.textIndex + 1;
            if (index >= this.state.texts.length) {
                index = 0;
            }
            this.setState({ animate: "animate", update: true, textIndex: index });
            setTimeout(() => this.setState({animate: "standard", update: false}), 1500);
        }
    }

    render() {
        return (
          <Wrapper onClick={this.clickHandler}>
              <GameImage className={this.state.animate} image={shadow01} />
              <TextOverlay className={this.state.animate} updateText={this.state.texts[this.state.textIndex]}/>
          </Wrapper>
        );
    }
}

export default Content;