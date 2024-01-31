import React from 'react';
import styled from "styled-components";
import arrow from "../images/down-arrow.svg";
import {Fade} from "react-awesome-reveal";

function Section({title, description, backgroundImg, leftBtnTxt, rightBtnTxt}) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade botom>
                    <ButtonGroup>
                        <Left>
                            {leftBtnTxt}
                        </Left>
                        {rightBtnTxt &&
                            <Right>
                                {rightBtnTxt}
                            </Right>
                        }
                    </ButtonGroup>
                </Fade>

                <DownArrow src={arrow}/>

            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const ItemText = styled.div`
  padding-top: 15vh;
  z-index: -1;
  text-align: center;
`

const ButtonGroup = styled.div`
  margin-bottom: 30px;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Left = styled.div`
  background-color: rgb(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  margin: 8px;
  font-size: 12px;

`
const Right = styled(Left)`
  background: white;
  opacity: 0.65;
  color: black;

`
const Buttons = styled.div``
const DownArrow = styled.img`

  overflow-x: hidden;
  animation: animateDown infinite 2.5s;
  height: 40px;
`