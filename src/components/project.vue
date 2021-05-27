<template>
    <div class="projects">
        <div class="project">
            <h3 class="title">
                Student list
            </h3>
            <p class="text">
                Training project <br>to work with custom event
            </p>
            <div class="link">
                <a class="demo">Demo</a>
                <a class="git" href="https://github.com/sarah-gh/students">Github</a>
            </div>
        </div>

        <div class="project">
            <h3 class="title">
                ARTAM
            </h3>
            <p class="text">
                Artam Company site project
            </p>
            <div class="link">
                <a class="demo" href="/Default.html">Demo</a>
                <a class="git" href="https://gitlab.com/sarah_gh_2000/artam">Github</a>
            </div>
        </div>

        <div class="project">
            <h3 class="title">
                validation
            </h3>
            <p class="text">
                Vue training project
            </p>
            <div class="link">
                <a class="demo" href="/validation/index.html">Demo</a>
                <a class="git" href="https://github.com/sarah-gh/validation">Github</a>
            </div>
        </div>

        <div class="project">
            <h3 class="title">
                Vuex shopping
            </h3>
            <p class="text">
                Training project to work with vuex
            </p>
            <div class="link">
                <a class="demo">Demo</a>
                <a class="git" href="https://github.com/sarah-gh/vuex-shopping">Github</a>
            </div>
        </div>

        <div class="project">
            <h3 class="title">
                Todo list
            </h3>
            <p class="text">
                Vue training project
            </p>
            <div class="link">
                <a class="demo">Demo</a>
                <a class="git" href="https://github.com/sarah-gh/vue-todo-list">Github</a>
            </div>
        </div>

        <div class="project">
            <h3 class="title">
                Appointments List
            </h3>
            <p class="text">
                Vue training project
            </p>
            <div class="link">
                <a class="demo">Demo</a>
                <a class="git" href="https://github.com/sarah-gh/vue-practice">Github</a>
            </div>
        </div>
        
        
    </div>
</template>

<style lang="scss" scoped>
.projects{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
    margin-right: -40px;
}
.project{
    text-align: content;
    margin: 10px;
    //margin-left: 20px;
    font-family: 'Raleway';
    display: flex;
    width: 45%;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    background-color: #f8f4ed;
    border-radius:20px;
    .title{
        font-size:25px;
        margin: 0;
        font-weight:bold;
        padding: 10px 0;
        // &::before{
        // content: '';
        // display: inline-block;
        // width: 15px;
        // height: 15px;
        // -moz-border-radius: 7.5px;
        // -webkit-border-radius: 7.5px;
        // border-radius: 7.5px;
        // background-color: #6e8791;
        // }
    }
    .text{
        font-size:16px;
        margin: 0;
        padding: 0;
    }
    .link{
        font-size:16px;
        color:#c47f90;
        margin: 0 auto;
        padding: 10px 0;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-self: flex-end;
        .git{
            background-color:#CF996C;
            padding: 5px 20px;
            border-radius:30px;
            text-decoration: none;
            
            margin:0 10px;
            color:white;
            cursor: pointer;
            &:hover {
                background-color:#967051;
                text-decoration: none;
                //color: rgb(99, 93, 4);
            }
        }
        .demo{
            background-color:#445466;
            padding: 5px 20px;
            border-radius:30px;
            text-decoration: none;
            margin:0 10px;
            color:white;
            cursor: pointer;
            &:hover {
                background-color:#2c3947;
                text-decoration: none;
                //color: rgb(99, 93, 4);
            }
        }
        
        //color: rgb(148, 140, 25);
        
    }
}

</style>