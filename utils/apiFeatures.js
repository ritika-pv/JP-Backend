class ApiFeatures{
    constructore(query,queryStr){
        this.query=query;
        this.queryStr=queryStr; 
        console.log("keyword  ::  ",this.queryStr)
    }
   
    search(){
        const keyword=this.queryStr.keyword?{
            $regex:this.queryStr.keyword,
            $options:"i",
            //i makes case insensitive
        }:{};

        console.log("keyword  ::  ",keyword)
        this.query=this.query.find({...keyword});
        return this;
    }
}

module.exports=ApiFeatures