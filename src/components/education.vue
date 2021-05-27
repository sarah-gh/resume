<template>
    <div>
        <div class="work">
            <h3 class="position">
                Bachelor of Computer Engineering
            </h3>
            <p class="company">
                Sadjad University of Technology
            </p>
            <span class="date">
                Entrance of 1398
            </span>
        </div>
        
        <div class="work">
            <h3 class="position">
                math diploma
            </h3>
            <p class="company">
                Armineh Mosallanejad School
            </p>
            <span class="date">
                1394-1397
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