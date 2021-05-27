<template>
    <div>
        <div class="work">
            <h3 class="position">
                front-end developer
            </h3>
            <p class="company">
                Smart Construction Group
            </p>
            <span class="date">
                The beginning of cooperation from February 2021
            </span>
        </div>
        
        <div class="work">
            <h3 class="position">
                Internship vue & nuxt
            </h3>
            <p class="company">
                binalood web
            </p>
            <span class="date">
                June 2020 to November 2020
            </span>
        </div>

        <div class="work">
            <h3 class="position">
                Internship front-end developer
            </h3>
            <p class="company">
                Ramona studio
            </p>
            <span class="date">
                February 2020 to May 2021
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