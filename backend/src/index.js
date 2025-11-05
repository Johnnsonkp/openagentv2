import 'dotenv/config';

import apiRoutes from './routes/api.js';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});

export { app };