import { Directive, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[alpha-numeric]'
})

export class AlphaNumericDirective {
    constructor() { }

    @HostListener('keypress', ['$event']) onkeydown(event) {
        return (event.charCode >= 65 && event.charCode < 91) || (event.charCode >= 97 && event.charCode < 123) || (event.charCode >= 48 && event.charCode <= 57)
    }

}