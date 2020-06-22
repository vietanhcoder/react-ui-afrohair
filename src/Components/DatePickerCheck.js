import React from "react";
import "react-google-flight-datepicker/dist/main.css";
import { RangeDatePicker } from "react-google-flight-datepicker";
import styled from "styled-components/macro";
import "./custom.scss";
const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: gray;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  background: white;
  margin: 0 auto;
`;

const DatePickerCheck = () => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <h2>RangeDatePicker with startDate and endDate</h2>
        <RangeDatePicker
          startDate={new Date(2020, 0, 1)}
          endDate={new Date(2020, 1, 1)}
        />
        <br />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default DatePickerCheck;
