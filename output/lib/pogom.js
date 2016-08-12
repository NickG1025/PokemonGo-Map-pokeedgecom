/* start module: pogom */
$pyjs['loaded_modules']['pogom'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pogom']['__was_initialized__']) return $pyjs['loaded_modules']['pogom'];
	var $m = $pyjs['loaded_modules']['pogom'];
	$m['__repr__'] = function() { return '<module: pogom>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pogom';
	$m['__name__'] = __mod_name__;


	$m['config'] = $p['dict']([['LOCALE', 'en'], ['LOCALES_DIR', 'static/dist/locales'], ['ROOT_PATH', ''], ['DATA_DIR', 'static/dist/data'], ['GMAPS_KEY', null]]);
	return this;
}; /* end pogom */


/* end module: pogom */


