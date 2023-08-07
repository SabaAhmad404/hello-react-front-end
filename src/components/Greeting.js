import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/slices/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingData = useSelector((state) => state.greetings.greeting);
  const loading = useSelector((state) => state.greetings.loading);
  const error = useSelector((state) => state.greetings.error);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">{error}</div>;
  }

  const greeting = greetingData ? greetingData.greeting : '';

  return <div className="App">{greeting}</div>;
};

export default Greeting;
