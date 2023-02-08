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



const data = [
  {
  id : 1,
  name : 'Tonic',
  menu_descrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  portfolio_descrip : ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
  image_one : 'images/project/card_works_one.png',
  technologies: [
      'html',
      'css',
      'javascript'
  ],
  stack : ['CANOPY', 'Back End Dev', 2015],
  linkToLiveVersion: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio',
  inkToSource: 'https://github.com/FrankMugagga/Mugagga_Frank_Portfolio'
}  

];

let worksport = document.getElementById('works_portfolio');

worksport.innerHTML +=`
<div class="card_works_one">

          <div class="snap_cont">
              <img class="portfolio_snap_1" src=${data[0].image_one} alt="profile picture with success story:'from school dropout to product designer at facebook'">                    
          </div>      
          <div class="left_block">

          <div class="primary_text">
              <div class="works_header">${data[0].name}
              </div>
            

</div>
`;
