import { Container } from './App.styled';
import user from 'user.json';
import { Profile } from 'components/Profile/Profile';

export const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Container>
  );
};
