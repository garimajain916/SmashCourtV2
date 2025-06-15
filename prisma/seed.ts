const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.profile.deleteMany({})
  await prisma.user.deleteMany({})

  // Demo users
  const users = [
    {
      email: 'alex.kim@example.com',
      profile: {
        create: {
          ntrpRating: 3.5,
          bio: 'Love to rally and play matches!',
          courtPreferences: JSON.stringify(['queens-park', 'trinity-bellwoods']),
          availability: JSON.stringify({
            monday: ['evening'],
            tuesday: [],
            wednesday: ['morning', 'evening'],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
          }),
        },
      },
    },
    {
      email: 'priya.singh@example.com',
      profile: {
        create: {
          ntrpRating: 4.0,
          bio: 'Looking for advanced players.',
          courtPreferences: JSON.stringify(['high-park', 'christie-pits']),
          availability: JSON.stringify({
            monday: [],
            tuesday: ['afternoon'],
            wednesday: [],
            thursday: ['evening'],
            friday: [],
            saturday: [],
            sunday: [],
          }),
        },
      },
    },
    {
      email: 'jordan.lee@example.com',
      profile: {
        create: {
          ntrpRating: 2.5,
          bio: 'Beginner, just getting started!',
          courtPreferences: JSON.stringify(['regent-park']),
          availability: JSON.stringify({
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: ['morning'],
            sunday: ['afternoon'],
          }),
        },
      },
    },
  ]

  for (const user of users) {
    await prisma.user.create({
      data: user,
      include: { profile: true },
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 