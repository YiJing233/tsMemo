import Vue from "vue";
import App from "./App.vue"

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");

// let item1 = new ItemData();
// // console.log(item1);

// let ah = new ActionHelper();

// console.log(ah.memoList);

// let newItem = new ItemData(-1, CategoryEnum.Life,"Deadline好多啊");
// newItem.id = ah.add(newItem);
// console.log(newItem);

// let newItem1 = new ItemData(1, CategoryEnum.Life,"Deadline好多啊");
// ah.edit(newItem);
