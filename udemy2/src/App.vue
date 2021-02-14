<template>
  <div>
    <ul style="width: 200px; margin: auto;">
      <transition-group name="fade" tag="div">
        <li
          v-for="(number, index) in numbers"
          @click="remove(index)"
          style="cursor: pointer;"
          :key="number"
        >
          {{ number }}
        </li>
      </transition-group>
    </ul>
    <button @click="add">追加</button>

    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <button @click="show = !show">切り替え</button>
    <br />
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="circle" v-if="show">aa</div>
    </transition>
    <br />
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <br />
    <transition name="fade" mode="out-in">
      <p v-if="show" key="1">さよなら</p>
      <p v-if="!show" key="2">こんちわ</p>
    </transition>
    <p>今のタイプは{{ myAnimation }}</p>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
      appear
    >
      <p v-if="show">hello</p>
    </transition>
    <transition :name="myAnimation" appear>
      <div v-if="show">
        <p>bye1</p>
        <p>bye2</p>
      </div>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
/* eslint "vue/require-v-for-key": "off" */
export default {
  data() {
    return {
      numbers: [0, 1, 2],
      nextNumber: 3,
      show: true,
      myAnimation: "slide",
      myComponent: "ComponentA",
    };
  },
  components: {
    ComponentA,
    ComponentB,
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    add() {
      this.numbers.splice(this.randomIndex(), 0, this.nextNumber);
      this.nextNumber += 1;
    },
    remove(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      el.style.transform = "scale(0)";
    },
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale += 0.1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      //
    },
    enterCancelled() {
      //
    },
    beforeLeave() {
      //
    },
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(${scale})`;
        scale -= 0.1;
        if (scale < 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      //
    },
    leaveCancelled() {
      //
    },
  },
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 2s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}

.fade-move {
  transition: transform 1s;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
  width: 200px;
}
.fade-leave-to {
  opacity: 0;
}
</style>
