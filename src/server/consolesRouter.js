const express = require('express');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const consolesRouter = express.Router();

consolesRouter.get('/:platform', async (req, res) => {
    const { platform } = req.params;
  
    try {
      // Check if the requested platform exists
      const platformExists = await prisma.game.findMany({
        where: { platform },
      });
  
      if (!platformExists) {
        return res.status(404).json({ error: 'Console not found' });
      }
  
      // Retrieve games for the specified platform
      const platformGames = await prisma.game.findMany({
        where: { platform },
      });
  
      return res.json({ platform, games: platformGames });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports= consolesRouter;