let archiveData=JSON.parse(localStorage.getItem('archiveTodo'))||[];
const todoData = JSON.parse(localStorage.getItem('todos')) || [];
const tBody=document.getElementById('tableBody')

let display=()=>{
    archiveData.forEach((ele,i) => {
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
          const restoreCell=document.createElement('td')
          const restoreBtn=document.createElement('button')
          restoreBtn.textContent='Restore'
          restoreBtn.addEventListener('click',()=>{
                restore(ele,i);
          })
          const archiveBtn=document.createElement('button')
          archiveBtn.textContent='Delete'
          archiveBtn.setAttribute('id','archive')
          archiveBtn.addEventListener('click',()=>{
               deleteArchive(ele,i);
          })
         restoreCell.append(restoreBtn)
         archiveCell.append(archiveBtn)
         statusCell.append(statusBtn)
         row.append(nameCell,priorityCell,statusCell,restoreCell,archiveCell)
         tBody.append(row)
    });
}
display();
function  restore(ele,i){
    todoData.push(ele);
    archiveData.splice(1,i)
       
       console.log(ele)
       localStorage.setItem('archiveTodo',JSON.stringify(archiveData))
       localStorage.setItem('todos',JSON.stringify(todoData))
       tBody.innerHTML="";
       display();
    //    window.onload()
}


function deleteArchive(ele,i){
    archiveData.splice(i,1)
    localStorage.setItem('archiveTodo',JSON.stringify(archiveData))
    tBody.innerHTML="";
       display();
       window.onload()
}