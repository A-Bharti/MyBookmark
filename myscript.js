addlist();


function add(){
//Done
    var name=document.getElementById('name').value
    var url=document.getElementById('url').value
    var flag=checkInput(name,url);
    if(flag===0)return;
    document.getElementById('name').value=null;
    document.getElementById('url').value=null;
    window.localStorage.setItem(name,url);
    addData(name,url);

}
function addlist(){
    //Done
       Object.keys(localStorage).forEach((key) => {
              var url=localStorage.getItem(key);
        addData(key,url);
       });
}

function addData(name,url){
    // Done
    var myDiv=document.createElement('div')
    var myBtn=document.createElement('button')
    var myA=document.createElement('a')

    myA.target="_blank"
    myA.href=url;
    myA.innerHTML=name;
    
    myBtn.innerHTML="Delete"
    myBtn.classList.add('delbtn');
    myBtn.id=name;

    myDiv.appendChild(myA);
    myDiv.appendChild(myBtn);
    document.getElementById('mylist').appendChild(myDiv);

    myBtn.onclick=remove;
    myDiv.classList.add('mydivlist');
    // myDiv.onmouseover=myDivStyle;
    
}

function remove(e)
{
   //Done
    // window.blur()
    localStorage.removeItem(e.srcElement.id);
    location.reload()
}
function checkInput(name,url)
{

    var flag=1;
    if(name===null || url===null || name==="" || url==="")
    {
        toast("Empty FIelds");
        return 0;
    }
    
    if(localStorage.getItem(name)!=null)
    {
        toast("Name Already Exist");
        return 0;
    }
    Object.keys(localStorage).forEach((key)=>{
      if(localStorage.getItem(key)===url)
      {
          toast('Url Already Saved as -> '+key)
          flag=0;
      }
    })


    

return flag;
}

function toast(message){
    message= "!<br> Warning: <i>"+message+"</i>"
    console.log(message);

    var card=document.createElement('div')
    card.style.minWidth="150px"
    card.style.minHeight="fit-content"
    card.innerHTML=message;
    card.style.position="absolute"
    card.style.right="0px"
    card.style.top="0px"
    card.style.color="white"
    card.style.backgroundColor="#AE1438"
    card.style.boxShadow="0px 4px 8px rgba(0,0,0,0.8)"
    card.style.margin="15px"
    card.style.padding="10px"
    card.style.textAlign="center"
    card.style.borderRadius="20px"
    document.body.appendChild(card)

    var t=2000;
    setInterval(()=>{
        
        document.body.removeChild(card)
    },t)
   

}
