import { module as BaseModule } from 'modujs';

let bodyElement;
let cartMenu;
let cartLink;
let slideCart;
let slideCartBg;
let closeCart;
let currentContent = "";
let $qty = '';
let step = 1;
let ajaxTimeout = '';
let ajaxTimeoutDur = 500;

// Define el constructor del módulo
function ArtWooCommerce(m) {
	BaseModule.call(this, m);

	this.state = {
		processing: false,
		productID: false,
		type: 'regular',
		removeFlag: false,
		key: 0,
		min: 0,
		currentVal: 1,
		max: 100000,
	};

	//this.events();
}

// Hereda los métodos del módulo base usando prototype
ArtWooCommerce.prototype = Object.create(BaseModule.prototype);
ArtWooCommerce.prototype.constructor = ArtWooCommerce;

// Define los métodos y propiedades adicionales del módulo
ArtWooCommerce.prototype.init = function () {
	var that = this;
	cartMenu = document.querySelector('header .cart-menu-wrap');
	bodyElement = this.el;
	cartLink = document.querySelector('.cart-contents');
	slideCart = document.querySelector('.art-slide-in-cart');
	slideCartBg = document.querySelector('.art-slide-in-cart-bg');
	closeCart = document.querySelector('.close-cart');

	closeCart.addEventListener('click', (event) => {
		event.preventDefault();
		this.closeRightCart();
	});

	cartMenu.addEventListener('click', (event) => {
		event.preventDefault();
		this.openRightCart();
	});

	slideCartBg.addEventListener('click', () => {
		this.closeRightCart();
		return false;
	});

	jQuery(document.body).on('added_to_cart', function (event) {
		console.log('Lanzado added to cart');
		that.UpdateCartItems();
	});
	jQuery(document.body).on('removed_from_cart', function (event) {
		console.log('Lanzado removed from cart');
		that.UpdateCartItems();
	});
	
	this.UpdateCartItems();

};


ArtWooCommerce.prototype.UpdateCartItems = function(){
	var that = this;

	var cartItems = document.querySelectorAll('.mini_cart_item');
	
	cartItems.forEach(item => {
		
		var minusBtn = item.querySelector('.minus');
		var plusBtn = item.querySelector('.plus');
		var qtyInput = item.querySelector('.qty');

		minusBtn.addEventListener('click', function () {
			
			var currentValue = parseFloat(qtyInput.value);
			var minValue = parseFloat(qtyInput.min);

			if (currentValue > minValue) {
				qtyInput.value = (currentValue - 1).toString();
				that.updateCartItem(qtyInput, qtyInput.value);
			}
		});
		
		plusBtn.addEventListener('click', function () {
			var currentValue = parseFloat(qtyInput.value);
			var maxValue = parseFloat(qtyInput.max);

			if (maxValue != 'NaN' && currentValue < maxValue) {
				qtyInput.value = (currentValue + 1).toString();
				that.updateCartItem(qtyInput, qtyInput.value);
			} else {
				qtyInput.value = (currentValue + 1).toString();
				that.updateCartItem(qtyInput, qtyInput.value);
			}
		});

		qtyInput.addEventListener('change', function () {
			that.updateCartItem(qtyInput, qtyInput.value);
		});

	});
}

ArtWooCommerce.prototype.updateCartItem = function (item, newQuantity){
	var itemKey = 0; // Obtener el key del producto
	var nameAttr = item.getAttribute('name');
	var matches = nameAttr.match(/cart\[(\w+)\]/);
	
	if (matches && matches.length > 1) {
		itemKey = matches[1];
	}

	/* var requestData = new URLSearchParams();
	requestData.append('action', 'art_minicart_update_quantity');
	requestData.append('quantity', val);
	requestData.append('item_key', that.state.key);
	 */
	
	var requestData = {
		action: 'woocommerce_ajax_update_order_review', // Acción AJAX de WooCommerce para actualizar la orden de revisión
		post_data: {
			qty: newQuantity,
			item_key: itemKey
		}
	};
	
}


ArtWooCommerce.prototype.openRightCart = function () {
	if (bodyElement.classList.contains('woocommerce-checkout') || bodyElement.classList.contains('woocommerce-cart')) {
		return true;
	}

	slideCart.classList.add('open');
	slideCartBg.classList.add('open');
};

ArtWooCommerce.prototype.closeRightCart = function () {
	slideCart.classList.remove('open');
	slideCartBg.classList.remove('open');
};

ArtWooCommerce.prototype.checkMiniCart = function (el) {
	return (el.closest('.woocommerce-mini-cart')) ? true : false;
};

ArtWooCommerce.prototype.events = function(){
	const that = this;
	const minusbuttons = document.querySelectorAll('.quantity .minus');
	const plusbuttons = document.querySelectorAll('.quantity .plus');
	const qtys = document.querySelectorAll('.woocommerce-mini-cart .quantity .qty');

	minusbuttons.forEach(element => {
		element.addEventListener('click', () => {
			console.log('minus');
			if (!element.closest('.auction_form')){
				$qty = element.closest('.quantity').querySelector('.qty');
				that.updateState();
				this.decrement();
			}
		});
	});

	plusbuttons.forEach(element => {
		element.addEventListener('click', () => {
			console.log('plus');
			if (!element.closest('.auction_form')) {
				$qty = element.closest('.quantity').querySelector('.qty');
				that.updateState();
				this.increment();
			}
		});
	});

	
	qtys.forEach(element => {
		element.addEventListener('keyup', () => {
			
		});	
		element.addEventListener('change', (e) => {
			if (!e.originalEvent && true === this.checkMiniCart(element)) {
				this.updateCart(element.value);
			}
		});	
	});
}

ArtWooCommerce.prototype.updateState = function(el){
	var key = 0;

	if ( true == this.checkMiniCart($qty)){
		var nameAttr = $qty.getAttribute('name');
		var matches = nameAttr.match(/cart\[(\w+)\]/);

		if (matches && matches.length > 1) {
			key = matches[1];
		}
	}

	var currentVal = parseFloat($qty.value);

	if (!currentVal || currentVal === '' || currentVal === 'NaN') {
		currentVal = 0;
	}

	var max = parseFloat($qty.getAttribute('max'));
	var min = parseFloat($qty.getAttribute('min'));

	if (max === '' || max === 'NaN' || isNaN(max)) {
		max = '';
	}

	if (min === '' || min === 'NaN' || isNaN(min)) {
		min = 0;
	}

	this.state.key = key;
	this.state.min = min;
	this.state.max = max;
}

ArtWooCommerce.prototype.updateCart = function (val) {

	var that = this;
	console.log(this.state);

	this.ajaxTimeout = setTimeout(function () {
		var val = parseFloat($qty.value);
		var $widgetShoppingCartContent = $qty.closest('.widget_shopping_cart_content');
		var $woocommerceMiniCartItem = $qty.closest('.woocommerce-mini-cart-item');
		
		$widgetShoppingCartContent.classList.add('loading');
		$woocommerceMiniCartItem.classList.add('blockUI');
		$woocommerceMiniCartItem.classList.add('blockOverlay');
		


		var requestData = new URLSearchParams();
		requestData.append('action', 'art_minicart_update_quantity');
		requestData.append('quantity', val);
		requestData.append('item_key', that.state.key);

		fetch(art.ajax_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: requestData
		})
			.then(function (responseData){
			$widgetShoppingCartContent.classList.remove('loading');
			$woocommerceMiniCartItem.classList.remove('blockUI');
			$woocommerceMiniCartItem.classList.remove('blockOverlay');

			// Update subtotal.
			var $subtotal = $widgetShoppingCartContent.querySelector('.woocommerce-mini-cart__total');
			
			var existingPriceElements = $subtotal.querySelectorAll('.woocommerce-Price-amount, .tax_label');

			existingPriceElements.forEach(function (element) {
				element.remove();
			});

			$subtotal.insertAdjacentHTML('beforeend', responseData.subtotal);

			// Does the item need to be removed?
			if (that.state.removeFlag === true) {
				$woocommerceMiniCartItem.remove();
				that.state.removeFlag = false;
				document.body.dispatchEvent(new Event('updated_wc_div'));
			}

			// Update cart count.
			var cartCountElement = document.querySelector('#header-outer a.cart-contents .cart-wrap span');
			if (cartCountElement) {
				cartCountElement.textContent = responseData.item_count;
			}
		})
		.catch(function (error) {
			console.error('Fetch error:', error);
		});
	}, this.ajaxTimeoutDur);		
}

ArtWooCommerce.prototype.setStep = function(){

}

ArtWooCommerce.prototype.decrement = function () {
	var minValue = parseFloat($qty.min);
	var maxValue = parseFloat($qty.max);
	var currentValue = parseFloat($qty.value);
	var stepValue = parseFloat($qty.step);

	if (minValue && (minValue === currentValue || currentValue < minValue)) {
		$qty.value = minValue.toString();
		this.state.removeFlag = true;
	} else if (maxValue && currentValue > maxValue) {
		$qty.value = maxValue.toString();
	} else if (currentValue > 0) {
		$qty.value = (currentValue - stepValue).toString();
	}
	var changeEvent = new Event('change');

	// Disparar el evento personalizado 'change' en el elemento $qty
	$qty.dispatchEvent(changeEvent);
}

ArtWooCommerce.prototype.increment = function(){
	var currentVal = parseFloat($qty.value);
	var step = parseFloat($qty.step); 
	var max = parseFloat($qty.max); 

	// Comprobar si el valor actual + el paso supera el valor máximo permitido
	if (!isNaN(max) && currentVal + step > max) {
		// Si supera el valor máximo, establecer el valor en el máximo permitido
		$qty.value = max;
	} else {
		// Si no supera el valor máximo, simplemente sumar el paso al valor actual
		$qty.value = (currentVal + step).toString();
	} 

	var changeEvent = new Event('change');

	// Disparar el evento personalizado 'change' en el elemento $qty
	$qty.dispatchEvent(changeEvent);
}

export default ArtWooCommerce;
