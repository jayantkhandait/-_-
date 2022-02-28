const ip = document.querySelector('input');
const btn = document.querySelector('.addTask .ip > button');

btn.addEventListener('click', addTask)
ip.addEventListener('keyup', (e) =>{
    (e.keyCode === 13 ? addTask(e) : null);
})
function addTask(e){
    const temp = document.querySelector('.task');

    const newLi = document.createElement('li');
    const cbtn = document.createElement('button');
    const tbtn = document.createElement('button');

    cbtn.classList.add('btn');
    tbtn.classList.add('btn');
    newLi.classList.add('item');
    cbtn.innerHTML = '<i class="fa fa-check"></i>';
    tbtn.innerHTML = '<i class="fa fa-trash"></i>';
    
    if(ip.value !=''){
        newLi.textContent = ip.value;
        ip.value= '';
        temp.appendChild(newLi);
        newLi.appendChild(cbtn);
        newLi.appendChild(tbtn);
    }

    cbtn.addEventListener('click', function(){
        const p= this.parentNode;
        p.remove();
    });

    tbtn.addEventListener('click', function(){
        const t= this.parentNode;
        t.remove();
    });
}