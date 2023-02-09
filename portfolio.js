const menuselect = document.querySelector('.sidebut');
const openMenu = document.querySelector('.menu_nav');
const closeMenu = document.querySelector('.exit');

function open() {
  openMenu.style.display = 'block';
  openMenu.classList.toggle('open');
  menuselect.style.visibility = 'hidden';
  closeMenu.style.visibility = 'visible';
}

function close() {
  openMenu.style.display = 'none';
  openMenu.classList.remove('open');
  menuselect.style.visibility = 'visible';
  closeMenu.style.visibility = 'hidden';
}

menuselect.addEventListener('click', open);
closeMenu.addEventListener('click', close);
openMenu.addEventListener('click', close);

const worksport = document.getElementById('works_portfolio');

const data = [
  {
  id1 : 'card_one',
  image_one : 'images/project/card_works_one.png',
  name : 'Tonic',
  stack : ['CANOPY', 'Back End Dev', 2015],
  menu_descrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  portfolio_descrip : ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
  technologies: [
      'html',
      'css',
      'javascript'
  ],
  btn1 : 'See Project',
  linkToLiveVersion: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  inkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
}, 

{
  id2 : 'card_two',
  image_two : 'images/project/card_works_two.png',
  name2 : 'Multi-Post Stories',
  stack2 : ['FACE BOOK', 'Full Stack Dev', 2015],
  menu_descrip2 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  portfolio_descrip2 : ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  technologies2: [
      'html',
      'Ruby on rails',
      'css',
      'javascript'
  ],
  btn2 : 'See Project',
  linkToLiveVersion2: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  inkToSource2: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
},

{
  id3 : 'card_three',
  image_three : 'images/project/card_works_three.png',
  name3 : 'Facebook 360',
  stack3 : ['FACE BOOK', 'Full Stack Dev', 2015],
  menu_descrip3 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  portfolio_descrip3 : "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  technologies3: [
      'html',
      'Ruby on rails',
      'css',
      'javascript'
  ],
  btn3 : 'See Project',
  linkToLiveVersion3: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  inkToSource3: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
},

{
  id4 : 'card_four',
  image_four : 'images/project/card_works_four.png',
  name4 : 'Uber Navigation',
  stack4 : ['Uber', 'Lead Developer', 2018],
  menu_descrip4 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  portfolio_descrip4 : 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  technologies4: [
      'html',
      'Ruby on rails',
      'css',
      'javascript'
  ],
  btn4 : 'See Project',
  linkToLiveVersion4: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  inkToSource4: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
}

];

worksport.innerHTML +=`
<div id=${data[0].id1} class="card_works_one">
  <div class="snap_cont">
    <img class="portfolio_snap_1" src=${data[0].image_one} alt="profile picture with success story:'from school dropout to product designer at facebook'">                    
  </div>   
  <div class="left_block">
    <div class="primary_text">
      <div class="works_header">
        ${+"right"+data[0].name}
      </div>
      <ul class="header_details">
        <li class="spec header_details_name">
          ${data[0].stack[0]}
        </li>
        <li class="spec header_details_specification">
          ${data[0].stack[1]}
        </li>
        <li class="spec header_details_year">
          ${data[0].stack[2]}
        </li>
      </ul>
    </div>
    <div class="paragraph_details">
       ${data[0].portfolio_descrip}      
    </div>
    <ul class="language_list">
      <li class="langs html_lang">
        ${data[0].technologies[0]}
      </li>
      <li class="langs css_lang">
        ${data[0].technologies[1]}
      </li>
      <li class="langs javascript_lang">
        ${data[0].technologies[2]}
      </li>
    </ul>
    <button id=${data[0].id1} class="see_project"  alt="see project">
      ${data[0].btn1}
    </button>

  </div>
</div> 


<div id=${data[1].id2}  class="card_two_four card_works_one">
  <div  class="snap_cont">
    <img class="portfolio_snap_1" src=${data[1].image_two}  alt="profile picture with availability information">                    
  </div>
  <div class="left_block block-2_4 ">
    <div class="primary_text">
      <div class="works_header">
        ${data[1].name2 }
      </div>
      <ul class="header_details">
        <li class="spec header_details_name">
          ${data[1].stack2[0]}
        </li>
        <li class="spec header_details_specification">
          ${data[1].stack2[1]}
        </li>
        <li class="spec header_details_year">
          ${data[1].stack2[2]}
        </li>
       </ul>
    </div>
    <div class="paragraph_details">
      ${data[1].portfolio_descrip2}  
    </div>
    <ul class="language_list">
      <li class="langs html_lang">
        ${data[1].technologies2[0]}
      </li>
      <li class="langs ruby_lang">
        ${data[1].technologies2[1]}
      </li> 
      <li class="langs css_lang">
        ${data[1].technologies2[2]}
      </li>
      <li class="langs javascript_lang">
        ${data[1].technologies2[3]}
      </li>
    </ul>
     <button id=${data[1].id2} class="see_project" alt="see project">
       ${data[1].btn2 }
    </button>

  </div>
</div>


<div id=${data[2].id3}  class="card_works_one">
  <div  class="snap_cont">
    <img class="portfolio_snap_1" src=${data[2].image_three}  alt="gym fit yoga showing a lady with her legs on her head">                    
  </div>

  <div class="left_block">

    <div class="primary_text">
      <div class="works_header">
        ${data[2].name3}
      </div>
      <ul class="header_details">
        <li class="spec header_details_name">
          ${data[2].stack3[0]}
        </li>
        <li class="spec header_details_specification">
          ${data[2].stack3[1]}
        </li>
        <li class="spec header_details_year">
          ${data[2].stack3[2]}
        </li>
      </ul>
    </div>
    <div class="paragraph_details">
      ${data[2].portfolio_descrip3} 
    </div>
    <ul class="language_list">
      <li class="langs html_lang">
        ${data[2].technologies3[0]}
      </li>

      <li class="langs ruby_lang">
        ${data[2].technologies3[1]}
      </li> 

      <li class="langs css_lang">
        ${data[2].technologies3[2]}
      </li>
      <li class="langs javascript_lang">
        ${data[2].technologies3[3]}
      </li>
    </ul>
    <button id=${data[2].id3} class="see_project" alt="see project">
      ${data[2].btn3}                       
    </button>

  </div>    
</div>


<div class="card_two_four card_works_one">

  <div  id=${data[3].id4}  class="snap_cont">
    <img class="portfolio_snap_1" src=${data[3].image_four}  alt="professional art printing showing pictures">                    
  </div>               

  <div class="left_block">

    <div class="primary_text">
      <div class="works_header">
        ${data[3].name4}                          
      </div>

      <ul class="header_details">
        <li class="spec header_details_name">
          ${data[3].stack4[0]}
        </li>
        <li class="spec header_details_specification">
          ${data[3].stack4[1]}
        </li>
        <li class="spec header_details_year">
          ${data[3].stack4[2]}
        </li>
      </ul>
    </div>
    <div class="paragraph_details">
      ${data[3].portfolio_descrip4} 
    </div>

    <ul class="language_list">
      <li class="langs html_lang">
        ${data[3].technologies4[0]}
      </li>

      <li class="langs ruby_lang">
        ${data[3].technologies4[1]}
      </li> 

      <li class="langs css_lang">
        ${data[3].technologies4[2]}
      </li>
      <li class="langs javascript_lang">
        ${data[3].technologies4[3]}
      </li>
    </ul>
    <button id=${data[3].id4} class="see_project" alt="see project">
      ${data[3].btn4} 
    </button>


  </div>
</div>                    

`;


const pop_data = [
  {
  id : 'card_one',
  image : 'images/project/card_works_one.png',
  name : 'Tonic',
  stack : ['CANOPY', 'Back End Dev', 2015],  
  portfolio_descrip : ' A daily selection of privately personalized reads; no accounts or sign-ups required.',  
  technologies: [
      'html',
      'jvascript',
      'css'
  ],
  technologies2: ['github', 'Bootstraps', 'ruby'],
  btn1 : 'See Live',
  btn2 : 'See source',
  linkToLiveVersion: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
  linkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
}, 

{
  id : 'card_two',
  image : 'images/project/card_works_two.png',
  name : 'Multi-Post Stories',
  stack : ['FACE BOOK', 'Full Stack Dev', 2015],  
  portfolio_descrip : ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  technologies: [
      'html',
      'Ruby on rails',
      'css',
      'javascript'
  ],
  technologies2: ['github', 'Bootsrtap', 'ruby'],
  btn1 : 'See Live',
  btn2 : 'See source',
  linkToLiveVersion: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
  linkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
},

{
  id : 'card_three',
  image : 'images/project/card_works_three.png',
  name : 'Facebook 360',
  stack : ['FACE BOOK', 'Full Stack Dev', 2015],  
  portfolio_descrip: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  technologies: [
      'html',
      'Ruby on rails',
      'css',
      'javascript'
  ],
  technologies2: ['github', 'Bootsrtap', 'ruby'],
  btn1 : 'See Live',
  btn2 : 'See source',
  linkToLiveVersion: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
  linkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
},

{
  id : 'card_four',
  image : 'images/project/card_works_four.png',
  name : 'Uber Navigation',
  stack : ['Uber', 'Lead Developer', 2018],  
  portfolio_descrip : 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  technologies: [
      'html',
      'javascript',
      'css',     
  ],
  
  btn1 : 'See Live',
  btn2 : 'See source',
  linkToLiveVersion : 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
  linkToSource : 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
}

];

const pop_window = document.querySelector('#project_popup');
const body = document.querySelectorAll('body');
const btn = documnet.querySelectorAll('button');




btn.addEventListener('click',openpop)



//const pop_window = document.getElementById('project_popup');



//let btn = 'card_three';

function openpop() {
  pop_window.style.display = 'block';
  openMenu.classList.toggle('open');
  btn.style.visibility = 'hidden';
  //closeMenu.style.visibility = 'visible';

    pop_window.innerHTML += `   `;
   let pop_html = '';

for (let i=0;i<pop_data.length;i++){
  if(pop_data[i].id === btn){

    pop_html += `

    <div id="popup_container">

      <div class="primary_text">
        <div class="works_header">
          ${pop_data[i].name} <img src="images/cross.png">
        </div>
        <ul class="header_details">
          <li class="spec header_details_name">
            ${pop_data[i].stack[0]}
          </li>
          <li class="spec header_details_specification">
            ${pop_data[i].stack[1]}
          </li>
          <li class="spec header_details_year">
            ${pop_data[i].stack[2]}
          </li>
        </ul>
      </div>

      <div class="snap_cont">
        <img class="portfolio_snap_1" src=${pop_data[i].image} alt="profile picture with success story:'from school dropout to product designer at facebook'">
      </div>

      <div class="popup_leftblock">
        <div class="poparag">
          ${pop_data[i].portfolio_descrip}
        </div>
        <div class="pop_rightblock">
          <ul class="language_list">
            <li class="langs html_lang">
             ${pop_data[i].technologies[0]}
            </li>
    
            <li class="langs ruby_lang">
              ${pop_data[i].technologies[1]}
            </li> 
    
            <li class="langs css_lang">
              ${pop_data[i].technologies[2]}
            </li>
      
            </ul>

            <ul class="language_list">
              <li class="langs html_lang">
                ${pop_data[i].technologies2[0]}
              </li>    
              <li class="langs ruby_lang">
                ${pop_data[i].technologies2[1]}
              </li> 
    
              <li class="langs css_lang">
                ${pop_data[i].technologies2[2]}
              </li>
            </ul>                  
                    

            <div class="pop_btn">
              <a href=${pop_data[i].linkToLiveVersion} alt="see live">
   
                <button class="get_in_touch "> ${pop_data[i].btn1} &nbsp;  <img src="images/Export.png" alt="see live"> </button>                   
              </a>
              <a href=${pop_data[i].linkToSource} alt="see source">
                <button class="get_in_touch "> ${pop_data[i].btn2} &nbsp; <img src="images/popgit.png" alt="see source">   </button>                      
              </a>
            </div>         


          </div>        
           

        </div>

      </div>
        
      <footer class="home_indicator">

      </footer>





    </div>
       
    
    `;

  }
}

}







  







