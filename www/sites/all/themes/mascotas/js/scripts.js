jQuery(document).ready(function(){
	jQuery('body').append('<div class="overlay">');
	jQuery('.view-id-mascotas').append('<span class="prev_node nav_btns_mas">atras</span><span class="next_node nav_btns_mas">siguiente</span>');
	
	jQuery('.view-mascotas.view-display-id-page_1 .views-row .views-field.views-field-field-mascota-fotografia-2 img, .view-mascotas.view-display-id-page .views-row .views-field.views-field-field-mascota-fotografia-2 img').click(function(){
		jQuery('.ficha_mascota').removeClass('ficha_mascota');
		jQuery('.overlay, .nav_btns_mas').fadeIn();
		jQuery(this).parent().parent().parent().addClass('ficha_mascota');
			jQuery('.views-row-last.ficha_mascota').each(function(){
				jQuery('.nav_btns_mas.next_node').hide();
			});
			jQuery('.views-row-first.ficha_mascota').each(function(){
				jQuery('.nav_btns_mas.prev_node').hide();
			});
	});
	
	jQuery('.close').click(function(){
		jQuery(this).parent().parent().parent('.ficha_mascota').removeClass('ficha_mascota');
		jQuery('.overlay, .nav_btns_mas').fadeOut();
	});
	
	jQuery('.next_node').click(function(){
		jQuery('.view-mascotas.view-display-id-page_1 .views-row, .view-mascotas.view-display-id-page .views-row').removeClass('off');					
		jQuery('.ficha_mascota').addClass('off');					
		jQuery('.ficha_mascota').next().addClass('ficha_mascota');
		jQuery('.off').removeClass('ficha_mascota');	
				jQuery('.nav_btns_mas.prev_node').show();
		
			jQuery('.views-row-last.ficha_mascota').each(function(){
				jQuery('.nav_btns_mas.next_node').hide();
			});
			
	});
	jQuery('.prev_node').click(function(){
		jQuery('.view-mascotas.view-display-id-page_1 .views-row, .view-mascotas.view-display-id-page .views-row').removeClass('off');					
		jQuery('.ficha_mascota').addClass('off');			
		jQuery('.ficha_mascota').prev().addClass('ficha_mascota');		
		jQuery('.off').removeClass('ficha_mascota');		
				jQuery('.nav_btns_mas.next_node').show();
	
			jQuery('.views-row-first.ficha_mascota').each(function(){
				jQuery('.nav_btns_mas.prev_node').hide();
			});
	});
	
});