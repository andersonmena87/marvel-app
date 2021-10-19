import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  entryComponents: [MatDialogModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule]
})

export class MaterialModule {}