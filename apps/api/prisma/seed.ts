import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const saltRounds = 10;
  const adminPassword = await bcrypt.hash('Admin@123', saltRounds);
  const doctorPassword = await bcrypt.hash('Doctor@123', saltRounds);

  // 1. Create a Super Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@homedi.com' },
    update: {},
    create: {
      email: 'admin@homedi.com',
      passwordHash: adminPassword,
      role: Role.SUPER_ADMIN,
      profile: {
        create: {
          firstName: 'System',
          lastName: 'Administrator',
        },
      },
    },
  });

  // 2. Create a Hospital Admin
  const hospAdmin = await prisma.user.upsert({
    where: { email: 'apollo_admin@homedi.com' },
    update: {},
    create: {
      email: 'apollo_admin@homedi.com',
      passwordHash: adminPassword,
      role: Role.HOSPITAL_ADMIN,
      profile: {
        create: {
          firstName: 'Apollo',
          lastName: 'Manager',
        },
      },
    },
  });

  // 3. Create a Hospital
  const hospital = await prisma.hospital.upsert({
    where: { adminId: hospAdmin.id },
    update: {},
    create: {
      name: 'Apollo Hospitals',
      adminId: hospAdmin.id,
      city: 'Hyderabad',
      address: 'Jubilee Hills, Hyderabad',
      services: ['Cardiology', 'Emergency', 'Neurology'],
      rating: 4.8,
    },
  });

  // 4. Create a Doctor
  const docUser = await prisma.user.upsert({
    where: { email: 'dr.ramesh@homedi.com' },
    update: {},
    create: {
      email: 'dr.ramesh@homedi.com',
      passwordHash: doctorPassword,
      role: Role.DOCTOR,
      profile: {
        create: {
          firstName: 'Ramesh',
          lastName: 'Kumar',
        },
      },
    },
  });

  await prisma.doctor.upsert({
    where: { userId: docUser.id },
    update: {},
    create: {
      userId: docUser.id,
      hospitalId: hospital.id,
      specialty: 'Cardiology',
      experience: 15,
      rating: 4.9,
    },
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
