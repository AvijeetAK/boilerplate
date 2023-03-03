

var form = document.getElementById('addForm');

var itemlist = document.getElementById('items');

form.addEventListener('submit', addItem);

itemlist.addEventListener('click', removeItem);

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
