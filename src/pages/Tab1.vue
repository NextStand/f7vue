<template>
  <div>
    <h1 @click="goto">走一个</h1>

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
