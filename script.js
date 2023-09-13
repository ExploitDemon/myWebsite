document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// script.js
import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data() {
        return {
            content: '<span class="cole">Cole</span><span class="leavitt"> Leavitt</span>'
        };
    }
});
