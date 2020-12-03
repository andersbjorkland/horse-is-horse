import React from 'react';
import {Container, Wrapper} from "./PickerItem.styles";

class PickerItem extends React.Component {

    render() {
        return (
            <Wrapper>
                <Container onClick={this.props.itemHandler}>
                    <p className={this.props.className}>{this.props.content}</p>
                </Container>
            </Wrapper>
        );
    }
}

export default PickerItem;