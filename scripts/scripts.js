"use strict";

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const logIn = document.querySelector(".login__button");
const loginInfo = document.querySelector(".login__info");
const header = document.querySelector(".header");
const form = document.querySelector(".form");
const mobileMenu = document.querySelector(".header__menu");
const mobileNav = document.querySelector(".nav__box");
const logout = document.querySelector("#logout");

// USERS

const admin = {
	username: "admin",
	password: "123",
};

const kowalski = {
	username: "kowalski",
	password: "456",
};

const nowak = {
	username: "nowak",
	password: "789",
};

const users = [admin, kowalski, nowak];

// EVENT HANDLER

let currentUser;

// LOGIN VALIDATION ON STARTING PAGE

const logValidation = () => {
	currentUser = users.find((el) => el.username === username.value);
	console.log(currentUser);
	currentUser?.password === password.value ? logTrue() : logFalse();
};

const logTrue = () => {
	loginInfo.innerHTML = "You logged in!";
	loginInfo.style.color = "green";
	form.classList.add("form--active");
	header.style.display = "flex";
};

const logFalse = () => {
	loginInfo.innerHTML = "You must type valid username and password!";
	loginInfo.style.color = "#a00101";
	username.value = password.value = "";
};

// SHOWING MOBILE MENU

mobileMenu.addEventListener("click", () => {
	mobileNav.classList.toggle("nav__box--active");
	mobileMenu.classList.toggle("header__menu--active");
});

// ADD USERNAME TO GREETINGS AT THE START PAGE

const greetings = (user) => {
	const greetingsHeader = document.querySelector(".startPage__header");
	greetingsHeader.innerHTML = `Welcome <span>${user.username}</span>!`;
	const greetingsText = document.querySelector(".startPage__text");
	greetingsText.innerHTML = `To perform an action, choose an option`;
	const navUser = document.querySelector(".nav__box-text--user");
	navUser.innerHTML = `${user.username}`.toUpperCase();
};

// EVENT LISTENER

logIn.addEventListener("click", (e) => {
	e.preventDefault();
	logValidation();
	greetings(currentUser);
});

logout.addEventListener("click", () => {
	username.value = password.value = loginInfo.innerHTML = "";
	form.classList.remove("form--active");
	mobileNav.classList.remove("nav__box--active");
});
