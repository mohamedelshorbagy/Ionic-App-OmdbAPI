import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from '../../providers/movie-service';
import { DetailsPage } from '../details/details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  public movies:any;


  constructor(public navCtrl: NavController,private movieService: MovieService) {
      this.load();
  }


load() {

    this.movieService.loadMovie()
      .subscribe(res => {
        this.movies = res.Search;

  });



}




viewMovie(id) {
    //localStorage.setItem('idMDB' , id);
    this.navCtrl.push(DetailsPage, {
        id:id

    });

}






}
