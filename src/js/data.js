const url = 'https://api.jsonbin.io/b/5bfc469299d3ae6554912e45/1';
var Information = [];

const options= {method:null,headers:{name:null,value:null}};

function fetch(url, options) 
{
  
 
  return new Promise(function(resolve, reject) 
  { 
    var Req = new XMLHttpRequest();
    Req.open("GET", url); 
    Req.onload = function () {
      if (Req.status >= 200 && Req.status < 300) {
        resolve(JSON.parse(Req.response));
      } else {
        reject({
          status: Req.status,
          statusText: Req.statusText
        });
      }
    };
    Req.send();
  }); 
}



fetch(url,options)
  .then(function(data)
{
    var toDo = [];
  
    for(var i=0;i<data.length;i++){
      blogPosts=data;
    }

  for(var i=0;i<blogPosts.length;i++){
    
    if(i==0){
      blogPost1Name=blogPosts[i].name;
    //  blogPost1Desc=blogPosts[1].description;
     
    }
    if(i==1){
      blogPost2Name=blogPosts[i].name;
   //   blogPost2Desc=blogPosts[2].description;
      
    }
    if(i==2){
      blogPost3Name=blogPosts[i].name;
     // blogPost3Desc=blogPosts[3].description;
      
    }
    if(i==3){
      blogPost4Name=blogPosts[i].name;
    //  blogPost4Desc=blogPosts[4].description;

      
    }
  }

  
  document.getElementById('blog1').innerHTML=blogPost1Name;
  document.getElementById('blog2').innerHTML=blogPost2Name;
  document.getElementById('blog3').innerHTML=blogPost3Name;
  document.getElementById('blog4').innerHTML=blogPost4Name;
  
  blogPost1Desc=blogPosts[0].description
  blogPost2Desc=blogPosts[1].description
  blogPost3Desc=blogPosts[2].description
  blogPost4Desc=blogPosts[3].description

  
  document.getElementById('blog1Info').innerHTML=blogPost1Desc;
  document.getElementById('blog2Info').innerHTML=blogPost2Desc;
  document.getElementById('blog3Info').innerHTML=blogPost3Desc;
  document.getElementById('blog4Info').innerHTML=blogPost4Desc;
  

  

})

  
  
  
  .catch(function(err)
{
  console.error(err);  
});
      





