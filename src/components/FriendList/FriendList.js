import React from 'react';
import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import {
  FriendSection,
  FriendCard,
  FriendAvatar,
  FriendName,
  FriendOnlineStatus,
  FriendOfflineStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendSection>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendCard key={id}>
          {isOnline ? (
            <FriendOnlineStatus>
              <BsFillCircleFill />
            </FriendOnlineStatus>
          ) : (
            <FriendOfflineStatus>
              <BsFillCircleFill />
            </FriendOfflineStatus>
          )}
          <FriendAvatar src={avatar} alt="User avatar" />
          <FriendName>{name}</FriendName>
        </FriendCard>
      ))}
    </FriendSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
