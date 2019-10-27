// function menuHandler(result){
//   console.log(result);
// }
// index.getMenu().then(menuHandler);
var vm=new Vue({
  el:"#app",
  data:{
    foods:[]
  },
  methods: {
    menuHandler(result){
      console.log(result);
      this.foods=result;
    },
    getMenu(cid){
      index.getFood(cid).then(this.menuHandler);
    }
  },
})
vm.getMenu(10);