"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const PORT = process.env.PORT || 5000;
    const FRONTEND_URL = process.env.FRONTEND;
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        bodyParser: true,
    });
    app.enableCors({
        origin: [FRONTEND_URL, 'http://localhost:3000'],
        methods: 'GET, HEAD, PUT, POST, DELETE, OPTIONS, PATCH',
        credentials: true,
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authentication, Access-control-allow-credentials, Access-control-allow-headers, Access-control-allow-methods, Access-control-allow-origin, User-Agent, Referer, Accept-Encoding, Accept-Language, Access-Control-Request-Headers, Cache-Control, Pragma',
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map