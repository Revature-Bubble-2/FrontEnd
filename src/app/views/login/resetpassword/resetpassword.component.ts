import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
    activeRoute.queryParams
    .subscribe((params) => 
      {
        console.log(params)
  });
}
  ngOnInit(): void {
  }

}
