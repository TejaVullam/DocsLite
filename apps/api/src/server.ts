
import Fastify from 'fastify';

// Create Fastify application
const app = Fastify({
    logger: true
});

// Health check API
app.get('/health', async () => {

    return {
        status: 'success',
        message: 'DocsLite Backend is running!',
        service: 'api'
    };

});

// Start server
const startServer = async () => {

    try {

        await app.listen({
            port: 3000,
            host: '127.0.0.1'
        });

    } catch (error) {

        app.log.error(error);
        process.exit(1);

    }

};

startServer();
