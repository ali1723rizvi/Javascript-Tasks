//document ready with $
jQuery(document).ready(function ($) {
    // variables for adding items
    var addItemName = '';
    var addItemType = '';
    var addItemQuantity = '';

    // variables for request items
    var requestItemName = '';
    var requestItemQuantity = '';
    var requestItemAssignedTo = '';
    var requestItemDueDate = '';

    // variables for add Form items
    var addForm = $('#addForm');
    var addFormItemName = addForm.find('#itemName');
    var addFormItemType = addForm.find('#itemType');
    var addFormItemQuantity = addForm.find('#itemQuantity');
    var addFormItemAssignedTo = addForm.find('#assignedTo');
    var addFormItemDueDate = addForm.find('#dueDate');

    // variables for request Form items
    var requestForm = $('#requestForm');
    var requestFormItemName = requestForm.find('#itemName');
    var requestFormItemType = requestForm.find('#itemType');
    var requestFormItemQuantity = requestForm.find('#itemQuantity');
    var requestFormItemAssignedTo = requestForm.find('#assignedTo');
    var requestFormItemDueDate = requestForm.find('#dueDate');

    //Save data from add form and save it into local storage
    var officeInventoryData = JSON.parse(localStorage.getItem('officeInventory'));
    let itemsArray = {
        item_array: []
    };

    var mainDisplay = $('.total-inventory');
    var mainDisplayList = mainDisplay.find('.inventory-list');
    var mainDisplayHtml = mainDisplayList.html();
    var requestDisplay = $('.assigned-inventory-container');
    var requestDisplayList = requestDisplay.find('.inventory-list');
    var requestDisplayHtml = requestDisplayList.html();

    var curr_post = 0;

    //Display Items in main container
    if (officeInventoryData) {

        officeInventoryData = JSON.parse(localStorage.getItem('officeInventory'));
        officeInventoryData.item_array.forEach(function (item) {
            console.log(item);
            var curr_post = officeInventoryData.item_array.indexOf(item);
            mainDisplayHtml += '<li class="item-'+ curr_post +' hide"></li> <li class="item-name">' + item.name + '</li><li class="item-type">' + item.type + '</li><li class="item-quantity">' + item.quantity + '</li>';
            mainDisplayList.html(mainDisplayHtml);
            
        })
    }
    //Display Items in request container
    if (officeInventoryData) {

        officeInventoryData = JSON.parse(localStorage.getItem('officeInventory'));
        officeInventoryData.item_array.forEach(function (item) {
            console.log(item);
            requestDisplayHtml += '<li class="item-'+ curr_post +' hide"></li> <li class="item-name">' + item.name + '</li><li class="item-type">' + item.type + '</li><li class="item-quantity">' + item.quantity + '</li><li class="assigned-to">' + item.assignedTo + '</li><li class="due-date">' + item.dueDate + '</li>';
            requestDisplayList.html(requestDisplayHtml);
        })
    }

    //populate request form name field and quantity
    if(officeInventoryData){
        
    }
    

    addForm.on('submit', function (e) {
        e.preventDefault();

        //assign asending numeric ids to items
        if(officeInventoryData){
            //check if id exists
            console.log(officeInventoryData);
        
        }
        addItemName = addFormItemName.val();
        addItemType = addFormItemType.val();
        addItemQuantity = addFormItemQuantity.val();
        addItemAssignedTo = addFormItemAssignedTo.val();
        addItemDueDate = addFormItemDueDate.val();

        addItemName = addItemName.toUpperCase();
        addItemType = addItemType.toUpperCase();
        addItemAssignedTo = addItemAssignedTo.toLowerCase();

        var item = {
            name: addItemName,
            type: addItemType,
            quantity: addItemQuantity,
            assignedTo: addItemAssignedTo,
            dueDate: addItemDueDate
        };

        itemsArray.item_array.push(item);
        //convert into JSON onject
        var itemDataJSON = JSON.stringify(itemsArray);

        console.log(itemDataJSON, 'itemDataJSON');

        //save into local storage
        localStorage.setItem('officeInventory', itemDataJSON);
        
    });


});