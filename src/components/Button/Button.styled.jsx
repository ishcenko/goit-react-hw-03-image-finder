import styled from 'styled-components';

export const LoadButton = styled.button`
  padding: 10px 24px;
  border-radius: 8px;
  background: linear-gradient(
    40deg,
    #1e2400 0%,
    rgba(112, 207, 241, 0.69) 12%,
    #9796d2 19%,
    #9c9bd2 29%,
    #bbbbf1 35%,
    #9eb5e9 49%,
    #38edc9 54%,
    #a1c9ef 78%,
    #89e2f4 100%
  );
  transition: all 1000ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #0c0a0a;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 24px;
  line-height: 24px;
  font-style: normal;
  font-weight: 700;
  min-width: 180px;
  max-width: 200px;
  place-self: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    color: white;
    background: linear-gradient(
      40deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(3, 65, 88, 0.69) 12%,
      rgba(6, 5, 82, 1) 19%,
      rgba(8, 7, 106, 1) 29%,
      rgba(9, 9, 121, 1) 35%,
      rgba(7, 52, 150, 1) 49%,
      rgba(6, 68, 160, 1) 54%,
      rgba(5, 96, 179, 1) 78%,
      rgba(0, 212, 255, 1) 100%
    );
    transform: scale(1.15);
    padding: 15px;
  }
`;
