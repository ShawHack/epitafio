import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthProvider } from 'src/app/core/services/auth.type';
import { OverlayService } from 'src/app/core/services/overlay.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;
  authProviders = AuthProvider;

  configs = {
    isSignIn: true,
    action: 'login',
    actionChange: 'Criar conta'
  };
   private nameControl = new FormControl('', [ Validators.required, Validators.minLength(3)]);


  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private overlayService: OverlayService,
              private navCrtl: NavController,
              private route: ActivatedRoute  ) { }

  ngOnInit(): void  {
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(6)]]
    });
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;

  }
  get password(): FormControl {
    return this.authForm.get('password') as FormControl;

  }

  get name(): FormControl {
    return this.authForm.get('name') as FormControl;

  }


  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn} = this.configs;
    this.configs.action = isSignIn ? 'Login' : 'Criar conta';
    this.configs.actionChange = isSignIn ? 'Criar conta' : 'ja possuo uma conta';
    !isSignIn
    ? this.authForm.addControl('name', this.nameControl)
    : this.authForm.removeControl('name');
  }


 async  onSubmit(provider: AuthProvider): Promise<void> {
     const loading  = await this.overlayService.loading();
     try {
      const credendials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider
      });
      this.navCrtl.navigateForward(this.route.snapshot.queryParamMap.get('redirect') || '/sepultados');


    } catch (e) {
      console.log('Auth error ', e );
      await this.overlayService.toast({
        message: e.message
      });
      } finally {
        loading.dismiss();
      }
    }


  }
