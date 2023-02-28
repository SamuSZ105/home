import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:'https://login.microsoftonline.com/ID/v2.0',
        authWellknownEndpointUrl: 'https://login.microsoftonline.com/ID/v2.0',
        postLogoutRedirectUri: window.location.origin + '/login',
        redirectUrl: window.location.origin + '/',
        clientId: 'CLIENTID',
        scope: 'openid profile offline_access', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        triggerAuthorizationResultEvent: true,
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: true,
        startCheckSession: false,
        disableRefreshIdTokenAuthTimeValidation: true,
        ignoreNonceAfterRefresh: true,
        renewTimeBeforeTokenExpiresInSeconds: 240,
        tokenRefreshInSeconds: 60,
        silentRenew: true,
        useRefreshToken: true,
        autoUserInfo: false,
        //logLevel: LogLevel.Debug,
        customParamsAuthRequest: {
          prompt: 'select_account', // login, consent
        },
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
