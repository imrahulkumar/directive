import { Directive, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[character-only]'
})

export class CharacterOnlyDirective {
    element: HTMLInputElement
    constructor(elRef: ElementRef) {
        this.element = elRef.nativeElement;
    }

    @HostListener('keypress', ['$event']) onkeydown(event) {
        return (event.charCode >= 65 && event.charCode < 91) || (event.charCode >= 97 && event.charCode < 123) || event.charCode == 32
    }
}