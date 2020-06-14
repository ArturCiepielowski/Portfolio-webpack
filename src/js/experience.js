"use strict";

import '../scss/main.scss';


const navigationSwitcher = document.querySelector(".navigation__switcher--js");

navigationSwitcher.addEventListener("click", (e) => {
  const navigationList = document.querySelector(".navigationColumn--js");
  navigationList.classList.toggle("navigationColumn--visible");
  
  const openMenuJs = document.querySelector(".position--js");
  openMenuJs.classList.toggle("position--openMenu")

});

const navigationNc1 = document.querySelector(".navigation__iteamColumn1--js");

navigationNc1.addEventListener("click", (e) => {
  const navigationListNc = document.querySelector(".navigationColumn--js");
  navigationListNc.classList.toggle("navigationColumn--visible");

  const openMenuJs = document.querySelector(".position--js");
  openMenuJs.classList.toggle("position--openMenu")
});

const navigationNc2 = document.querySelector(".navigation__iteamColumn2--js");

navigationNc2.addEventListener("click", (e) => {
  const navigationListNc2 = document.querySelector(".navigationColumn--js");
  navigationListNc2.classList.toggle("navigationColumn--visible");

  const openMenuJs = document.querySelector(".position--js");
  openMenuJs.classList.toggle("position--openMenu")
});

const navigationNc3 = document.querySelector(".navigation__iteamColumn3--js");

navigationNc3.addEventListener("click", (e) => {
  const navigationListNc3 = document.querySelector(".navigationColumn--js");
  navigationListNc3.classList.toggle("navigationColumn--visible");

  const openMenuJs = document.querySelector(".position--js");
  openMenuJs.classList.toggle("position--openMenu")
});

const navigationNc4 = document.querySelector(".navigation__iteamColumn4--js");

navigationNc4.addEventListener("click", (e) => {
  const navigationListNc4 = document.querySelector(".navigationColumn--js");
  navigationListNc4.classList.toggle("navigationColumn--visible");

  const openMenuJs = document.querySelector(".position--js");
  openMenuJs.classList.toggle("position--openMenu")
});




// Buttons on experience page


const slider = document.querySelector('.experience__sliderContainer');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.experience__controls ul')
var sectionIndex = 0;

document.querySelectorAll('.experience__controls li').forEach(function(indicator , ind){
indicator.addEventListener('click' , function() {
  sectionIndex=ind;
  document.querySelector('.experience__controls .selected').classList.remove('selected');
  indicator.classList.add('selected');
  slider.style.transform= 'translate('+ (sectionIndex)* -33.333 +'%)';

  });
});

leftArrow.addEventListener('click' , function(){
  sectionIndex = (sectionIndex >0) ? sectionIndex - 1 : 0;
  document.querySelector('.experience__controls .selected').classList.remove('selected');
  indicatorParents.children[sectionIndex].classList.add('selected');
  slider.style.transform= 'translate('+ (sectionIndex)* -33.333 +'%)';
  
  });

rightArrow.addEventListener('click' , function(){
sectionIndex = (sectionIndex <2) ? sectionIndex + 1 : 2;
document.querySelector('.experience__controls .selected').classList.remove('selected');
indicatorParents.children[sectionIndex].classList.add('selected');
slider.style.transform= 'translate('+ (sectionIndex)* -33.333 +'%)';

});