import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private url:string="http://localhost:3000/rating"
  constructor(private http:HttpClient) { }

  addrating(rating:any){
    return this.http.post(`${this.url}/addrating`,rating).toPromise();
   }
   getRating(codvet:number){
      return this.http.get(`${this.url}/listarRating/${codvet}`).toPromise();
   }
   ratingExist(ratingcodvet:any){
      // console.log(ratingcodvet);
      return this.http.post(`${this.url}/ratingexist`,ratingcodvet).toPromise();
   }
   listarRatingById(ratinguser:any){
      return this.http.post(`${this.url}/listaratingbyid`,ratinguser).toPromise();
   }
   modrating(rating:any){
         return this.http.put(`${this.url}/modrating`,rating).toPromise();
   }
}
