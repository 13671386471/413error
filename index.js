import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
import path from 'node:path';


const app = express();
app.use(cors());
app.use(express.json({limit: '1kb'}));

app.post('/a', (req, res)=>{
  console.log('a',req);
  res.send();
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});