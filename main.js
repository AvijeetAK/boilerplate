

var form = document.getElementById('addForm');

var itemlist = document.getElementById('items');

var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeItem);

filter.addEvenetListener('keyup', filterItems);

function addItem(e)
{
    e.preventDefault();

  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');

  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));

  //create delete button element

  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('x'));

  li.appendChild(deleteBtn);

  itemlist.appendChild(li);
}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure'))
        {
                var li = e.target.parentElement;
                itemlist.removeChild(li);
        }
    }
}


// FilterItems

function filterItems(e)
{
    var text = e.target.value.toLowerCase();
    var items =  itemlist.getElementByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{

            item.style.display = 'none';
        }
        
    })
}