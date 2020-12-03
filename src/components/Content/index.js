import React from 'react';

import shadow01 from '../../assets/images/shadow_01.png';
import GameImage from "../GameImage";
import {Container, HitIndicator, Wrapper} from "./Content.styles";
import TextOverlay from "../TextOverlay";
import Picker from "../Picker";
import { Score } from '../Score';


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
            score: 0,
            wrongHit: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(isHit = false) {
        if (!this.state.update) {

            let index = this.state.textIndex + 1;
            let addScore = isHit ? 1 : -1;
            if (index >= this.state.texts.length) {
                index = 0;
            }
            
            if (isHit) {
                this.setState({ animate: "animate", update: true, textIndex: index, score: addScore + this.state.score, wrongHit: false });
            } else {
                this.setState({ animate: "standard", update: true, textIndex: index, score: addScore + this.state.score, wrongHit: true });
            }

            setTimeout(() => this.setState({animate: "standard", update: false, wrongHit: false}), this.props.timing);
        }
    }

    render() {
        return (
            <Wrapper>
                <Score score={this.state.score} />
                <Container onClick={this.clickHandler}>
                  <GameImage className={this.state.animate} image={shadow01} />
                  <TextOverlay className={this.state.animate} updateText={this.state.texts[this.state.textIndex]}/>
                  {this.state.wrongHit ? <HitIndicator>NOOO!!!!</HitIndicator> : ""}
                </Container>
                <Picker timing={this.props.timing} itemHandler={this.clickHandler}/>
            </Wrapper>
        );
    }
}

export default Content;