import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { INgxSelectOptions } from 'ngx-select-ex';
import { CountriesService } from 'src/app/services/countries.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import { map, startWith } from 'rxjs/operators';
@Component({
  selector: 'app-ngx-select-countries',
  templateUrl: './ngx-select-countries.component.html',
  styleUrls: ['./ngx-select-countries.component.css']
})
export class NgxSelectCountriesComponent implements OnInit {
  public items: any;
  public data: any;
  options: string[];
  public subscriptionTypeControl = new FormControl();
  public formGroup = new FormGroup({
    subscriptionType: this.subscriptionTypeControl
  });

  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;


  constructor(private countriesService: CountriesService, private fb: FormBuilder) {

    // GET INFORMATION FROM WEB SERVICE
    this.countriesService.getAllCountries().subscribe(
      data => {
        console.log(data);

        this.items = data;
      })

    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
        // const idx = Math.floor(Math.random() * (this.items.length - 1));
        // this._ngxDefault = this.items[idx];
        // console.log('new default value = ', this._ngxDefault);
      }, 2000);
    }, 2000);
  }


  public ngOnDestroy(): void {
    clearTimeout(this._ngxDefaultTimeout);
    clearInterval(this._ngxDefaultInterval);
  }

  public doNgxDefault(): any {
    return this._ngxDefault;
  }

  public inputTyped = (text: string) => console.log('NgxSelectCountriesComponent.inputTyped', text);

  public doFocus = () => console.log('NgxSelectCountriesComponent.doFocus');

  public doBlur = () => console.log('NgxSelectCountriesComponent.doBlur');

  public doOpen = () => console.log('NgxSelectCountriesComponent.doOpen');

  public doClose = () => console.log('NgxSelectCountriesComponent.doClose');

  public doSelect = (value: any) => console.log('NgxSelectCountriesComponent.doSelect', value);

  public doRemove = (value: any) => console.log('NgxSelectCountriesComponent.doRemove', value);

  public doSelectOptions = (options: INgxSelectOptions[]) => console.log('NgxSelectCountriesComponent.doSelectOptions', options);

  ngOnInit() { }

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