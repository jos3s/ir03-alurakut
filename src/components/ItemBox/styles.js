import styled from "styled-components";

export const Item = styled.li``;

export const Img = styled.img`
  object-fit: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Link = styled.a`
  display: inline-block;
  height: 102px;
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.md};
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-image: linear-gradient(0deg, #00000073, transparent);
  }
`;

export const Span = styled.span`
  color: #ffffff;
  font-size: 1rem;
  position: absolute;
  left: 0;
  bottom: ${({ theme }) => theme.space.xsmall};
  z-index: 2;
  padding: 0 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
