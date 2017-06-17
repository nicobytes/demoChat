import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  newText: string = '';
  messages: FirebaseListObservable<any>;
  /*messages: any[] = [
    {
      text: 'Hola',
      user: {
        name: 'Nicolas',
        picture: 'http://www.nicobytes.com/images/photo.jpg'
      }
    },
    {
      text: 'Hola a todos',
      user: {
        name: 'Zulema',
        picture: 'http://www.nicobytes.com/images/photo.jpg'
      }
    },
    {
      text: 'Hola a todos',
      user: {
        name: 'Valentina',
        picture: 'http://www.nicobytes.com/images/photo.jpg'
      }
    }
  ];*/

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    this.messages = this.database.list('/chat');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage(){
    let newMessage = {
      text: this.newText,
      user: {
        name: 'Nicolas',
        picture: 'http://www.nicobytes.com/images/photo.jpg'
      }
    }
    this.messages.push(newMessage);
    this.newText = '';
  }

}
