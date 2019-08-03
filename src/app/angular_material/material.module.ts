import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatBadgeModule} from '@angular/material/badge';
import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
    imports:[
        MatToolbarModule,
        MatInputModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        MatBadgeModule,
        ScrollingModule
    ], 
    exports:[
        MatToolbarModule,
        MatInputModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        FlexLayoutModule,
        MatBadgeModule,
        ScrollingModule
    ]
})

export class MaterialModule {}