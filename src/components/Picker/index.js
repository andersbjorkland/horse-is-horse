import PickerItem from "../PickerItem";
import {Animator, Wrapper} from "./Picker.styles";
import React from "react";

class Picker extends React.Component {

    constructor(props) {
        super(props);

        const items = [
            <PickerItem key={"pi1-" + new Date().getMilliseconds()} content={"ONE"} />,
            <PickerItem key={"pi2-" + new Date().getMilliseconds()} content={"TWO"} />,
            <PickerItem key={"pi3-" + new Date().getMilliseconds()}  content={"THREE"} />,
            <PickerItem key={"pi4-" + new Date().getMilliseconds()} content={"FOUR"} />,
            <PickerItem key={"pi5-" + new Date().getMilliseconds()}  content={"FIVE"} />,
            <PickerItem key={"pi6-" + new Date().getMilliseconds()}  content={"SIX"} />,
            <PickerItem
                key={"pi7-" + new Date().getMilliseconds()}
                content={"YES!"}
                className="bold"
                itemHandler={this.props.itemHandler}
            />
        ,]

        this.state = {
            items: [...items],
            displaying: [
                {...items[0]}, {...items[1]}, {...items[2]}, {...items[3]}
            ],
            firstIndex: 0,
            shifting: false
        }

    }

    componentDidMount() {
        this.switchItems();
    }

    switchItems() {
        setTimeout(() => {
            let items = [];
            let itemIndex = this.state.firstIndex + 1;
            if (itemIndex + this.state.displaying.length - 1 >= this.state.items.length) {
                itemIndex = 1 - this.state.displaying.length;
            }

            for (let i = 1; i < this.state.displaying.length; i++) {
                items.push(this.state.displaying[i]);
            }

            items.push(this.state.items[itemIndex + this.state.displaying.length - 1]);


            this.setState({displaying: items, firstIndex: itemIndex, shifting: !this.state.shifting});
            this.switchItems();
        }, this.props.timing);
    }

    render() {
        return (
            <Wrapper>
                <Animator className={this.state.shifting ? "shift1" : "shift2"} >
                    {this.state.displaying}
                </Animator>
            </Wrapper>
        );
    }
}

export default Picker;