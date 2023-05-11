"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const main_1 = require("./models/main");
const swagger_1 = require("@nestjs/swagger");
const app_config_1 = require("./config/app-config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
    app.enableCors(main_1.corsOptions);
    const APP_PORT = process.env.PORT || app_config_1.DEFAULT_PORT;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Docs test-grid REST-API')
        .setVersion('1.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/1.0/docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(APP_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map