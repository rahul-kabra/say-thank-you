import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageRequest } from '../../models/MessageRequest';
import { MessageService } from '../../services/message.service';
import { FROM_PERSON_NO_DATA, FROM_PERSON_DATA, TO_PERSON_NO_DATA, TO_PERSON_DATA, CHALLENGE_QUESTION_NO_DATA, CHALLENGE_QUESTION_DATA, CHALLENGE_ANSWER_NO_DATA, CHALLENGE_ANSWER_DATA, MSG_BODY_DATA, MSG_BODY_NO_DATA, FROM_PERSON_INFO, TO_PERSON_INFO, CHALLENGE_QUESTION_INFO, CHALLENGE_ANSWER_INFO, MSG_BODY_INFO, ANONYMOUS_FROM_PERSON, ANONYMOUS_QUESTION, ANONYMOUS_ANSWER, ANONYMOUS_TO_PERSON, RANDOM_MSGS } from '../../utility/constants/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
  sendForm: FormGroup;
  sendRequest: MessageRequest = new MessageRequest();
  requestStatus: boolean = false;
  uniqueToken: string;
  messageURL: string;
  fromPersonInfo = FROM_PERSON_INFO;
  toPersonInfo = TO_PERSON_INFO;
  questionInfo = CHALLENGE_QUESTION_INFO;
  answerInfo = CHALLENGE_ANSWER_INFO;
  msgInfo = MSG_BODY_INFO;
  fromPersonNoData = FROM_PERSON_NO_DATA;
  fromPersonData = FROM_PERSON_DATA;
  toPersonNoData = TO_PERSON_NO_DATA;
  toPersonData = TO_PERSON_DATA;
  questionNoData = CHALLENGE_QUESTION_NO_DATA;
  questionData = CHALLENGE_QUESTION_DATA;
  answerNoData = CHALLENGE_ANSWER_NO_DATA;
  answerData = CHALLENGE_ANSWER_DATA;
  msgNoData = MSG_BODY_NO_DATA;
  msgData = MSG_BODY_DATA;

  constructor(private sendService: MessageService, private router: Router) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm(): void {
    this.sendForm = new FormGroup({
      'fromPerson': new FormControl('', [Validators.required]),
      'toPerson': new FormControl('', [Validators.required]),
      'challengeQuestion': new FormControl('', [Validators.required]),
      'challengeAnswer': new FormControl('', [Validators.required]),
      'msgBody': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    let fromPerson = this.sendForm.controls['fromPerson'].value;
    let toPerson = this.sendForm.controls['toPerson'].value;
    let question = this.sendForm.controls['challengeQuestion'].value;
    let answer = this.sendForm.controls['challengeAnswer'].value;
    let message = this.sendForm.controls['msgBody'].value;
    this.sendRequest.fromPerson = (fromPerson.trim() === "" || fromPerson === null ? ANONYMOUS_FROM_PERSON : fromPerson);
    this.sendRequest.toPerson = (toPerson.trim() === "" || toPerson === null ? ANONYMOUS_TO_PERSON : toPerson);
    this.sendRequest.challengeQuestion = (question.trim() === "" || question === null ? ANONYMOUS_QUESTION : question);
    this.sendRequest.challengeAnswer = (answer.trim() === "" || answer === null ? ANONYMOUS_ANSWER : answer);
    this.sendRequest.msgBody = (message.trim() === "" || message === null ? RANDOM_MSGS[this.randomMsgs()] : message);
    this.sendService.sendMessage(this.sendRequest).subscribe(
      (response: any) => {
        this.requestStatus = true;
        this.messageURL = "https://rahul-kabra.github.io/say-thank-you/fetch?token=" + response.confirmationToken;
        this.uniqueToken = response.secretMessageToken;
      },
      (error: any) => {
        
      }
    );
    this.sendForm.reset();
  }

  randomMsgs(): number {
    var randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  getRandomMessages() {
    this.sendForm.controls['msgBody'].setValue(RANDOM_MSGS[this.randomMsgs()]);
  }

  copyToken(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    document.getElementById("copy-to-cb-button").innerText = "Copied!";
    setTimeout(() => {
      document.getElementById("copy-to-cb-button").innerText = "Copy";
    }, 1000)
    inputElement.setSelectionRange(0, 0);
  }
}
