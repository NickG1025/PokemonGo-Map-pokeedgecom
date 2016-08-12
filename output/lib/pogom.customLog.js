/* start module: pogom.customLog */
$pyjs['loaded_modules']['pogom.customLog'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pogom.customLog']['__was_initialized__']) return $pyjs['loaded_modules']['pogom.customLog'];
	if(typeof $pyjs['loaded_modules']['pogom'] == 'undefined' || !$pyjs['loaded_modules']['pogom']['__was_initialized__']) $p['___import___']('pogom', null);
	var $m = $pyjs['loaded_modules']['pogom.customLog'];
	$m['__repr__'] = function() { return '<module: pogom.customLog>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pogom.customLog';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pogom']['customLog'] = $pyjs['loaded_modules']['pogom.customLog'];


	$m['get_pokemon_rarity'] = $p['___import___']('pogom.utils.get_pokemon_rarity', null, null, false);
	$m['get_pokemon_name'] = $p['___import___']('pogom.utils.get_pokemon_name', null, null, false);
	$m['get_args'] = $p['___import___']('pogom.utils.get_args', 'pogom', null, false);
	$m['datetime'] = $p['___import___']('datetime.datetime', 'pogom', null, false);
	$m['args'] = $m['get_args']();
	$m['printPokemon'] = function(id, lat, lng, itime) {
		var timeLeft,pokemon_id,doPrint,$sub1,pokemon_rarity,pokemon_name,$sub2;
		if ($p['bool']($p['getattr']($m['args'], 'display_in_console'))) {
			pokemon_name = $m['get_pokemon_name'](id)['lower']();
			pokemon_rarity = $m['get_pokemon_rarity'](id)['lower']();
			pokemon_id = $p['str'](id);
			doPrint = true;
			if ($p['bool'](doPrint)) {
				timeLeft = $p['__op_sub']($sub1=itime,$sub2=$m['datetime']['utcnow']());
				$p['printFunc']([$p['sprintf']('======================================\n Name: %s\n Rarity: %s\n Coord: (%f,%f)\n ID: %s \n Remaining Time: %s\n======================================', $p['tuple']([pokemon_name['encode']('utf-8'), pokemon_rarity['encode']('utf-8'), lat, lng, pokemon_id, $p['str'](timeLeft)]))], 1);
			}
		}
		return null;
	};
	$m['printPokemon']['__name__'] = 'printPokemon';

	$m['printPokemon']['__bind_type__'] = 0;
	$m['printPokemon']['__args__'] = [null,null,['id'],['lat'],['lng'],['itime']];
	return this;
}; /* end pogom.customLog */


/* end module: pogom.customLog */


/*
PYJS_DEPS: ['pogom.utils.get_pokemon_rarity', 'pogom', 'pogom.utils', 'pogom.utils.get_pokemon_name', 'pogom.utils.get_args', 'datetime.datetime', 'datetime']
*/
