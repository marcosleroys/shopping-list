function addItem(){
	$('.itemForm').on('submit', (event) => {//once the item form gets submited
		event.preventDefault(); // we ignore the default page reload and append the html
		console.log('You clicked the submit'); //to the end of the .listBox ul
		let input = $('#itemInput').val();//get the input, and insert it on the html
		$('.listBox').append(`
								<li>
					            <div class="divBox">
					              <h1 id="ready"> ${input} </h1>
					              <div>
					                <span> <button id="readyButton" class="button"> Ready </button> </span>
					                <span> <button id="deleteButton" class="button"> Delete </button> </span>
					              </div> 
					            </div>
					          	</li>
					          	<br></br>
							`);
		$('.itemForm').trigger("reset");
	});
	
}

function readyItem(){ //document.body works when you dynamically create a button
	$(document.body).on('click', '#readyButton', function(){ //after clicking id readyButton element only 
			console.log('clicked readyButton');
  			$('h1#ready').toggleClass("ready"); // the elements with ready id will get the ready class
		}); // The ready class contains css and gets toggled in and out of the h1
}


function delItem(){
	$(document.body).on('click', '#deleteButton', function(){
		console.log('clicked deleteButton');
		$(this).closest('li').remove();
	});
}


$(delItem);
$(addItem);
$(readyItem); //could only get to ready all of the items
