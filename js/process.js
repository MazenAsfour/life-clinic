const spans=document.querySelectorAll('.control span');
const items=document.querySelectorAll('.items');
const works=document.querySelectorAll('.work');
const feedbacks=document.querySelectorAll('.feedbackuser');
const h2=document.querySelectorAll('.controlpanel2 h2');
//console.log(items.length);

let index=1;
var inter=setInterval(function(){
  
  addslide(1);
  
},4500);
function slider(a){
  index=a;
  if(index>items.length){
    index=1;
  }else 
  if(index<1){
    index=items.length;
  }

  //console.log(index);
  for(var i=0;i<items.length;i++){
    items[i].style.display="none";
    items[i].style.opacity="0";
    items[i].style.transition="1s ease out";
    items[i].style.transitiondelay="1000";
    //spans[i].style.background="none";
    spans[i].classList.remove("activeslide");
   
  }
  items[index-1].style.display="block";
  items[index-1].style.opacity="1";
  items[index-1].style.transitiondelay="1000";
  items[index-1].style.transition="2s ease in";
  //spans[index-1].style.background="rgb(73, 45, 3)";
  spans[index-1].classList.add("activeslide");
  //items[a+1].style.display='none';
  //console.log(a-1,items[a-1].style.display);
  //spans[a-1].style.backgroundcolor='rgb(73, 45, 3)';
}

function addslide(a){
  var a=index+a;
  slider(a);
}
//addslide(-1);
addslide(0);

function clearloop(a){
  if(a==1){
    addslide(1);
    clearInterval(inter);
  }else if(a==-1){
    addslide(-1);
    clearInterval(inter);
  }
  }
  function sliderclear(a){
    index=a;
    if(index>items.length){
      index=1;
    }else 
    if(index<1){
      index=items.length;
    }
  
    console.log(index);
    for(var i=0;i<items.length;i++){
      items[i].style.display="none";
      items[i].style.opacity="0";
      items[i].style.transition="1s ease out";
      items[i].style.transitiondelay="1000";
      //spans[i].style.background="none";
      spans[i].classList.remove("activeslide");
     
    }
    items[index-1].style.display="block";
    items[index-1].style.opacity="1";
    items[index-1].style.transitiondelay="1000";
    items[index-1].style.transition="2s ease in";
    //spans[index-1].style.background="rgb(73, 45, 3)";
    spans[index-1].classList.add("activeslide");
    //items[a+1].style.display='none';
    //console.log(a-1,items[a-1].style.display);
    //spans[a-1].style.backgroundcolor='rgb(73, 45, 3)';
    clearInterval(inter);
  }
  /*
  function next(a){
    if(a==1){
    slider2(1);}
    if(a==-1){
      slider2(-1);
    }
  }*/
  var index1=1;
  function slider2(a){
    index1=index1+a;
    slider3(index1)
  }
  function slider3(abc){
    //index=abc;
    if(abc>works.length){
      index1=abc=1;
    }else 
    if(abc<1){
      abc=works.length;
    }
  
    console.log(abc,works.length);
    for(var i=0;i<works.length;i++){
    works[i].style.display="none";
    works[i].style.opacity="0";
    works[i].style.transition="1s ease out";
    works[i].style.transitiondelay="1000";
    
     
    }
    
    works[abc-1].style.display="block";
    works[abc-1].style.opacity="1";
    works[abc-1].style.transitiondelay="1000";
    works[abc-1].style.transition="2s ease in";
    
  }
  
  //console.log(feedbacks,h2);
  
  function feedback(f){
    let index2=f;
    if(index2>feedbacks.length){
      index2=1;
    }else 
    if(index2<1){
      index2=feedbacks.length;
    }
  
    console.log(index2,feedbacks.length);
    for(var i=0;i<feedbacks.length;i++){
    //feedbacks[i].style.display="none";
    //feedbacks[i].style.opacity="0";
    //feedbacks[i].style.transition="1s ease out";
    //feedbacks[i].style.transitiondelay="1000"; 
    h2[i].style.background='none';
    };
    console.log(index2-1);
   /* feedbacks[index2-1].style.display="block";
    feedbacks[index2-1].style.opacity="1";
    feedbacks[index2-1].style.transitiondelay="1000";
    feedbacks[index2-1].style.transition="2s ease in";  */ 
    h2[index2-1].style.background='white'; 
  }
  
 