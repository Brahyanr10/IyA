<template>
  <div class="container">
    <div class="w-full flex flex-col justic items-center">
      <IyA-logo class="w-full flex justify-center items-center" />
      <h1 class="title">
        Ingenieros y Abogados
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  @apply w-full h-screen flex flex-col justify-center items-center;
}
@media (min-width: 300px) {
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 30px;
    color: #35495e;
    letter-spacing: 1px;
  }
}
@media (min-width: 768px) {
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
}
</style>
