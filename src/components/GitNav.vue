<template>
  <div class="git-nav">
    <h1>SUMMARY</h1>
    <ul>
        <li></li>
    </ul>
  </div>
</template>

<script>
export default {
    name : "GitNav",
    data : function(){
        return{
            chapters : [],
        }
    }

}
</script>

<style scoped lang="scss">
.git-nav{
  z-index: 1;
  background-color: #D8E3E7;
  color: #132C33;
  position: absolute;
  height: calc(100% - 75px);
  width: 100%;
  top: 75px;
  right: -100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>