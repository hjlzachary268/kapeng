var index={
  getFood(cid){
    return new Promise((resolve,reject)=>{
      axios.default.baseURL="http://localhost:5050";
      axios.get(
        `index/menu/${cid}`,
      ).then(result=>{
        // console.log(result.data);
        resolve(result.data);
      })
    })
  }
}