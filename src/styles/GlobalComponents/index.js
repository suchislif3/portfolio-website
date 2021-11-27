import styled from "styled-components";

export const Section = styled.section`
  display: ${({ grid }) => (grid ? "grid" : "flex")};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  padding: ${({ nopadding }) => (nopadding ? "0" : "32px 48px 0")};
  margin: 5% auto 10%;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: ${({ nopadding }) => (nopadding ? "0" : "24px 32px 0")};
    flex-direction: column;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: ${({ nopadding }) => (nopadding ? "0" : "16px 16px 0")};
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: ${(props) => (props.main ? "56px" : "48px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  color: ${({ theme }) => theme.colors.neutral};
  margin-bottom: 16px;
  padding: ${({ main }) => (main ? "16px 0 16px" : "0")};
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ main }) => (main ? "46px" : "40px")};
    line-height: ${({ main }) => (main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${({ main }) => (main ? "12px 0 12px" : "0")};
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: ${({ main }) => (main ? "28px" : "20px")};
    line-height: ${({ main }) => (main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${({ main }) => (main ? "8px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${({ theme }) => theme.colors.neutral};
  opacity: 60%;
  @media ${({ theme }) => theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
