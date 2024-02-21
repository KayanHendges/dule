"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var BAD_REQUEST = common_1.HttpStatus.BAD_REQUEST, NOT_FOUND = common_1.HttpStatus.NOT_FOUND, CONFLICT = common_1.HttpStatus.CONFLICT;
var prismaCodeMapper = {
    2000: { statusCode: BAD_REQUEST },
    2001: { statusCode: NOT_FOUND },
    2002: { statusCode: CONFLICT },
    2003: { statusCode: BAD_REQUEST },
    2005: { statusCode: BAD_REQUEST },
    2006: { statusCode: BAD_REQUEST },
    2011: { statusCode: BAD_REQUEST },
    2012: { statusCode: BAD_REQUEST },
    2013: { statusCode: BAD_REQUEST },
    2014: { statusCode: BAD_REQUEST },
    2020: { statusCode: BAD_REQUEST },
    2023: { statusCode: BAD_REQUEST },
    2025: { statusCode: NOT_FOUND },
    2033: { statusCode: BAD_REQUEST },
};
var httpMessageMapper = (_a = {},
    _a[BAD_REQUEST] = 'Bad Request',
    _a[NOT_FOUND] = 'Not Found',
    _a[CONFLICT] = 'Conflict',
    _a);
var prismaExceptionFilter = function (exception) {
    var code = exception.code;
    var extractedCode = (code.match(/\d+/g) || [])[0];
    var numberCode = Number(extractedCode);
    var prismaCode = prismaCodeMapper[numberCode];
    if (!prismaCode)
        return {
            statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
            errorMessage: 'Internal Erro',
        };
    var statusCode = prismaCode.statusCode, customMessage = prismaCode.customMessage;
    return {
        statusCode: statusCode,
        errorMessage: customMessage || httpMessageMapper[statusCode] || 'Internal Error',
    };
};
exports.prismaExceptionFilter = prismaExceptionFilter;
