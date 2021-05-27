<template>
    <div class="header">

        <div class="img">
            <img src="../assets/profile.jpg">
        </div>
        <div class="text">
            <h1>SARAH<br>GHOTBZADEH</h1>
            <p>Front-end web developer</p>
        </div>
        <!-- <div class="yellow">
            <div class="cadre">
                <img src="../assets/20200611_123740_0.jpg">
                <div class="line"></div>
                <div class="text">
                    <h1>سارا قطب زاده</h1>

                </div>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rufina:wght@400;700&family=Volkhov:ital@0;1&family=Zilla+Slab:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
.header{
    //width: 100%;
    height: 500px;
    padding: 30px 10%;
    background-image: url("../assets/header2.jpg");
    //background-position: ;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    //font-family: 'Open Sans', sans-serif;
    .text{
        text-align: start;
        margin-left: 30px;
        margin-top: -50px;
        h1{
            font-size: 45px;
            font-family: 'Volkhov', serif;
            font-weight: normal;
            margin: 10px 0;
            color: #af9773;
            font-family: 'Libre Baskerville', serif;
        }
        P{
            font-size: 28px;
            font-family: 'Roboto', sans-serif;
            font-family: 'Raleway';
            margin-top: 20px;
            color: #8b7553;
        }
    }
    .img{
        border: 13px solid #fff;
        border-radius: 50%;
        width: 350px;
        height: 350px;
        margin-top: 30px;
        -webkit-box-shadow: 0px 0px 9px 0.6px rgba(0,0,0,0.25); 
        box-shadow: 0px 0px 9px 0.6px rgba(0,0,0,0.25);
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    .yellow{
        //width: 100%;
        height: 100%;
        margin: 0 auto;
        background-image: url("../assets/header.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        padding: 30px;
        .cadre{
            width: 70%;
            height: 100%;
            display: flex;
            margin: 0 auto;
            flex-direction: row;
            //padding: 20px;
            img{
                width: 35%;
                height: fit-content;
                margin: 20px;
                align-self: center;
            }
        }
    }
}
</style>