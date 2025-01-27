import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  isVideoModalVisible: boolean = false;
  videoUrl: string = '';
  faX = faXmark;

  constructor(public sanitizer: DomSanitizer) {}

  showVideoModal(url: string): void {
    this.videoUrl = url;
    this.isVideoModalVisible = true;
  }

  closeVideoModal(): void {
    this.isVideoModalVisible = false;
    this.videoUrl = '';
  }
}
