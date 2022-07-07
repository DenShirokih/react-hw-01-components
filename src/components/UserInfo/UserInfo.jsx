export const UserInfo = ({ name, tag, location, avatar }) => {
  return (
    <div class="description">
      <img src={avatar} alt="User avatar" />
      <p>{name}</p>
      <p>@ {tag}</p>
      <p>{location}</p>
    </div>
  );
};
