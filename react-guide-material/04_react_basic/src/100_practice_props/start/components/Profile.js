import './Profile.css';

const Profile = ({ name = 'kyosuke', age = '25', country = 'japan' }) => {
  return (
    <div className="profile">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Country: {country}</h3>
    </div>
  );
};

export default Profile;
