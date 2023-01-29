import React from 'react';
import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';
import {
  FriendCard,
  FriendAvatar,
  FriendName,
  FriendOnlineStatus,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendCard key={id}>
      <FriendOnlineStatus isOnline={isOnline}>
        <BsFillCircleFill />
      </FriendOnlineStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
