import React from 'react'
import PropTypes from "prop-types";
import { UserSection, UserDescription, UserImg,UserName,UserText} from "./UserProfile.styled"

export const UserProfile = ({ avatar, username, tag, location, stats })=>{
  return (
    <UserSection>
    <UserDescription>
    <UserImg
      src={avatar}
      alt={username}
    />
      <UserName>{username}</UserName>
      <UserText>@{tag}</UserText>
      <UserText>{location}</UserText>
   </UserDescription>
   <ul className="stats">
    <li>
      <span className="label">Followers</span>
        <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </li>
  </ul> 
 </UserSection>
 )
};

UserProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}





