import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceCommonService } from "../service-common.service";

@Component({
  selector: "app-right",
  templateUrl: "./right.component.html",
  styleUrls: ["./right.component.css"],
})
export class RightComponent implements OnInit {
  clicked$: Observable<string>;

  constructor(private service: ServiceCommonService) {}

  ngOnInit() {
    this.clicked$ = this.service.clickCapture("");
  }

  onRightClick(value) {
    console.log("right clicked");
    this.clicked$ = this.service.clickCapture(value);
  }
}
