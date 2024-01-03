import { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
    const [userData, setUserData] = useState(null);
    
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`/api/users/${userId}`);
          const data = await response.json();
          setUserData(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, [userId]);
  
    if (!userData) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='profile-container'>
        <h2 className='profile-header'>My Account</h2>
        <p><b>Name:</b> {userData.username}</p>
        <p><b>Reviews:</b> {userData.reviews}</p>
        <p><b>Comments:</b> {userData.comments}</p>
        <p><b>Favorite Games:</b></p>
        <p><b>About Me:</b> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    );
  };
  
  export default UserProfile;