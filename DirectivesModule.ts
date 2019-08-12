import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterOnlyDirective } from './character-only.directive';
import { NumberOnlyDirective } from './number-only.directive';
import { AlphaNumericDirective } from './alpha-numeric.directive';
import { SafePipe } from './safe.pipe';
import { GooglePlacesDirective } from './address-picker/google-address-picker.directive';
import { TwoDigitDecimaNumberDirective } from './float.directive';

@NgModule({
    declarations: [
        CharacterOnlyDirective,
        NumberOnlyDirective,
        AlphaNumericDirective,
        GooglePlacesDirective,
        SafePipe,
        TwoDigitDecimaNumberDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CharacterOnlyDirective,
        NumberOnlyDirective,
        AlphaNumericDirective,
        GooglePlacesDirective,
        SafePipe,
        TwoDigitDecimaNumberDirective
    ]
})
export class DirectivesModule {
}
