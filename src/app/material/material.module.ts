import { NgModule } from '@angular/core';

import {
	MatCardModule
} from '@angular/material';

const MAT_MODULES = [
	MatCardModule
];

@NgModule({
	imports: MAT_MODULES,
	exports: MAT_MODULES,
	declarations: []
})
export class MaterialModule {}
