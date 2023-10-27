const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "<h1>Hello Vue!</h1>",
      image: `<img src="https://cdn-media-1.freecodecamp.org/images/1*G1PUKcevhmpXSKUeX9XnLA.png" alt="">`,
    };
  },
}).mount("#app");
