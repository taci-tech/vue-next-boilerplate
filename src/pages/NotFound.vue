<template>
  <div style="width: 100%; height: 100vh; display:flex; align-items:center; position: relative;">
    <div align="center" style="position: relative; width: 100%; max-width: 1020px; margin: 0 auto;">
      <h1
        align="center"
        class="non-selectable"
        style="font-size: min(250px, 40vh); line-height: 1.15em; padding-bottom: min(18vh, 230px); color: #efefef;"
      >
        Oops
      </h1>
      <!-- <h1
        class="non-selectable"
        style="
          position: absolute;
          top: calc(50% - min(20vh, 250px));
          left: 50%;
          transform: translateX(-50%);
          font-size: min(60px, 10vh);
          line-height: 1.15em;
          color: #292929;
        "
      >
        页面不见了
      </h1> -->
      <img
        class="non-clickable"
        src="../assets/illustrators/eastwood-come-back-later.svg"
        style="
          position: absolute;
          height: 100vh;
          max-height: 800px;
          overflow: hidden;
          margin-bottom: max(-45vh, -35%);
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        "
        draggable="false"
      />
    </div>
    <div
      style="
        position: absolute;

        width: calc(100% - 40px);
        max-width: 980px;
        margin: 0 20px;
        left: 50%;
        transform: translateX(calc(-50% - 20px));
        bottom: 40px;

        background: #fdfdfdcf;
        backdrop-filter: saturate(125%) blur(30px);
        -webkit-backdrop-filter: saturate(125%) blur(30px);

        border-radius: 20px;
        border-width: 2px;
        border-style: solid;
        border-color: #00000004;
      "
    >
      <div style="width: 100%; max-width: 940px; margin: 0 20px; padding-bottom: 15px;">
        <h3 align="left">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scuba-mask" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1z"></path>
            <path d="M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5"></path>
          </svg>
          <span style="padding-left: 10px;">What happened?</span>
        </h3>
        <p align="left">
          Oh no! The page has gone!<br>It is probably that you do not have the permission to access this page or the website is down by an error.
        </p>
        <div align="left">
          <defined-text>You can click</defined-text> <defined-link goto="/">here</defined-link> <defined-text>to back home.</defined-text>
        </div>
        <div align="left" style="padding-top: 13px;">
          <defined-text style="font-size: 12px; color: #afafaf;">The illustration is from </defined-text>
          <defined-link style="font-size: 12px;" href="https://icons8.com/">icons8</defined-link>
          <defined-text style="font-size: 12px; color: #afafaf;">.</defined-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DefinedText from '../components/de/DefinedText.vue'

</script>

<script>
export default {
  name: "NotFound"
}
</script>
    DefinedText