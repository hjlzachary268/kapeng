// function menuHandler(result){
//   console.log(result);
// }
// index.getMenu().then(menuHandler);
var foods;
var vm=new Vue({
  el:"#app",
  data:{
    foods
  },
  methods: {
    menuHandler(foods){
      console.log(foods);
      this.foods=foods;
    }
  },
})
index.getMenu().then(vm.menuHandler);