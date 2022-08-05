export interface IBook {
  bookId: number;
  bookName: string;
  bookAuthor: string;
  bookPrice: number;
  bookPublishYear: number;
  imageUrl: string;
  rating: number;
}

export const products = [
  {
    bookId: 1,
    bookName: 'Mobile Computing',
    bookAuthor: 'Vinay Kumar Singhal',
    bookPrice: 9.5,
    bookPublishYear: 2011,
    imageUrl: 'assets/product_images/mobileComputing.jpg',
    rating: 3.4,
  },
  {
    bookId: 2,
    bookName: 'Publish News Letter',
    bookAuthor: 'Amit Garg',
    bookPrice: 11.4,
    bookPublishYear: 2011,
    imageUrl: 'assets/product_images/PublishNewsLetter.jpg',
    rating: 3.1,
  },
  {
    bookId: 3,
    bookName: 'Introduction to Computer',
    bookAuthor: 'Amit Garg',
    bookPrice: 12,
    bookPublishYear: 2011,
    imageUrl: 'assets/product_images/introComputers.jpg',
    rating: 2.2,
  },
  {
    bookId: 4,
    bookName: 'Client Server Computing',
    bookAuthor: 'Lalit Kumar',
    bookPrice: 7.3,
    bookPublishYear: 2012,
    imageUrl: 'assets/product_images/clientComp.jpg',
    rating: 4.7,
  },
  {
    bookId: 5,
    bookName: 'Data Structure Using C',
    bookAuthor: 'Sharad Kumar Verma',
    bookPrice: 4.9,
    bookPublishYear: 2015,
    imageUrl: 'assets/product_images/dsa.jpg',
    rating: 3.9,
  },
  {
    bookId: 6,
    bookName: 'Client Server Computing',
    bookAuthor: 'Sharad Kumar Verma',
    bookPrice: 8.3,
    bookPublishYear: 2012,
    imageUrl: 'assets/product_images/clientComp2.jpg',
    rating: 4.2,
  },
  {
    bookId: 7,
    bookName: 'Computer Networks',
    bookAuthor: 'Sharad Kumar Verma',
    bookPrice: 13.1,
    bookPublishYear: 2010,
    imageUrl: 'assets/product_images/compNetwork.jpg',
    rating: 4.3,
  },
  {
    bookId: 8,
    bookName: '.NET Framework & C#',
    bookAuthor: 'Sharad Kumar Verma',
    bookPrice: 14.9,
    bookPublishYear: 2009,
    imageUrl: 'assets/product_images/cSharp.jfif',
    rating: 4.9,
  },
  {
    bookId: 9,
    bookName: 'CBOT',
    bookAuthor: 'Gunjan Verma',
    bookPrice: 17.6,
    bookPublishYear: 2014,
    imageUrl: 'assets/product_images/cbot.jpg',
    rating: 2.9,
  },
  {
    bookId: 10,
    bookName: 'Computer Networks',
    bookAuthor: 'Saurabh Singhal',
    bookPrice: 7.5,
    bookPublishYear: 2016,
    imageUrl: 'assets/product_images/compNetwork2.png',
    rating: 2.5,
  },
  {
    bookId: 11,
    bookName: 'Computer Graphics',
    bookAuthor: 'Battacharya, Samit',
    bookPrice: 7.2,
    bookPublishYear: 2015,
    imageUrl: 'assets/product_images/compGraphics.jpg',
    rating: 3.1,
  },
  {
    bookId: 12,
    bookName: 'Artificial Intelligence',
    bookAuthor: 'Mishra, RB',
    bookPrice: 12.9,
    bookPublishYear: 2011,
    imageUrl: 'assets/product_images/ai.jpg',
    rating: 3.0,
  },
];
