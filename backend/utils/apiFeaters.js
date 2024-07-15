class ApiFeaters{
    constructor(query , queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    // search featers

    search(){
        const keyword = this.queryStr.keyword ?{
            name:{
                $regex:this.queryStr.keyword,
                $options :"i",
            },
        }:{}
     //  console.log(keyword);

       this.query = this.query.find({...keyword});
       return this; 
    }
// make filter options
filter(){
    const queryCopy = {...this.queryStr};   // not this.query bcz its give reference.
   // console.log(queryCopy) // before filter
    const removeFields = ["keyword","page","limit"];

    removeFields.forEach((key)=>delete queryCopy[key]);
  //  console.log(queryCopy) // after filter the querry is 
  this.query = this.query.find(queryCopy);
  return this;

}
};

module.exports = ApiFeaters;