import { Component, OnInit, Pipe, PipeTransform, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {IssueService} from '../issue.service';
import { DomSanitizer } from '@angular/platform-browser';


import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe ({
  name: 'safeHtml'
})

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css'],
})

@NgModule ({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class CreateComponentComponent implements OnInit, PipeTransform{
  creatForm: FormGroup;
  myForm: FormGroup;
  selectFile = null;
  showUp = '';

  public test;
  hellotest = 'Hello Testing Calling';
  public fontSize;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'http://localhost:4420/uploads', // if needed
    customClasses: [ // optional
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  // Upload File Here!
  // public URL = 'http://localhost:4420/uploads';
  public uploader: FileUploader = new FileUploader({url: 'http://localhost:4420/uploads', itemAlias: 'file'});


  constructor(private issuesService: IssueService,
              private fb: FormBuilder,
              private routera: Router,
              private sanitizer: DomSanitizer, private http: HttpClient) {



    this.creatForm = this.fb.group({
      title: ['', Validators.required],
      responsible: ['', Validators.required],
      descritption: '',
      severity: ''
    });

    this.myForm = this.fb.group({
      file: ''
    });
  }

  transform(html) {
    return this.sanitizer.bypassSecurityTrustStyle(html);
    // return this.sanitizer.bypassSecurityTrustHtml(html);
    // return this.sanitizer.bypassSecurityTrustScript(html);
    // return this.sanitizer.bypassSecurityTrustUrl(html);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }

  addIssue(title, res, des, serv){
    this.issuesService.addIssue(title, res, des, serv).subscribe(() => {
      this.routera.navigate([`/list`]);
    });
  }

  // File Selected
  onFileSelected(event) {
this.selectFile = event.target.files[0] as File;
  }

  onUpload() {
    const fd = new FormData();
    fd.append ('file', this.selectFile, this.selectFile.name)
    this.http.post('http://192.168.43.55:4420/uploads', fd )
    .subscribe (res => {
      console.log(res);
    });
  }

  // fileUpload(file) {
  //   this.issuesService.addUpload(file).subscribe(() => {
  //     this.routera.navigate([`/list`]);
  //   });
  // }
  ngOnInit() {
    // this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    // this.uploader.onCompleteItem = (item: any, response: any, status: any) => {
    //      console.log('FileUpload:uploaded:', item, status, response);
    //      alert('File uploaded successfully');
    //  };
  }

  changeColor() {
    if(true) {
      this.test = true;
    }
  }

}

