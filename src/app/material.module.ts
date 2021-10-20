import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  entryComponents: [MatDialogModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule, MatPaginatorModule]
})

export class MaterialModule {}