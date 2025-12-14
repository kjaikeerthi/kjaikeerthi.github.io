/**
 * Resume data structure and interfaces
 * Contains all structured data extracted from resume.html
 */

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  mobile?: string;
  location: string;
  socialLinks: {
    github: string;
    twitter: string;
    linkedin: string;
  };
}

export interface TechnicalExpertise {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  url?: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  projects: Project[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Resume {
  contactInfo: ContactInfo;
  technicalExpertise: TechnicalExpertise[];
  experience: Experience[];
  education: Education;
}

// Resume data extracted from resume.html
export const resumeData: Resume = {
  contactInfo: {
    name: 'Jai Keerthi',
    title: 'AI Agents / LLM / Product / Architect',
    email: 'haiiamjai@gmail.com',
    mobile: '+91 7760054546',
    location: 'Bangalore, India',
    socialLinks: {
      github: 'https://github.com/kjaikeerthi',
      twitter: 'https://twitter.com/kjaikeerthi',
      linkedin: 'http://in.linkedin.com/in/kjaikeerthi',
    },
  },
  technicalExpertise: [
    {
      category: 'Programming Languages',
      skills: ['Typescript', 'Ruby', 'Node.js', 'Python', 'PHP'],
    },
    {
      category: 'Markups',
      skills: ['XHTML / Html5', 'CSS2 / CSS3'],
    },
    {
      category: 'Frameworks',
      skills: [
        'Nest.js / Next.js',
        'FastAPI',
        'Ruby on Rails',
        'React (Javascript)',
        'Computer Vision (Amazon Rekognition & Azure Cognitive Service)',
        'N8N',
        'Langchain',
        'Langflow',
        'Langgraph',
        'LLM based Agentic workflows',
      ],
    },
  ],
  experience: [
    {
      company: 'Coducer Technologies Private Limited',
      role: 'Technology Head',
      startDate: 'Dec 2021',
      endDate: 'Present',
      projects: [
        {
          title: 'PrimeCLM - Contract Lifecycle Management Platform',
          url: 'https://primeclm.com/',
          description:
            'Played a role on Ideation, Architecting, Development and Implemenation of end to end contract lifecycle management.',
          technologies: [
            'Typescript / Nest.js / Express.js',
            'Postgresql',
            'Typescript / Next.js',
          ],
        },
        {
          title: 'JOFIN',
          url: 'https://www.jofin.ai/',
          description:
            'Played a role on Ideation, Architecting, Development and Implemenation of upgrading techstack and architecture for fintech platform.',
          technologies: [
            'Java - SpringBoot',
            'Postgresql',
            'Typescript / React.js / Next.js',
            'Nx.js',
            'MicroFrontend',
          ],
        },
        {
          title: 'Ascent IMDR',
          url: 'https://ascent-hr.com/',
          description:
            'Played a role on Ideation, Architecting, Develop, Implemenation on mordernisation of frontend for existing HRMS platform.',
          technologies: [
            'Typescript / React.js / Next.js',
            'Nx.js',
            'MicroFrontend',
          ],
        },
        {
          title: 'Al Arabia BMS - Billboard Management Platform',
          url: 'https://bms.al-arabia.com/',
          description:
            'Played a role on Ideation, Architecting, Develop, Implemenation of building end to end backoffice plarform for Al-Arabia.',
          technologies: [
            'Typescript / Nest.js / Express.js',
            'Typescript / React.js / Next.js',
            'MongoDB',
            'Redis',
            'Microservices',
          ],
        },
        {
          title: 'Prabhaav - Social Impact Management Platform',
          url: 'https://prabhaav.ai/',
          description:
            'Played a role on Ideation, Architecting, Develop, Implemenation of building end to end saas platform.',
          technologies: [
            'Typescript / Nest.js / Express.js',
            'Typescript / React.js',
            'MongoDB',
            'Redis',
            'Microservices',
          ],
        },
        {
          title: 'TREW - Blockchain based review validation platform',
          url: 'https://trew.io/',
          description:
            'Played a role on Ideation, Architecting, Develop, Implemenation of api economy based Web 3.0 application.',
          technologies: [
            'Typescript / Nest.js / Express.js',
            'Typescript / React.js',
            'MongoDB',
            'Redis',
            'Microservices',
            'Avalanche',
            'Etherium',
          ],
        },
        {
          title: 'GiveIndia - Social Impact Platform',
          url: 'https://give.do/',
          description:
            'Played an active role on development & integration of multiple payment gateways (Paytm, Amazon Pay, Razorpay for Direct Bank Transfers, PayPal for International Payments) and Inapp campaign managmeent system on both PHP based backend and React based frontend.',
          technologies: ['PHP', 'React', 'MongoDB'],
        },
      ],
    },
    {
      company: 'thirai.io',
      role: 'Architect',
      startDate: 'Dec 2018',
      endDate: 'Nov 2021',
      projects: [
        {
          title: 'Advertising Platform',
          url: 'https://www.thirai.io/',
          description:
            'Played a role on Ideation, Develop, Implemenation of ofline programatic adverting platform.',
          technologies: [
            'React / Redux',
            'Ruby on Rails',
            'Google map based geo search',
            'Hosted on Nginx, with Postgresql',
          ],
        },
        {
          title: 'Content Management Box',
          url: 'https://www.thirai.io/',
          description:
            'Played a role on Development & Implemenation of hardware to manage content on LED / Thirai Smart Screen.',
          technologies: [
            'PyQt with Python 3.6',
            'Api integration with Adverting platform',
          ],
        },
        {
          title: 'Computer Vision & Data management platform for Thirai.io',
          url: 'https://www.thirai.io/',
          description:
            'Played a role on Architecture, Development of AI based data management engine.',
          technologies: [
            'Python 3.7 with Tensorflow & YOLO V3',
            'Integation with Amazon Rekognition services',
            'Integation with Azure Cognitive Services',
            'Build as distributed edge environment which sync with cloud based data lakes',
            'Handled data with DynamoDB & MongoDb',
          ],
        },
      ],
    },
    {
      company: 'fibre2fashion.com',
      role: 'Product Head',
      startDate: 'Oct 2017',
      endDate: 'Nov 2018',
      projects: [
        {
          title: 'ECAAS (E-Commerce As A Service)',
          url: 'https://www.fibre2fashion.com/fashion-accelerator/',
          description:
            'Played a role on Ideation, Develop, Implemenation and scale of online marketing platform for fashion industry.',
          technologies: [
            'Ruby on Rails',
            'Integration with Amazon, Flipkart, Jabbong',
            'Google map based geo search',
            'Hosted on Nginx, with Mysql',
          ],
        },
      ],
    },
    {
      company: 'Independent Consultant',
      role: 'Consultant',
      startDate: 'Nov 2016',
      endDate: 'Oct 2017',
      projects: [
        {
          title: 'Explore Life Travelling',
          url: 'https://www.explorelifetraveling.com/',
          description:
            'Played a role on Design, Develop & Implemenation online property booking platform.',
          technologies: [
            'React, Redux',
            'Python, Django based Restful api',
            'Google map based geo search',
          ],
        },
        {
          title: 'Sleekr',
          url: 'https://sleekr.co/',
          description:
            'Worked on improving code quality, building and enhancing existing features.',
          technologies: [
            'Angular 2, RxJS',
            'Php, Laravel based Restful api',
            'Hosted on Nginx, with Mysql',
          ],
        },
      ],
    },
    {
      company: 'Scripbox.com',
      role: 'Senior Product Engineer',
      startDate: 'Feb 2016',
      endDate: 'Nov 2016',
      projects: [
        {
          title: 'Milkyway',
          url: 'http://www.scripbox.com/',
          description:
            'Handled technology around backoffice and order processing includes support, order generation & document collection.',
          technologies: [
            'Rails 3 with Ruby 2.0.0 hosted on Unicorn + Nginx, with Mysql',
            'Elasticsearch for full text Search',
            'Jquery as needed',
            'Integrated Google + Login',
            'Redis & Sidekiq for delayed jobs',
          ],
        },
        {
          title: 'Delivery Tracking Mobile App',
          description:
            'Build HTML5 based mobile application for tracking and processing document collection realtime.',
          technologies: [
            'IonicFramework + Angular.js framework',
            'Http based restful api',
            'Jquery and Jquery UI for ajax',
            'Builds on top of cordova',
            'Google map based geo search',
            'Firebase for realtime data sync',
          ],
        },
      ],
    },
    {
      company: 'Eatwithus Technologies Pvt. Ltd.',
      role: 'Technology Head',
      startDate: 'Sep 2013',
      endDate: 'Feb 2016',
      projects: [
        {
          title: 'Eatwithus',
          url: 'http://www.eatwithus.in/',
          description:
            'Played severel role including Design, Develop & Implemenation of online food ordering system for 2 major cities in India.',
          technologies: [
            'Angular.js + Rails 4 with Ruby 2.0.0 hosted on Unicorn + Nginx, with MongoDb',
            'Tire for full text Search',
            'Jquery as needed',
            'Integrated Facebook, Google + Login',
            'Google map based geo search',
            'Secure Payment Gateway integration with CCAvenue and ActiveMerchant',
          ],
        },
        {
          title: 'Managewithus',
          url: 'http://www.managewithus.in/',
          description:
            'Played severel role including Design, Develop & Implemenation of end to end restaurant management & branding system.',
          technologies: [
            'Rails 4 with Ruby 2.0.0 hosted on Unicorn + Nginx, with MongoDb',
            'Http based restful api',
            'Jquery and Jquery UI for ajax',
            'Redis & Resque for delayed Job',
            'Google map based geo search',
            'Socket.io for pubsub service',
            'Secure Payment Gateway integration with CCAvenue and ActiveMerchant',
          ],
        },
      ],
    },
    {
      company: 'Coducer Technologies',
      role: 'Developer / Business Execution',
      startDate: 'Jan 2013',
      endDate: 'Feb 2016',
      projects: [
        {
          title: 'BMTC - Mobile App',
          description:
            'Building Mobile application for BMTC commuters',
          technologies: [
            'Rails 4 with Ruby 2.1.1 hosted on Unicorn + Nginx, with Mysql',
            'Http based restful api',
            'Native Android / IOS / Windows Applications',
            'Integrated with BMTC Website (http://www.mybmtc.com)',
          ],
        },
        {
          title: 'Platerate',
          url: 'http://www.statisticallydifferent.com/',
          description:
            'Analysed, architected and Develop, tablet based restaurant rating and analytical engine.',
          technologies: [
            'Rails 4 with Ruby 2.1.0 hosted on Unicorn + Nginx, with Mysql',
            'Http based restful api',
            'Phonegap + Jquery Mobile to build tablet application for Android & Ipad',
            'Graphical analytics + charts using Google Chart Api',
          ],
        },
        {
          title: 'Bestfrent',
          url: 'http://alpha.bestfrent.com/',
          description:
            'Analysed, architected and Develop, an online property search engine for specific geographic location.',
          technologies: [
            'Angular + Rails 4 with Ruby 2.1.0 hosted on Unicorn + Nginx, with Mysql',
            'Tire for full text Search',
            'Jquery plugins as needed',
            'Google Maps integration for geo graphic saerch',
          ],
        },
        {
          title: 'Carpeta',
          url: 'http://www.carpeta.us/',
          description:
            'Analysed and Develop, Application for social network for closed environment.',
          technologies: [
            'Rails 3 with Ruby 2.0.0 hosted on Unicorn + Nginx, with Mysql',
            'Tire for full text Search',
            'Jquery and Jquery UI for ajax',
            'Integrated Facebook Application',
          ],
        },
      ],
    },
    {
      company: 'Activesphere Technologies',
      role: 'Application Developer',
      startDate: 'Sep 2011',
      endDate: 'Dec 2012',
      projects: [
        {
          title: 'Bountyme',
          url: 'http://www.bountyme.com/',
          description:
            'Designed and Develop, Application for social job recrutement portal.',
          technologies: [
            'Rails 3 with Ruby 1.9.3 hosted on Unicorn + Nginx, with Mysql',
            'Tire for full text Search',
            'Jquery and Jquery UI for ajax',
            "Integrated Facebook, Twitter and Linkedin Api's",
            'Implemented Oauth support to authenticate at other applications',
          ],
        },
        {
          title: 'JustbooksClC',
          url: 'http://www.justbooksclc.com/',
          description:
            'Designed and Develop, Application for online book store management system, for reviewing, ordering and renting books online.',
          technologies: [
            'Rails 3 with Ruby 1.9.2 hosted on Passanger + Nginx, with Oracle XE',
            'Solr for full text Search',
            'Jquery and Jquery UI for ajax',
            'ActiveResource for handling web services',
            "Integrated Facebook, Twitter and Google Maps Api's",
            'Secure Payment Gateway integration with CCAvenue and ActiveMerchant',
          ],
        },
        {
          title: 'Brandscope',
          description:
            'Designed and Develop, Merchandise website to bring supplier and retailer togather.',
          technologies: [
            'Rails 3.1 with Ruby 1.9.2 hosted on Unicorn + Nginx, with Mongodb',
            'CSS3 + Compass and Blueprint for styling',
            'Jquery and Jquery UI for ajax',
          ],
        },
      ],
    },
    {
      company: 'Artha42 Innovations Pvt Ltd',
      role: 'Associate Developer',
      startDate: 'Aug 2010',
      endDate: 'Sep 2011',
      projects: [
        {
          title: 'PHR Health Connect',
          url: 'https://www.apolloprism.com/',
          description:
            'Designed and Developed, a web based application, which creates and interconnects parients and doctors among different zone to communicate securely.',
          technologies: [
            'Sinatra with Ruby 1.9.2 hosted on Unicorn / Thin + Nginx, with Mongodb(Replicaset)',
            'Beanstalkd for queue processing',
            'Sphinx for full text search',
            'Jquery and Jquery UI for ajax',
            'Custom ORM built on top of MongoMapper to support access control at the model layer',
            'JRuby based agent for pushing data to the server',
          ],
        },
        {
          title: 'Claps and Boos',
          url: 'http://clapsandboos.com/',
          description:
            'Worked on mainting and enhancement of a movie review website clapsandboos.',
          technologies: [
            'Sinatra with Ruby 1.9.2 hosted on Passanger + Apacahe, with Mongodb',
            'Jquery and Jquery UI for ajax',
            "Integrated Facebook, Twitter and Google Maps Api's",
          ],
        },
      ],
    },
  ],
  education: {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering',
    institution: 'Karunya Unviersity',
    location: 'Coimbatore, Tamilnadu, India',
    startDate: '2006',
    endDate: '2010',
  },
};
