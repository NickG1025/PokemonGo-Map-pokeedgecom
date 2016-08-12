/* start module: pogom.models */
$pyjs['loaded_modules']['pogom.models'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pogom.models']['__was_initialized__']) return $pyjs['loaded_modules']['pogom.models'];
	if(typeof $pyjs['loaded_modules']['pogom'] == 'undefined' || !$pyjs['loaded_modules']['pogom']['__was_initialized__']) $p['___import___']('pogom', null);
	var $m = $pyjs['loaded_modules']['pogom.models'];
	$m['__repr__'] = function() { return '<module: pogom.models>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pogom.models';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pogom']['models'] = $pyjs['loaded_modules']['pogom.models'];


	$m['logging'] = $p['___import___']('logging', 'pogom');
	$m['calendar'] = $p['___import___']('calendar', 'pogom');
	$m['sys'] = $p['___import___']('sys', 'pogom');
	$m['SqliteDatabase'] = $p['___import___']('peewee.SqliteDatabase', 'pogom', null, false);
	$m['InsertQuery'] = $p['___import___']('peewee.InsertQuery', 'pogom', null, false);
	$m['IntegerField'] = $p['___import___']('peewee.IntegerField', 'pogom', null, false);
	$m['CharField'] = $p['___import___']('peewee.CharField', 'pogom', null, false);
	$m['DoubleField'] = $p['___import___']('peewee.DoubleField', 'pogom', null, false);
	$m['BooleanField'] = $p['___import___']('peewee.BooleanField', 'pogom', null, false);
	$m['DateTimeField'] = $p['___import___']('peewee.DateTimeField', 'pogom', null, false);
	$m['PrimaryKeyField'] = $p['___import___']('peewee.PrimaryKeyField', 'pogom', null, false);
	$m['fn'] = $p['___import___']('peewee.fn', 'pogom', null, false);
	$m['FlaskDB'] = $p['___import___']('playhouse.flask_utils.FlaskDB', 'pogom', null, false);
	$m['PooledMySQLDatabase'] = $p['___import___']('playhouse.pool.PooledMySQLDatabase', 'pogom', null, false);
	$m['RetryOperationalError'] = $p['___import___']('playhouse.shortcuts.RetryOperationalError', 'pogom', null, false);
	$m['migrate'] = $p['___import___']('playhouse.migrate.migrate', 'pogom', null, false);
	$m['MySQLMigrator'] = $p['___import___']('playhouse.migrate.MySQLMigrator', 'pogom', null, false);
	$m['SqliteMigrator'] = $p['___import___']('playhouse.migrate.SqliteMigrator', 'pogom', null, false);
	$m['datetime'] = $p['___import___']('datetime.datetime', 'pogom', null, false);
	$m['timedelta'] = $p['___import___']('datetime.timedelta', 'pogom', null, false);
	$m['b64encode'] = $p['___import___']('base64.b64encode', 'pogom', null, false);
	$m['config'] = $p['___import___']('pogom.config', null, null, false);
	$m['get_pokemon_name'] = $p['___import___']('pogom.utils.get_pokemon_name', null, null, false);
	$m['get_pokemon_rarity'] = $p['___import___']('pogom.utils.get_pokemon_rarity', null, null, false);
	$m['get_pokemon_types'] = $p['___import___']('pogom.utils.get_pokemon_types', null, null, false);
	$m['get_args'] = $p['___import___']('pogom.utils.get_args', null, null, false);
	$m['send_to_webhook'] = $p['___import___']('pogom.utils.send_to_webhook', null, null, false);
	$m['transform_from_wgs_to_gcj'] = $p['___import___']('pogom.transform.transform_from_wgs_to_gcj', null, null, false);
	$m['printPokemon'] = $p['___import___']('pogom.customLog.printPokemon', null, null, false);
	$m['log'] = $m['logging']['getLogger']((typeof __name__ == "undefined"?$m['__name__']:__name__));
	$m['args'] = $m['get_args']();
	$m['flaskDb'] = $m['FlaskDB']();
	$m['db_schema_version'] = 3;
	$m['MyRetryDB'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.models';
		var $bases = new Array($m['RetryOperationalError'],$m['PooledMySQLDatabase']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MyRetryDB', $p['tuple']($bases), $data);
	})();
	$m['init_database'] = function(app) {
		var connections,db,$mul2,$mul1;
		if ($p['bool']($p['op_eq']($p['getattr']($m['args'], 'db_type'), 'mysql'))) {
			$m['log']['info']('Connecting to MySQL database on %s:%i', $p['getattr']($m['args'], 'db_host'), $p['getattr']($m['args'], 'db_port'));
			connections = $p['getattr']($m['args'], 'db_max_connections');
			if ($p['bool']($p['hasattr']($m['args'], 'accounts'))) {
				connections = (typeof ($mul1=connections)==typeof ($mul2=$p['len']($p['getattr']($m['args'], 'accounts'))) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2));
			}
			db = $pyjs_kwargs_call(null, $m['MyRetryDB'], null, null, [{'user':$p['getattr']($m['args'], 'db_user'), 'password':$p['getattr']($m['args'], 'db_pass'), 'host':$p['getattr']($m['args'], 'db_host'), 'port':$p['getattr']($m['args'], 'db_port'), 'max_connections':connections, 'stale_timeout':300}, $p['getattr']($m['args'], 'db_name')]);
		}
		else {
			$m['log']['info']('Connecting to local SQLite database');
			db = $m['SqliteDatabase']($p['getattr']($m['args'], 'db'));
		}
		$p['getattr'](app, 'config')['__setitem__']('DATABASE', db);
		$m['flaskDb']['init_app'](app);
		return db;
	};
	$m['init_database']['__name__'] = 'init_database';

	$m['init_database']['__bind_type__'] = 0;
	$m['init_database']['__args__'] = [null,null,['app']];
	$m['BaseModel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.models';
		$method = $pyjs__bind_method2('get_all', function() {
    var cls = this['prototype'];
			var $iter2_nextval,$iter2_type,$iter2_iter,results,$iter2_idx,result,$iter2_array;
			results = function(){
				var $iter1_nextval,$iter1_type,m,$collcomp1,$iter1_iter,$iter1_idx,$iter1_array;
	$collcomp1 = $p['list']();
			$iter1_iter = cls['select']()['dicts']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				m = $iter1_nextval['$nextval'];
				$collcomp1['append'](m);
			}

	return $collcomp1;}();
			if ($p['bool']($p['getattr']($m['args'], 'china'))) {
				$iter2_iter = results;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					result = $iter2_nextval['$nextval'];
					var $tupleassign1 = $p['__ass_unpack']($m['transform_from_wgs_to_gcj'](result['__getitem__']('latitude'), result['__getitem__']('longitude')), 2, null);
					result['__setitem__']('latitude', $tupleassign1[0]);
					result['__setitem__']('longitude', $tupleassign1[1]);
				}
			}
			return results;
		}
	, 2, [null,null,['cls']]);
		$cls_definition['get_all'] = $method;
		var $bases = new Array($p['getattr']($m['flaskDb'], 'Model'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BaseModel', $p['tuple']($bases), $data);
	})();
	$m['Pokemon'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.models';
		$cls_definition['encounter_id'] = $pyjs_kwargs_call(null, $m['CharField'], null, null, [{'primary_key':true, 'max_length':50}]);
		$cls_definition['spawnpoint_id'] = $pyjs_kwargs_call(null, $m['CharField'], null, null, [{'index':true}]);
		$cls_definition['pokemon_id'] = $pyjs_kwargs_call(null, $m['IntegerField'], null, null, [{'index':true}]);
		$cls_definition['latitude'] = $m['DoubleField']();
		$cls_definition['longitude'] = $m['DoubleField']();
		$cls_definition['disappear_time'] = $pyjs_kwargs_call(null, $m['DateTimeField'], null, null, [{'index':true}]);
		$cls_definition['Meta'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pogom.models';
			$cls_definition['indexes'] = $p['tuple']([$p['tuple']([$p['tuple'](['latitude', 'longitude']), false])]);
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Meta', $p['tuple']($bases), $data);
		})();
		$method = $pyjs__bind_method2('get_active', function(swLat, swLng, neLat, neLng) {
			var $or4,$iter3_idx,$or1,$or3,$or2,pokemons,$iter3_type,p,$iter3_iter,query,$iter3_nextval,$iter3_array;
			if ($p['bool'](($p['bool']($or1=(swLat === null))?$or1:($p['bool']($or2=(swLng === null))?$or2:($p['bool']($or3=(neLat === null))?$or3:(neLng === null)))))) {
				query = $m['Pokemon']['select']()['where'](($p['cmp']($p['getattr']($m['Pokemon'], 'disappear_time'), $m['datetime']['utcnow']()) == 1))['dicts']();
			}
			else {
				query = $m['Pokemon']['select']()['where']((($p['cmp']($p['getattr']($m['Pokemon'], 'disappear_time'), $m['datetime']['utcnow']()) == 1))&(((($p['cmp']($p['getattr']($m['Pokemon'], 'latitude'), swLat))|1) == 1))&(((($p['cmp']($p['getattr']($m['Pokemon'], 'longitude'), swLng))|1) == 1))&(($p['cmp']($p['getattr']($m['Pokemon'], 'latitude'), neLat) < 1))&(($p['cmp']($p['getattr']($m['Pokemon'], 'longitude'), neLng) < 1)))['dicts']();
			}
			pokemons = $p['list']([]);
			$iter3_iter = query;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				p = $iter3_nextval['$nextval'];
				p['__setitem__']('pokemon_name', $m['get_pokemon_name'](p['__getitem__']('pokemon_id')));
				p['__setitem__']('pokemon_rarity', $m['get_pokemon_rarity'](p['__getitem__']('pokemon_id')));
				p['__setitem__']('pokemon_types', $m['get_pokemon_types'](p['__getitem__']('pokemon_id')));
				if ($p['bool']($p['getattr']($m['args'], 'china'))) {
					var $tupleassign2 = $p['__ass_unpack']($m['transform_from_wgs_to_gcj'](p['__getitem__']('latitude'), p['__getitem__']('longitude')), 2, null);
					p['__setitem__']('latitude', $tupleassign2[0]);
					p['__setitem__']('longitude', $tupleassign2[1]);
				}
				pokemons['append'](p);
			}
			return pokemons;
		}
	, 3, [null,null,['swLat'],['swLng'],['neLat'],['neLng']]);
		$cls_definition['get_active'] = $method;
		$method = $pyjs__bind_method2('get_active_by_id', function(ids, swLat, swLng, neLat, neLng) {
			var $or5,$or7,$or6,$iter4_nextval,pokemons,$or8,$iter4_idx,p,$iter4_array,query,$iter4_type,$iter4_iter;
			if ($p['bool'](($p['bool']($or5=(swLat === null))?$or5:($p['bool']($or6=(swLng === null))?$or6:($p['bool']($or7=(neLat === null))?$or7:(neLng === null)))))) {
				query = $m['Pokemon']['select']()['where']((($p['getattr']($m['Pokemon'], 'pokemon_id'))<<(ids))&(($p['cmp']($p['getattr']($m['Pokemon'], 'disappear_time'), $m['datetime']['utcnow']()) == 1)))['dicts']();
			}
			else {
				query = $m['Pokemon']['select']()['where']((($p['getattr']($m['Pokemon'], 'pokemon_id'))<<(ids))&(($p['cmp']($p['getattr']($m['Pokemon'], 'disappear_time'), $m['datetime']['utcnow']()) == 1))&(((($p['cmp']($p['getattr']($m['Pokemon'], 'latitude'), swLat))|1) == 1))&(((($p['cmp']($p['getattr']($m['Pokemon'], 'longitude'), swLng))|1) == 1))&(($p['cmp']($p['getattr']($m['Pokemon'], 'latitude'), neLat) < 1))&(($p['cmp']($p['getattr']($m['Pokemon'], 'longitude'), neLng) < 1)))['dicts']();
			}
			pokemons = $p['list']([]);
			$iter4_iter = query;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				p = $iter4_nextval['$nextval'];
				p['__setitem__']('pokemon_name', $m['get_pokemon_name'](p['__getitem__']('pokemon_id')));
				p['__setitem__']('pokemon_rarity', $m['get_pokemon_rarity'](p['__getitem__']('pokemon_id')));
				p['__setitem__']('pokemon_types', $m['get_pokemon_types'](p['__getitem__']('pokemon_id')));
				if ($p['bool']($p['getattr']($m['args'], 'china'))) {
					var $tupleassign3 = $p['__ass_unpack']($m['transform_from_wgs_to_gcj'](p['__getitem__']('latitude'), p['__getitem__']('longitude')), 2, null);
					p['__setitem__']('latitude', $tupleassign3[0]);
					p['__setitem__']('longitude', $tupleassign3[1]);
				}
				pokemons['append'](p);
			}
			return pokemons;
		}
	, 3, [null,null,['ids'],['swLat'],['swLng'],['neLat'],['neLng']]);
		$cls_definition['get_active_by_id'] = $method;
		$method = $pyjs__bind_method2('get_seen', function(timediff) {
    var cls = this['prototype'];
			var $iter5_nextval,pokemon_count_query,$iter5_idx,$add1,$iter5_array,pokemons,$add2,p,$iter5_iter,query,$sub2,total,$iter5_type,$sub1;
			if ($p['bool'](timediff)) {
				timediff = $p['__op_sub']($sub1=$m['datetime']['utcnow'](),$sub2=timediff);
			}
			pokemon_count_query = $m['Pokemon']['select']($p['getattr']($m['Pokemon'], 'pokemon_id'), $m['fn']['COUNT']($p['getattr']($m['Pokemon'], 'pokemon_id'))['alias']('count'), $m['fn']['MAX']($p['getattr']($m['Pokemon'], 'disappear_time'))['alias']('lastappeared'))['where'](($p['cmp']($p['getattr']($m['Pokemon'], 'disappear_time'), timediff) == 1))['group_by']($p['getattr']($m['Pokemon'], 'pokemon_id'))['alias']('counttable');
			query = $pyjs_kwargs_call($m['Pokemon']['select']($p['getattr']($m['Pokemon'], 'pokemon_id'), $p['getattr']($m['Pokemon'], 'disappear_time'), $p['getattr']($m['Pokemon'], 'latitude'), $p['getattr']($m['Pokemon'], 'longitude'), $p['getattr']($p['getattr'](pokemon_count_query, 'c'), 'count')), 'join', null, null, [{'on':$p['op_eq']($p['getattr']($m['Pokemon'], 'pokemon_id'), $p['getattr']($p['getattr'](pokemon_count_query, 'c'), 'pokemon_id'))}, pokemon_count_query])['where']($p['op_eq']($p['getattr']($m['Pokemon'], 'disappear_time'), $p['getattr']($p['getattr'](pokemon_count_query, 'c'), 'lastappeared')))['dicts']();
			pokemons = $p['list']([]);
			total = 0;
			$iter5_iter = query;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				p = $iter5_nextval['$nextval'];
				p['__setitem__']('pokemon_name', $m['get_pokemon_name'](p['__getitem__']('pokemon_id')));
				pokemons['append'](p);
				total = $p['__op_add']($add1=total,$add2=p['__getitem__']('count'));
			}
			return $p['dict']([['pokemon', pokemons], ['total', total]]);
		}
	, 2, [null,null,['cls'],['timediff']]);
		$cls_definition['get_seen'] = $method;
		$method = $pyjs__bind_method2('get_appearances', function(pokemon_id, last_appearance) {
    var cls = this['prototype'];
			var a,$iter6_nextval,$iter6_idx,$iter6_type,appearances,$iter6_array,$div2,query,$iter6_iter,$div1;
			query = $m['Pokemon']['select']()['where'](($p['op_eq']($p['getattr']($m['Pokemon'], 'pokemon_id'), pokemon_id))&(($p['cmp']($p['getattr']($m['Pokemon'], 'disappear_time'), $m['datetime']['utcfromtimestamp']((typeof ($div1=last_appearance)==typeof ($div2=1000.0) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))) == 1)))['order_by']($m['Pokemon']['disappear_time']['asc']())['dicts']();
			appearances = $p['list']([]);
			$iter6_iter = query;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				a = $iter6_nextval['$nextval'];
				appearances['append'](a);
			}
			return appearances;
		}
	, 2, [null,null,['cls'],['pokemon_id'],['last_appearance']]);
		$cls_definition['get_appearances'] = $method;
		var $bases = new Array($m['BaseModel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Pokemon', $p['tuple']($bases), $data);
	})();
	$m['Pokestop'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.models';
		$cls_definition['pokestop_id'] = $pyjs_kwargs_call(null, $m['CharField'], null, null, [{'primary_key':true, 'max_length':50}]);
		$cls_definition['enabled'] = $m['BooleanField']();
		$cls_definition['latitude'] = $m['DoubleField']();
		$cls_definition['longitude'] = $m['DoubleField']();
		$cls_definition['last_modified'] = $pyjs_kwargs_call(null, $m['DateTimeField'], null, null, [{'index':true}]);
		$cls_definition['lure_expiration'] = $pyjs_kwargs_call(null, $m['DateTimeField'], null, null, [{'null':true, 'index':true}]);
		$cls_definition['active_fort_modifier'] = $pyjs_kwargs_call(null, $m['CharField'], null, null, [{'max_length':50, 'null':true}]);
		$cls_definition['Meta'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pogom.models';
			$cls_definition['indexes'] = $p['tuple']([$p['tuple']([$p['tuple'](['latitude', 'longitude']), false])]);
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Meta', $p['tuple']($bases), $data);
		})();
		$method = $pyjs__bind_method2('get_stops', function(swLat, swLng, neLat, neLng) {
			var $iter7_array,$iter7_nextval,$iter7_idx,$iter7_iter,$or12,$or9,pokestops,p,$or11,$or10,query,$iter7_type;
			if ($p['bool'](($p['bool']($or9=(swLat === null))?$or9:($p['bool']($or10=(swLng === null))?$or10:($p['bool']($or11=(neLat === null))?$or11:(neLng === null)))))) {
				query = $m['Pokestop']['select']()['dicts']();
			}
			else {
				query = $m['Pokestop']['select']()['where']((((($p['cmp']($p['getattr']($m['Pokestop'], 'latitude'), swLat))|1) == 1))&(((($p['cmp']($p['getattr']($m['Pokestop'], 'longitude'), swLng))|1) == 1))&(($p['cmp']($p['getattr']($m['Pokestop'], 'latitude'), neLat) < 1))&(($p['cmp']($p['getattr']($m['Pokestop'], 'longitude'), neLng) < 1)))['dicts']();
			}
			pokestops = $p['list']([]);
			$iter7_iter = query;
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				p = $iter7_nextval['$nextval'];
				if ($p['bool']($p['getattr']($m['args'], 'china'))) {
					var $tupleassign4 = $p['__ass_unpack']($m['transform_from_wgs_to_gcj'](p['__getitem__']('latitude'), p['__getitem__']('longitude')), 2, null);
					p['__setitem__']('latitude', $tupleassign4[0]);
					p['__setitem__']('longitude', $tupleassign4[1]);
				}
				pokestops['append'](p);
			}
			return pokestops;
		}
	, 3, [null,null,['swLat'],['swLng'],['neLat'],['neLng']]);
		$cls_definition['get_stops'] = $method;
		var $bases = new Array($m['BaseModel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Pokestop', $p['tuple']($bases), $data);
	})();
	$m['Gym'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.models';
		$cls_definition['UNCONTESTED'] = 0;
		$cls_definition['TEAM_MYSTIC'] = 1;
		$cls_definition['TEAM_VALOR'] = 2;
		$cls_definition['TEAM_INSTINCT'] = 3;
		$cls_definition['gym_id'] = $pyjs_kwargs_call(null, $m['CharField'], null, null, [{'primary_key':true, 'max_length':50}]);
		$cls_definition['team_id'] = $m['IntegerField']();
		$cls_definition['guard_pokemon_id'] = $m['IntegerField']();
		$cls_definition['gym_points'] = $m['IntegerField']();
		$cls_definition['enabled'] = $m['BooleanField']();
		$cls_definition['latitude'] = $m['DoubleField']();
		$cls_definition['longitude'] = $m['DoubleField']();
		$cls_definition['last_modified'] = $pyjs_kwargs_call(null, $m['DateTimeField'], null, null, [{'index':true}]);
		$cls_definition['Meta'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pogom.models';
			$cls_definition['indexes'] = $p['tuple']([$p['tuple']([$p['tuple'](['latitude', 'longitude']), false])]);
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Meta', $p['tuple']($bases), $data);
		})();
		$method = $pyjs__bind_method2('get_gyms', function(swLat, swLng, neLat, neLng) {
			var $iter8_iter,$iter8_idx,$iter8_array,$iter8_type,gyms,$or15,$or14,$or16,g,$iter8_nextval,$or13,query;
			if ($p['bool'](($p['bool']($or13=(swLat === null))?$or13:($p['bool']($or14=(swLng === null))?$or14:($p['bool']($or15=(neLat === null))?$or15:(neLng === null)))))) {
				query = $m['Gym']['select']()['dicts']();
			}
			else {
				query = $m['Gym']['select']()['where']((((($p['cmp']($p['getattr']($m['Gym'], 'latitude'), swLat))|1) == 1))&(((($p['cmp']($p['getattr']($m['Gym'], 'longitude'), swLng))|1) == 1))&(($p['cmp']($p['getattr']($m['Gym'], 'latitude'), neLat) < 1))&(($p['cmp']($p['getattr']($m['Gym'], 'longitude'), neLng) < 1)))['dicts']();
			}
			gyms = $p['list']([]);
			$iter8_iter = query;
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				g = $iter8_nextval['$nextval'];
				gyms['append'](g);
			}
			return gyms;
		}
	, 3, [null,null,['swLat'],['swLng'],['neLat'],['neLng']]);
		$cls_definition['get_gyms'] = $method;
		var $bases = new Array($m['BaseModel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Gym', $p['tuple']($bases), $data);
	})();
	$m['ScannedLocation'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.models';
		$cls_definition['scanned_id'] = $m['PrimaryKeyField']();
		$cls_definition['latitude'] = $m['DoubleField']();
		$cls_definition['longitude'] = $m['DoubleField']();
		$cls_definition['last_modified'] = $pyjs_kwargs_call(null, $m['DateTimeField'], null, null, [{'index':true}]);
		$cls_definition['Meta'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pogom.models';
			$cls_definition['indexes'] = $p['tuple']([$p['tuple']([$p['tuple'](['latitude', 'longitude']), false])]);
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Meta', $p['tuple']($bases), $data);
		})();
		$method = $pyjs__bind_method2('get_recent', function(swLat, swLng, neLat, neLng) {
			var $iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,s,$sub3,query,scans,$iter9_type,$sub4;
			query = $m['ScannedLocation']['select']()['where']((((($p['cmp']($p['getattr']($m['ScannedLocation'], 'last_modified'), $p['__op_sub']($sub3=$m['datetime']['utcnow'](),$sub4=$pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'minutes':15}]))))|1) == 1))&(((($p['cmp']($p['getattr']($m['ScannedLocation'], 'latitude'), swLat))|1) == 1))&(((($p['cmp']($p['getattr']($m['ScannedLocation'], 'longitude'), swLng))|1) == 1))&(($p['cmp']($p['getattr']($m['ScannedLocation'], 'latitude'), neLat) < 1))&(($p['cmp']($p['getattr']($m['ScannedLocation'], 'longitude'), neLng) < 1)))['dicts']();
			scans = $p['list']([]);
			$iter9_iter = query;
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				s = $iter9_nextval['$nextval'];
				scans['append'](s);
			}
			return scans;
		}
	, 3, [null,null,['swLat'],['swLng'],['neLat'],['neLng']]);
		$cls_definition['get_recent'] = $method;
		var $bases = new Array($m['BaseModel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ScannedLocation', $p['tuple']($bases), $data);
	})();
	$m['Versions'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.models';
		$cls_definition['key'] = $m['CharField']();
		$cls_definition['val'] = $m['IntegerField']();
		$cls_definition['Meta'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'pogom.models';
			$cls_definition['primary_key'] = false;
			var $bases = new Array(pyjslib['object']);
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('Meta', $p['tuple']($bases), $data);
		})();
		var $bases = new Array($p['getattr']($m['flaskDb'], 'Model'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Versions', $p['tuple']($bases), $data);
	})();
	$m['parse_map'] = function(map_dict, step_location) {
		var $and10,$iter12_type,$iter10_nextval,lure_expiration,pokestops,scanned,d_t,$iter10_iter,webhook_data,$add3,$iter10_idx,$div10,cell,$pyjs_try_err,$and1,$iter11_idx,$and8,$and9,$iter11_iter,$and2,$and3,$iter12_array,pokemons_upserted,$and6,$and5,$div8,$div9,active_fort_modifier,$iter11_array,$div3,$iter11_nextval,$and7,$div6,$div7,$div4,$div5,e,f,gyms_upserted,pokemons,$iter11_type,gyms,$and4,$iter10_array,$iter12_nextval,$iter12_iter,p,pokestops_upserted,$add6,$add4,$add5,$iter10_type,$iter12_idx,cells;
		pokemons = $p['dict']([]);
		pokestops = $p['dict']([]);
		gyms = $p['dict']([]);
		scanned = $p['dict']([]);
		cells = map_dict['__getitem__']('responses')['__getitem__']('GET_MAP_OBJECTS')['__getitem__']('map_cells');
		$iter10_iter = cells;
		$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
		while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
			cell = $iter10_nextval['$nextval'];
			if ($p['bool']($m['config']['__getitem__']('parse_pokemon'))) {
				$iter11_iter = cell['get']('wild_pokemons', $p['list']([]));
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					p = $iter11_nextval['$nextval'];
					d_t = $m['datetime']['utcfromtimestamp']((typeof ($div3=$p['__op_add']($add3=p['__getitem__']('last_modified_timestamp_ms'),$add4=p['__getitem__']('time_till_hidden_ms')))==typeof ($div4=1000.0) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)));
					$m['printPokemon'](p['__getitem__']('pokemon_data')['__getitem__']('pokemon_id'), p['__getitem__']('latitude'), p['__getitem__']('longitude'), d_t);
					pokemons['__setitem__'](p['__getitem__']('encounter_id'), $p['dict']([['encounter_id', $m['b64encode']($p['str'](p['__getitem__']('encounter_id')))], ['spawnpoint_id', p['__getitem__']('spawn_point_id')], ['pokemon_id', p['__getitem__']('pokemon_data')['__getitem__']('pokemon_id')], ['latitude', p['__getitem__']('latitude')], ['longitude', p['__getitem__']('longitude')], ['disappear_time', d_t]]));
					webhook_data = $p['dict']([['encounter_id', $m['b64encode']($p['str'](p['__getitem__']('encounter_id')))], ['spawnpoint_id', p['__getitem__']('spawn_point_id')], ['pokemon_id', p['__getitem__']('pokemon_data')['__getitem__']('pokemon_id')], ['latitude', p['__getitem__']('latitude')], ['longitude', p['__getitem__']('longitude')], ['disappear_time', $m['calendar']['timegm'](d_t['timetuple']())], ['last_modified_time', p['__getitem__']('last_modified_timestamp_ms')], ['time_until_hidden_ms', p['__getitem__']('time_till_hidden_ms')], ['is_lured', false]]);
					$m['send_to_webhook']('pokemon', webhook_data);
				}
			}
			$iter12_iter = cell['get']('forts', $p['list']([]));
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				f = $iter12_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and1=$m['config']['__getitem__']('parse_pokestops'))?$p['op_eq'](f['get']('type'), 1):$and1))) {
					if ($p['bool'](f['__contains__']('active_fort_modifier'))) {
						lure_expiration = $p['__op_add']($add5=$m['datetime']['utcfromtimestamp']((typeof ($div5=f['__getitem__']('last_modified_timestamp_ms'))==typeof ($div6=1000.0) && typeof $div5=='number' && $div6 !== 0?
							$div5/$div6:
							$p['op_div']($div5,$div6))),$add6=$pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'minutes':30}]));
						webhook_data = $p['dict']([['latitude', f['__getitem__']('latitude')], ['longitude', f['__getitem__']('longitude')], ['last_modified_time', f['__getitem__']('last_modified_timestamp_ms')], ['active_fort_modifier', f['__getitem__']('active_fort_modifier')], ['is_lured', true]]);
						$m['send_to_webhook']('pokemon', webhook_data);
					}
					else {
						var $tupleassign5 = $p['__ass_unpack']($p['tuple']([null, null]), 2, null);
						lure_expiration = $tupleassign5[0];
						active_fort_modifier = $tupleassign5[1];
					}
					pokestops['__setitem__'](f['__getitem__']('id'), $p['dict']([['pokestop_id', f['__getitem__']('id')], ['enabled', f['__getitem__']('enabled')], ['latitude', f['__getitem__']('latitude')], ['longitude', f['__getitem__']('longitude')], ['last_modified', $m['datetime']['utcfromtimestamp']((typeof ($div7=f['__getitem__']('last_modified_timestamp_ms'))==typeof ($div8=1000.0) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8)))], ['lure_expiration', lure_expiration], ['active_fort_modifier', active_fort_modifier]]));
				}
				else if ($p['bool'](($p['bool']($and3=$m['config']['__getitem__']('parse_gyms'))?(f['get']('type') === null):$and3))) {
					gyms['__setitem__'](f['__getitem__']('id'), $p['dict']([['gym_id', f['__getitem__']('id')], ['team_id', f['get']('owned_by_team', 0)], ['guard_pokemon_id', f['get']('guard_pokemon_id', 0)], ['gym_points', f['get']('gym_points', 0)], ['enabled', f['__getitem__']('enabled')], ['latitude', f['__getitem__']('latitude')], ['longitude', f['__getitem__']('longitude')], ['last_modified', $m['datetime']['utcfromtimestamp']((typeof ($div9=f['__getitem__']('last_modified_timestamp_ms'))==typeof ($div10=1000.0) && typeof $div9=='number' && $div10 !== 0?
						$div9/$div10:
						$p['op_div']($div9,$div10)))]]));
				}
			}
		}
		pokemons_upserted = 0;
		pokestops_upserted = 0;
		gyms_upserted = 0;
		scanned['__setitem__'](0, $p['dict']([['latitude', step_location['__getitem__'](0)], ['longitude', step_location['__getitem__'](1)], ['last_modified', $m['datetime']['utcnow']()]]));
		while ($p['bool'](true)) {
			try {
				$m['flaskDb']['connect_db']();
				break;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					e = $pyjs_try_err;
					$m['log']['warning']('%s... Retrying', e);
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
		}
		if ($p['bool'](($p['bool']($and5=pokemons)?$m['config']['__getitem__']('parse_pokemon'):$and5))) {
			pokemons_upserted = $p['len'](pokemons);
			(typeof bulk_upsert == "undefined"?$m['bulk_upsert']:bulk_upsert)($m['Pokemon'], pokemons);
		}
		if ($p['bool'](($p['bool']($and7=pokestops)?$m['config']['__getitem__']('parse_pokestops'):$and7))) {
			pokestops_upserted = $p['len'](pokestops);
			(typeof bulk_upsert == "undefined"?$m['bulk_upsert']:bulk_upsert)($m['Pokestop'], pokestops);
		}
		if ($p['bool'](($p['bool']($and9=gyms)?$m['config']['__getitem__']('parse_gyms'):$and9))) {
			gyms_upserted = $p['len'](gyms);
			(typeof bulk_upsert == "undefined"?$m['bulk_upsert']:bulk_upsert)($m['Gym'], gyms);
		}
		(typeof bulk_upsert == "undefined"?$m['bulk_upsert']:bulk_upsert)($m['ScannedLocation'], scanned);
		(typeof clean_database == "undefined"?$m['clean_database']:clean_database)();
		$m['flaskDb']['close_db'](null);
		$m['log']['info']('Upserted %d pokemon, %d pokestops, and %d gyms', pokemons_upserted, pokestops_upserted, gyms_upserted);
		return true;
	};
	$m['parse_map']['__name__'] = 'parse_map';

	$m['parse_map']['__bind_type__'] = 0;
	$m['parse_map']['__args__'] = [null,null,['map_dict'],['step_location']];
	$m['clean_database'] = function() {
		var query,$sub8,$sub7,$sub6,$sub5;
		query = $m['ScannedLocation']['$$delete']()['where'](($p['cmp']($p['getattr']($m['ScannedLocation'], 'last_modified'), $p['__op_sub']($sub5=$m['datetime']['utcnow'](),$sub6=$pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'minutes':30}]))) == -1));
		query['execute']();
		if ($p['bool'](($p['cmp']($p['getattr']($m['args'], 'purge_data'), 0) == 1))) {
			query = $m['Pokemon']['$$delete']()['where'](($p['cmp']($p['getattr']($m['Pokemon'], 'disappear_time'), $p['__op_sub']($sub7=$m['datetime']['utcnow'](),$sub8=$pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':$p['getattr']($m['args'], 'purge_data')}]))) == -1));
			query['execute']();
		}
		return null;
	};
	$m['clean_database']['__name__'] = 'clean_database';

	$m['clean_database']['__bind_type__'] = 0;
	$m['clean_database']['__args__'] = [null,null];
	$m['bulk_upsert'] = function(cls, data) {
		var $add11,e,i,step,$pyjs_try_err,$add10,$add7,$add12,num_rows,$add8,$add9;
		num_rows = $p['len'](data['values']());
		i = 0;
		step = 120;
		while ($p['bool'](($p['cmp'](i, num_rows) == -1))) {
			$m['log']['debug']('Inserting items %d to %d', i, $p['min']($p['__op_add']($add7=i,$add8=step), num_rows));
			try {
				$pyjs_kwargs_call(null, $m['InsertQuery'], null, null, [{'rows':$p['__getslice'](data['values'](), i, $p['min']($p['__op_add']($add9=i,$add10=step), num_rows))}, cls])['upsert']()['execute']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					e = $pyjs_try_err;
					$m['log']['warning']('%s... Retrying', e);
					continue;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			i = $p['__op_add']($add11=i,$add12=step);
		}
		return null;
	};
	$m['bulk_upsert']['__name__'] = 'bulk_upsert';

	$m['bulk_upsert']['__bind_type__'] = 0;
	$m['bulk_upsert']['__args__'] = [null,null,['cls'],['data']];
	$m['create_tables'] = function(db) {

		db['connect']();
		(typeof verify_database_schema == "undefined"?$m['verify_database_schema']:verify_database_schema)(db);
		$pyjs_kwargs_call(db, 'create_tables', null, null, [{'safe':true}, $p['list']([$m['Pokemon'], $m['Pokestop'], $m['Gym'], $m['ScannedLocation']])]);
		db['close']();
		return null;
	};
	$m['create_tables']['__name__'] = 'create_tables';

	$m['create_tables']['__bind_type__'] = 0;
	$m['create_tables']['__args__'] = [null,null,['db']];
	$m['drop_tables'] = function(db) {

		db['connect']();
		$pyjs_kwargs_call(db, 'drop_tables', null, null, [{'safe':true}, $p['list']([$m['Pokemon'], $m['Pokestop'], $m['Gym'], $m['ScannedLocation'], $m['Versions']])]);
		db['close']();
		return null;
	};
	$m['drop_tables']['__name__'] = 'drop_tables';

	$m['drop_tables']['__bind_type__'] = 0;
	$m['drop_tables']['__args__'] = [null,null,['db']];
	$m['verify_database_schema'] = function(db) {
		var db_ver;
		if ($p['bool'](!$p['bool']($m['Versions']['table_exists']()))) {
			db['create_tables']($p['list']([$m['Versions']]));
			if ($p['bool']($m['ScannedLocation']['table_exists']())) {
				$m['InsertQuery']($m['Versions'], $p['dict']([[$p['getattr']($m['Versions'], 'key'), 'schema_version'], [$p['getattr']($m['Versions'], 'val'), 0]]))['execute']();
				(typeof database_migrate == "undefined"?$m['database_migrate']:database_migrate)(db, 0);
			}
			else {
				$m['InsertQuery']($m['Versions'], $p['dict']([[$p['getattr']($m['Versions'], 'key'), 'schema_version'], [$p['getattr']($m['Versions'], 'val'), $m['db_schema_version']]]))['execute']();
			}
		}
		else {
			db_ver = $p['getattr']($m['Versions']['get']($p['op_eq']($p['getattr']($m['Versions'], 'key'), 'schema_version')), 'val');
			if ($p['bool'](($p['cmp'](db_ver, $m['db_schema_version']) == -1))) {
				(typeof database_migrate == "undefined"?$m['database_migrate']:database_migrate)(db, db_ver);
			}
			else if ($p['bool'](($p['cmp'](db_ver, $m['db_schema_version']) == 1))) {
				$m['log']['error']('Your database version (%i) appears to be newer than the code supports (%i).', db_ver, $m['db_schema_version']);
				$m['log']['error']('Please upgrade your code base or drop all tables in your database.');
				$m['sys']['exit'](1);
			}
		}
		return null;
	};
	$m['verify_database_schema']['__name__'] = 'verify_database_schema';

	$m['verify_database_schema']['__bind_type__'] = 0;
	$m['verify_database_schema']['__args__'] = [null,null,['db']];
	$m['database_migrate'] = function(db, old_ver) {
		var migrator;
		$m['log']['info']('Detected database version %i, updating to %i', old_ver, $m['db_schema_version']);
		migrator = null;
		if ($p['bool']($p['op_eq']($p['getattr']($m['args'], 'db_type'), 'mysql'))) {
			migrator = $m['MySQLMigrator'](db);
		}
		else {
			migrator = $m['SqliteMigrator'](db);
		}
		if ($p['bool'](($p['cmp'](old_ver, 1) == -1))) {
			db['drop_tables']($p['list']([$m['ScannedLocation']]));
		}
		if ($p['bool'](($p['cmp'](old_ver, 2) == -1))) {
			$m['migrate'](migrator['add_column']('pokestop', 'encounter_id', $pyjs_kwargs_call(null, $m['CharField'], null, null, [{'max_length':50, 'null':true}])));
		}
		if ($p['bool'](($p['cmp'](old_ver, 3) == -1))) {
			$m['migrate'](migrator['add_column']('pokestop', 'active_fort_modifier', $pyjs_kwargs_call(null, $m['CharField'], null, null, [{'max_length':50, 'null':true}])), migrator['drop_column']('pokestop', 'encounter_id'), migrator['drop_column']('pokestop', 'active_pokemon_id'));
		}
		$pyjs_kwargs_call($m['Versions'], 'update', null, null, [{'val':$m['db_schema_version']}])['where']($p['op_eq']($p['getattr']($m['Versions'], 'key'), 'schema_version'))['execute']();
		return null;
	};
	$m['database_migrate']['__name__'] = 'database_migrate';

	$m['database_migrate']['__bind_type__'] = 0;
	$m['database_migrate']['__args__'] = [null,null,['db'],['old_ver']];
	return this;
}; /* end pogom.models */


/* end module: pogom.models */


/*
PYJS_DEPS: ['logging', 'calendar', 'sys', 'peewee.SqliteDatabase', 'peewee', 'peewee.InsertQuery', 'peewee.IntegerField', 'peewee.CharField', 'peewee.DoubleField', 'peewee.BooleanField', 'peewee.DateTimeField', 'peewee.PrimaryKeyField', 'peewee.fn', 'playhouse.flask_utils.FlaskDB', 'playhouse', 'playhouse.flask_utils', 'playhouse.pool.PooledMySQLDatabase', 'playhouse.pool', 'playhouse.shortcuts.RetryOperationalError', 'playhouse.shortcuts', 'playhouse.migrate.migrate', 'playhouse.migrate', 'playhouse.migrate.MySQLMigrator', 'playhouse.migrate.SqliteMigrator', 'datetime.datetime', 'datetime', 'datetime.timedelta', 'base64.b64encode', 'base64', 'pogom.config', 'pogom', 'pogom.utils.get_pokemon_name', 'pogom.utils', 'pogom.utils.get_pokemon_rarity', 'pogom.utils.get_pokemon_types', 'pogom.utils.get_args', 'pogom.utils.send_to_webhook', 'pogom.transform.transform_from_wgs_to_gcj', 'pogom.transform', 'pogom.customLog.printPokemon', 'pogom.customLog']
*/
