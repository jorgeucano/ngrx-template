# NgrxTemplate

## With this template you will have:

### NGRX
- Store
- store-devtools
- router-store
- router
- effects
- Schematics

### Angular Material
- Module and configurations

### Next steps:
- add demo with a simple login
- add branch with angularfire

### Material

add modules of angular material to use, it is as simple as going to <code>/src/material/material.module.ts</code> and add the import that you need.

for example if you need the input module:
<pre>
import { NgModule } from '@angular/core';

import {
	MatCardModule,
  MatInputModule <-- add here
} from '@angular/material';

const MAT_MODULES = [
	MatCardModule,
  MatInputModule <-- add here
];

@NgModule({
	imports: MAT_MODULES,
	exports: MAT_MODULES,
	declarations: []
})
export class MaterialModule {}

</pre>

### You can use the CLI for add: 
- Action
- Container
- Effect
- Entity
- Feature
- Reducer
- Store

<pre>
  ng generate store State --root --module app.module.ts --collection @ngrx/schematics
</pre>
more information [here](https://github.com/ngrx/platform/blob/master/docs/schematics/README.md)
