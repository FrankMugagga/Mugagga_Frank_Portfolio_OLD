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
    image: 'images/projectpictures/portfolioprofile.png',
    name: 'My profile',
    stack: ['CANOPY', 'Back End Dev', 2015],
    menu_descrip: "My online portfolio showcasing the projects that i have been able to complete. Built on HTML,CSS & JavaScript",
    portfolio_descrip: 'My online portfolio showcasing the projects that i have been able to complete. Built on HTML,CSS & JavaScript',
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
    image: 'images/projectpictures/codingminds.png',
    name: 'Coding Minds',
    stack: ['FACE BOOK', 'Full Stack Dev', 2015],
    menu_descrip: 'Coding_Minds Capstone is a website about an annual software summit in which different industry experts address key current coding and software issues. Built on HTML and CSS',
    portfolio_descrip: 'Coding_Minds Capstone is a website about an annual software summit in which different industry experts address key current coding and software issues. Built on HTML and CSS',
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_two',
    linkToLiveVersion: 'https://frankmugagga.github.io/codingminds_capstone/',
    linkToSource: 'https://github.com/FrankMugagga/codingminds_capstone',
  },

  {
    id: 'card_three',
    image: 'images/projectpictures/todolist.png',
    name: 'Tod do List',
    stack: ['FACE BOOK', 'Full Stack Dev', 2015],
    menu_descrip: 'To-do List is an app designed to add, edit and remove a list of tasks to accomplish. Built on javascript',
    portfolio_descrip: 'To-do List is an app designed to add, edit and remove a list of tasks to accomplish. Built on javascript',
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_three',
    linkToLiveVersion: 'https://frankmugagga.github.io/todo_list/dist/',
    linkToSource: 'https://github.com/FrankMugagga/todo_list',
  },

  {
    id: 'card_four',
    image: 'images/projectpictures/awesomebooks.png',
    name: 'Awesome Books',
    stack: ['Uber', 'Lead Developer', 2018],
    menu_descrip: 'Awesome books is an app to add, remove and display book titles and corresponding authors. Built on JavaScript, HTML,CSS npm and Luxon',
    portfolio_descrip: 'Awesome books is an app to add, remove and display book titles and corresponding authors. Built on JavaScript, HTML,CSS npm and Luxon',
    technologies: [
      'html',
      'css',
      'javascript',
    ],
    btn: 'See Project',
    btn_id: 'btn_four',
    linkToLiveVersion: 'https://frankmugagga.github.io/AwesomebooksES6/',
    linkToSource: 'https://github.com/FrankMugagga/AwesomebooksES6',
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
           ${popItem.name} <button id="close-${index + 1}"><img src="images/cross1.png"></button>
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

const form = document.forms[0];
const contEmail = form.elements[1];

const contSubmit = document.querySelector('button[type=submit]');
const message = document.querySelector('form > span');

contSubmit.addEventListener('click', (event) => {
  const { value } = contEmail;
  const lowercase = value.toLowerCase();
  if (value !== lowercase) {
    event.preventDefault();
    message.style.color = '#fff';
    message.style.background = 'red';
    message.innerHTML = 'Please write, your email in small letters';
    contEmail.focus();
    contEmail.style.border = '4px solid red';
  }
});