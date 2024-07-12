//import icons
import { SiCplusplus, SiCsharp, SiPython, SiJavascript, SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiLaravel  } from "react-icons/si";
import { FaJava, FaHtml5, FaReact, FaCss3, FaFigma } from "react-icons/fa";

import { DiJavascript, DiCss3 , DiPython, DiGit , DiReact, DiPhotoshop, DiCode} from "react-icons/di";

import { SiGmail } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook ,FaInstagram,FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const data = {
  // landing
    firstName: "ivan",
    lastName: "martin",
    myPicture: "image.jpg",
    profession: ["GRAPHIC DESIGNER", "PROGRAMMER", "FRONTEND DEVELOPER", "UI/UX DESIGNER"],

    // education
    educationData:[
          {   year: "2024", 
              title: "Backend Developer", 
              location: "Pisopay.com Inc" 
          },
          {   year: "2023", 
              title: "IT Specialist", 
              location: "Department of Education - Manila" 
          },
          {   year: "2019", 
              title: "Bachelor of Science in Information Technology", 
              location: "Universidad De Manila" 
          },
          {   year: "2017", 
              title: "Information & Communication Technology", 
              location: "Timoteo Paez Integrated School" 
          }
    ],
    //services
    services:[
          {   title: 'Frontend Development', 
              text: 'I work with HTML/CSS, React and Django for Development.', 
              icons: [<FaHtml5 />, <FaCss3 />, <SiJavascript />, <FaReact />],
          },
          {   title: 'Digital art / Graphic Designing', 
              text: 'I use Adobe Photoshop, Illustrator and Blender for 3D rendering. ', 
              icons: [<SiAdobephotoshop />, <SiAdobeillustrator />, <SiBlender />],
          },
          {   title: 'Web Design', 
              text: "I use Figma to create intuitive and visually appealing digital experiences.", 
              icons: [<FaFigma />],
          },
          {   title: 'Developer', 
              text: "As a programmer, I develop efficient software solutions for various platforms and applications.", 
              icons: [<SiCplusplus />, <SiCsharp />, <SiPython />, <FaJava />]
          },
    ],
    //portfolio
      images: [
        {   
            img: require('./images/tc.png'), 
            title: 'Thruimp Co. Shop', 
            icons: ['ReactJs', 'NodeJs'], 
            info: "Truimp is your go-to thrift shop where you can find a wide range of thrifted products at unbeatable prices.", 
            fscreenImg: require('./images/fsTc.png' ) 
        },
        {   
            img: require('./images/shopzone.jpg'), 
            title: 'Deal-It', 
            icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], 
            info: "Barangay Management System is built for the barangay 107 residence and councils.",
            fscreenImg: require('./images/shopzone.jpg')  
        },
        {   
            img: require('./images/UDMAPS.png'), 
            title: 'UDMAPS AR NAVIGATION', 
            icons: ['Unity', 'C Sharp', '3D Blender'], 
            info: "UDMAPS is an AR Navigation system exclusively only for UDM vicinity.", 
            fscreenImg: require('./images/UDMAPS.jpg')
        },
        {   
            img: require('./images/clinic.png'), 
            title: 'UDM Clinic System', 
            icons: ['HTML/CSS', 'Javascript', 'PHP/MySQL'], 
            info: "UDM Clinic System is built to track the patient's medical records.", 
            fscreenImg: require('./images/fsClinic.png')
        },
        {   
            img: require('./images/bms.png'), 
            title: 'Barangay Management', 
            icons: ['ReactJs', 'NextJs'], 
            info: "Barangay Management System is built for the barangay 107 residence and councils.", 
            fscreenImg:require('./images/fsBms.png' )
        }
      ],

      //Expertise
       icon:[
        { icons: <SiBlender />, title:'3D Rendering ' ,percent:'50%'},
        { icons: <DiJavascript/>, title:'JavaScript',percent:'89%'},
        { icons: <DiPython />, title:'Python',percent:'59%'},
        { icons: <DiReact/>, title: 'ReactJS',percent:'69%'},
        { icons: <DiPhotoshop/>, title:'Photoshop',percent:'98%'},
        { icons: <DiCode/>, title: 'Coding',percent:'75%'},
        { icons: <DiGit/>, title: 'Git',percent:'70%'},
        { icons: <SiLaravel/>, title: 'Laravel/PHP',percent:'70%'},
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
