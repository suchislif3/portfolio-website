import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;

  @media ${({ theme }) => theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const StaticText = styled.div`
  line-height: 90px;
  height: 90px;
  font-size: 60px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary1_light};

  @media ${({ theme }) => theme.breakpoints.md} {
    line-height: 70px;
    height: 70px;
    font-size: 46px;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    line-height: 48px;
    height: 48px;
    font-size: 32px;
  }
`;

export const DynamicTexts = styled.ul`
  line-height: ${({ small }) => (small ? "45px" : "90px")};
  height: ${({ small }) => (small ? "45px" : "90px")};
  font-size: ${({ small }) => (small ? "30px" : "60px")};
  font-weight: 400;
  opacity: 70%;

  @media ${({ theme }) => theme.breakpoints.md} {
    line-height: ${({ small }) => (small ? "35px" : "70px")};
    height: ${({ small }) => (small ? "35px" : "70px")};
    font-size: ${({ small }) => (small ? "24px" : "46px")};
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    line-height: ${({ small }) => (small ? "24px" : "48px")};
    height: ${({ small }) => (small ? "24px" : "48px")};
    font-size: ${({ small }) => (small ? "16px" : "32px")};
  }
`;
