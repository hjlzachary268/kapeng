var index={
  getMenu(){
    return new Promise((resolve,reject)=>{
      axios.default.baseURL="http://localhost:5050";
      axios.get(
        "index/menu/10",
        // {
        //   params:{ cid:10 }
        // }
      ).then(result=>{
        // console.log(result.data);
        resolve(result.data);
      })
    })
  }
}