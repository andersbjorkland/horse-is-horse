import {Wrapper} from './Score.styles';

export const Score = (props) => (
    <Wrapper>
        <h2>SCORE</h2>
        <p>{props.score}</p>
    </Wrapper>
);