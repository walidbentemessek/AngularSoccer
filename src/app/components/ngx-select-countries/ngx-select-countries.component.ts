import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { INgxSelectOptions } from 'ngx-select-ex';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-ngx-select-countries',
  templateUrl: './ngx-select-countries.component.html',
  styleUrls: ['./ngx-select-countries.component.css']
})
export class NgxSelectCountriesComponent implements OnInit {
  public items: any;
  public data : any;
  options: string[];
  genders:any ;
  // formGroup: FormGroup;
  // filteredOptions :any;
  public ngxControl = new FormControl();
  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;
  

  constructor(private countriesService: CountriesService, private fb: FormBuilder) {

    // GET INFORMATION FROM WEB SERVICE
    this.countriesService.getAllCountries().subscribe(
      data => {
        console.log(data);
        
        this.data = data;
      })

    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
        // const idx = Math.floor(Math.random() * (this.items.length - 1));
        // this._ngxDefault = this.items[idx];
        // console.log('new default value = ', this._ngxDefault);
      }, 2000);
    }, 2000);
  }

  ngOnInit() {
    // this.getNames();
    // this.initForms();
    this.genders = [
      {id: 1, name: 'Male'},
      {id: 2, name: 'Female'},
      {id: 3, name: 'Other'}
  ];
  }


  /////////////////////////////////////////////////////////////////////////////////////////////


  public ngOnDestroy(): void {
    clearTimeout(this._ngxDefaultTimeout);
    clearInterval(this._ngxDefaultInterval);
  }

  public doNgxDefault(): any {
    return this._ngxDefault;
  }

  public inputTyped = (source: string, text: string) => console.log('NgxSelectCountriesComponent.inputTyped', source, text);

  public doFocus = () => console.log('NgxSelectCountriesComponent.doFocus');

  public doBlur = () => console.log('NgxSelectCountriesComponent.doBlur');

  public doOpen = () => console.log('NgxSelectCountriesComponent.doOpen');

  public doClose = () => console.log('NgxSelectCountriesComponent.doClose');

  public doSelect = (value: any) => console.log('NgxSelectCountriesComponent.doSelect', value);

  public doRemove = (value: any) => console.log('NgxSelectCountriesComponent.doRemove', value);

  public doSelectOptions = (options: INgxSelectOptions[]) => console.log('NgxSelectCountriesComponent.doSelectOptions', options);

  // selectEvent(item) {
  //   // do something with selected item
  // }

  // onChangeSearch(val: string) {
  //   // fetch remote data from here
  //   // And reassign the 'data' which is binded to 'data' property.
  // }
  
  // onFocused(e){
  //   // do something when input is focused
  // }

}



///////////////////////////////////////////////////////////////////////////


// initForms() {
//   this.formGroup = this.fb.group({
//     'country': ['']
//   })
//   this.formGroup.get('country').valueChanges.subscribe(response => {
//     // console.log('data is', response);
//     this.filterData(response);
//   })
// }


// filterData(enteredData) {
//   this.filteredOptions = this.options.filter(item => {
//     return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
//   })
// }


// getNames() {
//   this.countriesService.getData().subscribe(response => {
//     this.options = response;
//     this.filteredOptions = response;
//   })
// }