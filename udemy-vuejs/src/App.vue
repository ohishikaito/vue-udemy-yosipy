<template>
  <div>
    <video></video>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <like-number :total-number="number" @my-click="number = $event"></like-number>
    <button @click="currentComp='Home'">Home</button>
    <button @click="currentComp='About'">About</button>
    <keep-alive>
      <component v-bind:is="currentComp"></component>
    </keep-alive>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber" />
      <p>{{ eventData.maxNumber}}</p>

      <EventTitle v-model="eventData.title"></EventTitle>
      <!-- <EventTitle :value="eventData.title" @input="eventData.title = $event
      "></EventTitle>-->

      <!-- <label for="title">主催者</label>
      <input type="text" id="title" v-model="eventData.title" />
      <input
        type="text"
        id="title"
        v-bind:value="eventData.title"
        v-on:change="eventData.title = $event.target.value"
      />
      <p>{{eventData.title}}</p>-->

      <label for="detail">内容</label>
      <textarea id="details" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{eventData.detail}}</p>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate }}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="10">10代</label>
      <p>参加条件</p>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="20">20代</label>
      <p>参加条件</p>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />
      <label for="30">30代</label>
      <p>{{eventData.target}}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";
import EventTitle from "./components/EventTitle.vue";
export default {
  data() {
    return {
      number: 100,
      currentComp: "Home",
      locations: ["東京", "大阪", "名古屋"],
      eventData: {
        maxNumber: 5,
        title: "こんち",
        detail: "1111111",
        isPrivate: false,
        target: [],
        location: ""
      }
    };
  },
  components: {
    LikeHeader,
    About,
    Home,
    EventTitle
  }
};
</script>



  // methods: {
  //   inc2(value) {
  //     this.number = value;
  //     console.log(value);
  //   }
  // }