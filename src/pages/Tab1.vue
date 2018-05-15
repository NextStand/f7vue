<template>
  <div>
    <h1 @click="goto">编程式导航1</h1>

     <h1 @click="goto">编程式导航3</h1>
     <f7-link href="/test">About App</f7-link>
  </div>
</template>
<script>
export default {
  methods: {
    goto(){
      this.$f7.mainView.router.load({url:"/test"})
    }
  }
}
</script>
