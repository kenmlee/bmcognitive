import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SpeechToTextModule } from './speech-to-text/speech-to-text.module';

import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvConfigComponent } from './env-config/env-config.component';
import { TokenComponent } from './token/token.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SystemCheckComponent } from './system-check/system-check.component';
import { ReferenceComponent } from './reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvConfigComponent,
    TokenComponent,
    PageNotFoundComponent,
    SystemCheckComponent,
    ReferenceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    SpeechToTextModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
