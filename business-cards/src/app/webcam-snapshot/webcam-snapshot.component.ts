import { Component, OnInit } from '@angular/core';
declare var require: any;
// const domtoimage = require('dom-to-image');
import domtoimage from 'dom-to-image';
import {Observable, Subject} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';
import {WebcamUtil} from 'ngx-webcam';
import {WebcamInitError} from 'ngx-webcam';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {BusinessCardService} from '../services/business-card.service';
import {Card} from '../app.model';

@Component({
  selector: 'app-webcam-snapshot',
  templateUrl: './webcam-snapshot.component.html',
  styleUrls: ['./webcam-snapshot.component.css']
})
export class WebcamSnapshotComponent implements OnInit {

  card:Card;
  // toggle webcam on/off
  public showWebcam = false;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public facingMode: string = 'environment';
  public errors: WebcamInitError[] = [];

  infor:[string];
  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  base64: string; 
  imageUrl = ""; 

  ngOnInit() {
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  
  constructor(private http:HttpClient, private businessCardService:BusinessCardService) {
    //Only for esting
    // this.imageUrl = 'https://carboncostume.com/wordpress/wp-content/uploads/2013/07/Homer-Simpson.jpg';
    // this.imageUrl = '../assets/Homer-Simpson.jpg';
    //console.log('APP COMPONENT');
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
    this.imageUrl = webcamImage.imageAsDataUrl;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== "") {
      result.facingMode = { ideal: this.facingMode };
    }

    return result;
  }


  convertToBase64() {
    // const image = document.createElement('img');
    // image.src = this.imageUrl;
    const imgNode = document.getElementById(`image`);
    // if (imgNode ) {
      console.log('SELECTED IMAGE');
      console.log(imgNode);
      console.log('SELECTED IMAGE');
      domtoimage.toPng(imgNode)
      .then( (dataUrl: string) => {
        console.log('SELECTED IMAGE 2');
        console.log(dataUrl);
        this.base64 = dataUrl;
        console.log('SELECTED IMAGE 2');
      }).catch( (e: any) => {
        console.log('SELECTED IMAGE BASE64 SOMETHING WENT WRONG');
        console.log(e);
      });
  }

  haha:string;

  firstName:string = "";
  lastName:string = "";
  Email:string = "";
  phoneNumber:string = "";
  extraText:string = "";
  imgUri:string = "";
  saveImg(){
    const request: any = {
      'requests': [
        {
          'image': {
              'content': this.imageUrl.substr(23, this.imageUrl.length),
          },
          'features': [
            {
              'type': 'TEXT_DETECTION',
              'maxResults': 1,
            }
          ]
        }
      ]
    };
    const url = `https://vision.googleapis.com/v1/images:annotate?key=${environment.cloudVision } `;
    //var x = 0;
    this.http.post(
      url,
      request
      ).subscribe(( result : any) => {
        result = result["responses"][0]["textAnnotations"];
        delete result[0];
        result.forEach(results => {
          //if(x != 0){
            const aStr = results["description"];
            //Firstname and Lastname
            if((aStr.match(/[a-zA-Z]/))){
              if(this.firstName == ""){
                this.firstName = aStr;
                console.log("first name..." +this.firstName);

              }else if(this.lastName == ""){
                this.lastName = aStr;
                console.log("last name ..." +this.lastName);

              }
            }
            //Phone Number
            if((aStr.match('^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$'))){
              if(this.phoneNumber == ""){
                this.phoneNumber = aStr;
                console.log("phone.." + this.phoneNumber);

              }
            }
            //Email address
            if((aStr.match(/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/))){
              if(this.Email == ""){
                this.Email = aStr;
                console.log("mail ..."+this.Email);
              }
            }
            
            if((this.Email != "") && (this.lastName != "") && (this.firstName != "") && (this.phoneNumber != "")){
              this.card = new Card(this.firstName, this.lastName, this.phoneNumber, this.Email, "", this.imgUri = this.imageUrl);

              this.businessCardService.addCards(this.card);
              this.businessCardService.updateCards(this.card);
            }
        });          
        });
        //console.log('RESULTS RESULTS RESULTS');
        //console.log(astr);
        //console.log('RESULTS RESULTS RESULTS');  
  }

  showCams=false;
  showCam(){
    if(this.showCams){
      return this.showCams = true;
    }else{
      return this.showCams = false;
    }
  }

  shows(){
    return this.showCams;
  }

  clear(){
    this.webcamImage = null;
  }
}
