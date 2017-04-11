import { Component } from '@angular/core';
import { NavController , NavParams , LoadingController} from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {MovieService} from '../../providers/movie-service';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
    private movie : Array<any>;
    public id:any;


  constructor(public navCtrl: NavController,public params: NavParams,public movieService:MovieService,private loadingCtrl: LoadingController,private http: Http ) {
              // Create the popup
                this.id = this.params.get('id');
          let loadingPopup = this.loadingCtrl.create({
          content: 'Loading data...'
          });

          // Show the popup
          loadingPopup.present();

          // Get the data
          this.http.get('http://www.omdbapi.com/?i=' + this.id)
          .map((res: Response) => res.json())
          .subscribe(
            data => {

              // I've added this timeout just to show the loading popup more time
              setTimeout(() => {
                this.movie = data;
                
                loadingPopup.dismiss();
              }, 2000);

              // Should be just this:
              // this.users= data;
              // loadingPopup.dismiss();
            },
            err => console.error(err)
          );
  }






}
