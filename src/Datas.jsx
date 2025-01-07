//import icons
import { SiCplusplus, SiCsharp, SiPython, SiJavascript, SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiLaravel, SiMysql, SiPhp,  SiGmail, SiExpress, SiTailwindcss    } from "react-icons/si";
import { FaJava, FaHtml5, FaReact, FaCss3, FaFigma, FaFacebook ,FaInstagram,FaLinkedin, FaTwitter, FaGithub, FaNodeJs  } from "react-icons/fa";

import { DiJavascript, DiCss3 , DiPython, DiGit , DiReact, DiPhotoshop, DiCode} from "react-icons/di";
import { BsTelephoneFill } from "react-icons/bs";

export const data = {
  // landing
    firstName: "ivan",
    lastName: "martin",
    myPicture: "image.jpg",
    profession: ["FRONTEND DEVELOPER", "BACKEND DEVELOPER"],

    // education
    educationData:[
          {   year: "2024 - Present", 
              title: "Backend Developer", 
              location: "Pisopay.com Inc" 
          },
          {   year: "2023", 
              title: "Frontend Developer", 
              location: "Department of Education - Manila" 
          },
          {   year: "2019 - 2023", 
              title: "Bachelor of Science in Information Technology", 
              location: "Universidad De Manila" 
          },
          {   year: "2018", 
              title: "Computer System Servicing NC II", 
              location: "Tesda Quezon City" 
          },
          {   year: "2017 - 2019", 
              title: "Information & Communication Technology", 
              location: "Timoteo Paez Integrated School" 
          }
    ],
    //services
    services:[
          {   title: 'Frontend Development', 
              text: 'I work with HTML/CSS, Javascript, ReactJS, TailwindCSS for Frontend Development.', 
              icons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaReact />, <SiTailwindcss  /> ],
          },
          {   title: 'Digital art / Graphic Designing', 
              text: 'I use Adobe Photoshop, Illustrator and Blender for 3D rendering. ', 
              icons: [<SiAdobephotoshop />, <SiAdobeillustrator />, <SiBlender />],
          },
          {   title: 'Web Design', 
              text: "I use Figma to create intuitive and visually appealing digital experiences.", 
              icons: [<FaFigma />],
          },
          {   title: 'Backend Developement', 
              text: "As a programmer, I develop efficient software solutions for various platforms and applications.", 
              text: "I have experience using PHP/Laravel, MySQL, NodeJS/ExpressJS for Backend Development.", 
              icons: [<SiPhp  />, <SiMysql  />, <SiLaravel />, <FaNodeJs  />, <SiExpress />]
          },
    ],
    //portfolio
      images: [
        {   
            img: require('./images/zentrySS.png'), 
            title: 'Zentry', 
            icons: ["ReactJS", "TailwindCSS", "GSAP"], 
            info: "Zentry unites every player from countless games and platforms.", 
            fscreenImg: require('./images/zentry.png' ),
            link: "https://zentry-inky.vercel.app/"
        },
        {   
            img: require('./images/shopzone.jpg'), 
            title: 'Deal-It Shop', 
            icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], 
            info: "Deal-It is a shop where you can buy and sell items.",
            fscreenImg: require('./images/shopzone.jpg'),
            link: "#"
        },
        {   
            img: require('./images/UDMAPS.png'), 
            title: 'UDMAPS AR Navigation', 
            icons: ['Unity', 'C Sharp', '3D Blender', 'Firebase'], 
            info: "UDMAPS is an AR Navigation system exclusively only for UDM vicinity.", 
            fscreenImg: require('./images/UDMAPS.jpg'),
            link: "https://drive.google.com/drive/folders/1FCb0pzqOHMw5LsKuaIywVHWXvsM4zlhF?usp=sharing"
        },
        {   
            img: require('./images/tc.png'), 
            title: 'Thruimp Co. Shop', 
            icons: ["ReactJS", 'ExpressJS', "MySQL"], 
            info: "Truimp is your go-to thrift shop where you can find a wide range of thrifted products at unbeatable prices.", 
            fscreenImg: require('./images/fsTc.png' ),
            link: "https://github.com/Jushiro012623/triump-co/"
        },
        {   
            img: require('./images/clinic.png'), 
            title: 'UDM Clinic Management', 
            icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], 
            info: "UDM Clinic System is built to track the patient's medical records.", 
            fscreenImg: require('./images/fsClinic.png'),
            link: "https://udmanagement.000webhostapp.com/"
        },
        {   
            img: require('./images/bms.png'), 
            title: 'Barangay Management', 
            icons: ["Mantine", "NextJS", "MongoDB"], 
            info: "Barangay Management System is built for the barangay 107 residence and councils.", 
            fscreenImg:require('./images/fsBms.png' ),
            link: "https://bms-sage.vercel.app/"
        }
      ],

      //Expertise
       icon:[
        { icons: <SiBlender />, title:'3D Rendering ' ,percent:'60%'},
        { icons: <DiJavascript/>, title:'JavaScript',percent:'89%'},
        { icons: <DiPython />, title:'Python',percent:'62%'},
        { icons: <DiReact/>, title: 'ReactJS',percent:'79%'},
        { icons: <DiPhotoshop/>, title:'Photoshop',percent:'95%'},
        { icons: <DiCode/>, title: 'Coding',percent:'80%'},
        { icons: <SiExpress />, title: 'ExpressJS',percent:'80%'},
        { icons: <SiLaravel/>, title: 'Laravel',percent:'87%'},
     ],
     //Contact

      category :[
      { 
        target:'_blank', link:'https://mail.google.com/mail/u/0/#inbox?compose=new', 
        contact: 'ivanallen64@gmai.com' , 
        icons: <SiGmail />, 
        class: 'gmail'
      },
      { 
        target:'',link: '#contact', 
        contact: '+63-9125-2797-54', 
        icons: <BsTelephoneFill/>, 
        class: 'phone' 
      }
      ],

      socialMeida : [ 
                <a href='https://www.facebook.com/ivanallen.macabontoc' target='_blank' ><FaFacebook /></a>,  
                <a href='https://www.instagram.com/sternritter_ivan/' target='_blank'><FaInstagram /></a>, 
                <a href='https://www.linkedin.com/in/ivan-macabontoc-0a0712295' target='_blank'><FaLinkedin /></a>, 
                <a href='https://www.twitter.com/Jushiro012623' target='_blank'><FaTwitter /></a>,
                <a href='https://github.com/Jushiro012623' target='_blank'><FaGithub /></a>
        ],  

      
}
