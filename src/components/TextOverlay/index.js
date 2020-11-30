import React from 'react';
import SoundText from "../SoundText";
import {Wrapper} from "./TextOverlay.styles";

class TextOverlay extends React.Component {
    render() {

        return (
            <Wrapper>
                <SoundText className={this.props.className} text={this.props.updateText} />
            </Wrapper>
        );
    }
}

export default TextOverlay;