// {/* <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
// </ul> */}

let arr = [1, 2, 3, 55];
let arr2 = [1,2, [1.1,1.2,1.3], 3];
let arr3  = [1, 2, [1.1, 1.2, [1.21, 1.22], 1.3], 3];

function generateList(arr){
const newDiv = document.createElement("div");
let ul = document.createElement("ul");

for(let i = 0; i < arr.length; i++){
  let li = document.createElement("li");
 
  if(Array.isArray(arr[i])){
    let subUl = document.createElement("ul");

    generateListDynamically(arr[i], subUl);

    li.appendChild(subUl);
  } else {
    li.textContent = arr[i];
  }

  ul.appendChild(li);
} 


document.body.appendChild(newDiv);
newDiv.appendChild(ul);
}

function generateListDynamically(arr, parentUl){
  for(let i = 0; i < arr.length; i++){
    let li = document.createElement("li");
   
    if(Array.isArray(arr[i])){
      let subUl = document.createElement("ul");
      generateListDynamically(arr[i], subUl);
  
      li.appendChild(subUl);
    } else {
      li.textContent = arr[i];
    }
  
    parentUl.appendChild(li);
  } 
}



generateList(arr);


