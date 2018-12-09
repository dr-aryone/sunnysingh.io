import styled from 'styled-components';
import { breakpoints } from '../../config';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.medium}px) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
  margin-bottom: 2rem;

  @media (min-width: ${breakpoints.medium}px) {
    flex-basis: 50%;

    &:nth-child(odd) {
      padding-right: 2rem;
    }
  }
`;

export const Link = styled.a`
  display: block;
  height: 100%;
  padding: 2rem;
  text-decoration: none;
  background-color: #15151c;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;

  @media (min-width: ${breakpoints.medium}px) {
    padding: 4rem;
  }

  &:hover,
  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
    outline: none;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.5;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  line-height: 1.5em;
`;

export const Action = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;
