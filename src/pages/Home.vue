<template>
  <div class="home-cover content-container" style="height: 100vh; display: flex;">
    <div class="home-cover-content-wrapper" align="left">
      <h1
        align="left"
        class="non-selectable home-cover-title"
        style="position: relative; line-height: 1.05em; padding-top: 25px;"
      >
        It is <span style="color: #f4606c;">hard</span>,<br>but we never give up.
      </h1>
      <div align="left">
        <defined-text class="home-cover-text" style="padding-right: 12px;">Let's blast the design.</defined-text>
        <defined-link class="home-cover-text" href="https://github.com/taci-tech/vue-next-boilerplate">Check on GitHub</defined-link>
      </div>
      <div align="left" style="padding-top: 5px;">
        <defined-text class="home-cover-text" style="padding-right: 12px;">How about making a trick.</defined-text>
        <defined-link class="home-cover-text" goto="/random-1234-not-existing-page">Learn more</defined-link>
      </div>
      <div align="left" style="padding-top: 25px;">
          <defined-text style="font-size: 12px; color: #afafaf;">The illustration is from </defined-text>
          <defined-link style="font-size: 12px;" href="https://icons8.com/">icons8</defined-link>
          <defined-text style="font-size: 12px; color: #afafaf;">.</defined-text>
        </div>
    </div>
    <img
      class="home-cover-img non-clickable"
      src="../assets/illustrators/eastwood-order-completed.svg"
      draggable="false"
    />
  </div>
</template>

<script setup>
//
</script>