const title=document.getElementById('text').value;
      const priority=document.getElementById('select').value;
 const todoData = JSON.parse(localStorage.getItem('todos')) || [];

document.querySelector('form').addEventListener('submit',()=>{
    
        newTodo();
    
 })
 


const tBody=document.getElementById('tableBody')
 let newTodo=()=>{

       const title=document.getElementById('text').value;
      const priority=document.getElementById('select').value;
    let obj={
        title:title,
        priority:priority,
        status:'Pending🔃'
    }
   
    console.log(obj)

    todoData.push(obj)
    console.log(obj)
    localStorage.setItem('todos',JSON.stringify(todoData))
 }
 
let display=()=>{
    todoData.forEach((ele,i) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = ele.title;
        

        const priorityCell = document.createElement('td');
        priorityCell.textContent = ele.priority;
        if (ele.priority === 'medium') {
            priorityCell.style.backgroundColor = 'rgb(255,255,0)';
        } else if (ele.priority === 'high') {
            priorityCell.style.backgroundColor = 'rgb(255,0,0)';
        }
        
         const statusCell=document.createElement('td')
         const statusBtn=document.createElement('button')
         statusBtn.textContent=ele.status;
         statusBtn.style.boxShadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px'
         
         statusBtn.addEventListener('click', () => {
            ele.status = ele.status === 'Pending🔃' ? 'Completed✅' : 'Pending🔃';
            
            localStorage.setItem('todos', JSON.stringify(todoData));
            
        });
          const archiveCell=document.createElement('td')
          const archiveBtn=document.createElement('button')
          archiveBtn.textContent='archive'
          archiveBtn.setAttribute('id','archive')
          archiveBtn.addEventListener('click',()=>{
               archive(ele,i);
          })

         archiveCell.append(archiveBtn)
         statusCell.append(statusBtn)
         row.append(nameCell,priorityCell,statusCell,archiveCell)
         tBody.append(row)
    });
}
display();
let archiveData=JSON.parse(localStorage.getItem('archiveTodo'))||[];
let archive=(ele,i)=>{
       todoData.splice(i,1);
       archiveData.push(ele);
       console.log(ele)
       localStorage.setItem('archiveTodo',JSON.stringify(archiveData))
       localStorage.setItem('todos',JSON.stringify(todoData))
       tBody.innerHTML="";
       display();
       window.onload()
}