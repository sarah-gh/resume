<template>
    <div class="section">
        <div class="section1">
            <div class="link">
                <div>
                    <div class="icon">
                        <font-awesome-icon icon="phone-alt" />
                    </div>
                    <p>
                    +989158904789  
                    </p>
                </div>
                <div>
                    <div class="icon">
                        <font-awesome-icon icon="map-marker-alt" />
                    </div>
                    <p>mashhad</p>
                </div>
                <div>
                    <div class="icon">
                        <font-awesome-icon icon="envelope" />
                    </div>
                    <p>sssara.2000.gh@gmail.com</p>
                </div>
            </div>
            <div class="about">
                <h3>ABOUT ME</h3>
                <p> 
                    Computer engineering student.
                    I started Front in February 2020.
                    Fluent in html, css, js.
                    I worked as a vue intern at Binalood Web Company.
                    Interested and has a history of teamwork in Roshdana College of Intelligent Manufacturing Company.
                    Interest in delving deeper into issues and finding new and innovative solutions, curiosity and fast learning.
                    I am looking to expand my technical skills as a Front-End developer.
                </p>
            </div>
        </div>
        <div class="section2">
            <div class="left">
                <div class="experience">
                    <h2>Experience</h2>
                    <experience></experience>
                </div>
                <div class="education">
                    <h2>Education</h2>
                    <education></education>
                </div>
                <div class="courses">
                    <h2>Courses & certificates</h2>
                    <myCourses></myCourses>
                </div>
            </div>
            <!-- /////////////////////////----rigth-----//////////////////////////// -->
            <div class="rigth">
                <div class="project">
                    <div class="h2"><img src="../assets/Picture1.png"><img src="../assets/Picture2.png" class="circle">
                        <h2>Projects</h2>
                    <img src="../assets/Picture2.png" class="circle"><img src="../assets/Picture1.png"></div>
                    <project></project>
                </div>

                <div class="skills">
                    <div class="h2"><img src="../assets/Picture1.png"><img src="../assets/Picture2.png" class="circle">
                        <h2>Skills</h2>
                    <img src="../assets/Picture2.png" class="circle"><img src="../assets/Picture1.png"></div>
                    <skills></skills>
                </div>
                
                <div class="social-media">
                    <h2>find me on social media</h2>
                    <div class="media">
                        <a href="https://www.instagram.com/sarah.gh.2000/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" /></a>
                        <a><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" /></a>
                        <a href="https://www.linkedin.com/in/sara-ghotbzadeh/"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" /></a>
                    </div>
                </div>
            
            </div>
            
        </div>
        
    </div>
</template>
<script>
import experience from '@/components/experience.vue'
import education from '@/components/education.vue'
import skills from '@/components/skills.vue'
import myCourses from '@/components/courses.vue'
import project from '@/components/project.vue'

export default {
    components: {
        experience,
        education,
        skills,
        myCourses,
        project
    }
}
</script>
<style lang="scss" scoped>
.section{
    padding: 0px 8%;
    
    .section1{
        margin-top: -60px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        
        .link{
            width: 40%;
            //flex-grow: 2;
            font-size:25px;
            display: flex;
            text-align: start;
            flex-direction: column;
            div{
                display: flex;
                //justify-content: space-evenly;
                padding-left: 15%;
                align-items: center;
                margin-bottom: 17px;
                font-family: 'Open Sans', sans-serif;
            }
            svg{
                //width: 20%;
                margin: 0;
                padding: 0;
               
            }
            .icon{
                width: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                margin: 0;
                }
            p{
                //width: 20%;
                margin: 0;
                //margin: 0 0px 0 20px;
                padding: 0;
            }
            
        }
        .about{
            width: 55%;
            text-align: start;
            padding: 0 20px 0 40px;
            font-family: 'Raleway';
            h3{
                font-size:30px;
                color:#C89C6D;
            }
            p{
                font-size:19px;
            }
            //flex-grow: 2;
        }
    }
    .section2{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content:center;
        margin-top: 40px;
        font-family: 'Raleway';
        .left{
            width: 50%;
            padding: 20px;
            margin-right: 20px;
            background-color: #f8f4ed;
            h2{
                text-align:start;
                width: fit-content;
                font-size:30px;
                padding: 7px 50px 10px 10px;
                border-radius: 0 40px 40px 0;
                background-color:#445466;
                color: white;
            }
            .courses{
                h2{
                    font-size:25px
                }
            }
        }
        .rigth{
            width: 50%;
            // border-style: dotted;
            // border-color: #cf8799;
            //margin: 0 0 0 30px;
            //padding: 10px 20px;
            .skills{
                //margin-left: 30px;
                .h2{
                    img{
                        width: 38%;
                    }
                    .circle{
                    width: 15px;
                    padding: 0 10px;
                }
                }
            }
            .project{
                .h2{
                    img{
                        width: 35%;
                    }
                    .circle{
                    width: 15px;
                    padding: 0 10px;
                }
                }
            }
            .language{
                .h2{
                    img{
                        width: 32%;
                    }
                    .circle{
                    width: 15px;
                    padding: 0 10px;
                }
                }
            }
            .h2{
                text-align:content;
                width: 100%;
                font-size:27px;
                padding: 0;
                //border-radius: 0 40px 40px 0;
                //background-color:#e4a6b5;
                color: #CF996C;
                display: flex;
                flex-direction: row;
                align-items: center;
                flex-wrap: nowrap;
                margin-bottom: 10px;
                padding: 0 0 0 20px;
                justify-content:center;
                h2{
                    margin:0;
                }
                img{
                    width: 100%;
                    height: fit-content;
                    padding: 0 0px;
                }
                .circle{
                    width: 15px;
                    padding: 0 10px;
                }
            }
        }
        .skills{
            margin-top: 40px;
        }
       .social-media{
           margin-top:60px;
           display: flex;
           flex-direction:column;
           align-items: center;
           justify-content:center;
           margin-left: 45px;
           h2{
               font-size:20px
           }
           .media{
               display: flex;
               flex-direction: row;
               font-size: 25px;
                a{
                border-radius: 10px;
                margin: 5px;
                color:white;
                padding: 5px 7px;
                background-color:#CF996C;
                text-decoration: none;
                &:hover {
                    text-decoration:none;
                    color:white;
                }
                }
           }
           
       }
    }
}
</style>