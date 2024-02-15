import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

const prisma = new PrismaClient();

export async function Employee() {
    const allUsers = await prisma.people.findMany()
    return (
        <div className="flex flex-wrap mx-2 pt-20">
          {allUsers.map((user) => (
            <div key={user.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              
                <div className="bg-slate-200 p-4 rounded-lg shadow-md h-full">
                  <Image
                    src="/zayn.webp"
                    alt="zaddyyyy"
                    height={200}
                    width={200}
                    className="w-full object-cover mb-4 rounded-md"
                  />
                    <h3 className="text-lg font-semibold mb-2">{user.name}</h3>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <p className="text-gray-600">Phone: {user.phone}</p>
                    <p className="text-gray-600">Username: {user.username}</p>
                    <p className="text-gray-600">Website: {user.website}</p>
                </div>

            </div>
          ))}
          
        </div>

    );
  }
  
  
  Employee()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })



