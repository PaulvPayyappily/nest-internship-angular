import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  states = [
    {
      id: 1,
      image: "pexels-uwc12-574313.jpg",
      title: "Punjab",
      description: "      Punjab, located in the north-western part of India, is known for its rich cultural heritage, vibrant traditions, and agricultural prosperity. The state is often referred to as the 'Granary of India' due to its role in the nation's food production. From the sacred Golden Temple in Amritsar to the lush fields of wheat and rice, Punjab is a land of great historical significance, religious diversity, and a bustling, lively spirit.Known for its rich culture, golden fields, and historical landmarks like the Golden Temple.",
      p1: "Punjab is known for its rich culture, vibrant traditions, and golden fields. It's a land that has a deep historical significance, with landmarks like the Golden Temple, the holiest shrine of Sikhism, being a central attraction.",
      p2: "The state's rural charm, combined with its bustling cities, makes it a unique blend of tradition and modernity.",
      p3: "Punjab offers a unique mix of heritage and modernity, making it a great destination for cultural exploration.",
      h1: "Discover Punjab",
      h2: "Golden Fields & Heritage"
    },
    {
      id: 2,
      image: "pexels-axp-photography-500641970-19149595.jpg",
      title: "Rajasthan",
      description: "      Rajasthan, located in the northwestern part of India, is a land of royal grandeur, rich culture, and historical splendor. Known for its majestic forts, opulent palaces, and vast desert landscapes, Rajasthan offers an experience that blends history, tradition, and beauty. From the colorful markets of Jaipur to the sand dunes of Jaisalmer, the state is an embodiment of India's regal past and vibrant present.Famous for its palaces, forts, deserts, and vibrant festivals.",
      p1: "Rajasthan, a land of kings, is famous for its stunning palaces, majestic forts, and vast deserts. The vibrant festivals, royal architecture, and rich cultural heritage make it a must-visit destination in India.",
      p2: "The state's cities like Jaipur, Udaipur, and Jodhpur showcase grand palaces and forts that are architectural marvels.",
      p3: "Rajasthan's palaces and forts tell stories of royal glory and timeless history.",
      h1: "Explore Rajasthan",
      h2: "Palaces, Deserts & Culture"
    },
    {
      id: 3,
      image: "851697-3840x2160-desktop-4k-kerala-background.jpg",
      title: "Kerala",
      description: "      Kerala, known as 'God's Own Country,' is a state located on the southwestern coast of India. It is famous for its serene backwaters, pristine beaches, and lush green landscapes. The state offers a perfect blend of natural beauty, rich culture, and traditional Ayurvedic healing practices. From the hill stations in Munnar to the backwaters of Alleppey, Kerala offers travelers a peaceful and rejuvenating experience.Known for its serene backwaters, rich wildlife, and Ayurvedic healing traditions.",
      p1: "Kerala, known as 'God's Own Country', is renowned for its serene backwaters, lush landscapes, and abundant wildlife. The state's Ayurvedic healing traditions attract wellness tourists from around the world.",
      p2: "Kerala's culture, with its classical dance forms like Kathakali and Mohiniyattam, adds to the state's unique identity.",
      p3: "With its backwaters and healing traditions, Kerala is the ultimate escape to tranquility.",
      h1: "Discover Kerala",
      h2: "Backwaters & Ayurveda"
    },
    {
      id: 4,
      image: "pexels-asadphoto-457882.jpg",
      title: "Goa",
      description: "      Goa, located on the western coast of India, is known for its beautiful beaches, vibrant nightlife, and Portuguese colonial heritage. The state is famous for its relaxing atmosphere, colorful culture, and rich history. From the golden sands of Baga Beach to the historic forts like Aguada, Goa is the perfect destination for beach lovers, history enthusiasts, and adventure seekers.Renowned for its beautiful beaches, nightlife, and Portuguese heritage.",
      p1: "Goa is renowned for its picturesque beaches, vibrant nightlife, and Portuguese colonial architecture. A perfect blend of relaxation and adventure, it attracts tourists from all over the world.",
      p2: "The state's rich cultural mix, scenic views, and historic forts provide a unique atmosphere for both relaxation and exploration.",
      p3: "Goa offers the best of both worlds – relaxation on its beaches and excitement in its nightlife.",
      h1: "Explore Goa",
      h2: "Beaches, Culture & Nightlife"
    },
    {
      id: 5,
      image: "brihadishvara-2358280_1920.jpg",
      title: "Tamil Nadu",
      description: "      Tamil Nadu, located in the southernmost part of India, is known for its ancient temples, hill stations, and pristine beaches. The state boasts a rich cultural heritage, vibrant arts, classical music, and dance forms like Bharatanatyam. From the architectural marvels of Madurai’s Meenakshi Temple to the serene hill stations like Ooty and Kodaikanal, Tamil Nadu offers a perfect blend of nature, history, and tradition.Famous for its temples, classical dance, and historic architecture.",
      p1: "Tamil Nadu, located in the southernmost part of India, is famous for its ancient temples, classical dance forms, and historical architecture. The state's rich culture and heritage can be witnessed in its grand temples and festivals.",
      p2: "Chennai, the capital city, is a major hub for classical music and dance, while cities like Madurai and Thanjavur are home to some of India's most iconic temples.",
      p3: "Tamil Nadu is a land of vibrant culture, where ancient temples and classical arts reign supreme.",
      h1: "Discover Tamil Nadu",
      h2: "Temples & Classical Arts"
    },
    {
      id: 6,
      image: "lion-point-6582528_1920.jpg",
      title: "Maharashtra",
      description: "      Maharashtra, located on the western coast of India, is a state that boasts a rich history, vibrant culture, and scenic beauty. From the bustling metropolis of Mumbai to the serene beaches of Goa and the tranquil hill stations of the Western Ghats, Maharashtra offers a perfect blend of urban and natural attractions. The state is also home to historic forts, temples, and cultural festivals that reflect its royal past and diverse traditions.",
      p1: "Maharashtra, the state that houses Mumbai – the financial capital of India – is known for its cosmopolitan lifestyle, hill stations, and historical landmarks. Mumbai, the heart of the Indian film industry (Bollywood), is the state's largest city.",
      p2: "Maharashtra is also home to ancient caves like Ajanta and Ellora, and hill stations like Mahabaleshwar that offer a scenic retreat.",
      p3: "Maharashtra blends modernity and history, offering both cosmopolitan cities and timeless monuments.",
      h1: "Explore Maharashtra",
      h2: "Mumbai, Caves & Hill Stations"
    },
    {
      id: 7,
      image: "pexels-maahidphotos-3881104.jpg",
      title: "Uttar Pradesh",
      description: "      Uttar Pradesh, located in the northern part of India, is a state known for its rich history, culture, and religious significance. Famous for the iconic **Taj Mahal**, the state also houses historic cities like **Varanasi** and **Agra**. Uttar Pradesh is a land of temples, forts, and cultural heritage, with a unique blend of ancient traditions and modern influences.",
      p1: "Uttar Pradesh is home to one of the Seven Wonders of the World, the Taj Mahal. The state is rich in Mughal history, vibrant festivals, and sacred sites like Varanasi, one of the oldest cities in the world.",
      p2: "The Taj Mahal in Agra is one of the most iconic monuments, while cities like Lucknow are famous for their Nawabi culture and hospitality.",
      p3: "Uttar Pradesh’s heritage, exemplified by the Taj Mahal, is a testament to India's grand history.",
      h1: "Discover Uttar Pradesh",
      h2: "Taj Mahal & Mughal Heritage"
    },
    {
      id: 8,
      image: "pexels-suketdedhia-570026.jpg",
      title: "Himachal Pradesh",
      description: "      Himachal Pradesh, located in the northern part of India, is a state known for its breathtaking landscapes, high-altitude hill stations, and adventure activities. From the snow-capped mountains of **Manali** and **Shimla** to the spiritual atmosphere of **Dharamshala**, Himachal Pradesh offers a perfect getaway for nature lovers, adventure enthusiasts, and those seeking peace in the mountains.",
      p1: "Himachal Pradesh is known for its stunning mountain landscapes, tranquil hill stations, and outdoor adventure opportunities. It’s a paradise for trekkers and nature lovers.",
      p2: "Shimla, Manali, and Dharamshala are popular hill stations that provide picturesque views, while the state also offers a rich cultural heritage and historical sites.",
      p3: "Himachal Pradesh is an adventurer's dream with breathtaking views and outdoor activities.",
      h1: "Explore Himachal Pradesh",
      h2: "Mountains & Adventure"
    }
  ];
  
  

  cardsStates=[
    {
      id: 1,
      image: "pexels-uwc12-574313.jpg",
      title: "Punjab",
      description: "Known for its rich culture, golden fields, and historical landmarks like the Golden Temple.",
      page: "/Punjab"
    },
    {
      id: 2,
      image: "pexels-axp-photography-500641970-19149595.jpg",
      title: "Rajasthan",
      description: "Famous for its palaces, forts, deserts, and vibrant festivals.",
      page: "/Rajasthan"
    },
    {
      id: 3,
      image: "4.jpg",
      title: "Kerala",
      description: "Known for its serene backwaters, rich wildlife, and Ayurvedic healing traditions.",
      page: "/kerala"
    },
    {
      id: 4,
      image: "5.jpg",
      title: "Goa",
      description: "Renowned for its beautiful beaches, nightlife, and Portuguese heritage.",
      page: "/Goa"
    },
    {
      id: 5,
      image: "6.jpg",
      title: "Tamil Nadu",
      description: "Famous for its temples, classical dance, and historic architecture.",
      page: "/Tamil_Nadu"
    },
    {
      id: 6,
      image: "7.jpg",
      title: "Maharashtra",
      description: "Known for Mumbai (Bollywood), beautiful hill stations, and historic caves like Elephanta and Ajanta.",
      page: "/Maharashtra"
    },
    {
      id: 7,
      image: "pexels-maahidphotos-3881104.jpg",
      title: "Uttar Pradesh",
      description: "Home to the Taj Mahal, vibrant festivals, and rich Mughal history.",
      page: "/UP"
    },
    {
      id: 8,
      image: "pexels-suketdedhia-570026.jpg",
      title: "Himachal Pradesh",
      description: "Known for its stunning mountains, hill stations like Shimla, and outdoor adventure activities.",
      page: "/Himachal"
    }
  ]


  constructor() { 
  }

  getStaes(){
    return this.cardsStates;
  }

  getStatesById(id:any){
    return this.states.find(state => state.id == Number(id));
  }
}
