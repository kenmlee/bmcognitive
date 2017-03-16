import {Component} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: 'my-app',
    template: `<h1>Hello Bluemix Developer</h1>`
})
export class HelloDev {

}

@NgModule({
    declarations: [HelloDev],
    imports: [BrowserModule],
    bootstrap: [HelloDev]
})
export class AppModule{
    
}

platformBrowserDynamic().bootstrapModule(AppModule);