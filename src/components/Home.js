import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-x.jpg"
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="order now"
        rightBtnText="Learn more"
        backgroundImg="solar-panel.jpg"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="order now"
        rightBtnText="Learn more"
        backgroundImg="solar-roof.jpg"
      />

      <Section
        title="Accessories"
        leftBtnText="Shop now"
        backgroundImg="accessories.jpg"
      />
      <Footer/>
    </Container>
    
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
