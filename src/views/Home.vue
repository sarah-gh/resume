<template>
  <div class="home">
    <myHeader />
    <myBody />
    <img class="footer" src="../assets/footer.jpg">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import myHeader from '@/components/header.vue'
import myBody from '@/components/body.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    myHeader,
    myBody
  }
}
</script>

<style lang="scss" scoped>
.home{
  position:absolute;
    .footer{
        position: relative;
        width: 100%;
        z-index: -100;
        height: auto;
        margin-top:-150px;
        bottom:0px;
    }
}
</style>
