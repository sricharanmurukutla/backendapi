import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Menu.css'; // Import the CSS file
import axios from 'axios';
import styled from 'styled-components';

const CustomNavBar = styled.nav`
  color: white;
`;



function Menu() {
  const [userId, setUserId] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const value = localStorage.getItem('userId');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUserId(value || '');

    // Fetch user details when userId is available
    if (value) {
      // Replace the following API call with your actual API endpoint to fetch user details
      fetchUserDetails(value);
    }
  }, [value]);

  

  const fetchUserDetails = async (userId) => {
    try {
      // Replace the following with your actual API endpoint to fetch user details
      const response = await axios.get(`http://147.182.240.238:${3002}/api/users/${userId}`);
      const userData = response.data;
  
      // Assuming the API response has a "firstname" property
      setUserFirstName(userData.firstname);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };
  
  

  const handleLogout = () => {
    localStorage.clear();
    setUserId('');
    setUserFirstName('');
    navigate('/');
    location.reload();
  };

  return (
    <CustomNavBar className="menu" aria-label="Main menu" itemScope itemType="https://schema.org/SiteNavigationElement">
<ul style={{ display: 'flex', justifyContent: 'flex-end', listStyleType: 'none', padding: 15 }}>
  {!userId ? (
    <>
      <li style={{ marginRight: '10px' }}><Link itemProp="url" to="/" tabIndex="5">Login</Link></li>
      <li style={{ marginRight: '10px' }}><Link itemProp="url" to="/register" tabIndex="6">Register</Link></li>
    </>
  ) : (
    <>
      <li style={{ marginRight: '10px' }}><span>Welcome, {userFirstName}!</span></li>
      <li style={{ marginRight: '10px' }}><Link itemProp="url" to="/login" tabIndex="11" onClick={handleLogout}>Logout</Link></li>
    </>
  )}
</ul>

    </CustomNavBar>
  );
}

export default Menu;
