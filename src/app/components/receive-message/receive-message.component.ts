import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SECRET_CODE_INFO, ANONYMOUS_ANSWER } from '../../utility/constants/data';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.scss']
})
export class ReceiveMessageComponent implements OnInit {
  receiveForm: FormGroup;
  tokenPassed: boolean;
  data: any;
  message: string;
  personInfo: string;
  challengeQuestion: string;
  fromPerson: string;
  toPerson: string;
  tokenInvalidMessage: string;
  noTokenPassedMessage: string;
  isError: boolean;
  isSubmitError: boolean;
  incorrectSecretCode: string;
  incorrectAnswer: string;
  isSubmitIncorrectSecretCode: boolean;
  secretCodeInfo = SECRET_CODE_INFO;

  constructor(private receiveService: MessageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let token = encodeURIComponent(this.route.snapshot.queryParams.token);
    if (token !== "undefined" && token.trim() !== "") {
      this.tokenPassed = true;
      this.fetchQuestionnaire(token);
      this.createForm();
    }
    else {
      this.tokenPassed = false;
      this.noTokenPassedMessage = "Where there is a vault 🔒 with secrets in it, there will be a key 🔑 as well. You seem to be missing out on that essential bit. 😒 You need to pass the appropriate token."
    }
  }

  createForm(): void {
    this.receiveForm = new FormGroup({
      'secretCode': new FormControl('', []),
      'challengeAnswer': new FormControl('', [])
    });
  }

  fetchQuestionnaire(token: string) {
    this.receiveService.fetchQuestionnaire(token).subscribe(
      (response: any) => {
        this.fromPerson = response.fromPerson;
        this.toPerson = response.toPerson;
        this.personInfo = "Hey " + response.toPerson + "! 👋 There's a lovely message for you from " + response.fromPerson + ". 📜 However, to make this more fun, you need to pass a simple quiz comprising of the questions below and fetch your reward. 👇"
        this.challengeQuestion = response.challengeQuestion;
        this.isError = false;
      },
      (error: any) => {
        this.isError = true;
        if (error.status === 401) {
          this.tokenInvalidMessage = "Hate to break it to you, but we this is a " + error.error.message + " 🙄";
        }
      }
    );
  }

  onSubmit() {
    let secretCode = this.receiveForm.controls['secretCode'].value;
    let challengeAnswer = this.receiveForm.controls['challengeAnswer'].value;
    let answer = (challengeAnswer.trim() === "" || challengeAnswer === null ? ANONYMOUS_ANSWER : challengeAnswer);
    this.receiveService.getMessage(secretCode, answer).subscribe(
      (response: any) => {
        this.message = response.msgBody;
        this.typewriterEffect(response.msgBody);
        this.isSubmitError = false;
      },
      (error: any) => {
        this.isSubmitError = true;
        if (error.status === 401) {
          this.isSubmitIncorrectSecretCode = true;
          this.incorrectSecretCode = error.error.message + " We were definitely not expecting this. 😮 Please try with the proper secret code again."
        }
        if (error.status === 417) {
          this.isSubmitIncorrectSecretCode = false;
          this.incorrectAnswer = error.error.message + " And we were expecting it to be a walk in the park for you. 😲";
        }
      }
    );
  }

  openOverlay() {
    document.getElementById('overlay').classList.add('open');
  }

  closeOverlay() {
    document.getElementById('overlay').classList.remove('open');
  }

  typewriterEffect(data: string) {
    var modifiedData = data.split("");
    let result = "";
    for (let i = 0; i < modifiedData.length; i++) {
      setTimeout(function () {
        result += modifiedData[i];
        document.getElementById('actual-message').innerText = result;
      }, 50 * i);
    }
  }

  navigateToSend() {
    this.router.navigateByUrl('/send');
  }
}
