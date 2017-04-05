import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SpeechToTextModule } from './speech-to-text/speech-to-text.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvConfigComponent } from './env-config/env-config.component';
import { TokenComponent } from './token/token.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvConfigComponent,
    TokenComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SpeechToTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
