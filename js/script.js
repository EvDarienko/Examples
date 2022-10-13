"use strict";

let burger = document.querySelector(".burger_menu");
let menu = document.querySelector(".header_menu_burger");
let icon = document.querySelectorAll(".list_2_icon");
let button = document.querySelectorAll(".list_2_button");

burger.onclick = function () {
	burger.classList.toggle("active_burger");
	menu.classList.toggle("active_header_menu_burger");
}

for (let i = 0; i < button.length; i++) {
	button[i].onmouseover = function () {
			icon[i].style.color = "#05fab6";
	}
	button[i].onmouseout = function () {
			icon[i].style.color = "#2f3031";
	}
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }); 
};

let input = document.querySelectorAll(".content_6_wrapper input");

for (let i = 0; i < input.length; i++) {
	input[i].oninput = function () {
		if (input[i].value != "") {
			this.style.opacity ="1";
		} else {
			this.style.opacity = "0.14";
		}
	}
}

$('.popup_back').hide();

$('.content_6_wrapper button').click(function(e) {
	e.preventDefault();
	$('.popup_back').fadeIn(250);
})

$('.popup_content button').click(function() {
	$('.popup_back').fadeOut(250);
})

$('.popup_back').click(function(e) {
	console.log($('.popup_content').has(e.target))
	if(!$('.popup_content').is(e.target) && $('.popup_content').has(e.target).length === 0) {
		$('.popup_back').fadeOut(250);
	}
})
