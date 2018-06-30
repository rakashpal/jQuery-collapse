# jQuery-Collapse



This Simple plugin for hide and show description section on click of title element


### Steps to use this script in porject
* copy **__collapse.js__**,**__collapse.css__**,**__down-arrow.png__** and **__left-arrow.png__** in your project asset directory.
* attach **__collapse.js__** and **__collapse.css__** in head section in html file.
* add below code in file 
 ~~~
    $(document).ready(function(){
      $("#fold-section").collapse({
		  headColor:'#fff',
		  headBackground:"#000",
	  });	
	});
   ~~~

* html 

    ~~~
    <div id="fold-section">
		
			<div class="wrapper">
					<h2>Lorem Ipsum is simply dummy text</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
			<div class="wrapper">
					<h2>Lorem Ipsum is simply dummy text</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
		</div>

### screenshot
<img src="jquery-collapse.png" style="width:100%:height:auto;" alt="Screenshot"/>



