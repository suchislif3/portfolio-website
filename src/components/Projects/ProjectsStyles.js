import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(80, 78, 78, 0.9);
  text-align: center;
  width: 400px;
  opacity: 0.9;
  transform: scale(0.98);
  transition: 0.2s ease;
  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.03);
    transform: scale(1);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.primary1_light};
  padding: 0.5rem 0;
  font-size: ${(props) => (props.isTitle ? "3rem" : "2rem")};
`;

export const HeaderFour = styled.h4`
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.secondary1_light};
  margin: 3rem 0 2rem;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${({ theme }) => theme.colors.secondary1_light}; ;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 10px 50px;
  opacity: 70%;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.secondary2_neutral};
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary2_light};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.7rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const Tag = styled.li`
  color: ${({ theme }) => theme.colors.secondary1_light};
  font-size: 1.5rem;
`;
