"use strict";

let formData = { email: "", message: "" };

const STORAGE_KEY = "feedback-form-state";
const textInpt = document.querySelector(".feedback-form");

textInpt.addEventListener("submit", handleSbmt);
textInpt.addEventListener("input", handleInput);


getMsgTextarea();

function handleSbmt(event) {
    console.log(formData)
    let emailMsg = event.target.elements.email.value;
    let textMsg = event.target.elements.message.value; 
    if (emailMsg === "" || textMsg === "") {
           alert("Fill please all fields!");
            return
    }
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function handleInput(event) {
    formData.email = event.target.form.elements.email.value;
    formData.message = event.target.form.elements.message.value;
    // console.log("active",event.target.form.elements.email.placeholder);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getMsgTextarea() {
    const getMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log("getMsg", localStorage.getItem(STORAGE_KEY));
    if (getMsg === null) {
        return
    }
    if (getMsg.email) {
        textInpt.elements.email.value = getMsg.email;
    }
    if (getMsg.message) {
        textInpt.elements.message.value = getMsg.message;
    }
    // console.log(textInpt);
} 
    
