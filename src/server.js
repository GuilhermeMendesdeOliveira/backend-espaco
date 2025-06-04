import app from './app.js';

const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
    console.log();
    console.log(`✅ Servidor rodando na porta ${PORT}`);
    console.log(`🚀 Acesse a aplicação em http://localhost:${PORT}`);
});

