let images = document.getElementsByTagName('img');
			
			let lastElementDragged;
			
			for(let i = 0; i < images.length; i++) {
				let image = images[i];
				
				image.addEventListener("dragstart", (event) => {
					lastElementDragged = event.target;
				})
			}
		
			let elements = document.getElementsByTagName('td');
			
			for(let i = 0; i < elements.length; i++) {
				let element = elements[i];
				
				element.addEventListener("dragover", (event) => {
					event.preventDefault();
				});
				
				element.addEventListener("drop", (event) => {
					event.preventDefault();
					console.log('event.target', event.target.tagName);
					console.log('ondrop', event.target.children.length);
					if(event.target.children.length == 0 && event.target.tagName != "IMG")
						event.target.appendChild(lastElementDragged);
				});
			}
			
			let cemitery = document.getElementById("cemitery");
			
			cemitery.addEventListener("dragover", (event) => {
				event.preventDefault();
			});
			
			cemitery.addEventListener("drop", (event) => {
				event.preventDefault();
				event.target.appendChild(lastElementDragged);
			});