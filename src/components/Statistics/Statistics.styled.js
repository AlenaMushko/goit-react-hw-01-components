import styled from 'styled-components';

export const Statistic = styled.section`
/* background-color: blue; */
`


export const StatisticTitle = styled.h2`
/* color: tomato; */
`

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}