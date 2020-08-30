
// tslint:disable-next-line:import-blacklist
import { Observable} from 'rxjs';
import { repos} from '../repos';
import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { Github } from '../Github';
import {environment} from '../../environments/environment';
import {ProfileRequest} from '../profile-request';
import { user } from '../user';
// import { SweetAlert } from '../sweet-alert';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ Github, ProfileRequest,]
})

export class DashboardComponent implements OnInit {
  
 
  userName = 'Teddie Ted';
  repos: repos[];
  users: IUser[];

  loading = false;
  errorMessage;
  windowScrolled: boolean;
  // tslint:disable-next-line:max-line-length
  constructor( private githubService: Github, private profileRequest: ProfileRequest,  @Inject(DOCUMENT) private document: Document ) {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
          })();
      }


  //   options = {
  //   title: 'Are you sure?',
  //   text: 'You won\'t be able to revert this!',
  //   type: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // };




public getRepos(event: any) {
  this.loading = true;
  // tslint:disable-next-line:prefer-const
  let promise = new Promise((resolve , reject) => {
   this.githubService.getRepos (this.userName).toPromise().then(response => {
     this.repos = response; this.loading = false; // this will push all data to array [repo]
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}
public getUsers(event: any) {
  this.loading = true;
  // tslint:disable-next-line:prefer-const
  let promise = new Promise((resolve , reject) => {
   this.profileRequest.getUsers(this.userName).toPromise().then(response => {
     this.users = response; this.loading = false; // this will push all data to array [repo]
      resolve();
    },
    error => {
      this.errorMessage = 'An error was encountered';
      this.loading = false;
    }
  );
  });
  return promise;
}


  ngOnInit() {
  }

}
interface IUser extends user{};