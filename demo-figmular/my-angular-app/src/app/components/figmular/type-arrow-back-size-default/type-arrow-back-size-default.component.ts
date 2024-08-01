import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-type-arrow-back-size-default",
  templateUrl: "./type-arrow-back-size-default.component.html",
  styleUrls: ["./type-arrow-back-size-default.component.scss"],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeArrowBackSizeDefaultComponent {
  @Input() type:
    | "Arrow Back"
    | "Arrow Down Filter"
    | "Arrow Downward"
    | "Arrow Forward"
    | "Arrow Up Filter"
    | "Arrow Upward"
    | "Bar Chart"
    | "Calendar"
    | "Certificate"
    | "Check"
    | "Chevron Left"
    | "Chevron Right"
    | "Close"
    | "Code"
    | "Collapse"
    | "Commit"
    | "Community"
    | "Confluence"
    | "CSV"
    | "Dashboard"
    | "Document"
    | "Download"
    | "Edit"
    | "Event"
    | "Expand"
    | "Filter"
    | "Fork"
    | "Gerrit"
    | "GitHub"
    | "Globe"
    | "Grid View"
    | "Health"
    | "Home"
    | "Image"
    | "Info"
    | "Inventory"
    | "Issue Opened"
    | "Jira"
    | "Kebab"
    | "Leaderboard"
    | "Line Chart"
    | "Link"
    | "Linux Foundation"
    | "List"
    | "Mail"
    | "Membership"
    | "Person"
    | "Plus"
    | "Pull Request"
    | "Radar"
    | "Report"
    | "Research"
    | "Search"
    | "Security"
    | "Segment"
    | "Settings"
    | "Star"
    | "Team"
    | "Velocity"
    | "Warning"
    | "Linked In" = "Arrow Back";
  @Input() size: "Default" | "Medium" = "Default";
}
