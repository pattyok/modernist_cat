// JavaScript Document


// checks URL String to load appropriate product   

function getQuerystring(key, default_)
{
  if (default_==null) default_="";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
}


	
	
	
	


//* --------------------  LOADING ALL PAGE COMPONENTS ------------------------*//
							
$(document).ready(function() {
	var itemValue = getQuerystring('item');
	
/* ======================================== SET UP DROP-DOWNS AND POP-UPS =========================================== */	
	
	/*------------------ Fabric Swatches ----------------------------*/
var fabrics = [0, //ignore CSS naming start with 1
			   {name: 'Cryptic', sprite: -25}, // id: 1
			   {name: 'Bamboozle', sprite: -160},
			   {name: 'Gowk', sprite: -325},
			   {name: 'Didactic', sprite: -475},
			   {name: 'Lacuna', sprite: -625}, // id: 5
			   {name: 'Paragon', sprite: -775}, 
			   {name: 'Nexus', sprite: -900},
			   {name: 'Overture', sprite: -1075},
			   {name: 'Megrim', sprite: -1215},
			   {name: 'Hobnob', sprite: -1375}, // id: 10
			   {name: 'Stat', sprite: -1525},
			   {name: 'Oculus', sprite: -1675},
			   {name: 'Xoana', sprite: -1800},
			   {name: 'Umbra', sprite: -1950},
			   {name: 'Solid Color of Your Choice', sprite: -2125} // id: 15		   

];

var fabricIcons = [];
for (var i=1; i < fabrics.length; i++) {
    fabricIcons.push({find: '.fabric' + i});
}
					/*
					{find: '.fabric1'},
					{find: '.fabric2'},
					{find: '.fabric3'},
					...
					{find: '.fabric13'},
					{find: '.fabric14'},
					{find: '.fabric15'},
					*/
					


/**
* @param string value - Example fabric2
*/
function getIdFromFabricValue(value) {
	return value.substring(6);
}
function getIdFromFabricName(name) {
	var id = 0;
	for (var i = 0; i < fabrics.length; i++) {
	    if (name == fabrics[i].name) {
		    id = i;
			break;
		}
	}
	return id;
}

function showFabIcons() {
			for (var i=1; i < fabrics.length; i++) {
				
				
	      		$('body .fabric' + i + ' .ui-selectmenu-item-icon').css('background', 'url(css/images/fabrics/fabric.jpg) 0  ' + fabrics[i].sprite + 'px no-repeat');                                       
		
	    	}
			}

/* Setup Fabric swatches on dropdown */
function setupFabric() {
var fabricOptions = '<option id="fabricNone" value="None" class="">Fabric Options</option>';
for (var i=1; i < fabrics.length; i++) {
	   			//fabricOptions += '<option value="fabric' + i + '" class="fabric' + i + '">' + fabrics[i].name + '</option>';
				fabricOptions += '<option id="fabric' + i + '" value="' + fabrics[i].name + '" class="fabric' + i + '">' + fabrics[i].name + '</option>';
				
			}
                    
			$('#fabric').append(fabricOptions);
	   		
			$('select#fabric').selectmenu({
				style:'dropdown',
				icons: fabricIcons,
				width:225,
				maxHeight:300
				
			});
			
			/* setting up as function this is called again when the dialog box is used */
			
			showFabIcons();
			
			/* Setup Fabric Samples */
			var fabricSamples = '<p>Choose from a whimisical print or solid fabric.</p><ul class="col">'  
			for (var i=1; i< fabrics.length; i++) {
			
			fabricSamples +='<li class="option large"><a href="#" class="Sample_link" style="border: 1px solid gray; background: url(css/images/fabrics/fabric.jpg) 0  '  + fabrics[i].sprite + 'px no-repeat"><span class="optionText optionTextbg">&nbsp;</span><span class="optionText">' + fabrics[i].name + '</span></a><input type="hidden" name="'  + fabrics[i].name + '" value="' + fabrics[i].name + '" /></li>'
			
			}
			fabricSamples += '</ul>'
			//console.info(fabricSamples);
			$('#dialog_fabric').append(fabricSamples);

}
// Switch fabric swatch
function displayFabric() {
		    fabricValue = $('#fabric option:selected').attr('id');
			if (fabricValue.indexOf && fabricValue.indexOf('fabric') >= 0 && fabricValue != 'fabricNone') {
				var fabricId = getIdFromFabricValue(fabricValue);
				//console.info(fabricValue, " gives us ", fabricId);
				$('.seltxt_fabric').text(fabrics[fabricId].name);
					if (fabricCharge > 0) {	
						fabricPrice = fabricCharge;
						$('.seltxt_fabric').append(' (+$' + fabricPrice + ')');
					}
		        $('#sel_fabric').css('background', 'url(css/images/fabrics/fabric.jpg) 0  ' + fabrics[fabricId].sprite + 'px no-repeat');
			} 
			if (fabricValue == "fabricNone") {
			 	fabricPrice = 0;
				$('.seltxt_fabric').text("None")
				$('#sel_fabric').css('background', 'none');
			}
}

/*------------------------ Grasscloth Swatches -------------------------*/
var cloth = [0, //ignore CSS naming start with 1
			   {name: 'Spring Flax', sprite: -25}, // id: 1
			   {name: 'Warm Cocoa', sprite: -160},
			   {name: 'Summer Grass', sprite: -325},
			   {name: 'Chartreuse', sprite: -475},
			   {name: '50\'s Pink', sprite: -625}, // id: 5
			   {name: 'Orange Nectarine', sprite: -775}, 
			   {name: 'Baltic Blue', sprite: -900},
			   {name: 'Midnight', sprite: -1050}
			   	   

];

var clothIcons = [];
for (var i=1; i < cloth.length; i++) {
    clothIcons.push({find: '.cloth' + i});
}
					
/**
* @param string value - Example fabric2
*/
function getIdFromClothValue(value) {
	return value.substring(5);
}
function getIdFromClothName(name) {
	var id = 0;
	for (var i = 0; i < cloth.length; i++) {
	    if (name == cloth[i].name) {
		    id = i;
			break;
		}
	}
	return id;
}
function showclothIcons() {
			for (var i=1; i < cloth.length; i++) {
				
				
	      		$('body .cloth' + i + ' .ui-selectmenu-item-icon').css('background', 'url(css/images/fabrics/grasscloth.jpg) 0  ' + cloth[i].sprite + 'px no-repeat');                                       
		
	    	}
			}
/* Setup Cloth swatches on the dropdown */
function setupCloth() {
var clothOptions = '<option id="clothNone" value="None" class="">Grass Cloth Options</option>';
for (var i=1; i < cloth.length; i++) {
	   			
				clothOptions += '<option id="cloth' + i + '" value="' + cloth[i].name + '" class="cloth' + i + '">' + cloth[i].name + '</option>';
				
			}
                    
			$('#cloth').append(clothOptions);
	   		
			$('select#cloth').selectmenu({
				style:'dropdown',
				icons: clothIcons,
				width:225,
				maxHeight:300
				
			});
			
			
			
			showclothIcons();
			
			/* Setup Cloth Samples */
			var clothSamples = '<p>Choose a Grasscloth for the face of the Circa50.</p><ul class="col">'  
			for (var i=1; i< cloth.length; i++) {
			
			clothSamples +='<li class="option large"><a href="#" class="Sample_link" style="border: 1px solid gray; background: url(css/images/fabrics/grasscloth.jpg) 0  '  + cloth[i].sprite + 'px no-repeat"><span class="optionText optionTextbg">&nbsp;</span><span class="optionText">' + cloth[i].name + '</span></a><input type="hidden" name="'  + cloth[i].name + '" value="' + cloth[i].name + '" /></li>'
			
			}
			clothSamples += '</ul>'
			//console.info(clothSamples);
			$('#dialog_cloth').append(clothSamples);

}
// Switch cloth swatch on the viewer
function displayCloth() {
		    clothValue = $('#cloth option:selected').attr('id');
			
			if (clothValue.indexOf && clothValue.indexOf('cloth') >= 0 && clothValue != 'clothNone') {
				var clothId = getIdFromClothValue(clothValue);
				//console.info(clothValue + ' = clothValue, ' + clothId + ' = clothId');
				$('.seltxt_cloth').text(cloth[clothId].name);
					if (clothCharge > 0) {	
						clothPrice = clothCharge;
						$('.seltxt_cloth').append(' (+$' + clothPrice + ')');
					}
		        $('#sel_cloth').css('background', 'url(css/images/fabrics/grasscloth.jpg) 0  ' + cloth[clothId].sprite + 'px no-repeat');
			} 
			if (clothValue == "clothNone") {
			 	clothPrice = 0;
				$('.seltxt_cloth').text("None")
				$('#sel_cloth').css('background', 'none');
			}
}


/*------------------------ Fleece Swatches -------------------------*/


var fleece = [0, //ignore CSS naming start with 1
			   {name: 'Sand', sprite: 0}, // id: 1
			   {name: 'Buttercup', sprite: -100},
			   {name: 'Chartreuse', sprite: -200},
			   {name: 'Deep Ocean', sprite: -300},
			   {name: 'Grass', sprite: -400},
			   {name: 'Lawn', sprite: -500}, // id: 5
			   {name: 'Sage', sprite: -600}, 
			   {name: 'Chocolate', sprite: -700},
			   {name: 'Clay', sprite: -800},
			   {name: 'Fire', sprite: -900},
			   {name: 'Ruby', sprite: -1000},
			   {name: 'Lavendar', sprite: -1100},
			   {name: 'Charcoal', sprite: -1200},
			   {name: 'Raven', sprite: -1300},
			   {name: 'Snow', sprite: -1400}
			   
			   	   

];

var fleeceIcons = [];
for (var i=1; i < fleece.length; i++) {
    fleeceIcons.push({find: '.fleece' + i});
}
					
/**
* @param string value - Example fabric2
*/
function getIdFromFleeceValue(value) {
	return value.substring(6);
}
function getIdFromFleeceName(name) {
	var id = 0;
	for (var i = 0; i < fleece.length; i++) {
	    if (name == fleece[i].name) {
		    id = i;
			break;
		}
	}
	return id;
}
function showfleeceIcons() {
			for (var i=1; i < fleece.length; i++) {
			$('body .fleece' + i + ' .ui-selectmenu-item-icon').css('background', 'url(css/images/fleece/fleece.jpg) 0  ' + fleece[i].sprite + 'px no-repeat');                                       
		
	    	}
			}
/* Setup Cloth swatches on the dropdown */
function setupFleece() {
var fleeceOptions = '<option id="fleeceNone" value="None" class="">Fleece Options</option>';
for (var i=1; i < fleece.length; i++) {
	   			
				fleeceOptions += '<option id="fleece' + i + '" value="' + fleece[i].name + '" class="fleece' + i + '">' + fleece[i].name + '</option>';
				
			}
                    
			$('#fleece').append(fleeceOptions);
	   		
			$('select#fleece').selectmenu({
				style:'dropdown',
				icons: fleeceIcons,
				width:225,
				maxHeight:300
				
			});
			
			
			
			showfleeceIcons();
			
			/* Setup Cloth Samples */
			var fleeceSamples = '<p>Choose a fleece color.</p><ul class="col">'  
			for (var i=1; i< fleece.length; i++) {
			
			fleeceSamples +='<li class="option"><a href="#" class="Sample_link" style="border: 1px solid gray; background: url(css/images/fleece/fleece.jpg) 0  '  + fleece[i].sprite + 'px no-repeat"><span class="optionText optionTextbg">&nbsp;</span><span class="optionText">' + fleece[i].name + '</span></a><input type="hidden" name="'  + fleece[i].name + '" value="' + fleece[i].name + '" /></li>'
			
			}
			fleeceSamples += '</ul>'
			//console.info(fleeceSamples);
			$('#dialog_fleece').append(fleeceSamples);

}
// Switch fleece swatch on the viewer
function displayFleece() {
		    fleeceValue = $('#fleece option:selected').attr('id');
			
			if (fleeceValue.indexOf && fleeceValue.indexOf('fleece') >= 0 && fleeceValue != 'fleeceNone') {
				var fleeceId = getIdFromFleeceValue(fleeceValue);
				//console.info(fleeceValue + ' = fleeceValue, ' + fleeceId + ' = fleeceId');
				$('.seltxt_fleece').text(fleece[fleeceId].name);
					if (fleeceCharge > 0) {	
						fleecePrice = fleeceCharge;
						$('.seltxt_fleece').append(' (+$' + fleecePrice + ')');
					}
		        $('#sel_fleece').css('background', 'url(css/images/fleece/fleece.jpg) 0  ' + fleece[fleeceId].sprite + 'px no-repeat');
			} 
			if (fleeceValue == "fleeceNone") {
			 	fleecePrice = 0;
				$('.seltxt_fleece').text("None")
				$('#sel_fleece').css('background', 'none');
			}
}



var finishPrice = 0;
				
	
				


/*------------------------Finish Swatches -------------------------*/
var finish = [0, //ignore CSS naming start with 1
			   {name: 'Maple', sprite: 0}, // id: 1
			   {name: 'Walnut (+$49)', sprite: -75}
				   	   

];

var finishIcons = [];
for (var i=1; i < finish.length; i++) {
    finishIcons.push({find: '.finish' + i});
}
					
/**
* @param string value - Example fabric2
*/
function getIdFromFinishValue(value) {
	return value.substring(6);//this number corresponds to the number of letters in "finish" looking for 1 in finish1
}
function getIdFromFinishName(name) {
	var id = 0;
	for (var i = 0; i < finish.length; i++) {
	    if (name == finish[i].name) {
		    id = i;
			break;
		}
	}
	return id;
}
function showfinishIcons() {
			for (var i=1; i < finish.length; i++) {
				
				
	      		$('body .finish' + i + ' .ui-selectmenu-item-icon').css('background', 'url(css/images/finishes/finishes.png) 0  ' + finish[i].sprite + 'px no-repeat');                                       
		
	    	}
			}
/* Setup finish swatches on the dropdown */
function setupFinish() {
var finishOptions = '<option id="finishNone" value="None" class="">Finish Options</option>';
for (var i=1; i < finish.length; i++) {
	   			
				finishOptions += '<option id="finish' + i + '" value="' + finish[i].name + '" class="finish' + i + '">' + finish[i].name + '</option>';
				
			}
                    
			$('#finish').append(finishOptions);
	   		
			$('select#finish').selectmenu({
				style:'dropdown',
				icons: finishIcons,
				width:225,
				maxHeight:300
				
			});
			
			
			
			showfinishIcons();
			
			/* Setup finish Samples */
			var finishSamples = '<p>Choose a finish for your Circa50.</p><ul class="col">'  
			for (var i=1; i< finish.length; i++) {
			
			finishSamples +='<li class="option large"><a href="#" class="Sample_link" style="border: 1px solid gray; background: url(css/images/finishes/finishes.png) 0  '  + finish[i].sprite + 'px no-repeat"><span class="optionText optionTextbg">&nbsp;</span><span class="optionText">' + finish[i].name + '</span></a><input type="hidden" name="'  + finish[i].name + '" value="' + finish[i].name + '" /></li>'
			
			}
			finishSamples += '</ul>'
			//console.info(finishSamples);
			$('#dialog_finish').append(finishSamples);

}
// Switch finish swatch on the viewer
function displayFinish() {
		    finishValue = $('#finish option:selected').attr('id');
			//console.info(finishPrice);
			if (finishValue.indexOf && finishValue.indexOf('finish') >= 0 && finishValue != 'finishNone') {
				var finishId = getIdFromFinishValue(finishValue);
				//console.info(finishValue + ' = finishValue, ' + finishId + ' = finishId');
				
				if (finishId == 2) {
					finishPrice = 49
					//console.info("yes" + finishPrice);
				} else {
				finishPrice = 0
				}
				$('.seltxt_finish').text(finish[finishId].name);
					/*if (finishPrice > 0) {	
						
						$('.seltxt_finish').append(' (+$' + finishPrice + ')');
					}*/
		        $('#sel_finish').css('background', 'url(css/images/finishes/finishes.png) 0  ' + finish[finishId].sprite + 'px no-repeat');
				if (finishId == 1) {
					$('#circa50_img').attr('src',imageMaple);
					
					//console.info('finish1')	
				} else if (finishId == 2) {
					$('#circa50_img').attr('src',imageWalnut);	
					
					//console.info('finish2')	
				}
			} 
			if (finishValue == "finishNone") {
			 	finishPrice = 0;
				$('.seltxt_finish').text("None");
				$('#sel_finish').css('background', 'none');
			}
}



/*-------- SET UP Litterpans ---------------*/

	var litterpanValue;
	var litterpanPrice=0;
	function displayLitterpan() {
	if ($('#litterpan').is(":checked")) {
		litterpanValue = litterpanType;
		litterpanPrice = litterpanCharge;
		$('.seltxt_litterpan').text(litterpanValue + ' - ($' + litterpanPrice + ')');
		
		} else {
		litterpanValue = "None";
		litterpanPrice = 0;
		$('.seltxt_litterpan').text(litterpanValue);
		}	
	
	}

	$('#litterpan').click(function() {
		displayLitterpan;
		displayVals();
	});
	
	






          /*-----------------------------------------------------------------*/	
          /*-------------------- SET UP THE ITEMS ---------------------------*/
          /*-----------------------------------------------------------------*/
var clothCharge = 0;
var base2Charge = 0;
var baseCharge = 0;
var lengthCharge = 0;
var fleeceCharge = 0;
var finishCharge = 0;
var litterpanCharge = 0;

 if (itemValue == "circa50Lg") {
	 	var itemBuy = "Circa50: Large";
	 	$('.finish_disp').show();
		$('.fabric_disp').show();
		$('.cloth_disp').show();
		$('.fleece_disp').show();
		$('.litterpan_disp').show();
		$('#fabric-option').show();
		$('#loungepad').show();
		var startPrice = 599;
		var fabricCharge = 79;
		var fleeceCharge = 79;
		var clothCharge = 79;
		var shippingPrice = 0;
		var litterpanCharge = 29;
		var litterpanType = 'Two 18"x15" Litterpans';
		var itemPrice = startPrice;
		var imageWalnut = 'images/products/large1.jpg';
		var imageMaple = 'images/products/large3.jpg'
		$('#circa50_img').attr('src',imageWalnut);		
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on0' value='Finish' /><input type='hidden' name='on2' value='Grass Cloth' /><input type='hidden' name='on5' value='Lounge Pad' /><input type='hidden' name='on3' value='Fleece Pad' />");
		
		
	}  else if (itemValue == "circa50Med") {
	 	var itemBuy = "Circa50: Medium";
	 	$('.finish_disp').show();
		$('.fabric_disp').show();
		$('.cloth_disp').show();
		$('.fleece_disp').show();
		$('#fabric-option').show();
		$('#loungepad').show();
		var litterpanCharge = 19;
		var litterpanType = '22"x16" Litterpan';
		var startPrice = 499;
		var fabricCharge = 59;
		var fleeceCharge = 59;
		var clothCharge = 59;
		var shippingPrice = 0;
		var itemPrice = startPrice;
		var imageWalnut = 'images/products/medium1.jpg';
		var imageMaple = 'images/products/medium2.jpg'
		$('#circa50_img').attr('src',imageMaple);		
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on0' value='Finish' /><input type='hidden' name='on2' value='Grass Cloth' /><input type='hidden' name='on5' value='Lounge Pad' /><input type='hidden' name='on3' value='Fleece Pad' />");
		
		
	} else if (itemValue == "circa50Sm") {
	 	var itemBuy = "Circa50: Small";
	 	$('.finish_disp').show();
		$('.fabric_disp').show();
		$('.cloth_disp').show();
		$('.fleece_disp').show();
		$('#fabric-option').show();
		$('#loungepad').show();
		var litterpanCharge = 19;
		var litterpanType = '16"x 12" Litterpan';
		var startPrice = 449;
		var fabricCharge = 39;
		var fleeceCharge = 39;
		var clothCharge = 39;
		var shippingPrice = 0;
		var itemPrice = startPrice;
		var imageWalnut = 'images/products/small1.jpg';
		var imageMaple = 'images/products/small3.jpg'
		$('#circa50_img').attr('src',imageMaple);	
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on0' value='Finish' /><input type='hidden' name='on2' value='Grass Cloth' /><input type='hidden' name='on5' value='Lounge Pad' /><input type='hidden' name='on3' value='Fleece Pad' />");
		
		
	}    else  {
		$('#finish-field').show();
		
		$('#fabric-field').show();
		$('#sel_finish').show();
		
		$('#sel_fabric').show();
		$('#casestudy_img').show();
		var startPrice = 375;
		var itemPrice = startPrice;
		$('#price').text(itemPrice);
		$('#shipping').text("shipping included");	
		$('#buy_button').html(" ");
	
	
	}
	
	
	
	$('.seltxt_item').text(itemBuy);
	$('#price').text(itemPrice);
	$('#shipping').text(shippingPrice);	
	//$('#baseCharge').text(baseCharge);	
	//$('#lengthCharge').text(lengthCharge);
	$('.fabricCharge').text(fabricCharge);
	$('.clothCharge').text(clothCharge);
	$('.fleeceCharge').text(fleeceCharge);
	$('.litterpanCharge').text(litterpanCharge);
	
			
			
			/*$('select#finish').selectmenu({
				style:'dropdown',
				icons: finishIcons,
				width:225
				
			});*/
			
			
			$('select#house').selectmenu({
				style:'dropdown',
				width:125
			});
			
		
		setupFabric();
		setupCloth();
		setupFleece();
		setupFinish();
		
		var carpetValue = null;
		var fleeceValue = null;
		var finishValue = null;
		var fabricValue = 0;
		var houseValue = null;
		
		var widthValue = null;
		var baseValue = null;
		var base2Value = null;
		var lengthValue = null;
		var ent_widthValue = null;
		var entlocValue = null;
		var ent_smholeValue = null;
		var fabricId = 0;
		function displayVals() {
			
			var houseClass = houseValue+"_sel";
		    $('#sel_house').removeClass(houseClass);
			
			houseValue = $("#house").val();
		    itemValue = houseValue;
			
			displayFabric();
			displayCloth();
			displayFinish();
			displayLitterpan();
			displayFleece();
			
			
			
			
			
			
			itemPrice = startPrice + finishPrice + clothPrice + fleecePrice + fabricPrice + litterpanPrice;
			$('#price').text(itemPrice);
			//console.log("widthValue = " + widthValue + ", itemValue = " + itemValue + ", itemBuy = " + itemBuy + ", sizePrice = " + sizePrice + ", startPrice = " + startPrice + ", finishPrice=" + finishPrice + "basePrice = " + basePrice);	
			
			$('#buy_button2').html("<input type='hidden' name='amount' value='" + itemPrice + "' /><input type='hidden' name='item_name' value='" + itemBuy + "' /><input type='hidden' name='os6' value='" + litterpanValue +"' /><input type='hidden' name='shipping' value='" + shippingPrice + "' />" );
			
   		};
	
    $("select").change(displayVals);
    displayVals();

//------- DIALOG BOXES ------------//
	// increase the default animation speed to exaggerate the effect
	$.fx.speeds._default = 1000;
	$(function() {
		$('#dialog_carpet').dialog({
			autoOpen: false,
			height: 600,
			width: 500,
			minHeight: 500,
			resizable: false
			});
		var openerCarpetReady = false;
		$('#opener_carpet').click(function() {
		    
		    $('#dialog_carpet').dialog('open');
		    if (openerCarpetReady == false) {
			    openerCarpetReady = true;
				
				$('.Sample_link', $('#dialog_carpet')).click(function(){
	    			//alert("We got called");
		
	   				var link = $(this);
					var selectedValue = $('input', link.parent()).val();
					$('#carpet-button').remove();
					//console.info("Trying to set the value to ", selectedValue);
					$('select#carpet').val(selectedValue);

					$('select#carpet').selectmenu({
					    style:'dropdown',
					    icons: carpetIcons
					});
					showcarpetIcons();
				    displayVals();
				    $('#dialog_carpet').dialog('close');
		
				return false;
				});// .Sample_link .click
		    } // if openerCarpetReady == false
		return false;
		});
	});//end carpet dialog
		
	//$.fx.speeds._default = 1000;
	$(function() {
		$('#dialog_finish').dialog({
			autoOpen: false,
			height: 200,
			width: 300,
			minHeight: 200,
			resizable: false
			});
		var dialog_finish_ready = false;
		$('#opener_finish').click(function() {
			$('#dialog_finish').dialog('open');
			if (dialog_finish_ready == false) {
			    dialog_finish_ready = true;
				$('.Sample_link', $('#dialog_finish')).click(function(){
	    		   // alert("We got called");
			
	   		  	    var link = $(this);
				    var selectedValue = $('input', link.parent()).val();
				    $('#finish-button').remove();
				  // console.info("Trying to set the value to ", selectedValue);
				    $('select#finish').val(selectedValue);

				    $('select#finish').selectmenu({
				        style:'dropdown',
				        icons: finishIcons
				    }); // select#finishes
			       
			showfinishIcons();
			        displayVals();
			        $('#dialog_finish').dialog('close');
		
			        return false;
			    });// .Sample_link click
			} // if dialog_finish_ready == false
		    return false;
		});// #opener_finish click
	});//anonymous
	//$.fx.speeds._default = 1000;

	//$.fx.speeds._default = 1000;
	$(function() {
		$('#dialog_fleece').dialog({
			autoOpen: false,
			height: 500,
			width: 500,
			minHeight: 500,
			resizable: false
			});
		var dialog_fleece_ready = false;
		$('#opener_fleece').click(function() {
			$('#dialog_fleece').dialog('open');
			if (dialog_fleece_ready == false) {
			    dialog_fleece_ready = true;
				$('.Sample_link', $('#dialog_fleece')).click(function(){
	    		   // alert("We got called");
			
	   		  	    var link = $(this);
				    var selectedValue = $('input', link.parent()).val();
				    $('#fleece-button').remove();
				  // console.info("Trying to set the value to ", selectedValue);
				    $('select#fleece').val(selectedValue);

				    $('select#fleece').selectmenu({
				        style:'dropdown',
				        icons: fleeceIcons
				    }); // select#fleecees
			       
			showfleeceIcons();
			        displayVals();
			        $('#dialog_fleece').dialog('close');
		
			        return false;
			    });// .Sample_link click
			} // if dialog_fleece_ready == false
		    return false;
		});// #opener_fleece click
	});//anonymous
	//$.fx.speeds._default = 1000;
	$(function() {
		$('#dialog_fabric').dialog({
			autoOpen: false,
			height: 510,
			width: 615,
			minHeight: 600,
			resizable: false
			});
		var dialog_fabric_ready = false;
		$('.opener_fabric').click(function() {
			//console.info("im in the opener");
			$('#dialog_fabric').dialog('open');
			if (dialog_fabric_ready == false) {
			    dialog_fabric_ready = true;
				$('.Sample_link', $('#dialog_fabric')).click(function(){
	    		    //alert("We got called");
			
	   		  	    var link = $(this);
				    var selectedValue = $('input', link.parent()).val();
				    $('#fabric-button').remove();
				    //console.info("Trying to set the value to ", selectedValue);
				    $('select#fabric').val(selectedValue);

				    $('select#fabric').selectmenu({
				        style:'dropdown',
				        icons: fabricIcons
				    }); // select#fabrices
					showFabIcons();
			        displayVals();
			
			        $('#dialog_fabric').dialog('close');
		
			        return false;
			    });// .Sample_link click
			} // if dialog_fabric_ready == false
		    return false;
		});// #opener_fabric click
	});//anonymous
	$(function() {
		$('#dialog_cloth').dialog({
			autoOpen: false,
			height: 510,
			width: 615,
			minHeight: 600,
			resizable: false
			});
		var dialog_cloth_ready = false;
		$('#opener_cloth').click(function() {
			//console.info("im in the opener");
			$('#dialog_cloth').dialog('open');
			if (dialog_cloth_ready == false) {
			    dialog_cloth_ready = true;
				$('.Sample_link', $('#dialog_cloth')).click(function(){
	    		    //alert("We got called");
			
	   		  	    var link = $(this);
				    var selectedValue = $('input', link.parent()).val();
				    $('#cloth-button').remove();
				    //console.info("Trying to set the value to ", selectedValue);
				    $('select#cloth').val(selectedValue);

				    $('select#cloth').selectmenu({
				        style:'dropdown',
				        icons: clothIcons
				    }); // select#clothes
					showclothIcons();
			        displayVals();
			
			        $('#dialog_cloth').dialog('close');
		
			        return false;
			    });// .Sample_link click
			} // if dialog_cloth_ready == false
		    return false;
		});// #opener_cloth click
	});//anonymous
	

$('.main').show();


});	//end document ready	
	