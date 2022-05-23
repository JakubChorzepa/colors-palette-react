import styled from 'styled-components';
import { device } from '../../assets/styles/breakpoints';

// Color Wrapper

const ColorsWrapper = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (${device.sm}) {
    flex-direction: row;
  }
`;

// Color

type ColorPropsType = {
  bgColor: string,
}

const Color = styled.div<ColorPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${ ({ bgColor }) => bgColor};
  position: relative;

  .icons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (${device.sm}) {
      flex-direction: column;
    }

    & .icon-button {
      padding: 10px;
      margin: 25px;
      background: none;
      border: none;
      cursor: pointer;
      display: block;

      & .icon {
        font-size: ${({ theme }) => theme.font.size.s};
        opacity: 0.6;
        @media screen and (${device.sm}) {
          font-size: ${({ theme }) => theme.font.size.m};
        }
      }
    }
  }
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.font.size.s};
    opacity: 0.6;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (${device.sm}) {
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }
`;


export { ColorsWrapper, Color };