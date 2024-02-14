import axios from 'axios';

interface UserData {
  name: string;
  email: string;
}

export const fetchUserData = async (): Promise<UserData> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
