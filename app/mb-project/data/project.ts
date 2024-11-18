// components/data/project.ts
export interface Project {
  id: string;
  href: string;
  imgSrc: string;
  alt: string;
  category: string;
  title: string;
  author: string;
  date: string;
  description: string;
  images: string[];
  additionalDescription: string;
  title1: string;
  title2: string;
    title3: string;

  additionalDescription1: string;
  title4:string;
  additionalDescription2: string;
}

export const projects: Project[] = [
  {
    id: "1",
    href: "/finvo-ultimate-accounting-assitant",
    imgSrc: "/images/1.png",
    alt: "Finvo - Your Ultimate Accounting Assistant",
    category: "Finance",
    title: "Finvo - Your Ultimate Accounting Assistant",
    author: "MB Tech",
    date: "2024-03-01T16:39:00.000Z",
    description: `<div class="mx-auto prose prose-lg mt-6 max-w-3xl dark:prose-dark">
    <p class="mb-6">Streamline your financial management with Finvo.fr, the comprehensive solution for businesses and freelancers. Our platform offers:</p>
    <ol class="mb-6">
        <li><strong style="color:#93c5fd">1. Invoice Customization:</strong> Add or remove options according to your needs and apply a personalized style to your documents.</li>
        <li><strong style="color:#93c5fd">2. Digitalization and Automation of Invoices:</strong> With our advanced OCR technology, your invoices are automatically scanned and filed, allowing you to automate document tracking and access all your management options from your space.</li>
        <li><strong style="color:#93c5fd">3. Dashboard with Reporting and Sales Tracking:</strong> Monitor your financial performance with detailed reports and precise tracking of the status of your invoices and quotes.</li>
    </ol>
  
  
</div>
`,
    images: ["/images/finvo1.png", "/images/finvo2.png","/images/finvo3.png","/images/finvo4.png"],
    additionalDescription: ` 
    <div class="mx-auto prose prose-lg mt-6 max-w-3xl dark:prose-dark">
     <section class="mt-6">
    <ul>
        <li>1. Simplify your financial management with Finvo.fr, the ultimate tool for businesses and freelancers.</li>
        <li>2. Control all your invoices with ease.</li>
        <li>3. Experience seamless digitalization and automation of your invoices with our OCR technology.</li>
        <li>4. Access detailed reports and track your financial performance effortlessly.</li>
    </ul>
</section>
</div>`,
    title1:"Finvo.fr - The Invoicing Tool for Businesses and Freelancers",
    title2:"Discover how Finvo.fr can transform your financial management today!",
    title3: "",
    additionalDescription1: ` `,
    
  title4: "How It Works",
  additionalDescription2: `
     
  <ul>
    <li><strong style="color:#93c5fd">Frontend:</strong> React.js, Tailwind CSS, Redux, React Router</li>
    <li><strong style="color:#93c5fd">Backend:</strong> NestJS, MongoDB, Mongoose, JWT Authentication</li>
    <li><strong style="color:#93c5fd">DevOps:</strong> Docker, GitHub Actions, AWS</li>
    <li><strong style="color:#93c5fd">Additional Tools:</strong> Formik, Yup, Jest, Winston, Git</li>
  </ul>
`,
  

  },
 
  {
    id: "2",
    href: "/gourmet-gourmand",
    imgSrc: "/images/gourmet.png",
    alt: "Gourmet Gourmand - A Culinary Journey Through Tunisia",
    category: "Culinary",
    title: "Gourmet Gourmand - A Culinary Journey Through Tunisia",
    author: "MB Tech",
    date: "2024-03-01T16:39:00.000Z",
    description: `
      <p>Discover the rich culinary arts and culture of Tunisia with Gourmet Gourmand, your ultimate guide to gourmet food. Our platform offers:</p>
      <ul>
        <li><strong style="color:#93c5fd">Rich Content:</strong> Explore articles, recipes, and stories about Tunisian culinary arts and culture.</li>
        <li><strong style="color:#93c5fd">Interactive Experience:</strong> Engage with dynamic content and interactive elements for a better user experience.</li>
        <li><strong style="color:#93c5fd">User-Friendly Interface:</strong> Navigate easily through a well-designed, responsive interface.</li>
      </ul>
    `,
    images: [ "/images/gourmet2.png", "/images/gourmet3.png", "/images/gourmet4.png"],
    additionalDescription: `
     
      <ul>
        <li><strong style="color:#93c5fd">Frontend:</strong> React.js, Tailwind CSS, Redux, React Router</li>
        <li><strong style="color:#93c5fd">Backend:</strong> NestJS, MongoDB, Mongoose, JWT Authentication</li>
        <li><strong style="color:#93c5fd">DevOps:</strong> Docker, GitHub Actions, AWS</li>
        <li><strong style="color:#93c5fd">Additional Tools:</strong> Formik, Yup, Jest, Winston, Git</li>
      </ul>
    `,
    title1: "GourmetGourmand.tn - A Culinary Journey Through Tunisia",
    title2: "Technology Stack",
    title3: "Features",
    additionalDescription1: `
     
    <section>

  <h3 class="mt-6" style="color:#93c5fd">Content Management</h3>
  <ul>
    <li><strong >Admin Dashboard:</strong> An intuitive dashboard for administrators to manage content, users, and settings.</li>
    <li><strong >Content Creation:</strong> Easy creation and management of articles, recipes, and multimedia content.</li>
  </ul>

  <h3 class="mt-6" style="color:#93c5fd">User Interaction</h3>
  <ul>
    <li><strong >Comments and Reviews:</strong> Engage users with comment sections and review capabilities.</li>
    <li><strong >Social Media Integration:</strong> Share content seamlessly across social media platforms.</li>
  </ul>

  <h3 class="mt-6" style="color:#93c5fd">SEO and Performance Optimization</h3>
  <ul>
    <li><strong >SEO Friendly:</strong> Optimized for search engines to improve visibility and ranking.</li>
    <li><strong >Performance Tuning:</strong> Minimized load times and optimized performance for a better user experience.</li>
  </ul>

  <h3 class="mt-6" style="color:#93c5fd">Development Process</h3>
  <ul>
    <li><strong >Requirement Analysis:</strong> Detailed analysis of client requirements to understand the project scope and objectives.</li>
    <li><strong >Design and Prototyping:</strong> Creating wireframes and prototypes to visualize the user interface and user experience.</li>
    <li><strong >Agile Development:</strong> Iterative development process following Agile methodology to ensure continuous improvement and timely delivery.</li>
    <li><strong >Testing and Quality Assurance:</strong> Comprehensive testing including unit tests, integration tests, and end-to-end tests to ensure the quality and reliability of the application.</li>
    <li><strong >Deployment and Monitoring:</strong> Deploying the application to the production environment and continuous monitoring to ensure smooth operation.</li>
  </ul>
</section>
<section>
  <h2 class="mt-6" style="color:#93c5fd">Conclusion</h2>
  <p>
    Gourmet Gourmand is a testament to our expertise in developing robust and scalable web applications. By leveraging modern technologies and best practices, we have created a platform that not only meets the client’s requirements but also provides an exceptional user experience.
  </p>
  <p>
    For more information about our services and other projects, visit our <a href="https://youragencywebsite.com/" target="_blank" rel="noopener noreferrer"><strong><u>website</u></strong></a>.
  </p>
</section>
  `,
  
  title4: "How It Works",
  additionalDescription2: `
     
  <ul>
    <li><strong style="color:#93c5fd">Frontend:</strong> React.js, Tailwind CSS, Redux, React Router</li>
    <li><strong style="color:#93c5fd">Backend:</strong> NestJS, MongoDB, Mongoose, JWT Authentication</li>
    <li><strong style="color:#93c5fd">DevOps:</strong> Docker, GitHub Actions, AWS</li>
    <li><strong style="color:#93c5fd">Additional Tools:</strong> Formik, Yup, Jest, Winston, Git</li>
  </ul>
`,

}
,
  {
    id: "3",
    href: "/hero-empower-climat",
    imgSrc: "/images/3.png",
    alt: "Climate Change",
    category: "Climate",
    title: "Your platform to directly fund the people accelerating climate solutions worldwide.",
    author: "Moetaz Brayek",
    date: "2022-11-07T15:39:00.000Z",
    description: "HERO Circle is the first platform that allows people to subscribe to circles of individuals or activities dedicated to addressing the world's most pressing problems. Our platform revolutionizes the way individuals support causes they believe in by creating a symbiotic relationship between supporters and mobilizers.",
    images: ["/images/3.png"],
    additionalDescription: "HERO Circle focuses on empowering a Circle of Climate Mobilizers who are actively engaged in addressing the urgent issue of climate change. By providing a reliable and sustainable source of basic income to these mobilizers, we aim to enable them to focus on their vital work without the burden of financial uncertainty.",
    title1:"HERO Circle",
    title2:"Mission",
    title3: "How It Works",
    additionalDescription1: `
     
    <section>
    <ul>
      <li><strong style="color:#93c5fd">Subscription:</strong> Supporters can subscribe to a Circle of Climate Mobilizers, making ongoing financial contributions to support their work.</li>
      <li><strong style="color:#93c5fd">Financial Support:</strong> Mobilizers receive ongoing financial support from their supporters, enabling them to focus on their climate action efforts.</li>
      <li><strong style="color:#93c5fd">Collaboration:</strong> The platform serves as a bridge, connecting passionate supporters with mobilizers, creating a dynamic ecosystem of collaboration and empowerment.</li>
    </ul>
  
    </section>
  `,
  title4: "Benefits",
  additionalDescription2: `
     
  <section>
  
  <ul class="mb-6">
    <li><strong style="color:#93c5fd">Empowerment:</strong> Supporters play a crucial role in fostering positive change by directly contributing to the basic income of mobilizers.</li>
    <li><strong style="color:#93c5fd">Sustainability:</strong> Mobilizers receive reliable and sustainable financial support, allowing them to focus on their work without financial worries.</li>
    <li><strong style="color:#93c5fd">Impact:</strong> By supporting mobilizers, individuals can contribute directly to the cause they care about, creating a meaningful impact.</li>
  </ul>

  <p><strong>Join HERO Circle today and be a part of the movement to address climate change and other pressing global issues!</strong></p>
</section>
`,
  },
  {
    id: "4",
    href: "/resturant-club",
    imgSrc: "/images/4.jpg",
    alt: "Restaurants Club",
    category: "Restaurant management system",
    title: "Restaurants club",
    author: "MB Tech",
    date: "2022-11-05T00:00:00.000Z",
    description: "Welcome to our Restaurant Management System, your one-stop solution for managing your restaurant operations efficiently. Our system is packed with features designed to streamline your workflow, enhance customer experience, and boost your business growth.",
    images: ["/images/4.jpg"],
    additionalDescription: `<section>
    <h2 class="mb-6">Our Restaurant Management System includes a variety of features to help you run your business smoothly:</h2>
    <ol>
      <li><strong style="color:#93c5fd">1.Reservation Management:</strong> Easily manage table bookings and customer reservations.</li>
      <li><strong style="color:#93c5fd">2.Order Processing:</strong> Efficiently handle dine-in, takeout, and delivery orders.</li>
      <li><strong style="color:#93c5fd">3.Menu Management:</strong> Update and customize your menu in real-time.</li>
      <li><strong style="color:#93c5fd">4.Inventory Control:</strong> Keep track of your stock levels and receive alerts for low inventory.</li>
      <li><strong style="color:#93c5fd">5.Employee Management:</strong> Schedule shifts, track hours, and manage payroll.</li>
      <li><strong style="color:#93c5fd">6.Customer Relationship Management (CRM):</strong> Maintain customer profiles and loyalty programs.</li>
      <li><strong style="color:#93c5fd">7.Reporting and Analytics:</strong> Generate detailed reports to gain insights into your business performance.</li>
    </ol>
  </section>
  `,
    title1:"",
    title2:"Features",
    title3: "Heading",
    additionalDescription1: `
    
    <section>
    <h2 class="mb-6">Our Restaurant Management System includes a variety of features to help you run your business smoothly:</h2>
    
    <h3><strong style="color:#93c5fd">Reservation Management</strong></h3>
    <p class="mb-6" >With our system, you can manage reservations effortlessly. Keep track of bookings, optimize table assignments, and reduce no-shows with automated reminders.</p>
    
    <h3><strong style="color:#93c5fd">Order Processing</strong></h3>
    <p class="mb-6">Streamline your order processing with features designed to handle various order types, including dine-in, takeout, and delivery. Ensure accuracy and speed in your order handling.</p>
    
    <h3><strong style="color:#93c5fd">Menu Management</strong></h3>
    <p class="mb-6" >Update your menu on the fly with our intuitive menu management tools. Highlight specials, change prices, and manage categories with ease.</p>
    
    <h3><strong style="color:#93c5fd">Inventory Control</strong></h3>
    <p class="mb-6">Monitor your inventory in real-time. Receive alerts for low stock and avoid running out of essential items. Our system helps you reduce waste and optimize ordering.</p>
    
    <h3><strong style="color:#93c5fd">Employee Management</strong></h3>
    <p class="mb-6">Manage your staff effectively with tools for scheduling, time tracking, and payroll management. Ensure your restaurant is adequately staffed at all times.</p>
    
    <h3><strong style="color:#93c5fd">Customer Relationship Management (CRM)</strong></h3>
    <p class="mb-6">Build lasting relationships with your customers. Use our CRM tools to track customer preferences, manage loyalty programs, and send personalized promotions.</p>
    
    <h3><strong style="color:#93c5fd">Reporting and Analytics</strong></h3>
    <p class="mb-6">Make informed decisions with our comprehensive reporting and analytics features. Track sales, monitor employee performance, and identify trends to grow your business.</p>
    
  </section>
  
  `,

  title4: "Table of Features",
  additionalDescription2: `
  <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <th style="padding: 15px; text-align: left;"><strong>Feature</strong></th>
      <th style="padding: 15px; text-align: left;"><strong>Description</strong></th>
      <th style="padding: 15px; text-align: left;"><strong>Benefit</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Reservation Management</td>
      <td style="padding: 15px;">Manage table bookings and customer reservations</td>
      <td style="padding: 15px;">Optimize table usage and reduce no-shows</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Order Processing</td>
      <td style="padding: 15px;">Handle dine-in, takeout, and delivery orders</td>
      <td style="padding: 15px;">Improve order accuracy and speed</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Menu Management</td>
      <td style="padding: 15px;">Update and customize your menu</td>
      <td style="padding: 15px;">Flexibility and real-time updates</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Inventory Control</td>
      <td style="padding: 15px;">Monitor stock levels and receive low inventory alerts</td>
      <td style="padding: 15px;">Reduce waste and prevent stockouts</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Employee Management</td>
      <td style="padding: 15px;">Schedule shifts and track hours</td>
      <td style="padding: 15px;">Ensure proper staffing and accurate payroll</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Customer Relationship Management (CRM)</td>
      <td style="padding: 15px;">Maintain customer profiles and loyalty programs</td>
      <td style="padding: 15px;">Enhance customer retention and satisfaction</td>
    </tr>
    <tr>
      <td style="padding: 15px;">Reporting and Analytics</td>
      <td style="padding: 15px;">Generate detailed reports</td>
      <td style="padding: 15px;">Make data-driven decisions</td>
    </tr>
  </tbody>
</table>


`,

  },
  {
    id: "5",
    href: "/ridersapp",
    imgSrc: "/images/5.jpg",
    alt: "Riders App",
    category: "Restaurant management system",
    title: "Riders App",
    author: "MB Tech",
    date: "2022-11-05T00:00:00.000Z",
    description: "Welcome to our Food Delivery App, the ultimate platform for getting your favorite meals delivered straight to your door. Our app offers a seamless experience for both customers and restaurant partners, ensuring quick and reliable food delivery.",
    images: ["/images/5.jpg"],
    additionalDescription: `
    <p>Our Food Delivery App is packed with features to make ordering and delivering food as simple and efficient as possible:</p>
    
    <ul>
      <li class="mb-6"><strong style="color:#93c5fd">User-Friendly Interface:</strong> Easy-to-navigate app design for a seamless ordering experience.</li>
      <li class="mb-6"><strong style="color:#93c5fd">Real-Time Order Tracking:</strong> Track your order from the restaurant to your doorstep.</li>
      <li class="mb-6"><strong style="color:#93c5fd">Multiple Payment Options:</strong> Choose from various payment methods including credit cards, digital wallets, and cash on delivery.</li>
      <li class="mb-6"><strong style="color:#93c5fd">Restaurant Management:</strong> Partner restaurants can manage menus, orders, and promotions.</li>
      <li class="mb-6"><strong style="color:#93c5fd">Customer Support:</strong> 24/7 customer service to assist with any issues or inquiries.</li>
      <li class="mb-6"><strong style="color:#93c5fd">Promotions and Discounts:</strong> Regular deals and discounts to save money on your favorite meals.</li>
      <li class="mb-6"><strong style="color:#93c5fd">Rating and Reviews:</strong> Rate and review restaurants and delivery drivers to improve service quality.</li>
    </ul>`,
    title1:"",
    title2:"Features",
    title3: "Headings",
    additionalDescription1: `
     


<p><strong style="color:#93c5fd">User-Friendly Interface:</strong> Our app is designed with the user in mind. Navigate easily through different restaurants, view menus, and place orders with just a few taps.</p>

<p><strong style="color:#93c5fd">Real-Time Order Tracking:</strong> Know exactly where your food is at all times. Track your order from the moment it leaves the restaurant until it arrives at your doorstep.</p>

<p><strong style="color:#93c5fd">Multiple Payment Options:</strong> We offer various payment methods to suit your preference, including credit cards, digital wallets, and cash on delivery.</p>

<p><strong style="color:#93c5fd">Restaurant Management:</strong> Restaurant partners can easily manage their menus, track orders, and create promotions to attract more customers.</p>

<p><strong style="color:#93c5fd">Customer Support:</strong> Our 24/7 customer support is always available to assist you with any questions or issues you may have.</p>

<p><strong style="color:#93c5fd">Promotions and Discounts:</strong> Enjoy regular promotions and discounts on a wide range of meals. Save money while enjoying your favorite dishes.</p>

<p class="mb-6"><strong style="color:#93c5fd">Rating and Reviews:</strong> Rate your dining and delivery experience to help us maintain high standards of service. Your feedback is valuable to us.</p>


<h3 style="color:#93c5fd" >Additional Information</h3>
<p>Our Food Delivery App makes ordering food a breeze. With a user-friendly interface, you can browse through various restaurants, view detailed menus, and place your order within minutes.</p>

<p>Track your order in real-time, from preparation to delivery. Our multiple payment options ensure a smooth transaction process, and our dedicated customer support team is available around the clock to assist you.</p>

<p>For our restaurant partners, the app provides tools to manage orders, update menus, and run promotions. This helps enhance customer satisfaction and drive business growth.</p>

<p>Take advantage of our regular promotions and discounts to save on your favorite meals. After your meal, rate and review the restaurant and delivery service to help us improve.</p>

  `,
  
  title4: "Table of Features",
  additionalDescription2: `
     
  <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: left;">
  <thead>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <th style="padding: 15px; text-align: left;"><strong>Feature</strong></th>
      <th style="padding: 15px; text-align: left;"><strong>Description</strong></th>
      <th style="padding: 15px; text-align: left;"><strong>Benefit</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">User-Friendly Interface</td>
      <td style="padding: 15px;">Easy-to-navigate app design for seamless ordering</td>
      <td style="padding: 15px;">Enhanced user experience</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Real-Time Order Tracking</td>
      <td style="padding: 15px;">Track your order from the restaurant to your doorstep</td>
      <td style="padding: 15px;">Increased transparency and reliability</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Multiple Payment Options</td>
      <td style="padding: 15px;">Various payment methods including cards, wallets, and cash</td>
      <td style="padding: 15px;">Flexibility in payment</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Restaurant Management</td>
      <td style="padding: 15px;">Manage menus, orders, and promotions</td>
      <td style="padding: 15px;">Improved operational efficiency for partners</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Customer Support</td>
      <td style="padding: 15px;">24/7 customer service assistance</td>
      <td style="padding: 15px;">Immediate issue resolution</td>
    </tr>
    <tr style="border-bottom: 2px solid #93c5fd;">
      <td style="padding: 15px;">Promotions and Discounts</td>
      <td style="padding: 15px;">Regular deals on meals</td>
      <td style="padding: 15px;">Savings for customers</td>
    </tr>
    <tr>
      <td style="padding: 15px;">Rating and Reviews</td>
      <td style="padding: 15px;">Rate and review service and food</td>
      <td style="padding: 15px;">Quality control and improvement</td>
    </tr>
  </tbody>
</table>

`,
  },
 
  // Add more projects as needed...
];
