import React from 'react';
import {Image, Wrapper} from "./GameImage.styles";

class GameImage extends React.Component {
    render() {
        return (
            <Wrapper>
                <Image className={this.props.className} src={this.props.image} alt=""/>
            </Wrapper>
        );
    }
}

export default GameImage;