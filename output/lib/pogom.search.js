/* start module: pogom.search */
$pyjs['loaded_modules']['pogom.search'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pogom.search']['__was_initialized__']) return $pyjs['loaded_modules']['pogom.search'];
	if(typeof $pyjs['loaded_modules']['pogom'] == 'undefined' || !$pyjs['loaded_modules']['pogom']['__was_initialized__']) $p['___import___']('pogom', null);
	var $m = $pyjs['loaded_modules']['pogom.search'];
	$m['__repr__'] = function() { return '<module: pogom.search>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pogom.search';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pogom']['search'] = $pyjs['loaded_modules']['pogom.search'];


	$m['logging'] = $p['___import___']('logging', 'pogom');
	$m['time'] = $p['___import___']('time', 'pogom');
	$m['math'] = $p['___import___']('math', 'pogom');
	$m['Thread'] = $p['___import___']('threading.Thread', 'pogom', null, false);
	$m['Lock'] = $p['___import___']('threading.Lock', 'pogom', null, false);
	$m['Queue'] = $p['___import___']('queue.Queue', 'pogom', null, false);
	$m['Empty'] = $p['___import___']('queue.Empty', 'pogom', null, false);
	$m['PGoApi'] = $p['___import___']('pgoapi.PGoApi', 'pogom', null, false);
	$m['f2i'] = $p['___import___']('pgoapi.utilities.f2i', 'pogom', null, false);
	$m['util'] = $p['___import___']('pgoapi.utilities', 'pogom', null, false);
	$m['AuthException'] = $p['___import___']('pgoapi.exceptions.AuthException', 'pogom', null, false);
	$m['parse_map'] = $p['___import___']('pogom.models.parse_map', null, null, false);
	$m['log'] = $m['logging']['getLogger']((typeof __name__ == "undefined"?$m['__name__']:__name__));
	$m['TIMESTAMP'] = '\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00';
	$m['get_new_coords'] = function(init_loc, distance, bearing) {
		var $div2,$div3,new_lon,$div1,init_coords,$mul3,$div7,$mul1,$sub2,$sub1,$div8,R,$mul9,$mul8,$mul7,$mul6,$mul5,$mul4,$div6,$mul2,$div4,$div5,$mul12,$mul11,new_lat,$mul10,$add2,$add3,$add1,$add4;
		R = 6378.1;
		bearing = $m['math']['radians'](bearing);
		init_coords = $p['list']([$m['math']['radians'](init_loc['__getitem__'](0)), $m['math']['radians'](init_loc['__getitem__'](1))]);
		new_lat = $m['math']['asin']($p['__op_add']($add1=(typeof ($mul1=$m['math']['sin'](init_coords['__getitem__'](0)))==typeof ($mul2=$m['math']['cos']((typeof ($div1=distance)==typeof ($div2=R) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2)))) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2)),$add2=(typeof ($mul5=(typeof ($mul3=$m['math']['cos'](init_coords['__getitem__'](0)))==typeof ($mul4=$m['math']['sin']((typeof ($div3=distance)==typeof ($div4=R) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4)))) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)))==typeof ($mul6=$m['math']['cos'](bearing)) && typeof $mul5=='number'?
			$mul5*$mul6:
			$p['op_mul']($mul5,$mul6))));
		new_lon = $p['__op_add']($add3=init_coords['__getitem__'](1),$add4=$m['math']['atan2']((typeof ($mul9=(typeof ($mul7=$m['math']['sin'](bearing))==typeof ($mul8=$m['math']['sin']((typeof ($div5=distance)==typeof ($div6=R) && typeof $div5=='number' && $div6 !== 0?
			$div5/$div6:
			$p['op_div']($div5,$div6)))) && typeof $mul7=='number'?
			$mul7*$mul8:
			$p['op_mul']($mul7,$mul8)))==typeof ($mul10=$m['math']['cos'](init_coords['__getitem__'](0))) && typeof $mul9=='number'?
			$mul9*$mul10:
			$p['op_mul']($mul9,$mul10)), $p['__op_sub']($sub1=$m['math']['cos']((typeof ($div7=distance)==typeof ($div8=R) && typeof $div7=='number' && $div8 !== 0?
			$div7/$div8:
			$p['op_div']($div7,$div8))),$sub2=(typeof ($mul11=$m['math']['sin'](init_coords['__getitem__'](0)))==typeof ($mul12=$m['math']['sin'](new_lat)) && typeof $mul11=='number'?
			$mul11*$mul12:
			$p['op_mul']($mul11,$mul12)))));
		return $p['list']([$m['math']['degrees'](new_lat), $m['math']['degrees'](new_lon)]);
	};
	$m['get_new_coords']['__name__'] = 'get_new_coords';

	$m['get_new_coords']['__bind_type__'] = 0;
	$m['get_new_coords']['__args__'] = [null,null,['init_loc'],['distance'],['bearing']];
	$m['generate_location_steps'] = function(initial_loc, step_count) {
		var $div17,$iter3_array,ydist,xdist,$iter1_iter,$iter4_type,$iter2_type,ring,$iter4_iter,SOUTH,loc,$div30,$iter3_idx,NORTH,$div19,$iter2_iter,$div14,$div15,$div16,$iter2_nextval,$div10,$div11,$div12,$div13,$iter1_array,$add7,$div22,EAST,$mul20,$iter3_iter,$div21,direction,$iter1_nextval,$div20,$div32,$div23,$iter2_idx,$div9,pulse_radius,$div25,$iter3_type,$div18,$iter4_nextval,$add8,$div24,$mul17,$mul16,$mul15,$mul14,$mul13,$iter1_type,$div27,$div26,i,WEST,$div28,$mul19,$mul18,$iter4_idx,$div29,$add6,$iter1_idx,$add5,$iter4_array,$div31,$iter3_nextval,$iter2_array;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($p['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$p['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $p['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				NORTH = 0;
				EAST = 90;
				SOUTH = 180;
				WEST = 270;
				pulse_radius = 0.07;
				xdist = (typeof ($mul17=$m['math']['sqrt'](3))==typeof ($mul18=pulse_radius) && typeof $mul17=='number'?
					$mul17*$mul18:
					$p['op_mul']($mul17,$mul18));
				ydist = (typeof ($mul19=3)==typeof ($mul20=(typeof ($div21=pulse_radius)==typeof ($div22=2) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22))) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20));
				$yield_value = $p['tuple']([initial_loc['__getitem__'](0), initial_loc['__getitem__'](1), 0]);
				$yielding = true;
				$generator_state[0] = 1;
				return $yield_value;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				ring = 1;
				loc = initial_loc;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state['splice'](1, $generator_state['length']-1);
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				for (;($generator_state[1] > 0)||($p['bool'](($p['cmp'](ring, step_count) == -1)));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						loc = $m['get_new_coords'](loc, ydist, NORTH);
						loc = $m['get_new_coords'](loc, (typeof ($div23=xdist)==typeof ($div24=2) && typeof $div23=='number' && $div24 !== 0?
							$div23/$div24:
							$p['op_div']($div23,$div24)), WEST);
						$iter3_iter = $p['range'](6);
						$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[2] = 0;
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						for (;($generator_state[2] > 0 || typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined');$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
								direction = $iter3_nextval['$nextval'];
								$iter4_iter = $p['range'](ring);
								$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								$generator_state[3] = 0;
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
								for (;($generator_state[3] > 0 || typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined');$generator_state[3] = 0) {
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										i = $iter4_nextval['$nextval'];
										if ($p['bool']($p['op_eq'](direction, 0))) {
											loc = $m['get_new_coords'](loc, xdist, EAST);
										}
										if ($p['bool']($p['op_eq'](direction, 1))) {
											loc = $m['get_new_coords'](loc, ydist, SOUTH);
											loc = $m['get_new_coords'](loc, (typeof ($div25=xdist)==typeof ($div26=2) && typeof $div25=='number' && $div26 !== 0?
												$div25/$div26:
												$p['op_div']($div25,$div26)), EAST);
										}
										if ($p['bool']($p['op_eq'](direction, 2))) {
											loc = $m['get_new_coords'](loc, ydist, SOUTH);
											loc = $m['get_new_coords'](loc, (typeof ($div27=xdist)==typeof ($div28=2) && typeof $div27=='number' && $div28 !== 0?
												$div27/$div28:
												$p['op_div']($div27,$div28)), WEST);
										}
										if ($p['bool']($p['op_eq'](direction, 3))) {
											loc = $m['get_new_coords'](loc, xdist, WEST);
										}
										if ($p['bool']($p['op_eq'](direction, 4))) {
											loc = $m['get_new_coords'](loc, ydist, NORTH);
											loc = $m['get_new_coords'](loc, (typeof ($div29=xdist)==typeof ($div30=2) && typeof $div29=='number' && $div30 !== 0?
												$div29/$div30:
												$p['op_div']($div29,$div30)), WEST);
										}
										if ($p['bool']($p['op_eq'](direction, 5))) {
											loc = $m['get_new_coords'](loc, ydist, NORTH);
											loc = $m['get_new_coords'](loc, (typeof ($div31=xdist)==typeof ($div32=2) && typeof $div31=='number' && $div32 !== 0?
												$div31/$div32:
												$p['op_div']($div31,$div32)), EAST);
										}
										$yield_value = $p['tuple']([loc['__getitem__'](0), loc['__getitem__'](1), 0]);
										$yielding = true;
										$generator_state[3] = 1;
										return $yield_value;
										$generator_state[3]=1;
									}
									if ($generator_state[3] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[3] = -1;
											throw $exc;
										}
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=3;
							}
							if ($generator_state[2] == 3) {
								$generator_state[2]=4;
							}
							if ($generator_state[2] == 4) {
							}
						}
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						ring = $p['__op_add']($add7=ring,$add8=1);
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
					}
				}
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
				$generator_state[0]=5;
			}
			if ($generator_state[0] == 5) {
			}

			return;
		};
		return $generator;
	};
	$m['generate_location_steps']['__name__'] = 'generate_location_steps';

	$m['generate_location_steps']['__bind_type__'] = 0;
	$m['generate_location_steps']['__args__'] = [null,null,['initial_loc'],['step_count']];
	$m['fake_search_loop'] = function() {

		while ($p['bool'](true)) {
			$m['log']['info']('Fake search loop running');
			$m['time']['sleep'](10);
		}
		return null;
	};
	$m['fake_search_loop']['__name__'] = 'fake_search_loop';

	$m['fake_search_loop']['__bind_type__'] = 0;
	$m['fake_search_loop']['__args__'] = [null,null];
	$m['search_overseer_thread'] = function(args, new_location_queue, pause_bit, encryption_lib_path) {
		var $iter5_nextval,$iter6_type,$iter5_array,$iter5_iter,current_location,$iter5_type,$iter6_iter,step_location,$iter6_nextval,parse_lock,$pyjs_try_err,$iter5_idx,search_args,$iter6_idx,$iter6_array,search_items_queue,account,i,step,t;
		$m['log']['info']('Search overseer starting');
		search_items_queue = $m['Queue']();
		parse_lock = $m['Lock']();
		$m['log']['info']('Starting search worker threads');
		$iter5_iter = $p['enumerate']($p['getattr'](args, 'accounts'));
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
			i = $tupleassign1[0];
			account = $tupleassign1[1];
			$m['log']['debug']('Starting search worker thread %d for user %s', i, account['__getitem__']('username'));
			t = $pyjs_kwargs_call(null, $m['Thread'], null, null, [{'target':(typeof search_worker_thread == "undefined"?$m['search_worker_thread']:search_worker_thread), 'name':'search_worker_{}'['format'](i), 'args':$p['tuple']([args, account, search_items_queue, parse_lock, encryption_lib_path])}]);
			t['daemon'] = true;
			t['start']();
		}
		current_location = false;
		while ($p['bool'](true)) {
			if ($p['bool'](pause_bit['is_set']())) {
				if ($p['bool'](!$p['bool'](search_items_queue['empty']()))) {
					try {
						while ($p['bool'](true)) {
							search_items_queue['get_nowait']();
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $m['Empty']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Empty'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				$m['time']['sleep'](1);
				continue;
			}
			if ($p['bool'](!$p['bool'](new_location_queue['empty']()))) {
				$m['log']['info']('New location caught, moving search grid');
				try {
					while ($p['bool'](true)) {
						current_location = new_location_queue['get_nowait']();
					}
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if (($pyjs_try_err_name == $m['Empty']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Empty'])) {
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				if ($p['bool'](!$p['bool'](search_items_queue['empty']()))) {
					try {
						while ($p['bool'](true)) {
							search_items_queue['get_nowait']();
						}
					} catch($pyjs_try_err) {
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if (($pyjs_try_err_name == $m['Empty']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Empty'])) {
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			if ($p['bool'](search_items_queue['empty']())) {
				$m['log']['debug']('Search queue empty, restarting loop');
				$iter6_iter = $p['enumerate']($m['generate_location_steps'](current_location, $p['getattr'](args, 'step_limit')), 1);
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
					step = $tupleassign2[0];
					step_location = $tupleassign2[1];
					$m['log']['debug']('Queueing step %d @ %f/%f/%f', step, step_location['__getitem__'](0), step_location['__getitem__'](1), step_location['__getitem__'](2));
					search_args = $p['tuple']([step, step_location]);
					search_items_queue['put'](search_args);
				}
			}
			$m['time']['sleep'](1);
		}
		return null;
	};
	$m['search_overseer_thread']['__name__'] = 'search_overseer_thread';

	$m['search_overseer_thread']['__bind_type__'] = 0;
	$m['search_overseer_thread']['__args__'] = [null,null,['args'],['new_location_queue'],['pause_bit'],['encryption_lib_path']];
	$m['search_worker_thread'] = function(args, account, search_items_queue, parse_lock, encryption_lib_path) {
		var $sub3,$sub4,api,step_location,$div33,$div36,$div34,response_dict,delay,$pyjs_try_err,loop_start_time,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul21,$mul28,failed_total,$add14,$add15,step,$add17,$add10,$add11,$add12,$add13,$add18,e,sleep_delay_remaining,$div35,$add16,$mul30,$add9,$mul31,sleep_time,$mul32;
		if ($p['bool'](($p['cmp']($p['len']($p['getattr'](args, 'accounts')), 1) == 1))) {
			delay = (typeof ($mul21=(typeof ($div33=$p['getattr'](args, 'scan_delay'))==typeof ($div34=$p['len']($p['getattr'](args, 'accounts'))) && typeof $div33=='number' && $div34 !== 0?
				$div33/$div34:
				$p['op_div']($div33,$div34)))==typeof ($mul22=args['accounts']['index'](account)) && typeof $mul21=='number'?
				$mul21*$mul22:
				$p['op_mul']($mul21,$mul22));
			$m['log']['debug']('Delaying thread startup for %.2f seconds', delay);
			$m['time']['sleep'](delay);
		}
		$m['log']['debug']('Search worker thread starting');
		while ($p['bool'](true)) {
			try {
				$m['log']['debug']('Entering search loop');
				api = $m['PGoApi']();
				if ($p['bool']($p['getattr'](args, 'proxy'))) {
					api['set_proxy']($p['dict']([['http', $p['getattr'](args, 'proxy')], ['https', $p['getattr'](args, 'proxy')]]));
				}
				loop_start_time = $p['float_int']($p['round']((typeof ($mul23=$m['time']['time']())==typeof ($mul24=1000) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24))));
				while ($p['bool'](true)) {
					var $tupleassign3 = $p['__ass_unpack'](search_items_queue['get'](), 2, null);
					step = $tupleassign3[0];
					step_location = $tupleassign3[1];
					$m['log']['info']('Search step %d beginning (queue size is %d)', step, search_items_queue['qsize']());
					$pyjs_kwargs_call(api, 'set_position', step_location, null, [{}]);
					failed_total = 0;
					while ($p['bool'](true)) {
						if ($p['bool'](((($p['cmp'](failed_total, $p['getattr'](args, 'scan_retries')))|1) == 1))) {
							$m['log']['error']('Search step %d went over max scan_retires; abandoning', step);
							break;
						}
						sleep_time = (typeof ($mul25=$p['getattr'](args, 'scan_delay'))==typeof ($mul26=$p['__op_add']($add9=1,$add10=failed_total)) && typeof $mul25=='number'?
							$mul25*$mul26:
							$p['op_mul']($mul25,$mul26));
						(typeof check_login == "undefined"?$m['check_login']:check_login)(args, account, api, step_location);
						api['activate_signature'](encryption_lib_path);
						response_dict = (typeof map_request == "undefined"?$m['map_request']:map_request)(api, step_location);
						if ($p['bool'](!$p['bool'](response_dict))) {
							$m['log']['error']('Search step %d area download failed, retrying request in %g seconds', step, sleep_time);
							failed_total = $p['__op_add']($add11=failed_total,$add12=1);
							$m['time']['sleep'](sleep_time);
							continue;
						}
						$p['__with'](parse_lock, function($withval1){
							try {
								$m['parse_map'](response_dict, step_location);
								$m['log']['debug']('Search step %s completed', step);
								search_items_queue['task_done']();
								break;
							} catch($pyjs_try_err) {
								var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
								$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
								if (($pyjs_try_err_name == $p['KeyError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['KeyError'])) {
									$m['log']['exception']('Search step %s map parsing failed, retrying request in %g seconds', step, sleep_time);
									failed_total = $p['__op_add']($add13=failed_total,$add14=1);
									$m['time']['sleep'](sleep_time);
								} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
							}
						});
					}
					sleep_delay_remaining = $p['__op_sub']($sub3=$p['__op_add']($add15=loop_start_time,$add16=(typeof ($mul27=$p['getattr'](args, 'scan_delay'))==typeof ($mul28=1000) && typeof $mul27=='number'?
						$mul27*$mul28:
						$p['op_mul']($mul27,$mul28))),$sub4=$p['float_int']($p['round']((typeof ($mul29=$m['time']['time']())==typeof ($mul30=1000) && typeof $mul29=='number'?
						$mul29*$mul30:
						$p['op_mul']($mul29,$mul30)))));
					if ($p['bool'](($p['cmp'](sleep_delay_remaining, 0) == 1))) {
						$m['time']['sleep']((typeof ($div35=sleep_delay_remaining)==typeof ($div36=1000) && typeof $div35=='number' && $div36 !== 0?
							$div35/$div36:
							$p['op_div']($div35,$div36)));
					}
					loop_start_time = $p['__op_add']($add17=loop_start_time,$add18=(typeof ($mul31=$p['getattr'](args, 'scan_delay'))==typeof ($mul32=1000) && typeof $mul31=='number'?
						$mul31*$mul32:
						$p['op_mul']($mul31,$mul32)));
				}
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
					e = $pyjs_try_err;
					$m['log']['exception']('Exception in search_worker: %s. Username: %s', e, account['__getitem__']('username'));
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
		}
		return null;
	};
	$m['search_worker_thread']['__name__'] = 'search_worker_thread';

	$m['search_worker_thread']['__bind_type__'] = 0;
	$m['search_worker_thread']['__args__'] = [null,null,['args'],['account'],['search_items_queue'],['parse_lock'],['encryption_lib_path']];
	$m['check_login'] = function(args, account, api, position) {
		var $div37,i,$and1,$and2,$pyjs_try_err,remaining_time,$sub6,$add19,$add20,$div38,$sub5;
		if ($p['bool'](($p['bool']($and1=$p['getattr'](api, '_auth_provider'))?$p['getattr']($p['getattr'](api, '_auth_provider'), '_ticket_expire'):$and1))) {
			remaining_time = $p['__op_sub']($sub5=(typeof ($div37=$p['getattr']($p['getattr'](api, '_auth_provider'), '_ticket_expire'))==typeof ($div38=1000) && typeof $div37=='number' && $div38 !== 0?
				$div37/$div38:
				$p['op_div']($div37,$div38)),$sub6=$m['time']['time']());
			if ($p['bool'](($p['cmp'](remaining_time, 60) == 1))) {
				$m['log']['debug']('Credentials remain valid for another %f seconds', remaining_time);
				return null;
			}
		}
		i = 0;
		api['set_position'](position['__getitem__'](0), position['__getitem__'](1), position['__getitem__'](2));
		while ($p['bool'](($p['cmp'](i, $p['getattr'](args, 'login_retries')) == -1))) {
			try {
				$pyjs_kwargs_call(api, 'set_authentication', null, null, [{'provider':account['__getitem__']('auth_service'), 'username':account['__getitem__']('username'), 'password':account['__getitem__']('password')}]);
				break;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $m['AuthException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['AuthException'])) {
					if ($p['bool'](((($p['cmp'](i, $p['getattr'](args, 'login_retries')))|1) == 1))) {
						throw ((typeof TooManyLoginAttempts == "undefined"?$m['TooManyLoginAttempts']:TooManyLoginAttempts)('Exceeded login attempts'));
					}
					else {
						i = $p['__op_add']($add19=i,$add20=1);
						$m['log']['error']('Failed to login to Pokemon Go with account %s. Trying again in %g seconds', account['__getitem__']('username'), $p['getattr'](args, 'login_delay'));
						$m['time']['sleep']($p['getattr'](args, 'login_delay'));
					}
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
		}
		$m['log']['debug']('Login for account %s successful', account['__getitem__']('username'));
		return null;
	};
	$m['check_login']['__name__'] = 'check_login';

	$m['check_login']['__bind_type__'] = 0;
	$m['check_login']['__args__'] = [null,null,['args'],['account'],['api'],['position']];
	$m['map_request'] = function(api, position) {
		var $mul34,e,cell_ids,$pyjs_try_err,timestamps,$mul33;
		try {
			cell_ids = $m['util']['get_cell_ids'](position['__getitem__'](0), position['__getitem__'](1));
			timestamps = (typeof ($mul33=$p['list']([0]))==typeof ($mul34=$p['len'](cell_ids)) && typeof $mul33=='number'?
				$mul33*$mul34:
				$p['op_mul']($mul33,$mul34));
			return $pyjs_kwargs_call(api, 'get_map_objects', null, null, [{'latitude':$m['f2i'](position['__getitem__'](0)), 'longitude':$m['f2i'](position['__getitem__'](1)), 'since_timestamp_ms':timestamps, 'cell_id':cell_ids}]);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['Exception']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['Exception'])) {
				e = $pyjs_try_err;
				$m['log']['warning']('Exception while downloading map: %s', e);
				return false;
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return null;
	};
	$m['map_request']['__name__'] = 'map_request';

	$m['map_request']['__bind_type__'] = 0;
	$m['map_request']['__args__'] = [null,null,['api'],['position']];
	$m['TooManyLoginAttempts'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pogom.search';
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TooManyLoginAttempts', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pogom.search */


/* end module: pogom.search */


/*
PYJS_DEPS: ['logging', 'time', 'math', 'threading.Thread', 'threading', 'threading.Lock', 'queue.Queue', 'queue', 'queue.Empty', 'pgoapi.PGoApi', 'pgoapi', 'pgoapi.utilities.f2i', 'pgoapi.utilities', 'pgoapi.exceptions.AuthException', 'pgoapi.exceptions', 'pogom.models.parse_map', 'pogom', 'pogom.models']
*/
