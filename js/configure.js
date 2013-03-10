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
			   {name: 'Chipper Black', sprite: -25}, // id: 1
			   {name: 'Chipper Stone', sprite: -160},
			   {name: 'Chipper Cloud', sprite: -325},
			      

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
			var fabricSamples = '<ul class="col">'  
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
			   {name: 'Nectarine', sprite: -160},
			   {name: 'Eggplant', sprite: -325},
			   {name: 'Midnight', sprite: -475},
			   {name: 'Bali Blue', sprite: -625}, // id: 5
			   {name: 'Summer Grass', sprite: -775}, 
			   	 

];
var clothName = "None";

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
				clothName = cloth[clothId].name;
				$('.seltxt_cloth').text(clothName);
					if (clothCharge > 0) {	
						clothPrice = clothCharge;
						$('.seltxt_cloth').append(' (+$' + clothPrice + ')');
					}
		        $('#sel_cloth').css('background', 'url(css/images/fabrics/grasscloth.jpg) 0  ' + cloth[clothId].sprite + 'px no-repeat');
			} else {
			clothName = "None";	
			}
			if (clothValue == "clothNone") {
			 	clothPrice = 0;
				$('.seltxt_cloth').text("None")
				$('#sel_cloth').css('background', 'none');
			}
}


/*------------------------ Laminate Swatches -------------------------*/
var laminate = [0, //ignore CSS naming start with 1
			   {name: 'Mustard', sprite: -25}, // id: 1
			   {name: 'Orange', sprite: -160},
			   {name: 'White', sprite: -325},
			   {name: 'Charcoal', sprite: -475},
			   {name: 'Space', sprite: -625}, // id: 5
			   {name: 'Pear', sprite: -775},
			   {name: 'Walnut', sprite: -950}
			   	   

];
var laminateName = "None";

var laminateIcons = [];
for (var i=1; i < laminate.length; i++) {
    laminateIcons.push({find: '.laminate' + i});
}
					
/**
* @param string value - Example fabric2
*/
function getIdFromlaminateValue(value) {
	return value.substring(8);
}
function getIdFromlaminateName(name) {
	var id = 0;
	for (var i = 0; i < laminate.length; i++) {
	    if (name == laminate[i].name) {
		    id = i;
			break;
		}
	}
	return id;
}
function showlaminateIcons() {
			for (var i=1; i < laminate.length; i++) {
				
				
	      		$('body .laminate' + i + ' .ui-selectmenu-item-icon').css('background', 'url(css/images/finishes/laminate.png) 0  ' + laminate[i].sprite + 'px no-repeat');                                       
		
	    	}
			}
/* Setup laminate swatches on the dropdown */
function setuplaminate() {
var laminateOptions = '<option id="laminateNone" value="None" class="">Laminate Options</option>';
for (var i=1; i < laminate.length; i++) {
	   			
				laminateOptions += '<option id="laminate' + i + '" value="' + laminate[i].name + '" class="laminate' + i + '">' + laminate[i].name + '</option>';
				
			}
                    
			$('#laminate').append(laminateOptions);
	   		
			$('select#laminate').selectmenu({
				style:'dropdown',
				icons: laminateIcons,
				width:225,
				maxHeight:300
				
			});
			
			
			
			showlaminateIcons();
			
			/* Setup laminate Samples */
			var laminateSamples = '<p>Choose a Laminate for the top of your feeder.</p><ul class="col">'  
			for (var i=1; i< laminate.length; i++) {
			
			laminateSamples +='<li class="option large"><a href="#" class="Sample_link" style="border: 1px solid gray; background: url(css/images/fabrics/grasslaminate.jpg) 0  '  + laminate[i].sprite + 'px no-repeat"><span class="optionText optionTextbg">&nbsp;</span><span class="optionText">' + laminate[i].name + '</span></a><input type="hidden" name="'  + laminate[i].name + '" value="' + laminate[i].name + '" /></li>'
			
			}
			laminateSamples += '</ul>'
			//console.info(laminateSamples);
			$('#dialog_laminate').append(laminateSamples);

}
// Switch laminate swatch on the viewer
function displaylaminate() {
		    laminateValue = $('#laminate option:selected').attr('id');
			
			if (laminateValue.indexOf && laminateValue.indexOf('laminate') >= 0 && laminateValue != 'laminateNone') {
				var laminateId = getIdFromlaminateValue(laminateValue);
				console.info(laminateValue + ' = laminateValue, ' + laminateId + ' = laminateId');
				laminateName = laminate[laminateId].name;
				$('.seltxt_laminate').text(laminateName);
					if (laminateCharge > 0) {	
						laminatePrice = laminateCharge;
						$('.seltxt_laminate').append(' (+$' + laminatePrice + ')');
					}
		        $('#sel_laminate').css('background', 'url(css/images/finishes/laminate.png) 0  ' + laminate[laminateId].sprite + 'px no-repeat');
			} else {
			laminateName = "None";	
			}
			if (laminateValue == "laminateNone") {
			 	laminatePrice = 0;
				$('.seltxt_laminate').text("None")
				$('#sel_laminate').css('background', 'none');
			}
}



/*------------------------ Fleece Swatches -------------------------*/


var fleece = [0, //ignore CSS naming start with 1
			   {name: 'Camel', sprite: -25}, // id: 1
			   {name: 'DM Red', sprite: -160},
			   {name: 'Chocolate', sprite: -325},
			   {name: 'Black', sprite: -475},
			   {name: 'Aruba Blue', sprite: -625},
			   {name: 'Spinach', sprite: -775}, // id: 5
			   
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

/*------------------------entrance Swatches -------------------------*/
var entrance = [0, //ignore CSS naming start with 1
			   {name: 'Circle', sprite: -750, sprite_prev: 0, size:' 8"'}, // id: 1
			   {name: 'Rectangle', sprite: -600, sprite_prev: -300, size:' 11&#189;"x 13"'}
				   	   

];

var entranceName="None";

var entranceIcons = [];
for (var i=1; i < entrance.length; i++) {
    entranceIcons.push({find: '.entrance' + i});
}
					
/**
* @param string value - Example fabric2
*/
function getIdFromentranceValue(value) {
	return value.substring(8);//this number corresponds to the number of letters in "entrance" looking for 1 in entrance1
}
function getIdFromentranceName(name) {
	var id = 0;
	for (var i = 0; i < entrance.length; i++) {
	    if (name == entrance[i].name) {
		    id = i;
			break;
		}
	}
	return id;
}
function showentranceIcons() {
			for (var i=1; i < entrance.length; i++) {
				
				
	      		$('body .entrance' + i + ' .ui-selectmenu-item-icon').css('background', 'url(css/images/entrance.jpg) 0  ' + entrance[i].sprite + 'px no-repeat');                                       
		
	    	}
			}
/* Setup entrance swatches on the dropdown */
function setupentrance() {
var entranceOptions = '<option id="entranceNone" value="None" class="">Entrance Options</option>';
for (var i=1; i < entrance.length; i++) {
	   			
				entranceOptions += '<option id="entrance' + i + '" value="' + entrance[i].name + '" class="entrance' + i + '">' + entrance[i].name +'</option>';
				
			}
                    
			$('#entrance').append(entranceOptions);
	   		
			$('select#entrance').selectmenu({
				style:'dropdown',
				icons: entranceIcons,
				width:225,
				maxHeight:300
				
			});
			
			
			
			showentranceIcons();
			
			/* Setup entrance Samples */
			var entranceSamples = '<p>Choose a entrance for your Circa50.</p><ul class="col">'  
			for (var i=1; i< entrance.length; i++) {
			
			entranceSamples +='<li class="option large"><a href="#" class="Sample_link" style="border: 1px solid gray; background: url(css/images/entrancees/entrancees.png) 0  '  + entrance[i].sprite + 'px no-repeat"><span class="optionText optionTextbg">&nbsp;</span><span class="optionText">' + entrance[i].name + '</span></a><input type="hidden" name="'  + entrance[i].name + '" value="' + entrance[i].name + '" /></li>'
			
			}
			entranceSamples += '</ul>'
			//console.info(entranceSamples);
			$('#dialog_entrance').append(entranceSamples);

}
// Switch entrance swatch on the viewer
function displayentrance() {
		    entranceValue = $('#entrance option:selected').attr('id');
			
			console.log('entranceValue', entranceValue);
			if (entranceValue.indexOf && entranceValue.indexOf('entrance') >= 0 && entranceValue != 'entranceNone') {
				var entranceId = getIdFromentranceValue(entranceValue);
				console.log(entranceValue, ' = entranceValue, ', entranceId, ' = entranceId');
				
				
				entranceName = (entrance[entranceId].name);
				$('.seltxt_entrance').html(entranceName + entrance[entranceId].size);
					/*if (entrancePrice > 0) {	
						
						$('.seltxt_entrance').append(' (+$' + entrancePrice + ')');
					}*/
		        $('#sel_entrance').css('background', 'url(css/images/entrance.jpg) 0  ' + entrance[entranceId].sprite_prev + 'px no-repeat');
				
			} 
			if (entranceValue == "entranceNone") {
			 	entrancePrice = 0;
				$('.seltxt_entrance').html('<span class="red">Select an Entrance</span>');
				//$('#sel_entrance').css('background', 'none');
			}
}





function displayPreview() {
			var previewItem
			if ($('.cloth_disp').is(':visible') && clothName != "None") {
				previewItem = "_" + clothName.toLowerCase().replace(/ /g, '-');
			} else if ($('.laminate_disp').is(':visible') && (laminateName != "None")) {
					previewItem = "_" + laminateName.toLowerCase().replace(/ /g, '-');
			} else {
					previewItem = "";
			}
			//console.info(clothName);		
			
			var previewImage = (imagePath + previewItem + '.jpg'); 
			console.log('previewImage =', previewImage, 'laminateName', laminateName);
			$('#circa50_img').attr('src',previewImage);
				
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
var laminateCharge = 0;
var base2Charge = 0;
var baseCharge = 0;
var lengthCharge = 0;
var fleeceCharge = 0;

var litterpanCharge = 0;

 if (itemValue == "circa50Std") {
	 	var itemBuy = "Circa50: Standard";
	 	$('.entrance_disp').show();
		$('.fabric_disp').show();
		$('.cloth_disp').show();
		$('.fleece_disp').show();
		$('.litterpan_disp').show();
		$('#fabric-option').show();
		$('#loungepad').show();		
		var litterpanCharge = 19;
		var litterpanType = 'Include Litterpan';
		var startPrice = 599;
		var fabricCharge = 59;
		var fleeceCharge = 59;
		var clothCharge = 0;
		var shippingPrice = 0;
		var itemPrice = startPrice;
		var imagePath = 'css/images/preview/std';	
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on0' value='Entrance' /><input type='hidden' name='on2' value='Grass Cloth' /><input type='hidden' name='on5' value='Lounge Pad' /><input type='hidden' name='on3' value='Fleece Pad' />");
		
		
	}  else if (itemValue == "circa50CompactI") {
	 	var itemBuy = "Circa50: Compact I";
	 	$('.entrance_disp').show();
		$('.fabric_disp').show();
		$('.cloth_disp').show();
		$('.fleece_disp').show();
		$('.litterpan_disp').show();
		$('#fabric-option').show();
		$('#loungepad').show();
		var litterpanCharge = 19;
		var litterpanType = 'Include Litterpan';
		var startPrice = 479;
		var fabricCharge = 39;
		var fleeceCharge = 39;
		var clothCharge = 0;
		var shippingPrice = 0;
		var itemPrice = startPrice;
		var imagePath = 'css/images/preview/compact';	
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on0' value='Entrance' /><input type='hidden' name='on2' value='Grass Cloth' /><input type='hidden' name='on5' value='Lounge Pad' /><input type='hidden' name='on3' value='Fleece Pad' />");
		
		
	}  else if (itemValue == "circa50CompactII") {
	 	var itemBuy = "Circa50: Compact II";
	 	$('.entrance_disp').show();
		$('.fabric_disp').show();
		$('.cloth_disp').show();
		$('.fleece_disp').show();
		$('.littermat_disp').show();
		$('#fabric-option').show();
		$('#loungepad').show();
		var litterpanCharge = 29;
		var litterpanType = 'Include Littermat';
		var startPrice = 479;
		var fabricCharge = 39;
		var fleeceCharge = 39;
		var clothCharge = 0;
		var shippingPrice = 0;
		var itemPrice = startPrice;
		var imagePath = 'css/images/preview/compact';	
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on0' value='Entrance' /><input type='hidden' name='on2' value='Grass Cloth' /><input type='hidden' name='on5' value='Lounge Pad' /><input type='hidden' name='on3' value='Fleece Pad' />");
		
		
	} 
	else if (itemValue == "circa50Diner") {
	 	var itemBuy = "Circa 50: Diner";
		$('.laminate_disp').show();
		$('.litterpan_disp').hide();
		var startPrice = 79;
		var shippingPrice = 0;
		var itemPrice = startPrice;
		var imagePath = 'css/images/preview/feeder';	
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on4' value='Laminate' />");
		
		
	}    else  {
		
		$('#fabric-field').show();
		
		
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
	
			
			
			
			
			
			$('select#house').selectmenu({
				style:'dropdown',
				width:125
			});
			
		
		setupFabric();
		setupCloth();
		setupFleece();
		
		setuplaminate();
		setupentrance();
		
		var carpetValue = null;
		var fleeceValue = null;
		
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
			displayLitterpan();
			displayFleece();			
			displaylaminate();
			displayentrance();
			displayPreview();//should be last in the list
			
			itemPrice = startPrice + clothPrice + fleecePrice + fabricPrice + litterpanPrice;
			$('#price').text(itemPrice);
				
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
	$(function() {
		$('#dialog_laminate').dialog({
			autoOpen: false,
			height: 510,
			width: 615,
			minHeight: 600,
			resizable: false
			});
		var dialog_laminate_ready = false;
		$('#opener_laminate').click(function() {
			//console.info("im in the opener");
			$('#dialog_laminate').dialog('open');
			if (dialog_laminate_ready == false) {
			    dialog_laminate_ready = true;
				$('.Sample_link', $('#dialog_laminate')).click(function(){
	    		    //alert("We got called");
			
	   		  	    var link = $(this);
				    var selectedValue = $('input', link.parent()).val();
				    $('#laminate-button').remove();
				    //console.info("Trying to set the value to ", selectedValue);
				    $('select#laminate').val(selectedValue);

				    $('select#laminate').selectmenu({
				        style:'dropdown',
				        icons: laminateIcons
				    }); // select#laminatees
					showlaminateIcons();
			        displayVals();
			
			        $('#dialog_laminate').dialog('close');
		
			        return false;
			    });// .Sample_link click
			} // if dialog_laminate_ready == false
		    return false;
		});// #opener_laminate click
	});//anonymous

$('.main').show();


});	//end document ready	
	