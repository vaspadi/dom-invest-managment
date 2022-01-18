<template lang="pug">
  .authors
    h4.authors__title Create with
      icon.authors__icon(icon="heart")
    a.authors__link(href="https://balticwebstudio.com/" target="_blank") Baltic Web Studio
</template>

<script>
export default {
  name: 'Authors'
}
</script>

<style lang="scss">

.authors {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  //background-color: #131416;
  color: #fff;
  padding: 20px;

  &__icon {
    color: red;
    margin-left: 5px;
  }

  &__link {
    font-size: 0.8em;
    font-weight: 700;
    color: rgba(#fff, 0.7);
    text-decoration: none;
    text-transform: uppercase;
  }
}

</style>
