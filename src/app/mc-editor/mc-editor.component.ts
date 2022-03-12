import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DxHtmlEditorComponent } from 'devextreme-angular';

@Component({
  selector: 'app-mc-editor',
  templateUrl: './mc-editor.component.html',
  styleUrls: ['./mc-editor.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class McEditorComponent implements OnInit {
  @ViewChild('editor') editor!:DxHtmlEditorComponent;
  @ViewChild('content') content!:ElementRef;
  caretPos = 0;
  showEmoji = false;
  //@ViewChild('editor') editor!:HTMLElement;

   employees = [{
    text: 'John Heart',
    team: 'Engineering',
    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/mentions/John-Heart.png',
  }, {
    text: 'Kevin Carter',
    team: 'Engineering',
    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/mentions/Kevin-Carter.png',
  }, {
    text: 'Olivia Peyton',
    team: 'Management',
    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/mentions/Olivia-Peyton.png',
  }, {
    text: 'Robert Reagan',
    team: 'Management',
    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/mentions/Robert-Reagan.png',
  }, {
    text: 'Cynthia Stanwick',
    team: 'Engineering',
    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/mentions/Cynthia-Stanwick.png',
  }, {
    text: 'Brett Wade ',
    team: 'Analysis',
    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/mentions/Brett-Wade.png',
  }, {
    text: 'Greta Sims',
    team: 'QA',
    icon: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/mentions/Greta-Sims.png',
  },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  // showInfo(e:any){
  //   console.log(e)
  // }
  sm(){
    //=============get content of editor==================
    const parser = new DOMParser()
    const doc = parser.parseFromString(this.editor.instance.option("value"),'text/html')
    let listId = [];
     this.content.nativeElement.innerText = doc.body.innerHTML;
   for(let i=0;i<doc.body.getElementsByClassName('dx-mention').length;i++){
     listId.push(doc.body.getElementsByClassName('dx-mention')[i].getAttribute('data-id'))
   }
   //===================edit post===============
  //  const str = `<p><span class="dx-mention" spellcheck="false" data-marker="@" data-mention-value="John Heart" data-id="Engineering">﻿<span contenteditable="false"><span class="dx-template-wrapper"> John Heart </span></span>﻿</span> </p><p>asdkjak</p><p>asdsa <span class="dx-mention" spellcheck="false" data-marker="@" data-mention-value="John Heart" data-id="Engineering">﻿<span contenteditable="false"><span class="dx-template-wrapper"> John Heart </span></span>﻿</span> sdsad</p>`;
  //  this.editor.instance.option("value",str)


  }
  showEm(e:any){
    this.editor.instance.setSelection(this.caretPos,0)
    this.editor.instance.insertText(this.caretPos,e.emoji.native,{})
    this.caretPos+=2;
    this.editor.instance.setSelection(this.caretPos,0)
  }
  getCaretPos(){
    this.caretPos = this.editor.instance.getSelection().index

  }
  // @HostListener('keyup')keyUpevent(){
  //  // console.log(this.editor.instance.getSelection())

  // }
}
