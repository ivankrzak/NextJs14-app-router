/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import { Prisma, PrismaClient } from '@prisma/client'

// eslint-disable-next-line @typescript-eslint/naming-convention
const prisma = new PrismaClient()

const MembersData: Prisma.MemberCreateInput[] = [
  {
    firstName: 'Ivan',
    lastName: 'Krzak',
    email: 'ivan@prisma.io',
    address: 'North street 234, Sin City',
    telNumber: '0903888999',
    isStudent: false,
    country: 'Slovakia',
    gender: 'MAN',
    memberships: {
      create: {
        barcode: 2103232321,
        type: 'MONTHLY6',
      },
    },
  },
  {
    firstName: 'James',
    lastName: 'Deed',
    email: 'jamesdeed@prisma.io',
    address: 'East ave 133, Sin City',
    telNumber: '0903321999',
    isStudent: false,
    country: 'Slovakia',
    gender: 'MAN',
    memberships: {
      create: {
        barcode: 2103232332,
        type: 'MONTHLY6',
      },
    },
  },
  {
    firstName: 'Joey Doe',
    lastName: 'Chen',
    email: 'joyedoechen@prisma.io',
    address: 'Main street 67, Sin City',
    telNumber: '0903888329',
    isStudent: true,
    country: 'Slovakia',
    gender: 'MAN',
    memberships: {
      create: {
        barcode: 2103232331,
        type: 'MONTHLY3',
      },
    },
  },
  {
    firstName: 'Alice',
    lastName: 'Cooper',
    email: 'alicecooper@prisma.io',
    address: 'Boulevard 234, Sin City',
    telNumber: '0903288999',
    isStudent: true,
    country: 'Slovakia',
    gender: 'WOMAN',
    memberships: {
      create: [
        {
          barcode: 2103232111,
          type: 'MONTHLY3',
        },
        {
          barcode: 2103232311,
          type: 'MONTHLY6',
        },
      ],
    },
  },
  {
    firstName: 'Ben',
    lastName: 'Hendrik',
    email: 'ben@prisma.io',
    address: 'Misty street 234, Sin City',
    telNumber: '0903338999',
    isStudent: true,
    country: 'Slovakia',
    gender: 'MAN',
    memberships: {
      create: {
        barcode: 2103222331,
        type: 'ENTRY15',
        entries: 5,
      },
    },
  },
  {
    firstName: 'Elen',
    lastName: 'Hendrik',
    email: 'elnhendrik@prisma.io',
    address: 'Misty street 899, Sin City',
    telNumber: '0903138999',
    isStudent: true,
    country: 'Slovakia',
    gender: 'MAN',
    memberships: {
      create: {
        barcode: 2103222334,
        type: 'ENTRY15',
        entries: 2,
      },
    },
  },
  {
    firstName: 'Betty',
    lastName: 'Nix',
    email: 'bettynix@prisma.io',
    address: 'North street 234, Sin City',
    telNumber: '0903321999',
    isStudent: true,
    country: 'Slovakia',
    gender: 'WOMAN',
    memberships: {
      create: {
        barcode: 2103222335,
        type: 'ENTRY15',
        entries: 8,
      },
    },
  },
  {
    firstName: 'Fluffy',
    lastName: 'McGregor',
    email: 'fluffymcgregor@prisma.io',
    address: 'Tree street 11, Sin City',
    telNumber: '0233321999',
    isStudent: true,
    country: 'Slovakia',
    gender: 'WOMAN',
    memberships: {
      create: {
        barcode: 2103222336,
        type: 'ENTRY15',
        entries: 5,
      },
    },
  },
  {
    firstName: 'Monica',
    lastName: 'Sunday',
    email: 'monicasunday@prisma.io',
    address: 'Sunset strip 234, Sin City',
    telNumber: '0236721999',
    isStudent: true,
    country: 'Slovakia',
    gender: 'WOMAN',
    memberships: {
      create: {
        barcode: 2103222337,
        type: 'ENTRY15',
        entries: 12,
      },
    },
  },
  {
    firstName: 'Avery',
    lastName: 'James',
    email: 'averyjames@prisma.io',
    address: 'Sunset strip 32, Sin City',
    telNumber: '0236721999',
    isStudent: false,
    country: 'Slovakia',
    gender: 'WOMAN',
    memberships: {
      create: {
        barcode: 2103222339,
        type: 'ENTRY15',
        entries: 15,
      },
    },
  },
  {
    firstName: 'Nilu',
    lastName: 'Grey',
    email: 'nilugrey@prisma.io',
    address: 'Main street  232, Sin City',
    telNumber: '0234721999',
    isStudent: false,
    country: 'Slovakia',
    gender: 'WOMAN',
    memberships: {
      create: {
        barcode: 2103232338,
        type: 'MONTHLY3',
      },
    },
  },
  {
    firstName: 'Mahmoud',
    lastName: 'Dali',
    email: 'mahmouddali@prisma.io',
    address: 'Main street  231, Sin City',
    telNumber: '0903873788',
    isStudent: false,
    country: 'Slovakia',
    gender: 'MAN',
    memberships: {
      create: {
        barcode: 2103232379,
        type: 'MONTHLY3',
      },
    },
  },
]

export const main = async () => {
  try {
    console.log(`Start seeding ...`)
    for (const member of MembersData) {
      const memberData = await prisma.member.create({
        data: member,
      })
      console.log(`Created user with id: ${memberData.id}`)
    }

    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

void main()
