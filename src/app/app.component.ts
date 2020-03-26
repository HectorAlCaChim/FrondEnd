import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';

  constructor(private authService: AuthService, private cdRef: ChangeDetectorRef) {
  }

  show = false;
  public get displayMenu() {
    if (this.authService.getToken() != null) {
      return true;
    }
    return (false);
  }

  ngAfterViewChecked() {
    let show = this.displayMenu;
    if (show != this.show) { // check if it change, tell CD update view
      this.show = show;
      this.cdRef.detectChanges();
    }
  }
  ngOnInit(): void {
    /*this.authService.authStatus.subscribe(authStatus => {
      const jwt = this.authService.getToken();
      setTimeout(() => {
        if (!(jwt == null || jwt === '')) {
          this.authService._displayLogin = true;
        }
      }, 0);
    });*/
  }
}
