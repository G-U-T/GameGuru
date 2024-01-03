const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

const createUser = async() => {
    console.log('creating user');

    await prisma.user.createMany({
        data: [
            {username: 'Somaan', password: 'somaan', is_admin: false},
            {username: 'Joshua', password: 'joshua', is_admin: true},
            {username: 'Salvador', password: 'salvador', is_admin: false},
            {username: 'Graham', password: 'graham', is_admin: true},
        ],
    })
}

const createGame = async() => {
    console.log('creating game');

    await prisma.game.createMany({
        data: [
            {title: 'HALO 1', release_date: new Date('2001-01-01'), platform: 'XBOX', genre:'open world', description:'n/a', cover_image_url:'/halo1.jpg'},
            {title: 'HALO 2', release_date: new Date('2002-02-02'), platform: 'XBOX', genre:'open world', description:'n/a', cover_image_url: '/halo2.jpg'},
            {title: 'HALO 3', release_date: new Date('2003-03-03'), platform: 'XBOX', genre:'open world', description:'n/a', cover_image_url: '/halo3.jpg'},
            {title: 'SPIDERMAN 1', release_date: new Date('2004-04-04'), platform: 'PlayStation', genre:'open world', description:'n/a', cover_image_url: '/spiderman1.jpg'},
            {title: 'SPIDERMAN 2', release_date: new Date('2005-05-05'), platform: 'PlayStation', genre:'open world', description:'n/a', cover_image_url: '/spiderman2.jpg'},
            {title: 'SPIDERMAN 3', release_date: new Date('2006-06-06'), platform: 'PlayStation', genre:'open world', description:'n/a', cover_image_url: '/spiderman3.jpg'},
            {title: 'MARIO 1', release_date: new Date('2007-07-07'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/mario1.jpg'},
            {title: 'MARIO 2', release_date: new Date('2008-08-08'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/mario2.jpg'},
            {title: 'MARIO 3', release_date: new Date('2009-09-09'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/mario3.jpg'},
            {title: 'GTA 1', release_date: new Date('2010-10-10'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/GTA3.jpg'},
            {title: 'GTA 2', release_date: new Date('2011-11-11'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/GTA4.jpg'},
            {title: 'GTA 3', release_date: new Date('2012-12-12'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/GTA5.jpg'},
        ],
    })
}

const createReview = async() => {
    console.log('creating review');

    const somaanUserInfo = await prisma.user.findUnique({
        where: {username: 'Somaan'},
    });
    const joshuaUserInfo = await prisma.user.findUnique({
        where: {username: 'Joshua'},
    });
    const salvadorUserInfo = await prisma.user.findUnique({
        where: {username: 'Salvador'},
    });
    const grahamUserInfo = await prisma.user.findUnique({
        where: {username: 'Graham'},
    });
    
/* if usernames are wanted, need to change userid schema from int to string*/ 
    const Somaan = somaanUserInfo.id;
    const Joshua = joshuaUserInfo.id;
    const Salvador = salvadorUserInfo.id;
    const Graham = grahamUserInfo.id;

    await prisma.review.createMany({
        data: [
            {gameId: 1, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 1, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 1, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 1, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 2, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 2, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 2, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 2, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 3, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 3, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 3, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 3, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 4, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 4, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 4, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 4, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 5, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 5, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 5, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 5, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 6, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 6, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 6, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 6, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 7, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 7, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 7, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 7, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 8, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 8, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 8, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 8, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 9, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 9, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 9, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 9, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 10, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 10, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 10, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 10, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 11, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 11, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 11, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 11, userId: Graham, rating: 5, summary: 'great game'},
            {gameId: 12, userId: Somaan, rating: 1, summary: 'terrible game'},
            {gameId: 12, userId: Joshua, rating: 3, summary: 'okay game'},
            {gameId: 12, userId: Salvador, rating: 4, summary: 'good game'},
            {gameId: 12, userId: Graham, rating: 5, summary: 'great game'}
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