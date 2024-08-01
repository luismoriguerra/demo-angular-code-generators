import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BreadCrumbsComponent } from "../bread-crumbs/bread-crumbs.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { DrillDownButtonComponent } from "../drill-down-button/drill-down-button.component";
import { ArrowRightDefaultComponent } from "../arrow-right-default/arrow-right-default.component";
import { ButtonComponent } from "../button/button.component";
import { KeyDotComponent } from "../key-dot/key-dot.component";
@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"],
  standalone: true,
  imports: [
    BreadCrumbsComponent,
    SectionTitleComponent,
    DrillDownButtonComponent,
    ArrowRightDefaultComponent,
    ButtonComponent,
    KeyDotComponent,
    FormsModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyComponent {}
