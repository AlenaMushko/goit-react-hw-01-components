import styled from 'styled-components';

export const FriendSection = styled.ul`
  margin-top: 30px;
`;

export const FriendCard = styled.li`
  :not(:first-child) {
    margin-top: 24px;
  }
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  max-width: 368px;
  border-radius: 8px;
  cursor: pointer;
  list-style: none;
  padding: 16px;
  display: flex;
  gap: 32px;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.72);
    scale: 1.02;
  }
`;

export const FriendAvatar = styled.img`
  width: 56px;
  border: 8px solid lightskyblue;
  border-radius: 8px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    border: 8px solid lightcoral;
  }
`;

export const FriendName = styled.span`
  font-size: 32px;
  font-weight: 600;
`;

export const FriendOnlineStatus = styled.span`
  font-size: 24px;
  color: ${({ isOnline }) => (isOnline ? 'green' : 'tomato')};
`;
