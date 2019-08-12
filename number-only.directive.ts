import { Directive, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[number-only]'
})

export class NumberOnlyDirective {
    constructor() { }

    @HostListener('keypress', ['$event']) onkeydown(event) {
        return (event.charCode >= 48 && event.charCode <= 57)
    }
}