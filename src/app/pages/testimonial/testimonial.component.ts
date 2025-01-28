import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

interface TestimonialInterface {
  customer_job: string;
  customer_name: string;
  id: number;
  text: string;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})

export class TestimonialComponent implements OnInit{
  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.loadTestimonials()
  }
  faQuoteLeft =faQuoteLeft;
  testimonials: [TestimonialInterface] = [
    { id: 0,
      customer_job: "",
      customer_name: "",
      text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    },
    // {
    //   text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    //   image: 'assets/images/client2.jpg',
    //   name: 'Client Name',
    //   profession: 'Profession'
    // },
    // {
    //   text: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.',
    //   image: 'assets/images/client3.jpg',
    //   name: 'Client Name',
    //   profession: 'Profession'
    // }
  ];

  // slideConfig = {
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   dots: true
  // };

  slides = [
    {img: "../../../assets/images/team-4.jpg"},
    {img: "../../../assets/images/team-4.jpg"},
    {img: "../../../assets/images/team-4.jpg"},
    {img: "../../../assets/images/team-4.jpg"}
  ];
  slideConfig = {
    slidesToShow: 3, // Adjust for the number of cards visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  loadTestimonials(): void {
    this.testimonialService.getTestimonials().subscribe({
      next: (response) => {
        this.testimonials = response.data; // Assign API response to testimonials array
        console.log(this.testimonials); // Log for debugging
      },
      error: (error) => {
        console.error('Error fetching testimonials:', error);
      },
    });
  }




  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e: any) {
    console.log('slick initialized', e);
  }
  
  breakpoint(e: any) {
    console.log('slick initialized', e);
  }
  afterChange(e: any) {
    console.log('slick initialized', e);
  }
  
  beforeChange(e: any) {
    console.log('slick initialized', e);
  }
}



