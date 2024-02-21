"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandler = void 0;
var prisma_error_mapper_1 = require("@/exceptions/prisma.error.mapper");
var common_1 = require("@nestjs/common");
var database_1 = require("database");
var GlobalErrorHandler = function () {
    var _classDecorators = [(0, common_1.Catch)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GlobalErrorHandler = _classThis = /** @class */ (function () {
        function GlobalErrorHandler_1() {
        }
        GlobalErrorHandler_1.prototype.catch = function (exception, host) {
            var ctx = host.switchToHttp();
            var request = ctx.getRequest();
            var response = ctx.getResponse();
            var _a = this.getExceptionDetails(exception), errorMessage = _a.errorMessage, statusCode = _a.statusCode, details = _a.details;
            var message = statusCode !== common_1.HttpStatus.INTERNAL_SERVER_ERROR
                ? errorMessage
                : 'Internal server error';
            var exceptionResponse = {
                path: (request === null || request === void 0 ? void 0 : request.url) || 'Unknown url.',
                time: new Date().toISOString(),
                message: message,
                statusCode: statusCode,
                details: details,
            };
            this.logException(exception, exceptionResponse);
            return response
                .status(exceptionResponse.statusCode)
                .json(exceptionResponse);
        };
        GlobalErrorHandler_1.prototype.getExceptionDetails = function (exception) {
            if (exception instanceof common_1.HttpException) {
                var response = exception.getResponse();
                var errorMessage = typeof response === 'string' ? response : exception.message;
                var details = typeof response === 'object' && response.message
                    ? response.message
                    : undefined;
                return {
                    statusCode: exception.getStatus(),
                    errorMessage: errorMessage,
                    details: details != errorMessage ? details : undefined,
                };
            }
            if (exception instanceof database_1.Prisma.PrismaClientKnownRequestError) {
                return (0, prisma_error_mapper_1.prismaExceptionFilter)(exception);
            }
            return {
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                errorMessage: 'Internal server error',
            };
        };
        GlobalErrorHandler_1.prototype.logException = function (exception, exceptionResponse) {
            if (exception instanceof common_1.HttpException ||
                exception instanceof database_1.Prisma.PrismaClientKnownRequestError ||
                exception instanceof database_1.Prisma.PrismaClientUnknownRequestError) {
                var message = exception.message, stack = exception.stack, name_1 = exception.name;
                return common_1.Logger.error(__assign(__assign(__assign({}, exceptionResponse), exception), { name: name_1, message: message, stack: stack }));
            }
            return common_1.Logger.error(__assign(__assign({}, exceptionResponse), { exception: exception }));
        };
        return GlobalErrorHandler_1;
    }());
    __setFunctionName(_classThis, "GlobalErrorHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GlobalErrorHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GlobalErrorHandler = _classThis;
}();
exports.GlobalErrorHandler = GlobalErrorHandler;
