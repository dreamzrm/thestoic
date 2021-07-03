import { Component } from '@angular/core';
import { Sayings } from './sayings.service';

@Component ({
    selector : 'my-app',
    templateUrl: './app.component.html' 
})

export class AppComponent { 
    quote : Quote[];
    constructor (private sayings: Sayings)
{
    this.quote = this.sayings.getquotes();
}}
