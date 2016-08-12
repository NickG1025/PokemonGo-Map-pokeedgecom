/* start module: pogom.app */
$pyjs['loaded_modules']['pogom.app'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pogom.app']['__was_initialized__']) return $pyjs['loaded_modules']['pogom.app'];
	if(typeof $pyjs['loaded_modules']['pogom'] == 'undefined' || !$pyjs['loaded_modules']['pogom']['__was_initialized__']) $p['___import___']('pogom', null);
	var $m = $pyjs['loaded_modules']['pogom.app'];
	$m['__repr__'] = function() { return '<module: pogom.app>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pogom.app';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pogom']['app'] = $pyjs['loaded_modules']['pogom.app'];


	$m['calendar'] = $p['___import___']('calendar', 'pogom');
	$m['logging'] = $p['___import___']('logging', 'pogom');
	$m['Flask'] = $p['___import___']('flask.Flask', 'pogom', null, false);
	$m['jsonify'] = $p['___import___']('flask.jsonify', 'pogom', null, false);
	$m['render_template'] = $p['___import___']('flask.render_template', 'pogom', null, false);
	$m['request'] = $p['___import___']('flask.request', 'pogom', null, false);
	$m['JSONEncoder'] = $p['___import___']('flask.json.JSONEncoder', 'pogom', null, false);
	$m['Compress'] = $p['___import___']('flask_compress.Compress', 'pogom', null, false);
	$m['datetime'] = $p['___import___']('datetime.datetime', 'pogom', null, false);
	$m['LatLng'] = $p['___import___']('s2sphere.LatLng', 'pogom', null, false);
	$m['get_args'] = $p['___import___']('pogom.utils.get_args', 'pogom', null, false);
	$m['timedelta'] = $p['___import___']('datetime.timedelta', 'pogom', null, false);
	$m['OrderedDict'] = $p['___import___']('collections.OrderedDict', 'pogom', null, false);
	$m['config'] = $p['___import___']('pogom.config', null, null, false);
	$m['Pokemon'] = $p['___import___']('pogom.models.Pokemon', null, null, false);
	$m['Gym'] = $p['___import___']('pogom.models.Gym', null, null, false);
	$m['Pokestop'] = $p['___import___']('pogom.models.Pokestop', null, null, false);
	$m['ScannedLocation'] = $p['___import___']('pogom.models.ScannedLocation', null, null, false);
	$m['log'] = $m['logging']['getLogger']((typeof __name__ == "undefined"?$m['__name__']:__name__));
	$m['compress'] = $m['Compress']();
	$m['Pogom'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.app';
		$method = $pyjs__bind_method2('__init__', function(import_name) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				import_name = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof import_name != 'undefined') {
					if (import_name !== null && typeof import_name['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = import_name;
						import_name = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs_kwargs_call($p['$$super']($m['Pogom'], self), '__init__', null, kwargs, [{}, import_name]);
			$m['compress']['init_app'](self);
			self['json_encoder'] = (typeof CustomJSONEncoder == "undefined"?$m['CustomJSONEncoder']:CustomJSONEncoder);
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['GET'])}, '/'])($p['getattr'](self, 'fullmap'));
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['GET'])}, '/raw_data'])($p['getattr'](self, 'raw_data'));
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['GET'])}, '/loc'])($p['getattr'](self, 'loc'));
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['POST'])}, '/next_loc'])($p['getattr'](self, 'next_loc'));
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['GET'])}, '/mobile'])($p['getattr'](self, 'list_pokemon'));
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['GET'])}, '/search_control'])($p['getattr'](self, 'get_search_control'));
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['POST'])}, '/search_control'])($p['getattr'](self, 'post_search_control'));
			$pyjs_kwargs_call(self, 'route', null, null, [{'methods':$p['list'](['GET'])}, '/stats'])($p['getattr'](self, 'get_stats'));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['import_name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set_search_control', function(control) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				control = arguments[1];
			}

			self['search_control'] = control;
			return null;
		}
	, 1, [null,null,['self'],['control']]);
		$cls_definition['set_search_control'] = $method;
		$method = $pyjs__bind_method2('set_location_queue', function(queue) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				queue = arguments[1];
			}

			self['location_queue'] = queue;
			return null;
		}
	, 1, [null,null,['self'],['queue']]);
		$cls_definition['set_location_queue'] = $method;
		$method = $pyjs__bind_method2('set_current_location', function(location) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				location = arguments[1];
			}

			self['current_location'] = location;
			return null;
		}
	, 1, [null,null,['self'],['location']]);
		$cls_definition['set_current_location'] = $method;
		$method = $pyjs__bind_method2('get_search_control', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['jsonify']($p['dict']([['status', !$p['bool'](self['search_control']['is_set']())]]));
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_search_control'] = $method;
		$method = $pyjs__bind_method2('post_search_control', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var action,args;
			args = $m['get_args']();
			if ($p['bool'](!$p['bool']($p['getattr'](args, 'search_control')))) {
				return $p['tuple'](['Search control is disabled', 403]);
			}
			action = $m['request']['args']['get']('action', 'none');
			if ($p['bool']($p['op_eq'](action, 'on'))) {
				self['search_control']['clear']();
				$m['log']['info']('Search thread resumed');
			}
			else if ($p['bool']($p['op_eq'](action, 'off'))) {
				self['search_control']['set']();
				$m['log']['info']('Search thread paused');
			}
			else {
				return $m['jsonify']($p['dict']([['message', 'invalid use of api']]));
			}
			return self['get_search_control']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['post_search_control'] = $method;
		$method = $pyjs__bind_method2('fullmap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var fixed_display,args,search_display;
			args = $m['get_args']();
			fixed_display = ($p['bool']($p['getattr'](args, 'fixed_location'))? ('none') : ('inline'));
			search_display = ($p['bool']($p['getattr'](args, 'search_control'))? ('inline') : ('none'));
			return $pyjs_kwargs_call(null, $m['render_template'], null, null, [{'lat':$p['getattr'](self, 'current_location')['__getitem__'](0), 'lng':$p['getattr'](self, 'current_location')['__getitem__'](1), 'gmaps_key':$m['config']['__getitem__']('GMAPS_KEY'), 'lang':$m['config']['__getitem__']('LOCALE'), 'is_fixed':fixed_display, 'search_control':search_display}, 'map.html']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['fullmap'] = $method;
		$method = $pyjs__bind_method2('raw_data', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,neLng,$iter2_iter,swLat,ids,$iter2_idx,swLng,neLat,duration,$iter2_array,d;
			d = $p['dict']([]);
			swLat = $m['request']['args']['get']('swLat');
			swLng = $m['request']['args']['get']('swLng');
			neLat = $m['request']['args']['get']('neLat');
			neLng = $m['request']['args']['get']('neLng');
			if ($p['bool']($p['op_eq']($m['request']['args']['get']('pokemon', 'true'), 'true'))) {
				if ($p['bool']($m['request']['args']['get']('ids'))) {
					ids = function(){
						var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,x,$iter1_array;
	$collcomp1 = $p['list']();
					$iter1_iter = $m['request']['args']['get']('ids')['$$split'](',');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						x = $iter1_nextval['$nextval'];
						$collcomp1['append']($p['float_int'](x));
					}

	return $collcomp1;}();
					d['__setitem__']('pokemons', $m['Pokemon']['get_active_by_id'](ids, swLat, swLng, neLat, neLng));
				}
				else {
					d['__setitem__']('pokemons', $m['Pokemon']['get_active'](swLat, swLng, neLat, neLng));
				}
			}
			if ($p['bool']($p['op_eq']($m['request']['args']['get']('pokestops', 'false'), 'true'))) {
				d['__setitem__']('pokestops', $m['Pokestop']['get_stops'](swLat, swLng, neLat, neLng));
			}
			if ($p['bool']($p['op_eq']($m['request']['args']['get']('gyms', 'true'), 'true'))) {
				d['__setitem__']('gyms', $m['Gym']['get_gyms'](swLat, swLng, neLat, neLng));
			}
			if ($p['bool']($p['op_eq']($m['request']['args']['get']('scanned', 'true'), 'true'))) {
				d['__setitem__']('scanned', $m['ScannedLocation']['get_recent'](swLat, swLng, neLat, neLng));
			}
			if ($p['bool']($p['op_eq']($m['request']['args']['get']('seen', 'false'), 'true'))) {
				$iter2_iter = self['get_valid_stat_input']()['__getitem__']('duration')['__getitem__']('items')['values']();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					duration = $iter2_nextval['$nextval'];
					if ($p['bool']($p['op_eq'](duration['__getitem__']('selected'), 'SELECTED'))) {
						d['__setitem__']('seen', $m['Pokemon']['get_seen'](duration['__getitem__']('value')));
						break;
					}
				}
			}
			if ($p['bool']($p['op_eq']($m['request']['args']['get']('appearances', 'false'), 'true'))) {
				d['__setitem__']('appearances', $m['Pokemon']['get_appearances']($m['request']['args']['get']('pokemonid'), $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['float']}, 'last'])));
			}
			return $m['jsonify'](d);
		}
	, 1, [null,null,['self']]);
		$cls_definition['raw_data'] = $method;
		$method = $pyjs__bind_method2('loc', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var d;
			d = $p['dict']([]);
			d['__setitem__']('lat', $p['getattr'](self, 'current_location')['__getitem__'](0));
			d['__setitem__']('lng', $p['getattr'](self, 'current_location')['__getitem__'](1));
			return $m['jsonify'](d);
		}
	, 1, [null,null,['self']]);
		$cls_definition['loc'] = $method;
		$method = $pyjs__bind_method2('next_loc', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and1,args,lon,lat,$and2;
			args = $m['get_args']();
			if ($p['bool']($p['getattr'](args, 'fixed_location'))) {
				return $p['tuple'](['Location changes are turned off', 403]);
			}
			if ($p['bool']($p['getattr']($m['request'], 'args'))) {
				lat = $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['float']}, 'lat']);
				lon = $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['float']}, 'lon']);
			}
			if ($p['bool']($p['getattr']($m['request'], 'form'))) {
				lat = $pyjs_kwargs_call($m['request']['form'], 'get', null, null, [{'type':$p['float']}, 'lat']);
				lon = $pyjs_kwargs_call($m['request']['form'], 'get', null, null, [{'type':$p['float']}, 'lon']);
			}
			if ($p['bool'](!$p['bool'](($p['bool']($and1=lat)?lon:$and1)))) {
				$m['log']['warning']('Invalid next location: %s,%s', lat, lon);
				return $p['tuple'](['bad parameters', 400]);
			}
			else {
				self['location_queue']['put']($p['tuple']([lat, lon, 0]));
				self['set_current_location']($p['tuple']([lat, lon, 0]));
				$m['log']['info']('Changing next location: %s,%s', lat, lon);
				return 'ok';
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next_loc'] = $method;
		$method = $pyjs__bind_method2('list_pokemon', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_type,diff,pokemon,$iter3_idx,lon,$iter3_iter,$sub3,diff_lng,$sub1,$sub6,pokemon_list,$sub4,direction,diff_lat,$sub2,$iter3_array,lat,$mul2,$mul1,entry,pokemon_point,$add2,$add1,$sub5,origin_point,$iter3_nextval;
			pokemon_list = $p['list']([]);
			lat = $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['float']}, 'lat', $p['getattr'](self, 'current_location')['__getitem__'](0)]);
			lon = $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['float']}, 'lon', $p['getattr'](self, 'current_location')['__getitem__'](1)]);
			origin_point = $m['LatLng']['from_degrees'](lat, lon);
			$iter3_iter = $m['Pokemon']['get_active'](null, null, null, null);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				pokemon = $iter3_nextval['$nextval'];
				pokemon_point = $m['LatLng']['from_degrees'](pokemon['__getitem__']('latitude'), pokemon['__getitem__']('longitude'));
				diff = $p['__op_sub']($sub1=pokemon_point,$sub2=origin_point);
				diff_lat = $p['getattr'](diff['lat'](), 'degrees');
				diff_lng = $p['getattr'](diff['lng'](), 'degrees');
				direction = $p['__op_add']($add1=($p['bool'](($p['cmp']($p['abs'](diff_lat), 0.0001) == 1))? (($p['bool'](((($p['cmp'](diff_lat, 0))|1) == 1))? ('N') : ('S'))) : ('')),$add2=($p['bool'](($p['cmp']($p['abs'](diff_lng), 0.0001) == 1))? (($p['bool'](((($p['cmp'](diff_lng, 0))|1) == 1))? ('E') : ('W'))) : ('')));
				entry = $p['dict']([['id', pokemon['__getitem__']('pokemon_id')], ['name', pokemon['__getitem__']('pokemon_name')], ['card_dir', direction], ['distance', $p['float_int']((typeof ($mul1=$p['getattr'](origin_point['get_distance'](pokemon_point), 'radians'))==typeof ($mul2=6366468.24183) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)))], ['time_to_disappear', $p['sprintf']('%d min %d sec', $p['divmod']($p['getattr']($p['__op_sub']($sub3=pokemon['__getitem__']('disappear_time'),$sub4=$m['datetime']['utcnow']()), 'seconds'), 60))], ['disappear_time', pokemon['__getitem__']('disappear_time')], ['disappear_sec', $p['getattr']($p['__op_sub']($sub5=pokemon['__getitem__']('disappear_time'),$sub6=$m['datetime']['utcnow']()), 'seconds')], ['latitude', pokemon['__getitem__']('latitude')], ['longitude', pokemon['__getitem__']('longitude')]]);
				pokemon_list['append']($p['tuple']([entry, entry['__getitem__']('distance')]));
			}
			pokemon_list = function(){
				var $lambda1,$iter4_nextval,$collcomp2,$iter4_idx,y,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp2 = $p['list']();
			var 			$lambda1 = function(x) {

				return x['__getitem__'](1);
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['x']];
			$iter4_iter = $pyjs_kwargs_call(null, $p['sorted'], null, null, [{'key':$lambda1}, pokemon_list]);
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				y = $iter4_nextval['$nextval'];
				$collcomp2['append'](y['__getitem__'](0));
			}

	return $collcomp2;}();
			return $pyjs_kwargs_call(null, $m['render_template'], null, null, [{'pokemon_list':pokemon_list, 'origin_lat':lat, 'origin_lng':lon}, 'mobile_list.html']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['list_pokemon'] = $method;
		$method = $pyjs__bind_method2('get_valid_stat_input', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var sort,$mul4,valid_order,$div6,valid_input,valid_durations,$div2,valid_sort,$mul6,duration,$div3,$mul5,$div1,$mul3,order,$div4,$div5;
			duration = $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['str']}, 'duration']);
			sort = $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['str']}, 'sort']);
			order = $pyjs_kwargs_call($m['request']['args'], 'get', null, null, [{'type':$p['str']}, 'order']);
			valid_durations = $m['OrderedDict']();
			valid_durations['__setitem__']('1h', $p['dict']([['display', 'Last Hour'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':1}])], ['selected', ($p['bool']($p['op_eq'](duration, '1h'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('3h', $p['dict']([['display', 'Last 3 Hours'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':3}])], ['selected', ($p['bool']($p['op_eq'](duration, '3h'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('6h', $p['dict']([['display', 'Last 6 Hours'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':6}])], ['selected', ($p['bool']($p['op_eq'](duration, '6h'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('12h', $p['dict']([['display', 'Last 12 Hours'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':12}])], ['selected', ($p['bool']($p['op_eq'](duration, '12h'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('1d', $p['dict']([['display', 'Last Day'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'days':1}])], ['selected', ($p['bool']($p['op_eq'](duration, '1d'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('7d', $p['dict']([['display', 'Last 7 Days'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'days':7}])], ['selected', ($p['bool']($p['op_eq'](duration, '7d'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('14d', $p['dict']([['display', 'Last 14 Days'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'days':14}])], ['selected', ($p['bool']($p['op_eq'](duration, '14d'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('1m', $p['dict']([['display', 'Last Month'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'days':(typeof ($div1=365)==typeof ($div2=12) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))}])], ['selected', ($p['bool']($p['op_eq'](duration, '1m'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('3m', $p['dict']([['display', 'Last 3 Months'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'days':(typeof ($div3=(typeof ($mul3=3)==typeof ($mul4=365) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($div4=12) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))}])], ['selected', ($p['bool']($p['op_eq'](duration, '3m'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('6m', $p['dict']([['display', 'Last 6 Months'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'days':(typeof ($div5=(typeof ($mul5=6)==typeof ($mul6=365) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($div6=12) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6))}])], ['selected', ($p['bool']($p['op_eq'](duration, '6m'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('1y', $p['dict']([['display', 'Last Year'], ['value', $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'days':365}])], ['selected', ($p['bool']($p['op_eq'](duration, '1y'))? ('SELECTED') : (''))]]));
			valid_durations['__setitem__']('all', $p['dict']([['display', 'Map Lifetime'], ['value', 0], ['selected', ($p['bool']($p['op_eq'](duration, 'all'))? ('SELECTED') : (''))]]));
			if ($p['bool'](!valid_durations['__contains__'](duration))) {
				valid_durations['__getitem__']('1d')['__setitem__']('selected', 'SELECTED');
			}
			valid_sort = $m['OrderedDict']();
			valid_sort['__setitem__']('count', $p['dict']([['display', 'Count'], ['selected', ($p['bool']($p['op_eq'](sort, 'count'))? ('SELECTED') : (''))]]));
			valid_sort['__setitem__']('id', $p['dict']([['display', 'Pokedex Number'], ['selected', ($p['bool']($p['op_eq'](sort, 'id'))? ('SELECTED') : (''))]]));
			valid_sort['__setitem__']('name', $p['dict']([['display', 'Pokemon Name'], ['selected', ($p['bool']($p['op_eq'](sort, 'name'))? ('SELECTED') : (''))]]));
			if ($p['bool'](!valid_sort['__contains__'](sort))) {
				valid_sort['__getitem__']('count')['__setitem__']('selected', 'SELECTED');
			}
			valid_order = $m['OrderedDict']();
			valid_order['__setitem__']('asc', $p['dict']([['display', 'Ascending'], ['selected', ($p['bool']($p['op_eq'](order, 'asc'))? ('SELECTED') : (''))]]));
			valid_order['__setitem__']('desc', $p['dict']([['display', 'Descending'], ['selected', ($p['bool']($p['op_eq'](order, 'desc'))? ('SELECTED') : (''))]]));
			if ($p['bool'](!valid_order['__contains__'](order))) {
				valid_order['__getitem__']('desc')['__setitem__']('selected', 'SELECTED');
			}
			valid_input = $m['OrderedDict']();
			valid_input['__setitem__']('duration', $p['dict']([['display', 'Duration'], ['items', valid_durations]]));
			valid_input['__setitem__']('sort', $p['dict']([['display', 'Sort'], ['items', valid_sort]]));
			valid_input['__setitem__']('order', $p['dict']([['display', 'Order'], ['items', valid_order]]));
			return valid_input;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_valid_stat_input'] = $method;
		$method = $pyjs__bind_method2('get_stats', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $pyjs_kwargs_call(null, $m['render_template'], null, null, [{'lat':$p['getattr'](self, 'current_location')['__getitem__'](0), 'lng':$p['getattr'](self, 'current_location')['__getitem__'](1), 'gmaps_key':$m['config']['__getitem__']('GMAPS_KEY'), 'valid_input':self['get_valid_stat_input']()}, 'statistics.html']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_stats'] = $method;
		var $bases = new Array($m['Flask']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Pogom', $p['tuple']($bases), $data);
	})();
	$m['CustomJSONEncoder'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.app';
		$method = $pyjs__bind_method2('$$default', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var millis,$pyjs_try_err,$add3,$div8,$sub8,$add4,$mul8,$mul7,$sub7,$div7,iterable;
			try {
				if ($p['bool']($p['isinstance'](obj, $m['datetime']))) {
					if ($p['bool']((obj['utcoffset']() !== null))) {
						obj = $p['__op_sub']($sub7=obj,$sub8=obj['utcoffset']());
					}
					millis = $p['float_int']($p['__op_add']($add3=(typeof ($mul7=$m['calendar']['timegm'](obj['timetuple']()))==typeof ($mul8=1000) && typeof $mul7=='number'?
						$mul7*$mul8:
						$p['op_mul']($mul7,$mul8)),$add4=(typeof ($div7=$p['getattr'](obj, 'microsecond'))==typeof ($div8=1000) && typeof $div7=='number' && $div8 !== 0?
						$div7/$div8:
						$p['op_div']($div7,$div8))));
					return millis;
				}
				iterable = $p['iter'](obj);
				throw $p['TryElse'];
			} catch($pyjs_try_err) {
				if ($pyjs_try_err['__name__'] == 'TryElse') {
					return $p['list'](iterable);
				} else {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $p['TypeError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			return $m['JSONEncoder']['$$default'](self, obj);
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['$$default'] = $method;
		var $bases = new Array($m['JSONEncoder']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CustomJSONEncoder', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pogom.app */


/* end module: pogom.app */


/*
PYJS_DEPS: ['calendar', 'logging', 'flask.Flask', 'flask', 'flask.jsonify', 'flask.render_template', 'flask.request', 'flask.json.JSONEncoder', 'flask.json', 'flask_compress.Compress', 'flask_compress', 'datetime.datetime', 'datetime', 's2sphere.LatLng', 's2sphere', 'pogom.utils.get_args', 'pogom', 'pogom.utils', 'datetime.timedelta', 'collections.OrderedDict', 'collections', 'pogom.config', 'pogom.models.Pokemon', 'pogom.models', 'pogom.models.Gym', 'pogom.models.Pokestop', 'pogom.models.ScannedLocation']
*/
