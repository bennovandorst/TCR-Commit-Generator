import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const app = express();
const port = 5555;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const commitMessagesPath = path.join(__dirname, 'commitMessages.json');
const commitMessages = JSON.parse(fs.readFileSync(commitMessagesPath, 'utf8')).messages;

app.get('/index.txt', (req, res) => {
  const randomMessage = commitMessages[Math.floor(Math.random() * commitMessages.length)];
  res.type('text/plain').send(randomMessage);
});

app.get('/commitMessages.json', (req, res) => res.sendFile(commitMessagesPath));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(port, () => console.log(`Server is running on port ${port}`));
