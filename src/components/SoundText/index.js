import {Paragraph, Wrapper} from "./SoundText.styles";

const SoundText = (props) => (
  <Wrapper>
      <Paragraph className={props.className}>{props.text}</Paragraph>
  </Wrapper>
);

export default SoundText;