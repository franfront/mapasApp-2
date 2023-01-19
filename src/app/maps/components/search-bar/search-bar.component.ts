import { Component} from '@angular/core';
import { PlacesService } from '../../service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  constructor(private places: PlacesService) { }

 
  onQuery(query: string = ""){
   if (this.debounceTimer){
      clearTimeout(this.debounceTimer);
   }

   this.debounceTimer = setTimeout(() =>{
      this.places.getplacesQuery(query);
   }, 1000)
  }

}
