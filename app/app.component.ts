import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1>'
})
export class AppComponent {

    constructor(private alertCtrl: AlertController) {
        let confirm = alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
            buttons: [
                {
                    text: 'Agree',
                    handler: () => {
                        confirm.dismiss();
                        return false;
                    }
                }, {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

}
