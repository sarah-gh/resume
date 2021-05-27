<template>
<div class="skills">
    <div class="set-size charts-container">

      <div class="pie-wrapper progress-90 style-2">
        <span class="label">90<span class="smaller">%</span>
        </span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
           html/css
        </div>
        
      </div>


      <div class="pie-wrapper progress-70 style-2">
        <span class="label">70<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          Javascript
        </div>
      </div>

      <div class="pie-wrapper progress-65 style-2">
        <span class="label">65<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          jquery
        </div>
      </div>

      <div class="pie-wrapper progress-85 style-2">
        <span class="label">85<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          Sass
        </div>
      </div>

      <div class="pie-wrapper progress-95 style-2">
        <span class="label">95<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          Bootstrap
        </div>
      </div>

      <div class="pie-wrapper progress-95 style-2">
        <span class="label">95<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          bulma
        </div>
      </div>

      <div class="pie-wrapper progress-70 style-2">
        <span class="label">70<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          VueJs
        </div>
      </div>

      

      <div class="pie-wrapper progress-65 style-2">
        <span class="label">65<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          c++ & c
        </div>
      </div>

      

      <div class="pie-wrapper progress-50 style-2">
        <span class="label">50<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          Adobe Photoshop
        </div>
      </div>

      <div class="pie-wrapper progress-80 style-2">
        <span class="label">80<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          problem solving 
        </div>
      </div>

      <div class="pie-wrapper progress-80 style-2">
        <span class="label">80<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
           Responsive Design
        </div>
      </div>

      <div class="pie-wrapper progress-70 style-2">
        <span class="label">70<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          content writing
        </div>
      </div>

      <div class="pie-wrapper progress-70 style-2">
        <span class="label">70<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          Git
        </div>
      </div>

      

      <div class="pie-wrapper progress-40 style-2">
        <span class="label">40<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          nuxt
        </div>
      </div>

      <div class="pie-wrapper progress-55 style-2">
        <span class="label">55<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          English
        </div>
      </div>

      <div class="pie-wrapper progress-80 style-2">
        <span class="label">80<span class="smaller">%</span></span>
        <div class="pie">
          <div class="left-side half-circle"></div>
          <div class="right-side half-circle"></div>
        </div>
        <div class="shadow"></div>
        <div class="skill">
          Teamwork
        </div>
      </div>
      
    </div>
</div>
</template>




<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:700);

.skills{
    display:flex;
    justify-content:center;
    margin-right: -40px;
}
// -- vars
$bg-color: #556980;
$default-size: 1em;
$label-font-size: $default-size / 4;
$label-font-size-redo: $default-size * 4;

// -- mixins
@mixin size($width, $height) {
  height: $height;
  width: $width;
}

@mixin draw-progress($progress, $color) {
  .pie {
    //transition: 0.3s ease-in-out all;
    
    .half-circle {
      border-color: $color;
    }

    .left-side {
      transform: rotate($progress * 3.6deg);
    }

    @if $progress <= 50 {
      .right-side {
        display: none;
      }
    } @else {
      clip: rect(auto, auto, auto, auto);

      .right-side {
        transform: rotate(180deg);
      }
    }
  }
}

@mixin draw-progress--solid($progress, $color, $bg-color) {
  background: linear-gradient(to right, $color 50%, $bg-color 50%);
  
  &:before {
    @if $progress <= 50 {
      background: $bg-color;
      transform: rotate((100 - (50 - $progress)) / 100 * 360deg * -1);
    } @else {
      background: $color;
      transform: rotate((100 - $progress) / 100 * 360deg);
    }
  }
}

// -- selectors
*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  background: #ecf0f1;
  color: #444;
  font-family: 'Lato', Tahoma, Geneva, sans-serif;
  font-size: 16px;
  padding: 10px;
}

.set-size {
  font-size: 10em;
}

.charts-container {
  &:after {
    clear: both;
    content: '';
    display: table;
  }
}

.pie-wrapper {
  @include size($default-size, $default-size);
  //float: left;
  margin: 30px 15px 70px 15px;
  position: relative;
  font-size:100px;
  display: inline-block;
  //transition: 1s ease-in all;
  //margin-right: -20px;
  //margin-top: 60px;
  
  &:nth-child(3n + 1) {
    clear: both;
  }
  .skill{
    font-size:20px;
    margin-top: 15px;
    color:#614e39;
  }
  &:focus .skill{
    font-weight:bold;
    //transition: 1s ease-in-out all;
  }
  &:hover .skill{
    font-weight:bold;
    //transition: 1s ease-in-out all;
  }
  .skill-web{
    font-size:15px;
    margin-top: 15px;
  }
  .pie {
    @include size(100%, 100%);
    clip: rect(0, $default-size, $default-size, $default-size / 2);
    left: 0;
    position: absolute;
    top: 0;

    .half-circle {
      @include size(100%, 100%);
      border: 0.12em solid #3498db;
      border-radius: 50%;
      clip: rect(0, $default-size / 2, $default-size, 0);
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .label {
    background: $bg-color;
    border-radius: 50%;
    bottom: $label-font-size-redo / 10;
    color: #fff;
    cursor: default;
    display: block;
    font-size: $label-font-size;
    left: $label-font-size-redo / 10;
    line-height: $label-font-size-redo * .70;
    position: absolute;
    right: $label-font-size-redo / 10;
    text-align: center;
    top: $label-font-size-redo / 10;

    .smaller {
      color: #fff;
      font-size: .45em;
      padding-bottom: 20px;
      vertical-align: super;
    }
  }

  .shadow {
    @include size(100%, 100%);
    border: 0.12em solid #C99864;
    border-radius: 50%;
  }
 

  &.style-2 {
    .label {
      background: none;
      color: #5f6b6b;
      font-weight: bold;

      .smaller {
        color: #bdc3c7;
      }
    }
  }

  &.progress-90 {
    @include draw-progress(90, #395268);
  }
  &.progress-75 {
    @include draw-progress(75, #395268);
  }
  &.progress-65 {
    @include draw-progress(65, #395268);
  }
  &.progress-95 {
    @include draw-progress(95, #395268);
  }
  &.progress-70 {
    @include draw-progress(70,#395268);
  }
  &.progress-80 {
    @include draw-progress(80, #395268);
  }
  &.progress-40 {
    @include draw-progress(40, #395268);
  }
  &.progress-30 {
    @include draw-progress(30, #395268);
  }
  &.progress-30 {
    @include draw-progress(30, #395268);
  }
  &.progress-85 {
    @include draw-progress(85, #395268);
  }
  &.progress-30 {
    @include draw-progress(30, #395268);
  }
  &.progress-55 {
    @include draw-progress(55, #395268);
  }


  &.progress-60 {
    @include draw-progress(60, #395268);
  }

  &.progress-50 {
    @include draw-progress(50, #395268);
  }

  &.progress-35 {
    @include draw-progress(35, #395268);
  }

  &.progress-73 {
    @include draw-progress(75, #395268);
  }

}

.pie-wrapper--solid {
  border-radius: 50%;
  overflow: hidden;

  &:before {
    border-radius: 0 100% 100% 0 / 50%;
    content: '';
    display: block;
    height: 100%;
    margin-left: 50%;
    transform-origin: left;
  }
  
  .label {
    background: transparent;
  }
  
  &.progress-65 {
    @include draw-progress--solid(65, #e67e22, $bg-color);
  }
  
  &.progress-25 {
    @include draw-progress--solid(25, #9b59b6, $bg-color);
  }
  
  &.progress-88 {
    @include draw-progress--solid(88, #3498db, $bg-color);
  }
}



</style>