import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'



@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [MatCardModule,MatToolbarModule,CommonModule,RouterLink,RouterLinkActive,RouterOutlet,MatIconModule,],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css',
  animations: [
      trigger('cardAnimation', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          animate('300ms', style({ opacity: 1, transform: 'translateY(0)' }))
        ]),
        transition(':leave', [
          animate('300ms', style({ opacity: 0, transform: 'translateY(20px)' }))
        ])
      ]),
      trigger('listAnimation', [
        transition('* => *', [
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            stagger('100ms', animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })))
          ], { optional: true })
        ])
      ])
    ]
})
export class ResourcesComponent {
  books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about the serious issues of rape and racial inequality.', pdfLink: 'link_to_pdf', driveLink: 'link_to_drive' },
    { title: '1984', author: 'George Orwell', description: 'A dystopian social science fiction novel about the dangers of totalitarianism.', pdfLink: 'link_to_pdf', driveLink: 'link_to_drive' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A critique of the American Dream, set in the 1920s.', pdfLink: 'link_to_pdf', driveLink: 'link_to_drive' },
    { title: 'Moby Dick', author: 'Herman Melville', description: 'The narrative of Captain Ahab\'s obsessive quest to exact revenge on Moby Deck.', pdfLink: 'link_to_pdf', driveLink: 'link_to_drive' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel that also serves as a critique of the British landed gentry.', pdfLink: 'link_to_pdf', driveLink: 'link_to_drive' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A novel about the adolescent Holden Caulfield and his teenage angst.', pdfLink: 'link_to_pdf', driveLink: 'link_to_drive' },
    { title: 'Brave New World', author: 'Aldous Huxley', description: 'A dystopian novel set in a futuristic society driven by technological advancements.', pdfLink: 'link_to_pdf', driveLink: 'link_to_drive' }
  ];
  openDropdown: any = null;

  toggleDropdown(book: any) {
    this.openDropdown = this.openDropdown === book ? null : book;
  }

  isDropdownOpen(book: any): boolean {
    return this.openDropdown === book;
  }
  


}
