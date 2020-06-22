import React from "react";
import styled from "styled-components";
import signInImage from "./images/sign-in.png";
function App() {
  const PageWrapper = styled.div`
    display: flex;
    height: 100vh;
  `;
  const HalfWidth = styled.div`
    width: 50%;
  `;

  const BgFullFit = styled.div`
    background-image: url(${(props) => props.imgUrl});
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      z-index: 1;
      background-color: rgb(200, 195, 199);
      top: 0;
      left: 0;
    }
  `;

  const LogoPageWrapper = styled.span`
    border: 3px white solid;
    position: absolute;
    z-index: 2;
    color: white;
    top: 45px;
    left: 170px;
    padding: 10px;
    text-align: center;
  `;
  const BoldTextLogo = styled.div`
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 50px;
    letter-spacing: 1px;
  `;
  const SpacingTextLogo = styled.div`
    font-size: 23px;
    letter-spacing: 15px;
  `;

  // =================================
  const LoginContentTextWrapper = styled.div`
    padding: 33px 180px 33px 72px;
  `;

  const SignUpWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;
  const DesButton = styled.div`
    line-height: 20px;
    color: #506d85;
    margin-right: 20px;
  `;
  const Button = styled.button`
    padding: 5px 17px;
    line-height: 1.43;
    text-align: center;
    color: ${(props) => props.textColor};
    background: ${(props) => props.bgColor};
  `;

  const MainContentLogin = styled.div`
    margin-top: 84px;
  `;
  const TitlePage = styled.h1`
    font-weight: bold;
    font-size: 28px;
    letter-spacing: -1px;
    color: #1d252d;
  `;

  const LoginForm = styled.form`
    padding-top: 10px;
  `;
  const FormControl = styled.div`
    margin-top: 24px;
  `;

  const Input = styled.input`
    color: #dde5ed;
    box-shadow: 0 2px 11px 0 rgba(221, 229, 237, 0.33);
    border: solid 0.5px #dde5ed;
    padding: 18px;
    width: 100%;
    max-width: 480px;
  `;

  const EmailInput = styled(Input)``;
  const PasswordInput = styled(Input)``;

  const RememberWrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  const CheckboxInput = styled.input`
    width: 20px;
    height: 20px;
    border: solid 1px #8ba6c1;
  `;
  const RememberText = styled.div`
    line-height: 1.71;
    color: #506d85;
    margin-left: 10px;
  `;

  const BigButton = styled(Button)`
    padding: 20px 78px;
    font-weight: bold;
    border: none;
    margin-top: 47px;
  `;

  return (
    <div>
      <PageWrapper>
        <HalfWidth>
          <BgFullFit imgUrl={signInImage}>
            <LogoPageWrapper>
              <BoldTextLogo>AfroHair</BoldTextLogo>
              <SpacingTextLogo>STYLERS</SpacingTextLogo>
            </LogoPageWrapper>
          </BgFullFit>
        </HalfWidth>
        <HalfWidth>
          <LoginContentTextWrapper>
            <SignUpWrapper>
              <DesButton>Don't have an account?</DesButton>
              <Button textColor="white" bgColor="#1d252d">
                Sign Up
              </Button>
            </SignUpWrapper>
            <MainContentLogin>
              <TitlePage>Log in to AfroHair Stylers</TitlePage>
              <LoginForm>
                <FormControl>
                  <EmailInput placeholder="Email address" type="email" />
                </FormControl>
                <FormControl>
                  <PasswordInput
                    placeholder="Password (min 8 characters)"
                    type="password"
                  />
                </FormControl>
                <FormControl>
                  <RememberWrapper>
                    <CheckboxInput type="checkbox" />
                    <RememberText>Remember me</RememberText>
                  </RememberWrapper>
                </FormControl>
                <BigButton type="submit" textColor="white" bgColor="#ffb63e">
                  {" "}
                  Sign In
                </BigButton>
              </LoginForm>
            </MainContentLogin>
          </LoginContentTextWrapper>
        </HalfWidth>
      </PageWrapper>
    </div>
  );
}

export default App;
