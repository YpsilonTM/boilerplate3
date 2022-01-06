<script script>
NUI.OnKeyEvent(['Escape'], () => {
  NUI.Post('boilerplate', 'close');
});
</script>

<template>
  <div id="container"></div>
</template>

<style lang="scss">
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

#container {
  font-family: montserrat;
  background: none !important;
}
</style>
