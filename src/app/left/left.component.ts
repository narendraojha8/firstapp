import { Component, OnInit } from "@angular/core";
import { ServiceCommonService } from "../service-common.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-left",
  templateUrl: "./left.component.html",
  styleUrls: ["./left.component.css"],
})
export class LeftComponent implements OnInit {
  clicked$: Observable<string>;
  constructor(private service: ServiceCommonService) {}

  ngOnInit() {
    this.clicked$ = this.service.clickCapture("");
  }
  onLeftClick(value: string) {
    console.log("left clicked", value);
    this.clicked$ = this.service.clickCapture(value);
  }
}
