import styled, { css } from "styled-components";
import Row from "./Row";

// the css function is necessary if we want to have some logic in the template literal, it also provides syntax highlighting
// const test = css`
//   text-align: center;
// `;
//tagged template literal: we can write js expressions in it
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    line-height:1.4;
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
  line-height:1.4;
`;

// for react components
Row.defaultProps = { type: "vertical" };

export default Heading;
