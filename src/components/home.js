import React from 'react';
import styled from "styled-components";
import Section from "./section";
import * as images from "../images";
function Home(props) {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={images.models}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exiting Inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={images.modely}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exiting Inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={images.model3}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exiting Inventory"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={images.modelx}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exiting Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back Guarantee"
                backgroundImg={images.solarPanel}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exiting Inventory"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof lower Costs less than a new Roof Plus Solar Panels"
                backgroundImg={images.solarRoof}
                leftBtnTxt="Custom Order"
                rightBtnTxt="Exiting Inventory"
            />
            <Section
                title="Accessories"
                description="Money-back Guarantee"
                backgroundImg={images.accessories}
                leftBtnTxt="Shop Now"
            />
        </Container>
    );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;

`