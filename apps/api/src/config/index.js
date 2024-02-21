"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.EnvironmentConfig = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var Environment;
(function (Environment) {
    Environment["development"] = "development";
    Environment["production"] = "production";
})(Environment || (Environment = {}));
var transformEnvNumber = function (_a) {
    var value = _a.value;
    return Number(value) || value;
};
var EnvironmentConfig = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _ENVIRONMENT_decorators;
    var _ENVIRONMENT_initializers = [];
    var _SERVER_PORT_decorators;
    var _SERVER_PORT_initializers = [];
    var _DATABASE_URL_decorators;
    var _DATABASE_URL_initializers = [];
    var _JWT_SECRET_decorators;
    var _JWT_SECRET_initializers = [];
    var _JWT_EXPIRES_IN_decorators;
    var _JWT_EXPIRES_IN_initializers = [];
    var _SMTP_HOST_decorators;
    var _SMTP_HOST_initializers = [];
    var _SMTP_EMAIL_decorators;
    var _SMTP_EMAIL_initializers = [];
    var _SMTP_PASSWORD_decorators;
    var _SMTP_PASSWORD_initializers = [];
    var _SMTP_PORT_decorators;
    var _SMTP_PORT_initializers = [];
    return _a = /** @class */ (function () {
            function EnvironmentConfig() {
                this.ENVIRONMENT = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _ENVIRONMENT_initializers, 'development'));
                this.SERVER_PORT = __runInitializers(this, _SERVER_PORT_initializers, void 0);
                this.DATABASE_URL = __runInitializers(this, _DATABASE_URL_initializers, void 0);
                this.JWT_SECRET = __runInitializers(this, _JWT_SECRET_initializers, void 0);
                this.JWT_EXPIRES_IN = __runInitializers(this, _JWT_EXPIRES_IN_initializers, void 0);
                this.SMTP_HOST = __runInitializers(this, _SMTP_HOST_initializers, void 0);
                this.SMTP_EMAIL = __runInitializers(this, _SMTP_EMAIL_initializers, void 0);
                this.SMTP_PASSWORD = __runInitializers(this, _SMTP_PASSWORD_initializers, void 0);
                this.SMTP_PORT = __runInitializers(this, _SMTP_PORT_initializers, void 0);
            }
            return EnvironmentConfig;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _ENVIRONMENT_decorators = [(0, class_validator_1.IsEnum)(Environment), (0, class_transformer_1.Expose)()];
            _SERVER_PORT_decorators = [(0, class_transformer_1.Transform)(transformEnvNumber), (0, class_validator_1.IsPositive)(), (0, class_validator_1.IsOptional)(), (0, class_transformer_1.Expose)()];
            _DATABASE_URL_decorators = [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)()];
            _JWT_SECRET_decorators = [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)()];
            _JWT_EXPIRES_IN_decorators = [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)()];
            _SMTP_HOST_decorators = [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)()];
            _SMTP_EMAIL_decorators = [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)()];
            _SMTP_PASSWORD_decorators = [(0, class_validator_1.IsString)(), (0, class_transformer_1.Expose)()];
            _SMTP_PORT_decorators = [(0, class_transformer_1.Transform)(transformEnvNumber), (0, class_validator_1.IsPositive)(), (0, class_validator_1.IsNumber)(), (0, class_transformer_1.Expose)()];
            __esDecorate(null, null, _ENVIRONMENT_decorators, { kind: "field", name: "ENVIRONMENT", static: false, private: false, access: { has: function (obj) { return "ENVIRONMENT" in obj; }, get: function (obj) { return obj.ENVIRONMENT; }, set: function (obj, value) { obj.ENVIRONMENT = value; } }, metadata: _metadata }, _ENVIRONMENT_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _SERVER_PORT_decorators, { kind: "field", name: "SERVER_PORT", static: false, private: false, access: { has: function (obj) { return "SERVER_PORT" in obj; }, get: function (obj) { return obj.SERVER_PORT; }, set: function (obj, value) { obj.SERVER_PORT = value; } }, metadata: _metadata }, _SERVER_PORT_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _DATABASE_URL_decorators, { kind: "field", name: "DATABASE_URL", static: false, private: false, access: { has: function (obj) { return "DATABASE_URL" in obj; }, get: function (obj) { return obj.DATABASE_URL; }, set: function (obj, value) { obj.DATABASE_URL = value; } }, metadata: _metadata }, _DATABASE_URL_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _JWT_SECRET_decorators, { kind: "field", name: "JWT_SECRET", static: false, private: false, access: { has: function (obj) { return "JWT_SECRET" in obj; }, get: function (obj) { return obj.JWT_SECRET; }, set: function (obj, value) { obj.JWT_SECRET = value; } }, metadata: _metadata }, _JWT_SECRET_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _JWT_EXPIRES_IN_decorators, { kind: "field", name: "JWT_EXPIRES_IN", static: false, private: false, access: { has: function (obj) { return "JWT_EXPIRES_IN" in obj; }, get: function (obj) { return obj.JWT_EXPIRES_IN; }, set: function (obj, value) { obj.JWT_EXPIRES_IN = value; } }, metadata: _metadata }, _JWT_EXPIRES_IN_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _SMTP_HOST_decorators, { kind: "field", name: "SMTP_HOST", static: false, private: false, access: { has: function (obj) { return "SMTP_HOST" in obj; }, get: function (obj) { return obj.SMTP_HOST; }, set: function (obj, value) { obj.SMTP_HOST = value; } }, metadata: _metadata }, _SMTP_HOST_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _SMTP_EMAIL_decorators, { kind: "field", name: "SMTP_EMAIL", static: false, private: false, access: { has: function (obj) { return "SMTP_EMAIL" in obj; }, get: function (obj) { return obj.SMTP_EMAIL; }, set: function (obj, value) { obj.SMTP_EMAIL = value; } }, metadata: _metadata }, _SMTP_EMAIL_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _SMTP_PASSWORD_decorators, { kind: "field", name: "SMTP_PASSWORD", static: false, private: false, access: { has: function (obj) { return "SMTP_PASSWORD" in obj; }, get: function (obj) { return obj.SMTP_PASSWORD; }, set: function (obj, value) { obj.SMTP_PASSWORD = value; } }, metadata: _metadata }, _SMTP_PASSWORD_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _SMTP_PORT_decorators, { kind: "field", name: "SMTP_PORT", static: false, private: false, access: { has: function (obj) { return "SMTP_PORT" in obj; }, get: function (obj) { return obj.SMTP_PORT; }, set: function (obj, value) { obj.SMTP_PORT = value; } }, metadata: _metadata }, _SMTP_PORT_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.EnvironmentConfig = EnvironmentConfig;
var validateEnvironment = function () {
    var environments = {
        ENVIRONMENT: process.env.ENVIRONMENT,
        SERVER_PORT: Number(process.env.SERVER_PORT),
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET,
        JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_EMAIL: process.env.SMTP_EMAIL,
        SMTP_PASSWORD: process.env.SMTP_PASSWORD,
        SMTP_PORT: Number(process.env.SMTP_PORT),
    };
    var configInstance = (0, class_transformer_1.plainToInstance)(EnvironmentConfig, environments, {
        enableImplicitConversion: true,
        excludeExtraneousValues: true,
    });
    var errors = (0, class_validator_1.validateSync)(configInstance);
    if (errors.length)
        throw new Error(JSON.stringify(errors, undefined, 2));
    return configInstance;
};
exports.config = validateEnvironment();
