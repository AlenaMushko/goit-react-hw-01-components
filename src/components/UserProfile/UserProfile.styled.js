import styled from 'styled-components';

export const UserSection = styled.section`
  background-color: white;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  padding-top: 12px;
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
export const UserDescription = styled.div`
  margin: 0 auto;
  max-width: 250px;
`;
export const UserImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  width: 150px;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const UserName = styled.p`
  margin-top: 16px;
  font-size: 24px;
  font-weight: 800;
  text-align: center;
`;
export const UserText = styled.p`
  text-align: center;
  margin-top: 8px;
  color: gray;
`;
export const UserStats = styled.ul`
  margin-top: 20px;
  background-color: #d3d3d340;
  display: flex;
  list-style: none;
  justify-content: space-around;
`;
export const UserStat = styled.li`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  width: calc((100% - 16px) / 3);
  padding: 40px 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
export const UserLabel = styled.span`
  color: gray;
`;

export const UserQuantity = styled.span`
  font-weight: 700;
`;

// border:1px solid tomato;
