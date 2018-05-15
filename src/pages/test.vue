<template>
  <f7-page>
      <f7-navbar>
        <f7-nav-left back-link="Back" sliding></f7-nav-left>
      </f7-navbar>
    <h1>goto</h1>
  </f7-page>
</template>
<script>
export default {
  mounted(){
    console.log(this.$router);
  }
}
</script>
