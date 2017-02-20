import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  search(searchEvent){
  	let term = searchEvent.target.value

	if (term.trim() === '' || term.trim().length < 3){
		console.log(term + "Less than search")
	}
	else{
		console.log(term + "More than search");
	}
  }

}
