// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Ola, eu sou o Stive",
  headerTagline: [
    //Line 1 For Header
    "Portifólio",
    //Line 2 For Header
    "Hobbies, Habilidades, ",
    //Line 3 For Heade
    "e experiências",
  ],
  //   Header Paragraph
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "stiveatormes@gmail.com",
  contactNumber: "5545998062894",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Meu guru", //Project Title - Add Your Project Title Here
      para:
        "Trabalhei no auxílio do desenvolvimento do Front End do site MeuGuru", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/3rawoiL.png",
      //Project URL - Add Your Project Url Here
      url: "https://meuguru.net/?gclid=EAIaIQobChMIyb24nIHh8wIVVwWRCh1GrQ-cEAAYASAAEgKdxfD_BwE",
    },
    {
      title: "Este site Portifólio", //Project Title - Add Your Project Title Here
      para:
        "Meu perfil no gitHub com código deste site Portifólio", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/FxuG7Kb.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Stivea/Portifolio",
    },
    {
      title: "Certificações em progresso", //Project Title - Add Your Project Title Here
      para:
        "A certificação que estou concluindo atualmente", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.imgur.com/4VW5N9b.jpg?1",
      //Project URL - Add Your Project Url Here
      url: "https://www.udemy.com/course/curso-de-reactjs-nextjs-completo-do-basico-ao-avancado/",
    },
  

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Meu nome é Stive, tenho 23 anos atualmente cursando Engenharia civil na Universidade Tecnológica Federal do Paraná em processo de transferência para o curso de Sistema para Internet.",
  aboutParaTwo:
    "Estou me especializando em desenvolvimento Front End na escola uDemy no curso Front-End Design Essencial e  no Curso de React.Js + Next.Js completo do básico ao avançado.",
  aboutParaThree:
    "Tenho experiência no auxilio de desenvolvimento de web-sites e estou buscando oportunidade na área de Front End para aprofundar meus conhecimentos.",
  aboutImage:
    "https://i.imgur.com/3ro0iGl.jpg?1",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Conhecimento em HTML adquirido no curso Front-End Design",
    },
    {
      img: cssIcon,
      para:
        "Conhecimento em CSS adquirido no curso de Front-End Design",
    },
    {
      img: jsIcon,
      para:
        "Conhecimento de javaScript adquirido no curso de fundamentos de programação da UTFPR e aprofundado em experiências profissionais",
    },
    {
      img: reactIcon,
      para:
        "Atualmente me epecializando em React no curso de React.Js + Next.Js completo do básico ao avançado na Udemy",
    },
    {
      img: designIcon,
      para:
        "Domínio de planta baixa e de projeto arquitetônico adquirido na graduação de Engeharia civil",
    },
  
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Hobbies",
  promotionPara:
    "Sempre pratiquei esportes como hobbie, desde os individuais até os coletivos, era capitão do time de basquete de Toledo até os 16 anos. Atualmente jogo futebol, e sempre priorizando o trabalho em equipe para garantir o desempenho do time. Também pratíco musculação, melhorando a disposição e a saúde e consequentemente o desempenho acadêmico",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/Stivea" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/stivealisson/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
