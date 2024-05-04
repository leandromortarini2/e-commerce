"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo5.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  background: linear-gradient(to right, #082f49, #0ea5e9, #082f49);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxTitle = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 0px) and (max-width: 639px) {
    width: 100%;
    height: 200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: 900;
  @media (min-width: 640px) and (max-width: 900px) {
    font-size: 30px;
    font-weight: 600;
    text-align: justify;
  }
  @media (min-width: 0px) and (max-width: 639px) {
    font-size: 25px;
    font-weight: 600;
    text-align: justify;
  }
`;
const Title2 = styled.h2`
  font-size: 50px;
  color: white;
  font-weight: 900;
  @media (min-width: 640px) and (max-width: 900px) {
    font-size: 25px;
    font-weight: 600;
    text-align: justify;
  }
  @media (min-width: 0px) and (max-width: 639px) {
    font-size: 20px;
    font-weight: 600;
    text-align: justify;
  }
`;

const StyledText = styled.p`
  padding: 3px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  padding: 20px;
  @media (min-width: 640px) {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: justify;
  }
`;

const About = () => {
  return (
    <>
      <Container>
        <BoxTitle>
          <Image
            src={Logo}
            alt=""
            className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]"
          />
          <Title>Click|Tech</Title>
          <Title2>About us</Title2>
        </BoxTitle>
        <StyledText>
          At ClickTech, our mission is to offer you a shopping experience
          exceptional digital that meets all your technological needs. We are
          passionate about connecting people with the latest innovations and
          digital solutions that make life easier, more efficient and more
          exciting.
        </StyledText>
        <Title>That makes us different?</Title>
        <StyledText>
          Meticulous product curation: Our expert team carefully selects every
          product available on our platform, ensuring we only offer the best in
          digital technology. From productivity software to design tools, each
          item has been tested for quality and usefulness. Ease of use and
          accessibility: We believe that technology should be accessible to
          everyone. Thats why we strive to make our platform easy to navigate
          and use for users of all technical abilities. Whether your looking for
          software for your business or creative tools for your personal
          projects, youll find a seamless and hassle-free purchasing experience
          at ClickTech. Exceptional Customer Support: At ClickTech, we value
          every customer and are committed to providing exceptional service
          every step of the purchasing process. From resolving product queries
          to offering after-sales support, our support team is here to help you
          every step of the way. Continuous innovation: The world of technology
          is constantly evolving, and so are we. We are committed to staying up
          to date with the latest trends and advances in the digital field so
          that we can always offer you cutting-edge products that meet your
          needs in an increasingly digitalized world.
        </StyledText>
      </Container>
    </>
  );
};

export default About;
