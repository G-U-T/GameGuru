const express = require('express');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const consolesRouter = express.Router();

consolesRouter.get('/:platform', async (req, res) => {
    const { platform } = req.params;
  
    try {
      // Check if the requested platform exists
      const platformExists = await prisma.game.findMany({
        where: {
          platform: {
            equals: platform,
            mode: 'insensitive',
          }
        },
      });

      console.log(platformExists)
  
      /* Needs to !platformExists will still be true if it's an empty array.
      So there's an additional check that it's not empty. */
      if (!platformExists || platformExists.length === 0) {
        return res.status(404).json({ error: 'Console not found' });
      }
  
      // Retrieve games for the specified platform

      const platformGames = await prisma.game.findMany({
        where: {
          platform: {
            equals: platform,
            mode: 'insensitive',
          }
        },
      });
  
      return res.json({ platform, games: platformGames });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  consolesRouter.get('/:platform/:letter', async (req, res) => {
    const { platform, letter } = req.params;
  
    try {
      // Retrieve games for the selected platform by letter 
      const filteredGames = await prisma.game.findMany({
        where: {
          platform: {
            equals: platform,
          mode: 'insensitive',
          },
          title: {
            startsWith: letter.toUpperCase(),
          },
        },
      });
  
      return res.json({ platform, letter, games: filteredGames });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports= consolesRouter;