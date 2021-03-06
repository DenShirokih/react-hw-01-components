import PropTypes from 'prop-types';
import { ProfileContainer } from './Profile.styled';
import { UserInfo } from 'components/UserProfile/UserInfo/UserInfo';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <UserInfo
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </ProfileContainer>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
