<template>
  <section id="intro">
    <div id="Background"><img src="../assets/logo.jpg" /></div>
    <div id="textDiv">
      This is Giulio's personal website, a work in progress :)
    </div>
  </section>
</template>

<style scoped>
#intro {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 95%;
  margin: auto;
  height: 75vh;
  position: relative;
  margin-top: 2%;
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
#Background > img {
  width: 100%;
  height: 75vh;
  object-fit: cover;
  border: 2px solid inherit;
  border-radius: 50px;
  animation: 1s ease-out 0s 1 slideInFromTop;
}
#textDiv {
  position: absolute;
  font-size: 2em;
  overflow: hidden;
  bottom: 2vh;
  left: 2vh;
  z-index: 5;
  background-color: #181a1b;
  border: 1px solid inherit;
  border-radius: 50px;
  width: 60vw;
  padding: 0 2%;
  line-height: 10vh;
  color: white;
  animation: 1s ease-out 0s 1 slideInFromBottom;
}
@media only screen and (max-width: 768px) {
  @keyframes slideInFromBottom {
    0% {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }
  #intro {
    margin-top: 0%;
    width: 100%;
  }
  #Background > img {
    object-fit: cover;
    object-position: 75% 40%;
  }
  #textDiv {
    width: 95%;
    font-size: 1.5em;
    left: 50%;
    transform: translateX(-50%);
    line-height: 2em;
    padding: 5%;
  }
}
</style>
