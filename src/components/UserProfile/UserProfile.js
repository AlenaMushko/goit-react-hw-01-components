import React from 'react';
import PropTypes from 'prop-types';
import user from './user.json';
import {
  UserSection,
  UserDescription,
  UserImg,
  UserName,
  UserText,
  UserStats,
  UserStat,
  UserLabel,
  UserQuantity,
} from './UserProfile.styled';

export const UserProfile = ({ user }) => {
  const { username, avatar, tag, location, stats } = user;
  return (
    <UserSection>
      <UserDescription>
        <UserImg src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </UserDescription>
      <UserStats>
        <UserStat>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{stats.followers}</UserQuantity>
        </UserStat>
        <UserStat>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{stats.views}</UserQuantity>
        </UserStat>
        <UserStat>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{stats.likes}</UserQuantity>
        </UserStat>
      </UserStats>
    </UserSection>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
