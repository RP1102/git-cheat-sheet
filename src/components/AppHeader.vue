<template>
  <div class="header">
    <img class="img-small" src="../assets/small-logo.svg" alt="">
    <img class="img-full" src="../assets/full-logo.svg" alt="">
    <div class="menu-btn">
      <div class="menu-btn-part"></div>
      <div class="menu-btn-part"></div>
      <div class="menu-btn-part"></div>
    </div>
  </div>

</template>

<script>
export default {
    name : "AppHeader",


}
</script>

<style scoped lang="scss">
.header{
  z-index: 2;
  height: 75px;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img-full{display: none;}
  
  .menu-btn{
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .menu-btn-part{
      width: 100%;
      height: 5px;
      background-color: #2F2D2A;
      border-radius: 2px;
    }
  }
}
  

/* À REVOIR */
@media screen and (min-width: 900px){
  .img-small{
    display : none;
  }
  .img-full{display: unset;}
}
</style>