"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AuthExceptionFilter = class AuthExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        if (exception instanceof common_1.UnauthorizedException ||
            exception instanceof common_1.ForbiddenException) {
            request.flash('loginError', 'Please try again!');
            response.redirect('/');
        }
        else {
            response.redirect('/error');
        }
    }
};
AuthExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException)
], AuthExceptionFilter);
exports.AuthExceptionFilter = AuthExceptionFilter;
//# sourceMappingURL=auth-exceptions.filter.js.map