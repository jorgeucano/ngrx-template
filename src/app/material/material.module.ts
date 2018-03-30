import { NgModule } from '@angular/core';

import {
	MatButtonModule
} from '@angular/material';

const MAT_MODULES = [
	MatButtonModule
];

@NgModule({
	imports: MAT_MODULES,
	exports: MAT_MODULES,
	declarations: []
})
export class MaterialModule {}
