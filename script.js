var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength()
{
    return input.value.length;
}

function createList()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    li.addEventListener("click" , function(){
        var finished = this.classList.toggle("done");

        var removeButton = document.createElement("button");

        removeButton.classList= "removebutton";
        if(finished)
        {
            removeButton.appendChild(document.createTextNode("remove"));
            li.appendChild(removeButton);

                removeButton.addEventListener("click", function(){
                    this.parentElement.remove();
        });
        }

        else
        this.getElementsByClassName("removebutton")[0].remove();
});
        

    input.value="";
}

function addListafterClick(){

    if(input.value.length == 0)
    return;

    createList();
}

function addListafterKey(event)
{

    if(input.value.length >0 && event.keyCode===13 )
    {
            createList();
    }
    
}

button.addEventListener("click" ,addListafterClick )
input.addEventListener("keypress" , addListafterKey)



