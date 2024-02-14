import { fetchUserData } from '../app/api/people/route';
import prisma from '@/prisma/client';

const populateDatabase = async (): Promise<void> => {
  try {
    const userData = await fetchUserData();

    await prisma.people.create({
      data: {
        name: userData.name,
        email: userData.email,
      },
    });

    console.log('Data saved successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

populateDatabase();
