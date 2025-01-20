import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCurrentUser } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate();
    const username = useSelector(state => state.auth.currentUser);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(removeCurrentUser());
        navigate('/login');
    }
  return (
    <div>
      userProfile.
      <h1>{username}</h1>
        <button onClick={()=> handleLogout}>Logout</button>
    </div>
  )
}

export default UserProfile;
