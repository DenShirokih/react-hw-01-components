export const UserStatistics = ({ followers, views, likes }) => {
  return (
    <div>
      <p>{followers}</p>
      <p>{views}</p>
      <p>{likes}</p>
    </div>
  );
};
