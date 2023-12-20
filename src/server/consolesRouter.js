const express = require('express');

const consolesRouter = express.Router();

consolesRouter.get('/:consoleName', (req, res) => {
    const { consoleName } = req.params;

    // Check if the requested console exists
  if (!gamesByConsole[consoleName]) { // use prisma here 
    return res.status(404).json({ error: "Console not found" });
  }

  // Retrieve games for the specified console
  const consoleGames = gamesByConsole[consoleName]; // use prisma here 

  return res.json({ console: consoleName, games: consoleGames });
});

module.exports= consolesRouter;