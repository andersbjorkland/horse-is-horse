import React from 'react';
import { Content, Heading, Paragraph, Wrapper } from './Header.styles';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            shadow1: {
                x: 0,
                y: 0,
                timing: 250
            },
            shadow2: {
                x: 0,
                y: 0,
                timing: 250
            },
        }
        this.randomizeShadow = this.randomizeShadow.bind(this);

        
    }

    randomizeShadow() {
        let randomX;
        let randomY;
        let timing = 500 + Math.random() * 500;

        setTimeout(() => {
            this.setState({
                shadow1: {
                    x: randomX = 1 - 1.2 * parseInt(Math.random() * 1000)/1000, 
                    y: randomY = 1- 0.5 * parseInt(Math.random() * 1000)/1000,
                    timing: timing
                },
                shadow2: {
                    x: randomX - (Math.random() / 2), 
                    y: randomY - (Math.random() / 2),
                    timing: timing
                },
            });
            this.randomizeShadow();
        }, timing);
        
    }

    componentDidMount() {
        this.randomizeShadow();
    }

    render() {
        return (
            <Wrapper>
                <Content>
                    <Heading shadow={this.state.shadow2}>Is a Horse?</Heading>
                    <Paragraph shadow={this.state.shadow1} easing={true} color="orange">Is a Horse?</Paragraph>
                    <Paragraph shadow={this.state.shadow2} easing={false} color="yellow">Is a Horse?</Paragraph>
                </Content>
            </Wrapper>
        );
    }
}

export default Header;