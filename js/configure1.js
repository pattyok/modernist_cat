// JavaScript Document


  

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


	
	var finishPrice = 0;
	var  scratchIcons = [
					{find: '.BlackCat'},
					{find: '.Siamese'},
					{find: '.Chinchilla'},
					{find: '.HummingBird'},
					{find: '.BetaFish'},
					{find: '.Chameleon'},
					{find: '.Guppy'},
					{find: '.Iguana'},
					{find: '.Gecko'},
					{find: '.Ferret'},
					{find: '.Parakeet'},
					{find: '.Toucan'},
					
					{find: '.Grasshopper'},
					{find: '.Frog'},
					{find: '.Canary'},
					{find: '.TabbyCat'},
					{find: '.Goldfish'},
					{find: '.PaintedTurtle'},
					{find: '.Snake'},
					{find: '.Parrot'},
					{find: '.Gerbil'},
					{find: '.PotbellyPig'},
					{find: '.IrishSetter'},
					{find: '.Hamster'},
					{find: '.scratch'}

				];
				
	var finishIcons = [
					{find: '.walnut'},
					{find: '.natural'},
					{find: '.oak'},
					{find: '.ebony'},
					{find: '.custom'},
					{find: '.finish'}

				];
				
	var fleeceIcons = [
					{find: '.Fleece'},
					{find: '.Snow'},
					{find: '.Raven'},
					{find: '.Charcoal'},
					{find: '.Lavender'},
					{find: '.Ruby'},
					{find: '.Fire'},
					{find: '.Clay'},
					{find: '.Chocolate'},
					{find: '.Sage'},
					{find: '.Lawn'},
					{find: '.Grass'},
					{find: '.DeepOcean'},
					{find: '.Chartreuse'},
					{find: '.Buttercup'},
					{find: '.Sand'},
				];
	
	var fabricIcons = [
					{find: '.Fabric1'},
					{find: '.Fabric2'},
					{find: '.Fabric3'},
					{find: '.Fabric4'},
					{find: '.Fabric5'},
					{find: '.Fabric6'},
					{find: '.Fabric7'},
					{find: '.Fabric8'},
					{find: '.Fabric9'},
					{find: '.Fabric10'},
					{find: '.Fabric11'},
					{find: '.Fabric12'},
					{find: '.Fabric13'},
					{find: '.Fabric14'},
					{find: '.Fabric15'},
					
				];
				
				
	var feltIcons = [
{find: '.Charcoal_felt'},
{find: '.Flannel_felt'},
{find: '.Oatmeal_felt'},
{find: '.Vanilla_felt'},
{find: '.Taupe_felt'},
{find: '.Earthen_felt'},
{find: '.Walnut_felt'},
{find: '.Brick_felt'},
{find: '.Cayenne_felt'},
{find: '.OrangeCrush_felt'},
{find: '.Marigold_felt'},
{find: '.Chartreuse_felt'},
{find: '.GreenPalm_felt'},
{find: '.Lagoon_felt'},
{find: '.DustyTurquiose_felt'},
					];
					
var baseIcons = [
{find: '.casters'},
{find: '.adjustable'},
{find: '.dot_den_frame'},
{find: '.base'},
					];
							
$(document).ready(function() {
	
	var fabricSelect = $("#fabric");
	for (var i=1; i<fabricIcons.length; i++){
		fabricSelect.append ('<option value="Fabric' + i +'" class="Fabric' + i +'">Fabric ' + i +'</option>');
	}
						   
	$("body .Fabric .ui-selectmenu-item-icon, .Fabric_sel").css("background-position", "0 -125px");					   
						   
						   
	var itemValue = getQuerystring('item');
	
	if (itemValue == "edgyledge") {		    
		var itemBuy = "Edgy Ledge";
	 	$('.finish_disp').show();
		$('.felt_disp').show();
		$('.width_disp').show();
		$('#edgy_img').show();
		var basePrice = 25;
		var itemPrice = basePrice;
		var shippingPrice = 5;
		$('#buy_button').html("<input type='hidden' name='on0' value='Width'><input type='hidden' name='on5' value='Felt' /><input type='hidden' name='on6' value='Finish' />");
		
		
	 } else if (itemValue == "atomic") {
	 	var itemBuy = "Atomic Stool";
	 	$('.finish_disp').show();
		$('.felt_disp').show();
		$('.fabric_disp').show();
		$('#atomic_img').show();
		var basePrice = 275;
		var shippingPrice = 75;
		var itemPrice = basePrice;
		$('#buy_button').html("<input type='hidden' name='on3' value='Lounge Pad' /><input type='hidden' name='on5' value='Felt' /><input type='hidden' name='on6' value='Finish' />");

	 
	 } else if (itemValue == "casestudy") {
	 	var itemBuy = "Case Study Condo";
		$('.finish_disp').show();
		$('.felt_disp').show();
		$('.fabric_disp').show();
		$('#casestudy_img').show();
		var basePrice = 299;
		var shippingPrice = 75;
		var itemPrice = basePrice;
		$('#buy_button').html("<input type='hidden' name='on3' value='Lounge Pad' /><input type='hidden' name='on6' value='Finish' /><input type='hidden' name='on5' value='Felt' />");
		
	} else if (itemValue == "dotden") {
	 	var itemBuy = "Dot Den";
	 	$('.finish_disp').show();
		$('.fleece_disp').show();
		$('.entloc_disp').show();
		$('.smhole_disp').show();
		$('#dotden_img').show();
		var basePrice = 299;
		var shippingPrice = 75;
		var itemPrice = basePrice;
		$('#buy_button').html("<input type='hidden' name='on6' value='Finish' /><input type='hidden' name='on4' value='Fleece' /><input type='hidden' name='on9' value='Small Holes' /><input type='hidden' name='on8' value='Entrance Location' />");
		
	} else if (itemValue == "hideaway") {
	 	var itemBuy = "Litter Hideaway";
	 	$('.finish_disp').show();
		$('.carpet_disp').show();
		$('.fabric_disp').show();
		$('#litter-option').show();
		$('#fabric-option').show();
		var basePrice = 175;
		var shippingPrice = 75;
		var itemPrice = basePrice;
		$('#hideaway_img').show();
		$('#buy_button').html("<input type='hidden' name='on3' value='Lounge Pad' /><input type='hidden' name='on1' value='Carpet' /><input type='hidden' name='on6' value='Finish' />");
		
	} else if (itemValue == "deluxehide") {
	 	var itemBuy = "Litter Hideaway Deluxe";
	 	$('.finish_disp').show();
		$('.fabric_disp').show();
		$('.base_disp').show();
		var basePrice = 299;
		var shippingPrice = 75;
		var itemPrice = basePrice;
		$('#hideawaydel_img').show();		
		$('#buy_button').html("");
		$('#buy_button').html("<input type='hidden' name='on6' value='Finish' /><input type='hidden' name='on3' value='Lounge Pad' /><input type='hidden' name='on0' value='Base' />");
		
		
	} else if (itemValue == "modmover") {
	 	var itemBuy = "Mod Mover";
	 	$('.finish_disp').show();
		$('.fabric_disp').show();
		$('.felt_disp').show();
		$('.carpet_disp').show();
		$('.entwidth_disp').show();
		$('#modmover_img').show();
		var basePrice = 299;
		var shippingPrice = 75;
		var itemPrice = basePrice;
		$('#buy_button').html("<input type='hidden' name='on1' value='Scratch Pad' /><input type='hidden' name='on5' value='Felt' /><input type='hidden' name='on3' value='Lounge Pad' /><input type='hidden' name='on7' value='Entrance Width' /><input type='hidden' name='on6' value='Finish' />");
		
	} else if (itemValue == "lunar") {
	 
	 	var itemBuy = "Lunar Lounger";
	 	$('.fabric_disp').show();
		$('.fleece_disp').show();
		$('#lunar_img').show();
		var basePrice = 199;
		var itemPrice = basePrice;
		$('#fabric_label').text("Underside Fabric:");
		$('#fleece_label').text("Topside Fleece:");
		$('#buy_button').html("<input type='hidden' name='on3' value='Lounge Pad' /><input type='hidden' name='on4' value='Fleece' />");
		
		
	}	else  {
		$('#finish-field').show();
		$('#felt-field').show();
		$('#fabric-field').show();
		$('#sel_finish').show();
		$('#sel_felt').show();
		$('#sel_fabric').show();
		$('#casestudy_img').show();
		var basePrice = 375;
		var itemPrice = basePrice;
		$('#price').text(itemPrice);
		$('#shipping').text("shipping included");	
		$('#buy_button').html(" ");
	
	
	}
	
	$('.seltxt_item').text(itemBuy);
	$('#price').text(itemPrice);
	$('#shipping').text(shippingPrice);		
		
			$('select#carpet').selectmenu({
				style:'dropdown',
				icons: scratchIcons,
				width:225,
				maxHeight:300
				
			});
			
			
			
			$('select#finish').selectmenu({
				style:'dropdown',
				icons: finishIcons,
				width:225
				
			});
			
			$('select#fleece').selectmenu({
				style:'dropdown',
				icons: fleeceIcons,
				width:225,
				maxHeight:300
				
			});
			
			$('select#fabric').selectmenu({
				style:'dropdown',
				icons: fabricIcons,
				width:225,
				maxHeight:300
				
			});
			
			$('select#felt').selectmenu({
				style:'dropdown',
				icons: feltIcons,
				width:225,
				maxHeight:300
				
			});
			$('select#base').selectmenu({
				style:'dropdown',
				icons: baseIcons,
				width:225,
				maxHeight:300
				
			});
			$('select#house').selectmenu({
				style:'dropdown',
				width:125
			});
			
			$('select#width').selectmenu({
				style:'dropdown',
				width:175
			});
			
			$('select#entwidth').selectmenu({
				style:'dropdown',
				width:125
			});
			
			$('select#entloc').selectmenu({
				style:'dropdown',
				width:125
			});
			$('select#smhole').selectmenu({
				style:'dropdown',
				width:125
			});
			
		
			
		
		
		//a custom format option callback
		/*var addressFormatting = function(text){
			var newText = text;
			//array of find replaces
			var findreps = [
				{find:/^([^\-]+) \- /g, rep: '<span class="ui-selectmenu-item-header">$1</span>'},
				{find:/([^\|><]+) \| /g, rep: '<span class="ui-selectmenu-item-content">$1</span>'},
				{find:/([^\|><\(\)]+) (\()/g, rep: '<span class="ui-selectmenu-item-content">$1</span>$2'},
				{find:/([^\|><\(\)]+)$/g, rep: '<span class="ui-selectmenu-item-content">$1</span>'},
				{find:/(\([^\|><]+\))$/g, rep: '<span class="ui-selectmenu-item-footer">$1</span>'}
			];
			
			for(var i in findreps){
				newText = newText.replace(findreps[i].find, findreps[i].rep);
			}
			return newText;
		}*/
		var finishValue = null;
		var carpetValue = null;
		var fleeceValue = null;
		var fabricValue = null;
		var houseValue = null;
		var feltValue = null;
		var widthValue = null;
		var baseValue = null;
		var ent_widthValue = null;
		var entlocValue = null;
		var ent_smholeValue = null;
		function displayVals() {
			
			var houseClass = houseValue+"_sel";
		    $('#sel_house').removeClass(houseClass);
			
			houseValue = $("#house").val();
		    itemValue = houseValue;
		
		    var finishClass = finishValue+"_sel";
		    $('#sel_finish').removeClass(finishClass);
			finishValue = $("#finish").val();
      		
			var finishPrice = 0;
			var carpetPrice =0;
			var sizePrice=0;
			var fabricPrice=0;
     	    if (finishValue == "Custom") {
			finishPrice = 20,
			$('.seltxt_finish').text(finishValue + " (+$" + finishPrice + ")");
			$('#finish_notes').html("Specify your custom finish in your order notes.");
			} else {
			finishPrice =0,
			$('.seltxt_finish').text( finishValue);
			$('#finish_notes').html(" ");
			}
		
			
		    finishClass = finishValue + "_sel";
		    $('#sel_finish').addClass(finishClass);
			selectionValue = finishValue; 
			
			
			
			var carpetClass = carpetValue+"_sel";
		    $('#sel_carpet').removeClass(carpetClass);
			 carpetValue = $("#carpet").val();
      		 $('.seltxt_carpet').text( carpetValue);
		    carpetClass = carpetValue + "_sel";
		    $('#sel_carpet').addClass(carpetClass);
			
			
			if (itemBuy == "Litter Hideaway") {
				if (carpetValue == "None") {
			 	carpetPrice =0
				
				} else {
				carpetPrice =35
				$('dd.seltxt_carpet').text(carpetValue + " (+$" + carpetPrice + ")");
				}
			
			}
			
			
			
			widthValue = $("#width").val();
			
			if (itemBuy == "Edgy Ledge") {
				if (widthValue == "Medium") {
			 	sizePrice =5
				} else if (widthValue == "Large") {
				sizePrice =10
				}
			
			}
			
			
			
			
			var fleeceClass = fleeceValue+"_sel";
		    $('#sel_fleece').removeClass(fleeceClass);
		
		    fleeceValue = $("#fleece").val();
      	
     	    $('.seltxt_fleece').text( fleeceValue);
		    fleeceClass = fleeceValue + "_sel";
		    $('#sel_fleece').addClass(fleeceClass);
			
			var fabricClass = fabricValue+"_sel";
		    $('#sel_fabric').removeClass(fabricClass);
		
		    fabricValue = $("#fabric").val();
      	
     	    $('.seltxt_fabric').text( fabricValue);
		    fabricClass = fabricValue + "_sel";
		    //$('#sel_fabric').addClass(fabricClass);
			
			// Fabric3 -> substring will give us 3
			var offset = ((parseInt(fabricValue.substring(6))-1)*150);
			console.info("We see ", fabricValue);
			var backPos = "0 -" + offset + "px";
			$("body .Fabric .ui-selectmenu-item-icon, .Fabric_sel").css("background-position", backPos);
			
			
			if (itemBuy == "Litter Hideaway") {
				if (fabricValue == "None") {
			 	fabricPrice =0
				} else {
				fabricPrice =35
				$('dd.seltxt_fabric').text(fabricValue + " (+$" + fabricPrice + ")");
				}
			
			}
			
			var feltClass = feltValue+"_felt_sel";
		    $('#sel_felt').removeClass(feltClass);
		
		    feltValue = $("#felt").val();
      	
     	    $('.seltxt_felt').text( feltValue);
		    feltClass = feltValue + "_felt_sel";
		    $('#sel_felt').addClass(feltClass);
			
			var baseClass = baseValue+"_base_sel";
		    $('#sel_base').removeClass(baseClass);
		
		    baseValue = $("#base").val();
      	
     	    $('.seltxt_base').text( baseValue);
		    baseClass = baseValue + "_base_sel";
		    $('#sel_base').addClass(baseClass);
			
			if (itemBuy == "Litter Hideaway Deluxe") {
				if (baseValue == "Dot_Den_Frame") {
			 	$('#base_notes').html("Fits Litterpan: 13w x 19.5d x 6h");
				} else {
				$('#base_notes').html("Fits Litterpan: 16w x 19.5d x 6h");
				}
			
			}
			
			entwidthValue = $("#entwidth").val();
			$('.seltxt_entwidth').text(entwidthValue);
			
			entlocValue = $("#entloc").val();
			$('.seltxt_entloc').text(entlocValue);
			
			smholeValue = $("#smhole").val();
			$('.seltxt_smhole').text(smholeValue);
			
			itemPrice = basePrice + finishPrice + carpetPrice + sizePrice +fabricPrice;
			$('#price').text(itemPrice);
			//console.log("widthValue = " + widthValue + ", itemValue = " + itemValue + ", itemBuy = " + itemBuy + ", sizePrice = " + sizePrice + ", basePrice = " + basePrice + ", finishPrice=" + finishPrice);	
			
			$('#buy_button2').html("<input type='hidden' name='amount' value='" + itemPrice + "' /><input type='hidden' name='item_name' value='" + itemBuy + "' /><input type='hidden' name='shipping' value='" + shippingPrice + "' />" );
			
   		};
	
    $("select").change(displayVals);
    displayVals();

//------- DIALOG BOXES ------------//
	// increase the default animation speed to exaggerate the effect
	$.fx.speeds._default = 1000;
	$(function() {
		$('#dialog_scratch').dialog({
			autoOpen: false,
			height: 600,
			width: 500,
			minHeight: 500,
			resizable: false
			});
		var openerScratchReady = false;
		$('#opener').click(function() {
		    
		    $('#dialog_scratch').dialog('open');
		    if (openerScratchReady == false) {
			    openerScratchReady = true;
				
				$('.Sample_link', $('#dialog_scratch')).click(function(){
	    			//alert("We got called");
		
	   				var link = $(this);
					var selectedValue = $('input', link.parent()).val();
					$('#scratch-button').remove();
					//console.info("Trying to set the value to ", selectedValue);
					$('select#scratch').val(selectedValue);

					$('select#scratch').selectmenu({
					    style:'dropdown',
					    icons: scratchIcons
					});
				    displayVals();
				    $('#dialog_scratch').dialog('close');
		
				return false;
				});// .Sample_link .click
		    } // if openerScratchReady == false
		return false;
		});
	});//end scratch dialog
		
	//$.fx.speeds._default = 1000;
	$(function() {
		$('#dialog_finish').dialog({
			autoOpen: false,
			height: 500,
			width: 500,
			minHeight: 500,
			resizable: false
			});
		var dialog_finish_ready = false;
		$('#opener_finish').click(function() {
			$('#dialog_finish').dialog('open');
			if (dialog_finish_ready == false) {
			    dialog_finish_ready = true;
				$('.Sample_link', $('#dialog_finish')).click(function(){
	    		    //alert("We got called");
			
	   		  	    var link = $(this);
				    var selectedValue = $('input', link.parent()).val();
				    $('#finish-button').remove();
				   // console.info("Trying to set the value to ", selectedValue);
				    $('select#finish').val(selectedValue);

				    $('select#finish').selectmenu({
				        style:'dropdown',
				        icons: finishIcons
				    }); // select#finishes
			        displayVals();
			
			        $('#dialog_finish').dialog('close');
		
			        return false;
			    });// .Sample_link click
			} // if dialog_finish_ready == false
		    return false;
		});// #opener_finish click
	});//anonymous

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
		$('#opener_fabric').click(function() {
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
			        displayVals();
			
			        $('#dialog_fabric').dialog('close');
		
			        return false;
			    });// .Sample_link click
			} // if dialog_fabric_ready == false
		    return false;
		});// #opener_fabric click
	});//anonymous
	$(function() {
			$('#dialog_felt').dialog({
				autoOpen: false,
				height: 500,
				width: 500,
				minHeight: 500,
				resizable: false
				});
			var dialog_felt_ready = false;
			$('#opener_felt').click(function() {
				$('#dialog_felt').dialog('open');
				if (dialog_felt_ready == false) {
					dialog_felt_ready = true;
					$('.Sample_link', $('#dialog_felt')).click(function(){
						//alert("We got called");
				
						var link = $(this);
						var selectedValue = $('input', link.parent()).val();
						$('#felt-button').remove();
						//console.info("Trying to set the value to ", selectedValue);
						$('select#felt').val(selectedValue);
	
						$('select#felt').selectmenu({
							style:'dropdown',
							icons: feltIcons
						}); // select#feltes
						displayVals();
				
						$('#dialog_felt').dialog('close');
			
						return false;
					});// .Sample_link click
				} // if dialog_felt_ready == false
				return false;
			});// #opener_felt click
		});//anonymous


$('.main').show();
});	//end document ready	
	