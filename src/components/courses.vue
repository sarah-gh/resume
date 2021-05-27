<template>
    <div class="courses">
        <div class="work">
            <h3 class="position">
                Introductory course and web design path
            </h3>
            <p class="company">
                Institution: Roshdana College
            </p>
            <span class="date">
                Date: March 2020
            </span>
        </div>
        
        <div class="work">
            <h3 class="position">
                Git
            </h3>
            <p class="company">
                Institute: Part Software Company College
            </p>
            <span class="date">
                Date: February 2020
            </span>
        </div>

        <div class="work">
            <h3 class="position">
                Vue – The Complete Guide (w/ Router, Vuex, Composition API) 2020
            </h3>
            <p class="company">
                Udemy
            </p>
            <span class="date">
                September 2020
            </span>
        </div>

        <div class="work">
            <h3 class="position">
                Nuxt.js - Vue.js on Steroids
            </h3>
            <p class="company">
                Packtpub
            </p>
            <span class="date">
                November 2020
            </span>
        </div>

        <div class="work">
            <h3 class="position">
                Hands-On Web Development with Vue.js
            </h3>
            <p class="company">
                Packtpub
            </p>
            <span class="date">
                October 2020
            </span>
        </div>

        <div class="work">
            <h3 class="position">
                flexbox
            </h3>
            <p class="company">
                roocket.ir
            </p>
            <span class="date">
                January 2020
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.work{
    text-align: start;
    margin: 10px 0;
    margin-left: 20px;
    font-family: 'Raleway';
    .position{
        font-size:25px;
        margin: 0;
        padding: 10px 0;
        &::before{
        content: '';
        display: inline-block;
        width: 15px;
        height: 15px;
        -moz-border-radius: 7.5px;
        -webkit-border-radius: 7.5px;
        border-radius: 7.5px;
        background-color: #6e8791;
        }
    }
    .company{
        font-size:20px;
        margin: 0;
        padding: 0;
    }
    .date{
        font-size:16px;
        color:#c47f90;
        margin: 0;
        padding: 10px 0;
    }
}

</style>