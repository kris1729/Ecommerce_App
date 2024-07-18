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
 // console.log(queryCopy) // after filter the querry is 

  //********* */ price filter
  let queryStr = JSON.stringify(queryCopy);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key => `$${key}`);
 // console.log(queryStr);


  this.query = this.query.find(JSON.parse(queryStr));
  return this;
}
pagnation(resultPerPage){
    const currentPage = Number(this.queryStr.page);
    const skip = resultPerPage*(currentPage-1);
    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
}
};

module.exports = ApiFeaters;