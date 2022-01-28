import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'app/services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  pageOfProfiles : any[] = []
  pageNumber : number = 1

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  getPageOfProfiles() {
    this.profileService.getPageOfProfiles(this.pageNumber).subscribe((profiles) => {
      console.log("this is profiles")
      console.log(profiles)
      this.pageOfProfiles = profiles;
    })
  }

}
