import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-face-id',
  templateUrl: './face-id.component.html',
  styleUrls: ['./face-id.component.css']
})

/* Photo capture taken from https://x-team.com/blog/webcam-image-capture-angular/ */

export class FaceIdComponent implements OnInit {

    service: { url: string, personGroup: string } = { url: '', personGroup: 'prueba' };

    @ViewChild('video')
    public video: ElementRef;

    @ViewChild('canvas')
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { }

    // tslint:disable-next-line:use-life-cycle-interface
    public ngAfterViewInit() {
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        //         this.video.nativeElement.src = window.URL.createObjectURL(stream);
        //         this.video.nativeElement.play();
        //     });
        // }
    }

    public capture() {
        const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
        console.log(this.captures);
    }

    public verify() {
        alert(this.service.personGroup + this.service.url);
    }


}
