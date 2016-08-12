/* start module: runserver */
$pyjs['loaded_modules']['runserver'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['runserver']['__was_initialized__']) return $pyjs['loaded_modules']['runserver'];
	var $m = $pyjs['loaded_modules']['runserver'];
	$m['__repr__'] = function() { return '<module: runserver>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'runserver';
	$m['__name__'] = __mod_name__;
	var $pyjs_try_err,$or1,$or2;

	$m['os'] = $p['___import___']('os', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['shutil'] = $p['___import___']('shutil', null);
	$m['logging'] = $p['___import___']('logging', null);
	$m['time'] = $p['___import___']('time', null);
	$m['re'] = $p['___import___']('re', null);
	$m['requests'] = $p['___import___']('requests', null);
	$m['StrictVersion'] = $p['___import___']('distutils.version.StrictVersion', null, null, false);
	$m['Thread'] = $p['___import___']('threading.Thread', null, null, false);
	$m['Event'] = $p['___import___']('threading.Event', null, null, false);
	$m['Queue'] = $p['___import___']('queue.Queue', null, null, false);
	$m['CORS'] = $p['___import___']('flask_cors.CORS', null, null, false);
	$m['init_cache_busting'] = $p['___import___']('flask_cache_bust.init_cache_busting', null, null, false);
	$m['config'] = $p['___import___']('pogom.config', null, null, false);
	$m['Pogom'] = $p['___import___']('pogom.app.Pogom', null, null, false);
	$m['get_args'] = $p['___import___']('pogom.utils.get_args', null, null, false);
	$m['insert_mock_data'] = $p['___import___']('pogom.utils.insert_mock_data', null, null, false);
	$m['get_encryption_lib_path'] = $p['___import___']('pogom.utils.get_encryption_lib_path', null, null, false);
	$m['search_overseer_thread'] = $p['___import___']('pogom.search.search_overseer_thread', null, null, false);
	$m['fake_search_loop'] = $p['___import___']('pogom.search.fake_search_loop', null, null, false);
	$m['init_database'] = $p['___import___']('pogom.models.init_database', null, null, false);
	$m['create_tables'] = $p['___import___']('pogom.models.create_tables', null, null, false);
	$m['drop_tables'] = $p['___import___']('pogom.models.drop_tables', null, null, false);
	$m['pgoapi_version'] = '1.1.7';
	$pyjs_kwargs_call($m['logging'], 'basicConfig', null, null, [{'format':'%(asctime)s [%(threadName)16s][%(module)14s][%(levelname)8s] %(message)s'}]);
	$m['log'] = $m['logging']['getLogger']();
	$m['oldpgoapiPath'] = $m['os']['path']['join']($m['os']['path']['dirname']('/Users/nickgiersdorf/Desktop/PokemonGo-Map-pokeedgecom/runserver.py'), 'pogom/pgoapi');
	if ($p['bool']($m['os']['path']['isdir']($m['oldpgoapiPath']))) {
		$m['log']['info']('I found %s, but its no longer used. Going to remove it...', $m['oldpgoapiPath']);
		$m['shutil']['rmtree']($m['oldpgoapiPath']);
		$m['log']['info']('Done!');
	}
	try {
		$m['pgoapi'] = $p['___import___']('pgoapi', null);
		$m['util'] = $p['___import___']('pgoapi.utilities', null, null, false);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
		$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
		if (($pyjs_try_err_name == $p['ImportError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			$m['log']['critical']('It seems `pgoapi` is not installed. You must run pip install -r requirements.txt again');
			$m['sys']['exit'](1);
		} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
	}
	if ($p['bool'](($p['bool']($or1=!$p['bool']($p['hasattr']($m['pgoapi'], '__version__')))?$or1:($p['cmp']($m['StrictVersion']($p['getattr']($m['pgoapi'], '__version__')), $m['StrictVersion']($m['pgoapi_version'])) == -1)))) {
		$m['log']['critical']('It seems `pgoapi` is not up-to-date. You must run pip install -r requirements.txt again');
		$m['sys']['exit'](1);
	}
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['encryption_lib_path'] = $m['get_encryption_lib_path']();
		if ($p['bool'](($m['encryption_lib_path'] === ''))) {
			$m['sys']['exit'](1);
		}
		$m['args'] = $m['get_args']();
		if ($p['bool']($p['getattr']($m['args'], 'debug'))) {
			$m['log']['setLevel']($p['getattr']($m['logging'], 'DEBUG'));
		}
		else {
			$m['log']['setLevel']($p['getattr']($m['logging'], 'INFO'));
		}
		if ($p['bool'](!$p['bool']($p['getattr']($m['args'], 'no_server')))) {
			if ($p['bool'](!$p['bool']($m['os']['path']['exists']($m['os']['path']['join']($m['os']['path']['dirname']('/Users/nickgiersdorf/Desktop/PokemonGo-Map-pokeedgecom/runserver.py'), 'static/dist'))))) {
				$m['log']['critical']('Missing front-end assets (static/dist) -- please run "npm install && npm run build" before starting the server');
				$m['sys']['exit']();
			}
		}
		$m['logging']['getLogger']('peewee')['setLevel']($p['getattr']($m['logging'], 'INFO'));
		$m['logging']['getLogger']('requests')['setLevel']($p['getattr']($m['logging'], 'WARNING'));
		$m['logging']['getLogger']('pgoapi.pgoapi')['setLevel']($p['getattr']($m['logging'], 'WARNING'));
		$m['logging']['getLogger']('pgoapi.rpc_api')['setLevel']($p['getattr']($m['logging'], 'INFO'));
		$m['logging']['getLogger']('werkzeug')['setLevel']($p['getattr']($m['logging'], 'ERROR'));
		$m['config']['__setitem__']('parse_pokemon', !$p['bool']($p['getattr']($m['args'], 'no_pokemon')));
		$m['config']['__setitem__']('parse_pokestops', !$p['bool']($p['getattr']($m['args'], 'no_pokestops')));
		$m['config']['__setitem__']('parse_gyms', !$p['bool']($p['getattr']($m['args'], 'no_gyms')));
		if ($p['bool']($p['getattr']($m['args'], 'debug'))) {
			$m['logging']['getLogger']('requests')['setLevel']($p['getattr']($m['logging'], 'DEBUG'));
			$m['logging']['getLogger']('pgoapi')['setLevel']($p['getattr']($m['logging'], 'DEBUG'));
			$m['logging']['getLogger']('rpc_api')['setLevel']($p['getattr']($m['logging'], 'DEBUG'));
		}
		$m['prog'] = $m['re']['compile']('^(\\-?\\d+\\.\\d+),?\\s?(\\-?\\d+\\.\\d+)$');
		$m['res'] = $m['prog']['match']($p['getattr']($m['args'], 'location'));
		if ($p['bool']($m['res'])) {
			$m['log']['debug']('Using coordinates from CLI directly');
			$m['position'] = $p['tuple']([$p['float']($m['res']['group'](1)), $p['float']($m['res']['group'](2)), 0]);
		}
		else {
			$m['log']['debug']('Looking up coordinates in API');
			$m['position'] = $m['util']['get_pos_by_name']($p['getattr']($m['args'], 'location'));
		}
		try {
			$m['url'] = 'https://maps.googleapis.com/maps/api/elevation/json?locations={},{}'['format']($p['str']($m['position']['__getitem__'](0)), $p['str']($m['position']['__getitem__'](1)));
			$m['altitude'] = $m['requests']['get']($m['url'])['json']()['__getitem__']('results')['__getitem__'](0)['__getitem__']('elevation');
			$m['log']['debug']('Local altitude is: %sm', $m['altitude']);
			$m['position'] = $p['tuple']([$m['position']['__getitem__'](0), $m['position']['__getitem__'](1), $m['altitude']]);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if ((($pyjs_try_err_name == $p['getattr']($p['getattr']($m['requests'], 'exceptions'), 'RequestException')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($p['getattr']($m['requests'], 'exceptions'), 'RequestException')))||(($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError']))||(($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError']))) {
				$m['log']['error']('Unable to retrieve altitude from Google APIs; setting to 0');
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		if ($p['bool'](!$p['bool']($p['any']($m['position'])))) {
			$m['log']['error']('Could not get a position by name, aborting');
			$m['sys']['exit']();
		}
		$m['log']['info']('Parsed location is: %.4f/%.4f/%.4f (lat/lng/alt)', $m['position']['__getitem__'](0), $m['position']['__getitem__'](1), $m['position']['__getitem__'](2));
		if ($p['bool']($p['getattr']($m['args'], 'no_pokemon'))) {
			$m['log']['info']('Parsing of Pokemon disabled');
		}
		if ($p['bool']($p['getattr']($m['args'], 'no_pokestops'))) {
			$m['log']['info']('Parsing of Pokestops disabled');
		}
		if ($p['bool']($p['getattr']($m['args'], 'no_gyms'))) {
			$m['log']['info']('Parsing of Gyms disabled');
		}
		$m['config']['__setitem__']('LOCALE', $p['getattr']($m['args'], 'locale'));
		$m['config']['__setitem__']('CHINA', $p['getattr']($m['args'], 'china'));
		$m['app'] = $m['Pogom']((typeof __name__ == "undefined"?$m['__name__']:__name__));
		$m['db'] = $m['init_database']($m['app']);
		if ($p['bool']($p['getattr']($m['args'], 'clear_db'))) {
			$m['log']['info']('Clearing database');
			if ($p['bool']($p['op_eq']($p['getattr']($m['args'], 'db_type'), 'mysql'))) {
				$m['drop_tables']($m['db']);
			}
			else if ($p['bool']($m['os']['path']['isfile']($p['getattr']($m['args'], 'db')))) {
				$m['os']['remove']($p['getattr']($m['args'], 'db'));
			}
		}
		$m['create_tables']($m['db']);
		$m['app']['set_current_location']($m['position']);
		$m['pause_bit'] = $m['Event']();
		$m['pause_bit']['clear']();
		$m['new_location_queue'] = $m['Queue']();
		$m['new_location_queue']['put']($m['position']);
		if ($p['bool'](!$p['bool']($p['getattr']($m['args'], 'only_server')))) {
			if ($p['bool'](!$p['bool']($p['getattr']($m['args'], 'mock')))) {
				$m['log']['debug']('Starting a real search thread');
				$m['search_thread'] = $pyjs_kwargs_call(null, $m['Thread'], null, null, [{'target':$m['search_overseer_thread'], 'args':$p['tuple']([$m['args'], $m['new_location_queue'], $m['pause_bit'], $m['encryption_lib_path']])}]);
			}
			else {
				$m['log']['debug']('Starting a fake search thread');
				$m['insert_mock_data']($m['position']);
				$m['search_thread'] = $pyjs_kwargs_call(null, $m['Thread'], null, null, [{'target':$m['fake_search_loop']}]);
			}
			$m['search_thread']['daemon'] = true;
			$m['search_thread']['$$name'] = 'search_thread';
			$m['search_thread']['start']();
		}
		if ($p['bool']($p['getattr']($m['args'], 'cors'))) {
			$m['CORS']($m['app']);
		}
		$m['init_cache_busting']($m['app']);
		$m['app']['set_search_control']($m['pause_bit']);
		$m['app']['set_location_queue']($m['new_location_queue']);
		$m['config']['__setitem__']('ROOT_PATH', $p['getattr']($m['app'], 'root_path'));
		$m['config']['__setitem__']('GMAPS_KEY', $p['getattr']($m['args'], 'gmaps_key'));
		if ($p['bool']($p['getattr']($m['args'], 'no_server'))) {
			while ($p['bool']($m['search_thread']['is_alive']())) {
				$m['time']['sleep'](60);
			}
		}
		else {
			$pyjs_kwargs_call($m['app'], 'run', null, null, [{'threaded':true, 'use_reloader':false, 'debug':$p['getattr']($m['args'], 'debug'), 'host':$p['getattr']($m['args'], 'host'), 'port':$p['getattr']($m['args'], 'port')}]);
		}
	}
	return this;
}; /* end runserver */


/* end module: runserver */


/*
PYJS_DEPS: ['os', 'sys', 'shutil', 'logging', 'time', 're', 'requests', 'distutils.version.StrictVersion', 'distutils', 'distutils.version', 'threading.Thread', 'threading', 'threading.Event', 'queue.Queue', 'queue', 'flask_cors.CORS', 'flask_cors', 'flask_cache_bust.init_cache_busting', 'flask_cache_bust', 'pogom.config', 'pogom', 'pogom.app.Pogom', 'pogom.app', 'pogom.utils.get_args', 'pogom.utils', 'pogom.utils.insert_mock_data', 'pogom.utils.get_encryption_lib_path', 'pogom.search.search_overseer_thread', 'pogom.search', 'pogom.search.fake_search_loop', 'pogom.models.init_database', 'pogom.models', 'pogom.models.create_tables', 'pogom.models.drop_tables', 'pgoapi', 'pgoapi.utilities']
*/
