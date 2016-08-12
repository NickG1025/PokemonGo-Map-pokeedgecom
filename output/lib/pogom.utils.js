/* start module: pogom.utils */
$pyjs['loaded_modules']['pogom.utils'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pogom.utils']['__was_initialized__']) return $pyjs['loaded_modules']['pogom.utils'];
	if(typeof $pyjs['loaded_modules']['pogom'] == 'undefined' || !$pyjs['loaded_modules']['pogom']['__was_initialized__']) $p['___import___']('pogom', null);
	var $m = $pyjs['loaded_modules']['pogom.utils'];
	$m['__repr__'] = function() { return '<module: pogom.utils>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pogom.utils';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pogom']['utils'] = $pyjs['loaded_modules']['pogom.utils'];


	$m['sys'] = $p['___import___']('sys', 'pogom');
	$m['configargparse'] = $p['___import___']('configargparse', 'pogom');
	$m['uuid'] = $p['___import___']('uuid', 'pogom');
	$m['os'] = $p['___import___']('os', 'pogom');
	$m['json'] = $p['___import___']('json', 'pogom');
	$m['datetime'] = $p['___import___']('datetime.datetime', 'pogom', null, false);
	$m['timedelta'] = $p['___import___']('datetime.timedelta', 'pogom', null, false);
	$m['logging'] = $p['___import___']('logging', 'pogom');
	$m['shutil'] = $p['___import___']('shutil', 'pogom');
	$m['requests'] = $p['___import___']('requests', 'pogom');
	$m['platform'] = $p['___import___']('platform', 'pogom');
	$m['config'] = $p['___import___']('pogom.config', null, null, false);
	$m['log'] = $m['logging']['getLogger']((typeof __name__ == "undefined"?$m['__name__']:__name__));
	$m['parse_unicode'] = function(bytestring) {
		var decoded_string;
		decoded_string = bytestring['decode']($m['sys']['getfilesystemencoding']());
		return decoded_string;
	};
	$m['parse_unicode']['__name__'] = 'parse_unicode';

	$m['parse_unicode']['__bind_type__'] = 0;
	$m['parse_unicode']['__args__'] = [null,null,['bytestring']];
	$m['verify_config_file_exists'] = function(filename) {
		var $add2,fullpath,$add1;
		fullpath = $m['os']['path']['join']($m['os']['path']['dirname']('/Users/nickgiersdorf/Desktop/PokemonGo-Map-pokeedgecom/pogom/utils.py'), filename);
		if ($p['bool'](!$p['bool']($m['os']['path']['exists'](fullpath)))) {
			$m['log']['info']('Could not find %s, copying default', filename);
			$m['shutil']['copy2']($p['__op_add']($add1=fullpath,$add2='.example'), fullpath);
		}
		return null;
	};
	$m['verify_config_file_exists']['__name__'] = 'verify_config_file_exists';

	$m['verify_config_file_exists']['__bind_type__'] = 0;
	$m['verify_config_file_exists']['__args__'] = [null,null,['filename']];
	$m['get_args'] = function() {
		var parser,$iter1_iter,errors,num_auths,$iter1_array,num_passwords,$iter1_idx,username,$and3,$iter1_nextval,$and1,$and2,args,$and4,num_usernames,$mul4,$mul3,$mul2,$mul1,$iter1_type,i,configpath,$add3,$add6,$add7,$add4,$add5,$add8;
		configpath = $m['os']['path']['join']($m['os']['path']['dirname']('/Users/nickgiersdorf/Desktop/PokemonGo-Map-pokeedgecom/pogom/utils.py'), '../config/config.ini');
		parser = $pyjs_kwargs_call($m['configargparse'], 'ArgParser', null, null, [{'default_config_files':$p['list']([configpath])}]);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'type':$p['getattr']($p['str'], 'lower'), 'action':'append', 'help':'Auth Services, either one for all accounts or one per account.                         ptc or google. Defaults all to ptc.'}, '-a', '--auth-service']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'action':'append', 'help':'Usernames, one per account.'}, '-u', '--username']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'action':'append', 'help':'Passwords, either single one for all accounts or one per account.'}, '-p', '--password']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'type':$m['parse_unicode'], 'help':'Location, can be an address or coordinates'}, '-l', '--location']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Steps', 'type':$p['float_int'], '$$default':12}, '-st', '--step-limit']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Time delay between requests in scan threads', 'type':$p['float'], '$$default':10}, '-sd', '--scan-delay']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Time delay between each login attempt', 'type':$p['float'], '$$default':5}, '-ld', '--login-delay']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Number of logins attempts before refreshing a thread', 'type':$p['float_int'], '$$default':3}, '-lr', '--login-retries']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Number of retries for a given scan cell', 'type':$p['float_int'], '$$default':5}, '-sr', '--scan-retries']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Display Found Pokemon in Console', 'action':'store_true', '$$default':false}, '-dc', '--display-in-console']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Set web server listening host', '$$default':'127.0.0.1'}, '-H', '--host']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'type':$p['float_int'], 'help':'Set web server listening port', '$$default':5000}, '-P', '--port']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Locale for Pokemon names (default: {},                        check {} for more)'['format']($m['config']['__getitem__']('LOCALE'), $m['config']['__getitem__']('LOCALES_DIR')), '$$default':'en'}, '-L', '--locale']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Coordinates transformer for China', 'action':'store_true'}, '-c', '--china']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Debug Mode', 'action':'store_true'}, '-d', '--debug']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Mock mode. Starts the web server but not the background thread.', 'action':'store_true', '$$default':false}, '-m', '--mock']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'No-Server Mode. Starts the searcher but not the Webserver.', 'action':'store_true', '$$default':false}, '-ns', '--no-server']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Server-Only Mode. Starts only the Webserver without the searcher.', 'action':'store_true', '$$default':false}, '-os', '--only-server']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Disables search control', 'action':'store_false', 'dest':'search_control', '$$default':true}, '-nsc', '--no-search-control']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Hides the search bar for use in shared maps.', 'action':'store_true', '$$default':false}, '-fl', '--fixed-location']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Google Maps Javascript API Key', 'required':true}, '-k', '--gmaps-key']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Enable CORS on web server', 'action':'store_true', '$$default':false}, '-C', '--cors']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Database filename', '$$default':'pogom.db'}, '-D', '--db']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Deletes the existing database before starting the Webserver.', 'action':'store_true', '$$default':false}, '-cd', '--clear-db']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Disables Pokemon from the map (including parsing them into local db)', 'action':'store_true', '$$default':false}, '-np', '--no-pokemon']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Disables Gyms from the map (including parsing them into local db)', 'action':'store_true', '$$default':false}, '-ng', '--no-gyms']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Disables PokeStops from the map (including parsing them into local db)', 'action':'store_true', '$$default':false}, '-nk', '--no-pokestops']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Clear pokemon from database this many hours after they disappear                         (0 to disable)', 'type':$p['float_int'], '$$default':0}, '-pd', '--purge-data']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Proxy url (e.g. socks5://127.0.0.1:9050)'}, '-px', '--proxy']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Type of database to be used (default: sqlite)', '$$default':'sqlite'}, '--db-type']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Name of the database to be used'}, '--db-name']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Username for the database'}, '--db-user']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Password for the database'}, '--db-pass']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'IP or hostname for the database'}, '--db-host']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Port for the database', 'type':$p['float_int'], '$$default':3306}, '--db-port']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Max connections (per thread) for the database', 'type':$p['float_int'], '$$default':5}, '--db-max_connections']);
		$pyjs_kwargs_call(parser, 'add_argument', null, null, [{'help':'Define URL(s) to POST webhook information to', 'nargs':'*', '$$default':false, 'dest':'webhooks'}, '-wh', '--webhook']);
		$pyjs_kwargs_call(parser, 'set_defaults', null, null, [{'DEBUG':false}]);
		args = parser['parse_args']();
		if ($p['bool']($p['getattr'](args, 'only_server'))) {
			if ($p['bool'](($p['getattr'](args, 'location') === null))) {
				parser['print_usage']();
				$p['printFunc']([$p['__op_add']($add3=$p['getattr']($m['sys'], 'argv')['__getitem__'](0),$add4=': error: arguments -l/--location is required')], 1);
				$m['sys']['exit'](1);
			}
		}
		else {
			errors = $p['list']([]);
			num_auths = 1;
			num_usernames = 0;
			num_passwords = 0;
			if ($p['bool'](($p['getattr'](args, 'username') === null))) {
				errors['append']('Missing `username` either as -u/--username or in config');
			}
			else {
				num_usernames = $p['len']($p['getattr'](args, 'username'));
			}
			if ($p['bool'](($p['getattr'](args, 'location') === null))) {
				errors['append']('Missing `location` either as -l/--location or in config');
			}
			if ($p['bool'](($p['getattr'](args, 'password') === null))) {
				errors['append']('Missing `password` either as -p/--password or in config');
			}
			else {
				num_passwords = $p['len']($p['getattr'](args, 'password'));
			}
			if ($p['bool'](($p['getattr'](args, 'step_limit') === null))) {
				errors['append']('Missing `step_limit` either as -st/--step-limit or in config');
			}
			if ($p['bool'](($p['getattr'](args, 'auth_service') === null))) {
				args['auth_service'] = $p['list'](['ptc']);
			}
			else {
				num_auths = $p['len']($p['getattr'](args, 'auth_service'));
			}
			if ($p['bool'](($p['cmp'](num_usernames, 1) == 1))) {
				if ($p['bool'](($p['bool']($and1=($p['cmp'](num_passwords, 1) == 1))?!$p['op_eq'](num_usernames, num_passwords):$and1))) {
					errors['append']('The number of provided passwords ({}) must match the username count ({})'['format'](num_passwords, num_usernames));
				}
				if ($p['bool'](($p['bool']($and3=($p['cmp'](num_auths, 1) == 1))?!$p['op_eq'](num_usernames, num_auths):$and3))) {
					errors['append']('The number of provided auth ({}) must match the username count ({})'['format'](num_auths, num_usernames));
				}
			}
			if ($p['bool'](($p['cmp']($p['len'](errors), 0) == 1))) {
				parser['print_usage']();
				$p['printFunc']([$p['__op_add']($add7=$p['__op_add']($add5=$p['getattr']($m['sys'], 'argv')['__getitem__'](0),$add6=': errors: \n - '),$add8='\n - '['join'](errors))], 1);
				$m['sys']['exit'](1);
			}
			if ($p['bool']($p['op_eq'](num_passwords, 1))) {
				args['password'] = (typeof ($mul1=$p['list']([$p['getattr'](args, 'password')['__getitem__'](0)]))==typeof ($mul2=num_usernames) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
			}
			if ($p['bool']($p['op_eq'](num_auths, 1))) {
				args['auth_service'] = (typeof ($mul3=$p['list']([$p['getattr'](args, 'auth_service')['__getitem__'](0)]))==typeof ($mul4=num_usernames) && typeof $mul3=='number'?
					$mul3*$mul4:
					$p['op_mul']($mul3,$mul4));
			}
			args['accounts'] = $p['list']([]);
			$iter1_iter = $p['enumerate']($p['getattr'](args, 'username'));
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				i = $tupleassign1[0];
				username = $tupleassign1[1];
				args['accounts']['append']($p['dict']([['username', username], ['password', $p['getattr'](args, 'password')['__getitem__'](i)], ['auth_service', $p['getattr'](args, 'auth_service')['__getitem__'](i)]]));
			}
		}
		return args;
	};
	$m['get_args']['__name__'] = 'get_args';

	$m['get_args']['__bind_type__'] = 0;
	$m['get_args']['__args__'] = [null,null];
	$m['insert_mock_data'] = function(position) {
		var $iter5_nextval,$mod3,detect_time,$iter5_array,$iter3_array,locations,$mod5,$mod4,$mod7,$iter5_iter,$mod1,$iter4_type,$mod2,num_pokemon,$iter4_iter,$mod8,$add23,$iter3_idx,$add21,$add18,Gym,$add22,$add25,$add24,$add26,$iter3_iter,$iter5_idx,latitude,disappear_time,num_pokestop,Pokestop,$add14,$add15,$add17,$add10,$add11,$add12,$iter3_type,$iter5_type,$add19,i,$iter4_nextval,$add16,longitude,$iter4_idx,$mod6,$add13,$add20,$iter4_array,$add9,Pokemon,$iter3_nextval,generate_location_steps,num_gym;
		num_pokemon = 6;
		num_pokestop = 6;
		num_gym = 6;
		$m['log']['info']('Creating fake: %d pokemon, %d pokestops, %d gyms', num_pokemon, num_pokestop, num_gym);
		Pokemon = $p['___import___']('pogom.models.Pokemon', null, null, false);
		Pokestop = $p['___import___']('pogom.models.Pokestop', null, null, false);
		Gym = $p['___import___']('pogom.models.Gym', null, null, false);
		generate_location_steps = $p['___import___']('pogom.search.generate_location_steps', null, null, false);
		var $tupleassign2 = $p['__ass_unpack']($p['tuple']([$p['float'](position['__getitem__'](0)), $p['float'](position['__getitem__'](1))]), 2, null);
		latitude = $tupleassign2[0];
		longitude = $tupleassign2[1];
		locations = function(){
			var $iter2_nextval,$iter2_type,$iter2_iter,l,$collcomp1,$iter2_idx,$iter2_array;
	$collcomp1 = $p['list']();
		$iter2_iter = generate_location_steps($p['tuple']([latitude, longitude]), num_pokemon);
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			l = $iter2_nextval['$nextval'];
			$collcomp1['append'](l);
		}

	return $collcomp1;}();
		disappear_time = $p['__op_add']($add9=$m['datetime']['now'](),$add10=$pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':1}]));
		detect_time = $m['datetime']['now']();
		$iter3_iter = $p['range'](1, num_pokemon);
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
			i = $iter3_nextval['$nextval'];
			$pyjs_kwargs_call(Pokemon, 'create', null, null, [{'encounter_id':$m['uuid']['uuid4'](), 'spawnpoint_id':'sp{}'['format'](i), 'pokemon_id':(typeof ($mod1=$p['__op_add']($add11=i,$add12=1))==typeof ($mod2=150) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)), 'latitude':locations['__getitem__'](i)['__getitem__'](0), 'longitude':locations['__getitem__'](i)['__getitem__'](1), 'disappear_time':disappear_time, 'detect_time':detect_time}]);
		}
		$iter4_iter = $p['range'](1, num_pokestop);
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			i = $iter4_nextval['$nextval'];
			$pyjs_kwargs_call(Pokestop, 'create', null, null, [{'pokestop_id':$m['uuid']['uuid4'](), 'enabled':true, 'latitude':locations['__getitem__']($p['__op_add']($add13=i,$add14=num_pokemon))['__getitem__'](0), 'longitude':locations['__getitem__']($p['__op_add']($add15=i,$add16=num_pokemon))['__getitem__'](1), 'last_modified':$m['datetime']['now'](), 'lure_expiration':($p['bool']($p['op_eq']((typeof ($mod3=i)==typeof ($mod4=2) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4)), 0))? (disappear_time) : (null))}]);
		}
		$iter5_iter = $p['range'](1, num_gym);
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			i = $iter5_nextval['$nextval'];
			$pyjs_kwargs_call(Gym, 'create', null, null, [{'gym_id':$m['uuid']['uuid4'](), 'team_id':(typeof ($mod5=i)==typeof ($mod6=3) && typeof $mod5=='number'?
				(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
				$p['op_mod']($mod5,$mod6)), 'guard_pokemon_id':(typeof ($mod7=$p['__op_add']($add17=i,$add18=1))==typeof ($mod8=150) && typeof $mod7=='number'?
				(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
				$p['op_mod']($mod7,$mod8)), 'latitude':locations['__getitem__']($p['__op_add']($add21=$p['__op_add']($add19=i,$add20=num_pokemon),$add22=num_pokestop))['__getitem__'](0), 'longitude':locations['__getitem__']($p['__op_add']($add25=$p['__op_add']($add23=i,$add24=num_pokemon),$add26=num_pokestop))['__getitem__'](1), 'last_modified':$m['datetime']['now'](), 'enabled':true, 'gym_points':1000}]);
		}
		return null;
	};
	$m['insert_mock_data']['__name__'] = 'insert_mock_data';

	$m['insert_mock_data']['__bind_type__'] = 0;
	$m['insert_mock_data']['__args__'] = [null,null,['position']];
	$m['i8ln'] = function(word) {
		var file_path,f;
		if ($p['bool']($p['op_eq']($m['config']['__getitem__']('LOCALE'), 'en'))) {
			return word;
		}
		if ($p['bool'](!$p['bool']($p['hasattr']($m['i8ln'], 'dictionary')))) {
			file_path = $m['os']['path']['join']($m['config']['__getitem__']('ROOT_PATH'), $m['config']['__getitem__']('LOCALES_DIR'), '{}.min.json'['format']($m['config']['__getitem__']('LOCALE')));
			if ($p['bool']($m['os']['path']['isfile'](file_path))) {
				$p['__with']($p['open'](file_path, 'r'), function($withval1){
					f = (typeof $withval1 == "undefined"?$m['$withval1']:$withval1);
					$m['i8ln']['dictionary'] = $m['json']['loads'](f['read']());
				});
			}
			else {
				$m['log']['warning']('Skipping translations - Unable to find locale file: %s', file_path);
				return word;
			}
		}
		if ($p['bool']($p['getattr']($m['i8ln'], 'dictionary')['__contains__'](word))) {
			return $p['getattr']($m['i8ln'], 'dictionary')['__getitem__'](word);
		}
		else {
			$m['log']['debug']('Unable to find translation for "%s" in locale %s!', word, $m['config']['__getitem__']('LOCALE'));
			return word;
		}
		return null;
	};
	$m['i8ln']['__name__'] = 'i8ln';

	$m['i8ln']['__bind_type__'] = 0;
	$m['i8ln']['__args__'] = [null,null,['word']];
	$m['get_pokemon_data'] = function(pokemon_id) {
		var f,file_path;
		if ($p['bool'](!$p['bool']($p['hasattr']($m['get_pokemon_data'], 'pokemon')))) {
			file_path = $m['os']['path']['join']($m['config']['__getitem__']('ROOT_PATH'), $m['config']['__getitem__']('DATA_DIR'), 'pokemon.min.json');
			$p['__with']($p['open'](file_path, 'r'), function($withval2){
				f = (typeof $withval2 == "undefined"?$m['$withval2']:$withval2);
				$m['get_pokemon_data']['pokemon'] = $m['json']['loads'](f['read']());
			});
		}
		return $p['getattr']($m['get_pokemon_data'], 'pokemon')['__getitem__']($p['str'](pokemon_id));
	};
	$m['get_pokemon_data']['__name__'] = 'get_pokemon_data';

	$m['get_pokemon_data']['__bind_type__'] = 0;
	$m['get_pokemon_data']['__args__'] = [null,null,['pokemon_id']];
	$m['get_pokemon_name'] = function(pokemon_id) {

		return $m['i8ln']($m['get_pokemon_data'](pokemon_id)['__getitem__']('name'));
	};
	$m['get_pokemon_name']['__name__'] = 'get_pokemon_name';

	$m['get_pokemon_name']['__bind_type__'] = 0;
	$m['get_pokemon_name']['__args__'] = [null,null,['pokemon_id']];
	$m['get_pokemon_rarity'] = function(pokemon_id) {

		return $m['i8ln']($m['get_pokemon_data'](pokemon_id)['__getitem__']('rarity'));
	};
	$m['get_pokemon_rarity']['__name__'] = 'get_pokemon_rarity';

	$m['get_pokemon_rarity']['__bind_type__'] = 0;
	$m['get_pokemon_rarity']['__args__'] = [null,null,['pokemon_id']];
	$m['get_pokemon_types'] = function(pokemon_id) {
		var pokemon_types,$lambda1;
		pokemon_types = $m['get_pokemon_data'](pokemon_id)['__getitem__']('types');
		var 		$lambda1 = function(x) {

			return $p['dict']([['type', $m['i8ln'](x['__getitem__']('type'))], ['color', x['__getitem__']('color')]]);
		};
		$lambda1['__name__'] = '$lambda1';

		$lambda1['__bind_type__'] = 0;
		$lambda1['__args__'] = [null,null,['x']];
		return $p['map']($lambda1, pokemon_types);
	};
	$m['get_pokemon_types']['__name__'] = 'get_pokemon_types';

	$m['get_pokemon_types']['__bind_type__'] = 0;
	$m['get_pokemon_types']['__args__'] = [null,null,['pokemon_id']];
	$m['send_to_webhook'] = function(message_type, message) {
		var e,w,$iter6_idx,$iter6_type,args,$iter6_array,$pyjs_try_err,$iter6_iter,data,webhooks,$iter6_nextval;
		args = $m['get_args']();
		data = $p['dict']([['type', message_type], ['message', message]]);
		if ($p['bool']($p['getattr'](args, 'webhooks'))) {
			webhooks = $p['getattr'](args, 'webhooks');
			$iter6_iter = webhooks;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				w = $iter6_nextval['$nextval'];
				try {
					$pyjs_kwargs_call($m['requests'], 'post', null, null, [{'json':data, 'timeout':$p['tuple']([null, 1])}, w]);
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['getattr']($p['getattr']($m['requests'], 'exceptions'), 'ReadTimeout')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($p['getattr']($m['requests'], 'exceptions'), 'ReadTimeout'))) {
						$m['log']['debug']('Response timeout on webhook endpoint %s', w);
					} else if (($pyjs_try_err_name == $p['getattr']($p['getattr']($m['requests'], 'exceptions'), 'RequestException')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($p['getattr']($m['requests'], 'exceptions'), 'RequestException'))) {
						e = $pyjs_try_err;
						$m['log']['debug'](e);
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
		}
		return null;
	};
	$m['send_to_webhook']['__name__'] = 'send_to_webhook';

	$m['send_to_webhook']['__bind_type__'] = 0;
	$m['send_to_webhook']['__args__'] = [null,null,['message_type'],['message']];
	$m['get_encryption_lib_path'] = function() {
		var $and8,$or1,lib_path,err,$or2,$and5,$and6,$and7,lib_name;
		if ($p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr']($m['sys'], 'platform'), 'win32'))?$or1:$p['op_eq']($p['getattr']($m['sys'], 'platform'), 'cygwin')))) {
			if ($p['bool']($p['op_eq']($m['platform']['architecture']()['__getitem__'](0), '64bit'))) {
				lib_name = 'encrypt64bit.dll';
			}
			else {
				lib_name = 'encrypt32bit.dll';
			}
		}
		else if ($p['bool']($p['op_eq']($p['getattr']($m['sys'], 'platform'), 'darwin'))) {
			lib_name = 'libencrypt-osx-64.so';
		}
		else if ($p['bool'](($p['bool']($and5=$m['os']['uname']()['__getitem__'](4)['startswith']('arm'))?$p['op_eq']($m['platform']['architecture']()['__getitem__'](0), '32bit'):$and5))) {
			lib_name = 'libencrypt-linux-arm-32.so';
		}
		else if ($p['bool'](($p['bool']($and7=$m['os']['uname']()['__getitem__'](4)['startswith']('aarch64'))?$p['op_eq']($m['platform']['architecture']()['__getitem__'](0), '64bit'):$and7))) {
			lib_name = 'libencrypt-linux-arm-64.so';
		}
		else if ($p['bool']($m['sys']['platform']['startswith']('linux'))) {
			if ($p['bool']($m['platform']['platform']()['__contains__']('centos'))) {
				if ($p['bool']($p['op_eq']($m['platform']['architecture']()['__getitem__'](0), '64bit'))) {
					lib_name = 'libencrypt-centos-x86-64.so';
				}
				else {
					lib_name = 'libencrypt-linux-x86-32.so';
				}
			}
			else {
				if ($p['bool']($p['op_eq']($m['platform']['architecture']()['__getitem__'](0), '64bit'))) {
					lib_name = 'libencrypt-linux-x86-64.so';
				}
				else {
					lib_name = 'libencrypt-linux-x86-32.so';
				}
			}
		}
		else if ($p['bool']($m['sys']['platform']['startswith']('freebsd'))) {
			lib_name = 'libencrypt-freebsd-64.so';
		}
		else {
			err = "Unexpected/unsupported platform '{}'"['format']($p['getattr']($m['sys'], 'platform'));
			$m['log']['error'](err);
			throw ($p['Exception'](err));
		}
		lib_path = $m['os']['path']['join']($m['os']['path']['dirname']('/Users/nickgiersdorf/Desktop/PokemonGo-Map-pokeedgecom/pogom/utils.py'), 'libencrypt', lib_name);
		if ($p['bool'](!$p['bool']($m['os']['path']['isfile'](lib_path)))) {
			err = 'Could not find {} encryption library {}'['format']($p['getattr']($m['sys'], 'platform'), lib_path);
			$m['log']['error'](err);
			throw ($p['Exception'](err));
		}
		return lib_path;
	};
	$m['get_encryption_lib_path']['__name__'] = 'get_encryption_lib_path';

	$m['get_encryption_lib_path']['__bind_type__'] = 0;
	$m['get_encryption_lib_path']['__args__'] = [null,null];
	return this;
}; /* end pogom.utils */


/* end module: pogom.utils */


/*
PYJS_DEPS: ['sys', 'configargparse', 'uuid', 'os', 'json', 'datetime.datetime', 'datetime', 'datetime.timedelta', 'logging', 'shutil', 'requests', 'platform', 'pogom.config', 'pogom', 'pogom.models.Pokemon', 'pogom.models', 'pogom.models.Pokestop', 'pogom.models.Gym', 'pogom.search.generate_location_steps', 'pogom.search']
*/
