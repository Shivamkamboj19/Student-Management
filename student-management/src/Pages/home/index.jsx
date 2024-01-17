import React from "react";
import "./styles.css";
import Navbar from "../../Components/AppComponents/Navbar";
import AppForm from "../../Components/AppComponents/AppFormBase/AppForm";
import styled from "styled-components";

const HomePage = () => {
  const FormWrapper = styled.div`
    background-color: #F0FFFF;
    padding: 10px;
  `;

  return (
    <>
      <Navbar />
      <FormWrapper>
        <AppForm />
      </FormWrapper>
    </>
  );
};

export default HomePage;
