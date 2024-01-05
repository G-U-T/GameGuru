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
            {title: 'Zathura', release_date: new Date('2005-10-25'), platform: 'XBOX', genre:'Action-adventure', description:'The game focuses on 2 brothers who are trying to beat a game called Zathura, a game that twists reality.', cover_image_url: '/zathura.jpg'},
            {title: 'Wallace & Gromit in Project Zoo', release_date: new Date('2003-10-14'), platform: 'XBOX', genre: 'Platformer', description: "As Gromit, the player must use Wallace's bizarre inventions - including the Porridge Gun, Turnip Launcher, Springy Boots, and Gyrocopter - to battle Feathers McGraw's robotic minions and rescue the baby animals in typical platform game style.", cover_image_url: '/WG_Project_Zoo.jpg'},
            {title: `Tony Hawk's Pro Skater 2x`, release_date: new Date('2001-11-15'), platform: 'XBOX', genre: 'Sports', description: "Tony Hawk's Pro Skater 2x is a skateboarding video game, with an arcade-style emphasis with regard to realism.", cover_image_url: '/Tony_Hawk_Pro_Skater_2x.jpg'},
            {title: 'Family Guy Video Game!', release_date: new Date('2006-10-17'), platform: 'XBOX', genre: 'Action-adventure', description: `Stewie has built a mind control ray, and plans to use it in conjunction with Peter's satellite dish. However, his plans are interrupted by his half-brother Bertram, who claims to want his satellite dish. After making his way to the roof, Stewie decides that he would rather fail at world domination than let the satellite fall into his half-brother's hands, and self-destructs the satellite dish. However, Bertram reveals that he has come to trick him into destroying his own satellite, and he has begun a plan for world domination as well. He then leaves in his helicopter, and blasts Stewie off the roof. To discover Bertram's plans, Stewie infiltrates his lair in Peter's testicles. There, Stewie finds the location of Bertram's new lair and promptly lays waste to the facility. Stewie finds Bertram at the top of a missile silo, planning to launch the rocket into orbit so he can project his mind control beam around the world. To add insult to injury, Stewie's teddy bear, Rupert, has been placed inside the rocket. Stewie destroys the rocket, rescues Rupert, and has a final battle with Bertram at the playground. Bertram uses a device to grow to tremendous size, but is defeated anyway. Before Stewie can finish him off, he calls for his "mommy" to escape, leaving Stewie by flipping him off.`, cover_image_url: "/Family_Guy_Video_Game!.jpg"},
            {title: `Psychonauts`, release_date: new Date('2005-04-19'), platform: `XBOX`, genre: `Platformer`, description: `Psychonauts follows Razputin (Raz), a young boy gifted with psychic abilities, who runs away from a circus to try to sneak into a summer camp for those with similar powers to become a "Psychonaut", a spy with psychic abilities. He finds that there is a sinister plot occurring at the camp that only he can stop.`, cover_image_url: `/Psychonauts.png`},
            {title: `Shrek SuperSlam`, release_date: new Date('2005-11-05'), platform: `XBOX`, genre: `Fighting`, description: `Shrek SuperSlam is a 3D-environment multiplayer fighting game in which two to four fighter characters battle in a variety of arena stages attempting to beat each other up and charge a special move called a "Slam" attack. When a "Slam" is successfully used on other fighters, the player gains points while continually (and creatively) destroying the arena in the process. Whoever gains the most "Slam" points will win when the round is over. `, cover_image_url: `/shrek_superslam.jpg`},
            {title: 'SPIDERMAN 1', release_date: new Date('2004-04-04'), platform: 'PlayStation', genre:'open world', description:'n/a', cover_image_url: '/spiderman1.jpg'},
            {title: 'SPIDERMAN 2', release_date: new Date('2005-05-05'), platform: 'PlayStation', genre:'open world', description:'n/a', cover_image_url: '/spiderman2.jpg'},
            {title: 'SPIDERMAN 3', release_date: new Date('2006-06-06'), platform: 'PlayStation', genre:'open world', description:'n/a', cover_image_url: '/spiderman3.jpg'},
            {title: 'MARIO 1', release_date: new Date('2007-07-07'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/mario1.jpg'},
            {title: 'MARIO 2', release_date: new Date('2008-08-08'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/mario2.jpg'},
            {title: 'MARIO 3', release_date: new Date('2009-09-09'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/mario3.jpg'},
            {title: 'PAPER MARIO ', release_date: new Date('2011-08-11'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/PAPERMARIO.jpg'},
            {title: 'NEW YOSHI ISLAND ', release_date: new Date('2008-08-08'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/YOSHI.jpg'},
            {title: 'SUPER MARIO PARTY', release_date: new Date('2018-12-15'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/MARIOPARTY.jpg'},
            {title: 'METROID PRIME', release_date: new Date('2002-11-18'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/MET.jpg'},
            {title: 'GOLDEN EYE 007', release_date: new Date('1997-01-27'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/007.jpg'},
            {title: 'SMASH BROS.', release_date: new Date('2009-09-09'), platform: 'Nintendo', genre:'fighting', description:'n/a', cover_image_url: '/SMASH64.jpg'},
            {title: 'POKEMON SNAP', release_date: new Date('2007-07-07'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/SNAP.jpg'},
            {title: 'ZACK AND WIKI', release_date: new Date('2008-08-08'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/WIKI.jpg'},
            {title: 'WII SPORTS', release_date: new Date('2009-09-09'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/SPORTS.jpg'},
            {title: 'GUITAR HERO III', release_date: new Date('2007-07-07'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/HERO3.jpg'},
            {title: 'SUPER GHOST N GOULS', release_date: new Date('2008-08-08'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/GHOST.jpg'},
            {title: 'RED STEEL', release_date: new Date('2009-09-09'), platform: 'Nintendo', genre:'open world', description:'n/a', cover_image_url: '/STEEL.jpg'},
            {title: 'Grand Theft Auto 3', release_date: new Date('2010-10-10'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/GTA3.jpg'},
            {title: 'Grand Theft Auto 4', release_date: new Date('2011-11-11'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/GTA4.jpg'},
            {title: 'Grand Theft Auto 5', release_date: new Date('2012-12-12'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/GTA5.jpg'},
            {title: 'Red Dead Redemption 2 ', release_date: new Date('2018-10-26'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/reddead.jpg'},
            {title: 'The Witcher 3 : Wild Hunt ', release_date: new Date('2012-12-12'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/witcher3.jpg'},
            {title: 'XCOM 2', release_date: new Date('2012-12-12'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/xcom2.jpg'},
            {title: 'Baldurs Gate 3', release_date: new Date('2012-12-12'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/baldurs.jpg'},
            {title: 'Elden Ring', release_date: new Date('2012-12-12'), platform: 'PC', genre:'open world', description:'n/a', cover_image_url: '/eldenring.jpg'},
        
        
        
        
        
        
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