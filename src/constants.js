// work process
import process1 from "./assets/working-process-1.png";
import process2 from "./assets/working-process-2.png";
import process3 from "./assets/working-process-3.png";
import process4 from "./assets/working-process-4.png";

// web development services icons
import ecomWebIcon from "./assets/icons/online-shopping.png";
import socialWebIcon from "./assets/icons/socialmedia.png";
import landingWebIcon from "./assets/icons/landing-page.png";
import customWebIcon from "./assets/icons/software-development.png";

// app development services icons
import iosAppIcon from "./assets/icons/ios-development.png";
import androidAppIcon from "./assets/icons/android-development.png";
import flutterAppIcon from "./assets/icons/flutter-development.png";
import hybridAppIcon from "./assets/icons/hybrid-app-development.png";

// clients
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";

// logo
import logo from "./assets/logo/logo.png";

export { logo };

// client details
export const clientDetails = {
  phone: "919884250324",
  email: "contact@ruribits.com",
  address: "No. 5, 4th cross road, near JVS mills, Karur - 639002",
};

// landing page header links
export const landingPageHeaderLinks = [
  {
    id: 1,
    title: "Home",
    link: "banner",
  },
  {
    id: 2,
    title: "About Us",
    link: "about-us",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  // {
  //   id: 4,
  //   title: "Contact Us",
  //   link: "contact",
  // },
];

// website pages
export const websitePagesLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  // {
  //   id: 2,
  //   title: "Industries",
  //   link: "/industries",
  // },
  {
    id: 3,
    title: "Our Services",
    link: "/services",
  },
];

// working process
export const workingProcess = [
  {
    id: 1,
    title: "In-Depth Consultation",
    description: "Understand your needs, discuss goals.",
    img: process1,
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "Create roadmap, define KPIs, set timeline.",
    img: process2,
  },
  {
    id: 3,
    title: "Design and Development",
    description: "Design visually stunning, develop functional website",
    img: process3,
  },
  {
    id: 4,
    title: "Rigorous Testing",
    description: "Ensure optimal performance, compatibility, security",
    img: process4,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: ecomWebIcon,
    img: require("./assets/landingpage-services-imgs/ecommerce.webp"),
    description:
      "We create powerful e-commerce websites that enhance customer engagement, streamline business operations, and drive sustainable revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: socialWebIcon,
    img: require("./assets/landingpage-services-imgs/socialmedia.webp"),
    description:
      "Developing dynamic and engaging social media websites designed to foster community interaction, boost brand awareness, and encourage user loyalty.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: landingWebIcon,
    img: require("./assets/landingpage-services-imgs/landing.webp"),
    description:
      "Crafting high-conversion landing pages that grab attention and drive meaningful action, tailored to showcase your brand and optimize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: customWebIcon,
    img: require("./assets/landingpage-services-imgs/customweb.webp"),
    description:
      "Building bespoke websites designed specifically for your business, combining innovative design and seamless functionality for a remarkable online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: iosAppIcon,
    img: require("./assets/landingpage-services-imgs/ios.webp"),
    description:
      "We create exceptional iOS apps using Swift and Objective-C, delivering seamless performance, modern design, and enhanced user engagement.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: androidAppIcon,
    img: require("./assets/landingpage-services-imgs/android.webp"),
    description:
      "Our Android apps, crafted with Java and Kotlin, are tailored to your business vision, offering robust features and outstanding user experiences.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: flutterAppIcon,
    img: require("./assets/landingpage-services-imgs/flutter.webp"),
    description:
      "Leverage Flutter’s single codebase to build responsive apps for iOS and Android, ensuring efficiency without compromising on quality.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: hybridAppIcon,
    img: require("./assets/landingpage-services-imgs/hybrid.webp"),
    description:
      "Our hybrid apps deliver seamless functionality across platforms, combining native performance with versatile design for an enhanced user experience.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    img1: require("./assets/services-details/webdev1.webp"),
    img2: require("./assets/services-details/webdev2.webp"),
    title: "Web Development",
    smallPara:
      "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.\n\nAt the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with.",
    keyBenefits: [
      "Responsive and user-friendly design.",
      "Custom-built solutions tailored to your business needs.",
      "Secure and scalable architecture.",
      "Seamless integration with third-party tools and APIs.",
    ],
    detailsPageContent: {
      firstPara: `In the modern digital landscape, web applications play a crucial role
          in our daily activities, work, and communication. From e-commerce to
          educational platforms, these applications empower businesses and
          individuals alike. Building a successful web application requires
          creativity, technical expertise, and a deep understanding of user
          needs.
          \n
          Web development is a blend of front-end and back-end technologies. The
          front-end focuses on user-facing elements, delivering engaging and
          intuitive interfaces that captivate and inform.`,
      servicesSection: `Whether you need a sleek landing page or a complex e-commerce
          platform, we offer comprehensive web development solutions. Our
          expertise spans full-stack development, ensuring both robust back-end
          functionality and intuitive front-end interfaces. Our websites don’t
          just look great—they perform flawlessly, driving conversions and
          delivering measurable results. \n
          On the back-end, we manage the critical logic, data handling, and
          security that power your application. Using technologies like Python,
          PHP, Ruby, and Java, along with databases such as MySQL, PostgreSQL,
          and MongoDB, we build efficient, scalable solutions that ensure
          reliability and performance.`,
    },
  },
  {
    id: 2,
    slug: "app-development",
    img1: require("./assets/services-details/appdev1.webp"),
    img2: require("./assets/services-details/appdev2.webp"),
    title: "App Development",
    smallPara:
      "Mobile applications have become an integral part of our daily lives, transforming the way we communicate, consume information, and conduct business. The development of mobile apps requires a unique set of skills and considerations, as compared to website development.\n\nOne of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",
    keyBenefits: [
      "Cross-platform compatibility for iOS and Android.",
      "User-centric design for better engagement.",
      "Robust performance and offline capabilities.",
      "Advanced security features for data protection.",
    ],
    detailsPageContent: {
      firstPara: `Mobile applications have revolutionized the way we interact with technology, providing seamless access to services, information, and entertainment on the go. Developing a successful mobile app requires a deep understanding of user behavior, platform-specific guidelines, and performance optimization.
          \n
          Our app development process involves creating native and cross-platform apps that deliver exceptional user experiences. We focus on intuitive design, smooth navigation, and robust functionality to ensure your app stands out in the competitive market.`,
      servicesSection: `Our app development services cover the entire lifecycle, from concept to deployment and maintenance. We specialize in building apps for iOS and Android platforms, utilizing technologies like Swift, Kotlin, React Native, and Flutter. Our team ensures your app is optimized for performance, security, and scalability, providing a seamless experience for your users.
          \n
          Whether you need a consumer-facing app or an enterprise solution, we tailor our approach to meet your specific requirements, delivering high-quality apps that drive engagement and achieve your business goals.`,
    },
  },
  {
    id: 3,
    slug: "cloud-computing",
    img1: require("./assets/services-details/cloud-computing-1.webp"),
    img2: require("./assets/services-details/cloud-computing-2.webp"),
    title: "Cloud Computing",
    smallPara:
      "Cloud computing provides scalable and flexible solutions for businesses to store, manage, and process data. It enables organizations to leverage the power of remote servers and services, reducing the need for on-premises infrastructure.\n\nWith cloud computing, businesses can achieve greater efficiency, cost savings, and agility, allowing them to focus on innovation and growth.",
    keyBenefits: [
      "Scalable and flexible infrastructure.",
      "Cost-effective solutions with reduced hardware needs.",
      "Enhanced collaboration and accessibility.",
      "Robust security and data protection.",
    ],
    detailsPageContent: {
      firstPara: `Cloud computing has transformed the way businesses operate, offering scalable and flexible solutions for data storage, management, and processing. By leveraging cloud services, organizations can reduce their reliance on physical infrastructure, lower costs, and improve operational efficiency.
          \n
          Our cloud computing services encompass a wide range of solutions, including cloud migration, infrastructure management, and cloud-native application development. We help businesses harness the power of the cloud to drive innovation and achieve their strategic objectives.`,
      servicesSection: `We provide end-to-end cloud computing services, from initial assessment and strategy development to implementation and ongoing management. Our expertise spans various cloud platforms, including AWS, Azure, and Google Cloud, ensuring we can tailor solutions to meet your specific needs.
          \n
          Our services include cloud architecture design, migration planning, and execution, as well as ongoing optimization and support. We focus on delivering secure, scalable, and cost-effective cloud solutions that enhance your business agility and enable you to stay competitive in the digital landscape.`,
    },
  },
  {
    id: 4,
    slug: "data-analytics",
    img1: require("./assets/services-details/data-engineering-1.webp"),
    img2: require("./assets/services-details/data-engineering-2.webp"),
    title: "Data Analytics",
    smallPara:
      "Data analytics involves the process of examining data sets to draw conclusions and make informed decisions. It encompasses various techniques and tools to analyze, visualize, and interpret data, providing valuable insights for businesses.\n\nBy leveraging data analytics, organizations can optimize operations, improve customer experiences, and drive strategic initiatives.",
    keyBenefits: [
      "Informed decision-making with data-driven insights.",
      "Enhanced operational efficiency and performance.",
      "Improved customer experiences and personalization.",
      "Predictive analytics for future trends and opportunities.",
    ],
    detailsPageContent: {
      firstPara: `Data analytics is a powerful tool that enables businesses to make informed decisions based on data-driven insights. By analyzing large volumes of data, organizations can uncover patterns, trends, and correlations that inform strategic initiatives and drive operational improvements.
          \n
          Our data analytics services encompass a wide range of techniques, including descriptive, diagnostic, predictive, and prescriptive analytics. We help businesses transform raw data into actionable insights that enhance decision-making and drive growth.`,
      servicesSection: `We offer comprehensive data analytics solutions, from data collection and processing to visualization and interpretation. Our team utilizes advanced tools and technologies, such as machine learning, artificial intelligence, and big data platforms, to deliver accurate and meaningful insights.
          \n
          Our services include data warehousing, data mining, and real-time analytics, ensuring you have access to the information you need when you need it. We focus on delivering customized solutions that align with your business goals, helping you optimize operations, improve customer experiences, and stay ahead of the competition.`,
    },
  },
  {
    id: 5,
    slug: "game-development",
    img1: require("./assets/services-details/game-1.webp"),
    img2: require("./assets/services-details/game-2.webp"),
    title: "Game Development",
    smallPara:
      "Game development is a dynamic and creative process that involves designing, developing, and deploying interactive games for various platforms. It combines artistic vision with technical expertise to create engaging and immersive experiences for players.\n\nFrom concept to launch, game development requires a multidisciplinary approach, including programming, design, audio, and storytelling.",
    keyBenefits: [
      "Immersive and engaging gameplay experiences.",
      "Cross-platform compatibility for wider reach.",
      "Innovative and creative game design.",
      "Robust performance and optimization.",
    ],
    detailsPageContent: {
      firstPara: `Game development is a multifaceted process that brings together creativity, technology, and storytelling to create interactive entertainment experiences. From mobile games to console and PC titles, the development process involves designing engaging gameplay mechanics, creating stunning visuals, and ensuring smooth performance.
          \n
          Our game development services cover the entire lifecycle, from initial concept and design to development, testing, and deployment. We focus on delivering immersive and enjoyable experiences that captivate players and keep them coming back for more.`,
      servicesSection: `We offer end-to-end game development solutions, including concept art, 3D modeling, animation, programming, and audio design. Our team is proficient in using industry-standard tools and technologies, such as Unity, Unreal Engine, and Blender, to create high-quality games for various platforms.
          \n
          Whether you're looking to develop a casual mobile game or a complex AAA title, we have the expertise to bring your vision to life. Our services include game design, prototyping, development, and post-launch support, ensuring your game is optimized for performance and delivers a seamless experience for players.`,
    },
  },
  {
    id: 6,
    slug: "cybersecurity-services",
    img1: require("./assets/services-details/cybersecurity-1.webp"),
    img2: require("./assets/services-details/cybersecurity-2.webp"),
    title: "Cybersecurity Services",
    smallPara:
      "Cybersecurity services are essential for protecting businesses from cyber threats and ensuring the security of their digital assets. These services encompass a range of solutions, including threat detection, risk assessment, and incident response.\n\nBy implementing robust cybersecurity measures, organizations can safeguard their data, maintain customer trust, and comply with regulatory requirements.",
    keyBenefits: [
      "Comprehensive threat detection and prevention.",
      "Risk assessment and vulnerability management.",
      "Incident response and recovery.",
      "Compliance with industry standards and regulations.",
    ],
    detailsPageContent: {
      firstPara: `In today's digital age, cybersecurity is more critical than ever. Businesses face a growing number of cyber threats, from data breaches and ransomware attacks to phishing scams and insider threats. Implementing robust cybersecurity measures is essential to protect your digital assets and maintain customer trust.
          \n
          Our cybersecurity services provide comprehensive protection against a wide range of threats. We offer solutions for threat detection, risk assessment, vulnerability management, and incident response, ensuring your business is prepared to defend against cyber attacks.`,
      servicesSection: `We provide a full suite of cybersecurity services, including network security, endpoint protection, and cloud security. Our team of experts uses advanced tools and techniques to identify and mitigate vulnerabilities, ensuring your systems are secure and compliant with industry standards.
          \n
          Our services include security assessments, penetration testing, and security monitoring, as well as incident response and recovery. We work closely with you to develop a customized cybersecurity strategy that addresses your specific needs and helps you stay ahead of emerging threats.`,
    },
  },
  {
    id: 7,
    slug: "iot-development",
    img1: require("./assets/services-details/iot-1.webp"),
    img2: require("./assets/services-details/iot-2.webp"),
    title: "IoT Development",
    smallPara:
      "The Internet of Things (IoT) is revolutionizing how devices and systems interact, enabling seamless connectivity and intelligent automation. IoT solutions enhance operational efficiency, monitor processes in real-time, and improve decision-making through actionable insights.\n\nIoT is transforming industries, from smart homes and cities to manufacturing and healthcare, delivering innovative, data-driven solutions that shape the future.",
    keyBenefits: [
      "Facilitates real-time monitoring and automation.",
      "Improves operational efficiency and productivity.",
      "Enhances decision-making with actionable insights.",
      "Connects and manages devices seamlessly.",
    ],
    detailsPageContent: {
      firstPara: `The Internet of Things (IoT) is transforming the way we live and work by connecting devices and systems to the internet, enabling real-time data exchange and intelligent automation. IoT solutions have the potential to enhance operational efficiency, improve decision-making, and drive innovation across various industries.
          \n
          Our IoT development services encompass the entire lifecycle, from device integration and connectivity to data analytics and application development. We help businesses leverage IoT technology to create smart, connected solutions that deliver tangible benefits.`,
      servicesSection: `We offer comprehensive IoT development services, including hardware design, firmware development, and cloud integration. Our team is experienced in working with a wide range of IoT platforms and protocols, ensuring seamless connectivity and interoperability.
          \n
          Our services include IoT strategy development, device management, and data analytics, providing you with the tools and insights needed to optimize your operations and drive innovation. Whether you're looking to develop a smart home solution or an industrial IoT application, we have the expertise to bring your vision to life.`,
    },
  },
  {
    id: 8,
    slug: "blockchain-development",
    img1: require("./assets/services-details/blockchain1.webp"),
    img2: require("./assets/services-details/blockchain2.webp"),
    title: "Blockchain Development",
    smallPara:
      "Blockchain technology offers decentralized, transparent, and secure solutions for various industries. Our blockchain development services help businesses leverage this revolutionary technology to create trustless systems, enhance security, and streamline operations.\n\nFrom smart contracts to decentralized applications (dApps), we provide comprehensive blockchain solutions tailored to your specific needs.",
    keyBenefits: [
      "Enhanced security and transparency.",
      "Reduced intermediaries and transaction costs.",
      "Immutable record-keeping and audit trails.",
      "Scalable and customizable blockchain solutions.",
    ],
    detailsPageContent: {
      firstPara: `Blockchain technology is revolutionizing the way businesses operate by providing decentralized, transparent, and secure solutions. By eliminating intermediaries and creating trustless systems, blockchain enables more efficient and secure transactions, record-keeping, and asset management.
          \n
          Our blockchain development services encompass a wide range of solutions, including smart contracts, decentralized applications (dApps), and custom blockchain networks. We help businesses harness the power of blockchain to enhance security, streamline operations, and create new opportunities.`,
      servicesSection: `We offer comprehensive blockchain development services, from concept and strategy to implementation and deployment. Our team is proficient in various blockchain platforms, including Ethereum, Hyperledger, and Binance Smart Chain, ensuring we can deliver the right solution for your specific needs.
          \n
          Our services include smart contract development, token creation, decentralized application (dApp) development, and blockchain integration. We focus on delivering secure, scalable, and efficient blockchain solutions that drive innovation and create value for your business.`,
    },
  },
  {
    id: 9,
    slug: "robotic-process-automation",
    img1: require("./assets/services-details/rpa1.webp"),
    img2: require("./assets/services-details/rpa2.webp"),
    title: "Robotic Process Automation (RPA)",
    smallPara:
      "Streamline your business operations with our RPA solutions. By automating repetitive tasks, we help you enhance efficiency, reduce errors, and free up valuable resources, allowing your team to focus on strategic initiatives.\n\nOur RPA services enable businesses to optimize workflows, improve accuracy, and achieve significant cost savings.",
    keyBenefits: [
      "Increased operational efficiency and productivity.",
      "Reduced errors and improved accuracy.",
      "Cost savings through automation of repetitive tasks.",
      "Enhanced employee satisfaction by eliminating mundane work.",
    ],
    detailsPageContent: {
      firstPara: `Robotic Process Automation (RPA) is transforming the way businesses operate by automating repetitive, rule-based tasks that previously required human intervention. By implementing RPA solutions, organizations can enhance efficiency, reduce errors, and free up valuable resources for more strategic initiatives.
          \n
          Our RPA services focus on identifying automation opportunities, designing efficient workflows, and implementing robust solutions that deliver tangible benefits. We help businesses streamline operations, improve accuracy, and achieve significant cost savings through intelligent automation.`,
      servicesSection: `We offer end-to-end RPA services, from process assessment and bot development to implementation and ongoing support. Our team is proficient in leading RPA platforms, including UiPath, Automation Anywhere, and Blue Prism, ensuring we can deliver the right solution for your specific needs.
          \n
          Our services include process analysis and optimization, bot development and deployment, integration with existing systems, and performance monitoring. We focus on delivering scalable and maintainable RPA solutions that drive continuous improvement and support your business growth.`,
    },
  },
  {
    id: 10,
    slug: "artificial-intelligence-development",
    img1: require("./assets/services-details/ai1.webp"),
    img2: require("./assets/services-details/ai2.webp"),
    title: "Artificial Intelligence Development",
    smallPara:
      "Harness the power of AI to make data-driven decisions and enhance customer experiences. Our AI development services include machine learning models, predictive analytics, and intelligent automation tailored to your business objectives.\n\nWe help businesses leverage AI to gain competitive advantages, optimize operations, and create innovative solutions.",
    keyBenefits: [
      "Data-driven decision making and insights.",
      "Enhanced customer experiences through personalization.",
      "Automated processes and intelligent workflows.",
      "Predictive capabilities for proactive business strategies.",
    ],
    detailsPageContent: {
      firstPara: `Artificial Intelligence (AI) is revolutionizing industries by enabling machines to learn from data, recognize patterns, and make intelligent decisions. By implementing AI solutions, businesses can gain valuable insights, automate complex processes, and create personalized experiences that drive growth and innovation.
          \n
          Our AI development services encompass a wide range of solutions, including machine learning models, natural language processing, computer vision, and intelligent automation. We help businesses harness the power of AI to solve complex problems, optimize operations, and create new opportunities.`,
      servicesSection: `We offer comprehensive AI development services, from strategy and planning to implementation and deployment. Our team of data scientists and AI engineers is experienced in developing custom AI solutions that address specific business challenges and deliver measurable results.
          \n
          Our services include data preparation and analysis, model development and training, integration with existing systems, and ongoing optimization. We focus on creating practical, scalable AI solutions that provide real business value and support your long-term objectives.`,
    },
  },
  {
    id: 11,
    slug: "machine-learning-services",
    img1: require("./assets/services-details/ml1.webp"),
    img2: require("./assets/services-details/ml2.webp"),
    title: "Machine Learning Services",
    smallPara:
      "Leverage our machine learning expertise to uncover insights from your data. We build custom models that predict trends, optimize processes, and provide actionable intelligence, empowering your business to make informed decisions.\n\nOur machine learning services help businesses transform raw data into valuable insights and predictive capabilities.",
    keyBenefits: [
      "Predictive analytics for forecasting trends and outcomes.",
      "Pattern recognition for identifying hidden insights.",
      "Process optimization through data-driven improvements.",
      "Automated decision-making for faster response times.",
    ],
    detailsPageContent: {
      firstPara: `Machine Learning (ML) enables computers to learn from data and improve their performance over time without explicit programming. By implementing ML solutions, businesses can uncover patterns, predict outcomes, and make data-driven decisions that drive growth and innovation.
          \n
          Our machine learning services focus on developing custom models that address specific business challenges and deliver actionable insights. We help organizations transform raw data into valuable intelligence that informs strategy, optimizes operations, and creates competitive advantages.`,
      servicesSection: `We offer end-to-end machine learning services, from data collection and preparation to model development, training, and deployment. Our team of data scientists and ML engineers is experienced in various algorithms and techniques, ensuring we can deliver the right solution for your specific needs.
          \n
          Our services include supervised and unsupervised learning, reinforcement learning, deep learning, and ensemble methods. We focus on creating practical, interpretable models that provide real business value and support your decision-making processes.`,
    },
  },
  {
    id: 12,
    slug: "cloud-computing-services",
    img1: require("./assets/services-details/cloud-computing-1.webp"),
    img2: require("./assets/services-details/cloud-computing-2.webp"),
    title: "Cloud Computing Services",
    smallPara:
      "Scale your infrastructure effortlessly with our cloud computing solutions. We offer secure, flexible, and cost-effective cloud services, including cloud storage, computing power, and disaster recovery, ensuring your business operates smoothly.\n\nOur cloud computing services help businesses leverage the power of the cloud to enhance agility, scalability, and efficiency.",
    keyBenefits: [
      "Scalable infrastructure that grows with your business.",
      "Cost-effective solutions with pay-as-you-go pricing.",
      "Enhanced security and compliance.",
      "Improved accessibility and collaboration.",
    ],
    detailsPageContent: {
      firstPara: `Cloud computing has transformed the way businesses operate by providing scalable, flexible, and cost-effective IT infrastructure and services. By leveraging the cloud, organizations can reduce capital expenses, enhance agility, and focus on their core business objectives rather than managing IT infrastructure.
          \n
          Our cloud computing services encompass a wide range of solutions, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). We help businesses design, implement, and manage cloud environments that meet their specific needs and objectives.`,
      servicesSection: `We offer comprehensive cloud computing services, from strategy and planning to migration, implementation, and ongoing management. Our team is experienced in working with leading cloud platforms, including AWS, Azure, and Google Cloud, ensuring we can deliver the right solution for your specific requirements.
          \n
          Our services include cloud architecture design, migration planning and execution, security and compliance, and performance optimization. We focus on creating secure, scalable, and cost-effective cloud solutions that enhance your business agility and support your growth objectives.`,
    },
  },

  {
    id: 13,
    slug: "data-science-services",
    img1: require("./assets/services-details/data-engineering-1.webp"),
    img2: require("./assets/services-details/data-engineering-2.webp"),
    title: "Data Science Services",
    smallPara:
      "Transform raw data into valuable insights with our data science services. We employ advanced analytics and statistical models to help you understand trends, forecast outcomes, and make data-driven decisions that propel your business forward.\n\nOur data science services enable businesses to unlock the full potential of their data and gain competitive advantages.",
    keyBenefits: [
      "Advanced analytics for deeper insights.",
      "Predictive modeling for forecasting trends.",
      "Data visualization for better understanding.",
      "Actionable intelligence for informed decision-making.",
    ],
    detailsPageContent: {
      firstPara: `Data science combines statistical analysis, machine learning, and domain expertise to extract valuable insights from data. By implementing data science solutions, businesses can uncover patterns, predict outcomes, and make data-driven decisions that drive growth and innovation.
          \n
          Our data science services focus on transforming raw data into actionable intelligence that informs strategy, optimizes operations, and creates competitive advantages. We help organizations leverage their data assets to solve complex problems and identify new opportunities.`,
      servicesSection: `We offer end-to-end data science services, from data collection and preparation to analysis, modeling, and visualization. Our team of data scientists and analysts is experienced in various statistical methods and machine learning techniques, ensuring we can deliver the right solution for your specific needs.
          \n
          Our services include exploratory data analysis, statistical modeling, predictive analytics, and data visualization. We focus on creating practical, interpretable insights that provide real business value and support your decision-making processes.`,
    },
  },
  {
    id: 14,
    slug: "natural-language-processing",
    img1: require("./assets/services-details/nlp1.webp"),
    img2: require("./assets/services-details/nlp2.webp"),
    title: "Natural Language Processing (NLP)",
    smallPara:
      "Enhance user interactions with our NLP solutions. From chatbots to sentiment analysis, we develop applications that understand and process human language, improving customer engagement and satisfaction.\n\nOur NLP services help businesses automate communication, analyze text data, and create more intuitive user experiences.",
    keyBenefits: [
      "Automated customer service through intelligent chatbots.",
      "Sentiment analysis for understanding customer feedback.",
      "Text classification for organizing and processing documents.",
      "Language understanding for more natural user interactions.",
    ],
    detailsPageContent: {
      firstPara: `Natural Language Processing (NLP) enables computers to understand, interpret, and generate human language, opening up new possibilities for human-computer interaction and text analysis. By implementing NLP solutions, businesses can automate communication, analyze text data, and create more intuitive user experiences.
          \n
          Our NLP services focus on developing applications that understand and process human language, from chatbots and virtual assistants to sentiment analysis and text classification. We help organizations leverage NLP to enhance customer engagement, automate processes, and gain valuable insights from text data.`,
      servicesSection: `We offer comprehensive NLP services, from text preprocessing and feature extraction to model development and deployment. Our team is experienced in various NLP techniques and frameworks, ensuring we can deliver the right solution for your specific needs.
          \n
          Our services include chatbot development, sentiment analysis, text classification, named entity recognition, and language generation. We focus on creating practical, effective NLP solutions that provide real business value and enhance your customer interactions.`,
    },
  },
  {
    id: 15,
    slug: "cloud-migration-services",
    img1: require("./assets/services-details/cloudmigration1.webp"),
    img2: require("./assets/services-details/cloudmigration2.webp"),
    title: "Cloud Migration Services",
    smallPara:
      "Seamlessly transition to the cloud with our cloud migration services. We ensure minimal disruption and maximum efficiency as we move your data, applications, and workloads to the cloud, optimizing performance and scalability.\n\nOur cloud migration services help businesses modernize their IT infrastructure and leverage the benefits of cloud computing.",
    keyBenefits: [
      "Minimal disruption during migration.",
      "Optimized performance and scalability.",
      "Cost savings through efficient resource utilization.",
      "Enhanced security and compliance.",
    ],
    detailsPageContent: {
      firstPara: `Cloud migration involves moving data, applications, and IT processes from on-premises infrastructure to cloud environments. By migrating to the cloud, businesses can enhance agility, scalability, and cost-efficiency while reducing the burden of managing physical infrastructure.
          \n
          Our cloud migration services focus on planning and executing smooth transitions to the cloud, with minimal disruption to your operations. We help organizations assess their current environment, develop a migration strategy, and implement the migration in a phased, controlled manner.`,
      servicesSection: `We offer comprehensive cloud migration services, from assessment and planning to execution and post-migration support. Our team is experienced in migrating various workloads to leading cloud platforms, including AWS, Azure, and Google Cloud, ensuring we can deliver the right solution for your specific needs.
          \n
          Our services include application assessment, migration planning, data migration, application refactoring, and cloud optimization. We focus on creating secure, efficient, and cost-effective cloud environments that support your business objectives and enable future growth.`,
    },
  },
  {
    id: 16,
    slug: "ui-ux-design",
    img1: require("./assets/services-details/uiux1.webp"),
    img2: require("./assets/services-details/uiux2.webp"),
    title: "UI/UX Design",
    smallPara:
      "Create intuitive and engaging user interfaces with our UI/UX design services. We focus on user-centered design principles to craft aesthetically pleasing and functional interfaces that enhance user satisfaction and retention.\n\nOur UI/UX design services help businesses create digital experiences that delight users and drive engagement.",
    keyBenefits: [
      "Intuitive interfaces that enhance user satisfaction.",
      "Consistent design language across platforms.",
      "Improved user engagement and retention.",
      "Data-driven design decisions based on user research.",
    ],
    detailsPageContent: {
      firstPara: `User Interface (UI) and User Experience (UX) design are critical components of successful digital products. By focusing on user-centered design principles, businesses can create intuitive, engaging interfaces that enhance user satisfaction, drive engagement, and support business objectives.
          \n
          Our UI/UX design services focus on creating digital experiences that delight users and achieve your business goals. We combine aesthetics with functionality, ensuring your products not only look great but also provide seamless, intuitive interactions.`,
      servicesSection: `We offer comprehensive UI/UX design services, from user research and wireframing to visual design and prototyping. Our team of experienced designers follows a user-centered design process, ensuring your products meet the needs and expectations of your target audience.
          \n
          Our services include user research and persona development, information architecture, wireframing and prototyping, visual design, and usability testing. We focus on creating cohesive, intuitive designs that enhance user satisfaction, drive engagement, and support your business objectives.`,
    },
  },
];

// trusted clients
export const clients = [
  {
    id: 1,
    img: client1,
  },
  {
    id: 2,
    img: client2,
  },
  {
    id: 3,
    img: client3,
  },
  {
    id: 4,
    img: client4,
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    img: "",
    name: "Elena K",
    title: "CEO, FinTech Startup",
    description:
      "We approached Ruribits Technology for a decentralized finance (DeFi) platform. Their blockchain development team not only delivered a secure and scalable product but also helped us navigate compliance. It’s rare to find both technical depth and strategic thinking in one team.",
  },
  {
    id: 2,
    img: "",
    name: "Marcus D",
    title: "Creative Director, Indie Game Studio",
    description:
      "We needed a studio that could design and develop a fast-paced mobile game with high visual fidelity. The result? A polished, high-performing game that received 1M+ downloads in the first three months. The game development team at Ruribits Technology absolutely nailed it.",
  },
  {
    id: 3,
    img: "",
    name: "Priya M.",
    title: "CFO, Logistics Company",
    description:
      "Our finance department was buried under manual reporting and reconciliations. Their robotic process automation solutions freed up 40% of our team’s time. We now focus more on strategy and less on spreadsheets.",
  },
  {
    id: 4,
    img: "",
    name: "Ahmed B",
    title: "Product Owner, HealthTech Startup",
    description:
      "Our app looked functional, but wasn’t retaining users. Ruribits Technology redesigned it from the ground up. Their UI and UX design turned it into a sleek, intuitive experience—and our retention metrics jumped significantly.",
  },
];

// industry company serve
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Healthcare",
    img: require("./assets/industries/Healthcare.webp"),
    desc: "Revolutionizing healthcare delivery through intelligent diagnostics, secure patient data platforms, and connected care ecosystems.",
  },
  {
    id: 2,
    title: "Retail & E-commerce",
    img: require("./assets/industries/E-commerce & Retail.webp"),
    desc: "Creating seamless omnichannel experiences with smart inventory systems, personalized shopping journeys, and frictionless transactions.",
  },
  {
    id: 3,
    title: "Financial Services",
    img: require("./assets/industries/Fintech.webp"),
    desc: "Enabling financial innovation through blockchain solutions, intelligent risk assessment, and next-generation security frameworks.",
  },
  {
    id: 4,
    title: "Insurance",
    img: require("./assets/industries/Insurance.webp"),
    desc: "Transforming underwriting and claims with predictive modeling, automated processing, and customer-centric digital experiences.",
  },
  {
    id: 5,
    title: "Hospitality & Tourism",
    img: require("./assets/industries/Hospitality.webp"),
    desc: "Elevating guest satisfaction through intelligent reservation systems, personalized experiences, and operational excellence platforms.",
  },
  {
    id: 6,
    title: "Manufacturing",
    img: require("./assets/industries/Manufacturing.webp"),
    desc: "Powering Industry 4.0 with smart factory solutions, predictive maintenance, and end-to-end supply chain visibility.",
  },
  {
    id: 7,
    title: "On-Demand Economy",
    img: require("./assets/industries/On Demand.webp"),
    desc: "Building resilient platforms with intelligent matching algorithms, real-time optimization, and seamless payment integration.",
  },
  {
    id: 8,
    title: "Food & Beverage",
    img: require("./assets/industries/Food & Restaurant.webp"),
    desc: "Enhancing culinary operations with demand forecasting, digital menu optimization, and integrated delivery management.",
  },
  {
    id: 9,
    title: "Logistics & Transportation",
    img: require("./assets/industries/Logistics & Supply Chain.webp"),
    desc: "Optimizing movement of goods with route intelligence, warehouse automation, and end-to-end visibility solutions.",
  },
  {
    id: 10,
    title: "Education & EdTech",
    img: require("./assets/industries/Education.webp"),
    desc: "Transforming learning with adaptive educational platforms, engagement analytics, and personalized development pathways.",
  },
  {
    id: 11,
    title: "Gaming & Entertainment",
    img: require("./assets/industries/Game.webp"),
    desc: "Creating immersive digital experiences with advanced rendering technologies, behavioral AI, and cross-platform capabilities.",
  },
];


// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require('./assets/portfolio/web-development/5ghomes.webp'),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require('./assets/portfolio/web-development/cold-creekcap.webp'),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require('./assets/portfolio/web-development/think-reality.webp'),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require('./assets/portfolio/web-development/akash-mega-mart.webp'),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require('./assets/portfolio/web-development/midwam.webp'),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require('./assets/portfolio/app-development/akash_mega_mart-app.webp'),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require('./assets/portfolio/app-development/feelit_app.webp'),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require('./assets/portfolio/app-development/klikomics.webp'),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require('./assets/portfolio/app-development/autosnap-app.webp'),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require('./assets/portfolio/app-development/rentop.webp'),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
