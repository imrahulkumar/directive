import {Directive, ElementRef, OnInit, Output, EventEmitter, Input} from "@angular/core";
import { country } from "src/app/Utilities/util";
declare var google: any;

@Directive({
  selector: "[google-place]"
})
export class GooglePlacesDirective implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  private element: HTMLInputElement;
  @Input() country;
  autocomplete:any;

  constructor(elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    this.element = elRef.nativeElement;

    console.log("country", elRef.nativeElement);
  }

  getFormattedAddress(place) {
    console.log("country", this.country);
    //@params: place - Google Autocomplete place object
    //@returns: location_obj - An address object in human readable format
    let location_obj = {};
    let lat = place.geometry.location.lat();
    let long = place.geometry.location.lng();
    location_obj["geo_location"] = {
      type: "Point",
      coordinates: [long, lat]
    };
    for (let i in place.address_components) {
      let item = place.address_components[i];

      location_obj["formatted_address"] = place.formatted_address;
      if (item["types"].indexOf("locality") > -1) {
        location_obj["locality"] = item["long_name"];
      } else if (item["types"].indexOf("administrative_area_level_1") > -1) {
        location_obj["admin_area_l1"] = item["long_name"];
      } else if (item["types"].indexOf("street_number") > -1) {
        location_obj["street_number"] = item["short_name"];
      } else if (item["types"].indexOf("route") > -1) {
        location_obj["route"] = item["long_name"];
      } else if (item["types"].indexOf("country") > -1) {
        location_obj["country"] = item["long_name"];
      } else if (item["types"].indexOf("postal_code") > -1) {
        location_obj["postal_code"] = item["short_name"];
      }
    }
    return location_obj;
  }

  ngOnInit() {
    this.autocomplete = new google.maps.places.Autocomplete(this.element, {
      componentRestrictions: {
        country: "US"
      },
      types: ["address"] // 'establishment' / 'address' / 'geocode'
    });
    //Event listener to monitor place changes in the input
    google.maps.event.addListener(this.autocomplete, "place_changed", () => {
      //Emit the new address object for the updated place
      this.onSelect.emit(this.getFormattedAddress(this.autocomplete.getPlace()));
    });
  }


  ngOnChanges(...args: any[]) {
   if(args[0] && args[0].country && args[0].country.previousValue){
    this.autocomplete.setComponentRestrictions({'country': this.country && this.country.sortname ? this.country.sortname : "US"});
   }  
}

}
