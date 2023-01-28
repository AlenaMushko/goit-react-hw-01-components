import styled from 'styled-components';

export const StatisticSection = styled.section`
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  max-width: 400px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.72);
    scale: 1.02;
  }
`;
export const StatisticTitle = styled.h2`
  color: #3a3636e0;
  text-align: center;
  padding: 40px;
`;
export const StatisticList = styled.ul`
  margin-top: 20px;
  background-color: #d3d3d340;
  display: flex;
  list-style: none;
  justify-content: space-around;
`;
export const StatisticItem = styled.li`
  width: calc((100% - 16px) / 4);
  padding: 20px 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background-color: ${color => color.backgroundColor};
  color: whitesmoke;
`;

export const StatisticLabel = styled.span``;

export const StatisticPercentage = styled.span`
  margin-top: 8px;
  font-size: 26px;
`;
