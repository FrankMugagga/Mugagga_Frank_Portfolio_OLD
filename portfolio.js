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
    id: 'card_one',
    image: 'images/project/card_works_one.png',
    name: 'Tonic',
    stack: ['CANOPY', 'Back End Dev', 2015],
    menu_descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    portfolio_descrip: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ",
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_one',
    linkToLiveVersion: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
    linkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  },

  {
    id: 'card_two',
    image: 'images/project/card_works_two.png',
    name: 'Multi-Post Stories',
    stack: ['FACE BOOK', 'Full Stack Dev', 2015],
    menu_descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    portfolio_descrip: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_two',
    linkToLiveVersion: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
    linkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  },

  {
    id: 'card_three',
    image: 'images/project/card_works_three.png',
    name: 'Facebook 360',
    stack: ['FACE BOOK', 'Full Stack Dev', 2015],
    menu_descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    portfolio_descrip: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_three',
    linkToLiveVersion: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
    linkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  },

  {
    id: 'card_four',
    image: 'images/project/card_works_four.png',
    name: 'Uber Navigation',
    stack: ['Uber', 'Lead Developer', 2018],
    menu_descrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    portfolio_descrip: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_four',
    linkToLiveVersion: 'https://frankmugagga.github.io/Mugagga_Frank_Portfolio/',
    linkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  },

];

data.forEach((dataItem) => {
  const cardWorks = document.createElement('div');
  cardWorks.id = dataItem.id;
  cardWorks.className = 'card_works_one';
  cardWorks.innerHTML = `
  <div class="snap_cont">
    <img class="portfolio_snap_1" src=${dataItem.image} alt="profile picture with success story:'from school dropout to product designer at facebook'">                    
  </div>   
  <div class="left_block">
    <div class="primary_text">
      <div class="works_header">
        ${dataItem.name}
      </div>
      <ul class="header_details">
        <li class="spec header_details_name">
          ${dataItem.stack[0]}
        </li>
        <li class="spec header_details_specification">
          ${dataItem.stack[1]}
        </li>
        <li class="spec header_details_year">
          ${dataItem.stack[2]}
        </li>
      </ul>
    </div>
    <div class="paragraph_details">
       ${dataItem.portfolio_descrip}      
    </div>
    <ul class="language_list">
      <li class="langs html_lang">
        ${dataItem.technologies[0]}
      </li>
      <li class="langs css_lang">
        ${dataItem.technologies[1]}
      </li>
      <li class="langs javascript_lang">
        ${dataItem.technologies[2]}
      </li>
    </ul>
    <button id=${dataItem.btn_id} class="see_project"  alt="see project">
      ${dataItem.btn}
    </button>

  </div>`;
  worksport.appendChild(cardWorks);
});

const popWindow = document.getElementById('project_popup');

data.forEach((popItem, index) => {
  const popWrapper = document.createElement('div');
  popWrapper.className = 'pop-hide';
  popWrapper.id = `popup_container-${index + 1}`;
  popWrapper.innerHTML = `<div class="primary_text">
         <div class="works_header">
           ${popItem.name} <button id="close-${index + 1}"><img src="images/cross.png"></button>
         </div>
         <ul class="header_details">
           <li class="spec header_details_name">
             ${popItem.stack[0]}
           </li>
           <li class="spec header_details_specification">
             ${popItem.stack[1]}
           </li>
           <li class="spec header_details_year">
             ${popItem.stack[2]}
           </li>
         </ul>
       </div>
  
       <div class="snap_cont">
         <img class="portfolio_snap_1" src=${popItem.image} alt="profile picture with success story:'from school dropout to product designer at facebook'">
       </div>
  
       <div class="popup_leftblock">
         <div class="poparag">
           ${popItem.portfolio_descrip}
         </div>
         <div class="pop_rightblock">
           <ul class="language_list">
             <li class="langs html_lang">
              ${popItem.technologies[0]}
             </li>
      
             <li class="langs css_lang">
               ${popItem.technologies[1]}
             </li> 
      
             <li class="langs javascript_lang">
               ${popItem.technologies[2]}
             </li>
            </ul>
             <div class="pop_btn">
               <a href=${popItem.linkToLiveVersion} alt="see live">
     
                 <button class="get_in_touch ">see live &nbsp;  <img src="images/Export.png" alt="see live"> </button>                   
               </a>
               <a href=${popItem.linkToSource} alt="see source">
                 <button class="get_in_touch "> see source &nbsp; <img src="images/popgit.png" alt="see source">   </button>                      
               </a>
             </div>         
           </div>                 
         </div>
       </div>`;
  popWindow.appendChild(popWrapper);
});

const btnOne = document.getElementById('btn_one');
const closeOne = document.getElementById('close-1');

const btnTwo = document.getElementById('btn_two');
const closeTwo = document.getElementById('close-2');

const btnThree = document.getElementById('btn_three');
const closeThree = document.getElementById('close-3');

const btnFour = document.getElementById('btn_four');
const closeFour = document.getElementById('close-4');

btnOne.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-1');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});

closeOne.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-1');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});

btnTwo.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-2');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});

closeTwo.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-2');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});

btnThree.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-3');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});

closeThree.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-3');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});

btnFour.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-4');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});

closeFour.addEventListener('click', () => {
  popWindow.classList.toggle('pop-hide');
  popWindow.classList.toggle('pop-show');
  const innerPopup = document.getElementById('popup_container-4');
  innerPopup.classList.toggle('pop-inner-show');
  innerPopup.classList.toggle('pop-hide');
});