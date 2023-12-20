const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

const createUser = async() => {
    console.log('creating user');

    await prisma.user.createMany({
        data: [
            {username: 'Somaan', password: 'somaan', is_admin: false},
            {username: 'Joshua', password: 'joshua', is_admin: false},
            {username: 'Salvador', password: 'salvador', is_admin: false},
            {username: 'Graham', password: 'graham', is_admin: false},
        ],
    })
}

const createGame = async() => {
    console.log('creating game');

    await prisma.game.createMany({
        data: [
            {title: 'GTA 1', release_date: new Date('2001-01-01'), platform: 'XBOX', genre:'open world', description:'n/a', cover_image_url: 'n/a'},
            {title: 'GTA 2', release_date: new Date('2001-01-01'), platform: 'XBOX', genre:'open world', description:'n/a', cover_image_url: 'n/a'},
            {title: 'GTA 3', release_date: new Date('2001-01-01'), platform: 'XBOX', genre:'open world', description:'n/a', cover_image_url: 'n/a'},
        ],
    })
}

const createReview = async() => {
    console.log('creating review');

    await prisma.review.createMany({
        data: [
            {gameId: 1, userId:1, rating: 5, summary: 'n/a'},
            {gameId: 2, userId:2, rating: 4, summary: 'n/a'},
            {gameId: 3, userId:3, rating: 3, summary: 'n/a'},
        ],
    })
}

const createComment = async() => {
    console.log('creating comment');

    await prisma.comment.createMany({
        data: [
            {reviewsId:1, userId:1, comment_text:'good review'},
            {reviewsId:2, userId:2, comment_text:'okay review'},
            {reviewsId:3, userId:4, comment_text:'bad review'},
        ],
    })
}

const main = async() => {
    console.log("seeding the database");

    await createUser();
    await createGame();
    await createReview();
    await createComment();
}

main()
.then(async () => {
    await prisma.$disconnect()
    console.log("done");
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })