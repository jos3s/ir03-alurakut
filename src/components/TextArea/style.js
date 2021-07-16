import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  width: 100%;
  border: 0;
  padding: 1.4rem 1.6rem;
  margin-bottom: ${({ theme }) => theme.space.large};
  border-radius: 0.8rem;
`;
