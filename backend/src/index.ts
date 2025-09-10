import express from 'express';
import productsRouter from './routes/products';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando correctamente' });
});

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en puerto ${PORT}`);
});
