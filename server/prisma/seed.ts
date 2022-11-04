import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){  
  const user = await prisma.user.create({
    data:{
      name:'John Doe',
      email:'john@example.com',
      avatar:'http://github.com/rudineicts.png'
    }
  })

  const pool = await prisma.pool.create({
    data:{
      title:'Example Pool',
      code:'BOL123',
      ownerId:  user.id,

      participant:{
        create:{
          userId: user.id,
        }
      }
    }
  })

  await prisma.game.create({
    data:{
      date:'2022-12-04T12:00:00.891Z',
      firstTeamCountryCode:'DE',
      secondTeamCountryCode:'BR',
    }
  })

  await prisma.game.create({
    data:{
      date:'2022-12-05T12:00:00.891Z',
      firstTeamCountryCode:'BR',
      secondTeamCountryCode:'AR',

      guess:{
        create:{
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant:{
            connect:{
              userId_poolId:{
                userId:user.id,
                poolId:pool.id
              }
            }
          }
        }
      }
    }
  })
}
main()
