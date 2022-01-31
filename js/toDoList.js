

let  taskDOM=document.querySelector('#task')
let  listDOM=document.querySelector('#list')
let  closeDOM=document.querySelector('#closeb')

function newElement(){    
    const liDOM=document.createElement('li')
    const close=document.createElement('span');
    close.id='closeb'
    close.className='close'
    close.innerHTML='&times'
    liDOM.innerHTML=taskDOM.value ;
   

    if(taskDOM.value !=""){
        liDOM.appendChild(close)    
        listDOM.appendChild(liDOM);    
        $('#liveToast').toast('show')
    }
    else{    

        $('#liveToastError').toast('show');
    } 
   
    liDOM.addEventListener("click",()=>{
        if(liDOM.className==='checked'){
            liDOM.className=' '
        }else
        liDOM.className='checked'        
    })
    close.addEventListener("click",()=>{      
        close.parentElement.remove()
    })
}
function deleteEl(){  

    for(let i=1;i<6;i++){
        let  liDOM=document.querySelector('#li'+i)
        let  listelement=document.querySelector('#cls'+i)   

        listelement.addEventListener("click",()=>{        
            
            listelement.parentElement.remove()
    })

    liDOM.addEventListener("click",()=>{
        if(liDOM.className==='checked'){
            liDOM.className=' '
        }else
        liDOM.className='checked'
    })
}}

deleteEl()












