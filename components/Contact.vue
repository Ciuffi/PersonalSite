<template>
  <section id="contact">
    <p class="title is-2 header">Contact 📨</p>
    <a id="twitterLink" href="https://twitter.com/ciuffi" target="_blank">
      <div id="twitter">
        <img
          class="contactImage"
          src="~/assets/twitter-icon.png"
          alt="Github logo"
        />
        @Ciuffi
      </div>
    </a>

    <a id="githubLink" href="https://github.com/ciuffi" target="_blank">
      <div id="github">
        <img
          class="contactImage"
          src="~/assets/github-icon.png"
          alt="Twitter logo"
        />
        @Ciuffi
      </div>
    </a>
  </section>
</template>

<style scoped>
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0;
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
.header {
  color: white;
}
#contact {
  width: 100%;
  text-align: center;
  animation: opacity 1s, 1s ease-out slideInFromBottom 1s;
  padding-bottom: 3%;
}
#contact > a > div {
  display: inline-block;
  border: 2px solid inherit;
  border-radius: 20px;
  width: 120px;
  height: 120px;
  text-align: center;
  vertical-align: middle;
  position: relative;
  margin: 20px;
}
#github {
  background-color: #d3d3d3;
  transition-duration: 0.5s;
}
#twitter {
  transition-duration: 0.5s;
  background-color: #1da1f2;
}
#twitterLink {
  color: white;
}
#githubLink {
  color: black;
}
#github > img {
  margin-top: 12%;
  width: 71.2px;
  height: 71.2px;
}
#twitter > img {
  margin-top: 2%;
  margin-bottom: -15%;
  width: 100px;
  height: 100px;
}
#github:hover {
  transform: translateY(-20px);
}
#twitter:hover {
  transform: translateY(-20px);
}
@media only screen and (max-width: 768px) {
  #github:hover {
    transform: none;
  }
  #twitter:hover {
    transform: none;
  }
}
</style>
