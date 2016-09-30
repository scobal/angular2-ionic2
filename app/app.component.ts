import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1>'
})
export class AppComponent {

    constructor(private alertCtrl: AlertController) {}

}
