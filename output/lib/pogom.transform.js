/* start module: pogom.transform */
$pyjs['loaded_modules']['pogom.transform'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pogom.transform']['__was_initialized__']) return $pyjs['loaded_modules']['pogom.transform'];
	if(typeof $pyjs['loaded_modules']['pogom'] == 'undefined' || !$pyjs['loaded_modules']['pogom']['__was_initialized__']) $p['___import___']('pogom', null);
	var $m = $pyjs['loaded_modules']['pogom.transform'];
	$m['__repr__'] = function() { return '<module: pogom.transform>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pogom.transform';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pogom']['transform'] = $pyjs['loaded_modules']['pogom.transform'];


	$m['sqrt'] = $p['___import___']('math.sqrt', 'pogom', null, false);
	$m['sin'] = $p['___import___']('math.sin', 'pogom', null, false);
	$m['cos'] = $p['___import___']('math.cos', 'pogom', null, false);
	$m['a'] = 6378245.0;
	$m['ee'] = 0.00669342162297;
	$m['pi'] = 3.14159265359;
	$m['transform_from_wgs_to_gcj'] = function(latitude, longitude) {
		var adjust_lat,$mul19,$div3,$div1,$div6,$div10,$div7,$sub9,$sub8,$div4,$sub3,$sub2,$sub1,$div5,$sub7,$sub6,$sub5,$sub4,$mul17,$mul13,$sub12,$sub11,$sub10,$div8,$div9,$mul9,$mul8,$div2,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1,$mul12,$mul7,$mul16,$mul15,$mul14,magic,adjust_lon,$mul11,$mul10,rad_lat,sqrt_magic,$mul18,$add2,$add3,$add1,$mul20,$add4;
		if ($p['bool']((typeof is_location_out_of_china == "undefined"?$m['is_location_out_of_china']:is_location_out_of_china)(latitude, longitude))) {
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([latitude, longitude]), 2, null);
			adjust_lat = $tupleassign1[0];
			adjust_lon = $tupleassign1[1];
		}
		else {
			adjust_lat = (typeof transform_lat == "undefined"?$m['transform_lat']:transform_lat)($p['__op_sub']($sub1=longitude,$sub2=105), $p['__op_sub']($sub3=latitude,$sub4=35.0));
			adjust_lon = (typeof transform_long == "undefined"?$m['transform_long']:transform_long)($p['__op_sub']($sub5=longitude,$sub6=105), $p['__op_sub']($sub7=latitude,$sub8=35.0));
			rad_lat = (typeof ($mul1=(typeof ($div1=latitude)==typeof ($div2=180.0) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))==typeof ($mul2=$m['pi']) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2));
			magic = $m['sin'](rad_lat);
			magic = $p['__op_sub']($sub9=1,$sub10=(typeof ($mul5=(typeof ($mul3=$m['ee'])==typeof ($mul4=magic) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)))==typeof ($mul6=magic) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
			sqrt_magic = $m['sqrt'](magic);
			adjust_lat = (typeof ($div5=(typeof ($mul7=adjust_lat)==typeof ($mul8=180.0) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)))==typeof ($div6=(typeof ($mul13=(typeof ($div3=(typeof ($mul9=$m['a'])==typeof ($mul10=$p['__op_sub']($sub11=1,$sub12=$m['ee'])) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)))==typeof ($div4=(typeof ($mul11=magic)==typeof ($mul12=sqrt_magic) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12))) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)))==typeof ($mul14=$m['pi']) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			adjust_lon = (typeof ($div9=(typeof ($mul15=adjust_lon)==typeof ($mul16=180.0) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16)))==typeof ($div10=(typeof ($mul19=(typeof ($mul17=(typeof ($div7=$m['a'])==typeof ($div8=sqrt_magic) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8)))==typeof ($mul18=$m['cos'](rad_lat)) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)))==typeof ($mul20=$m['pi']) && typeof $mul19=='number'?
				$mul19*$mul20:
				$p['op_mul']($mul19,$mul20))) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10));
			adjust_lat = $p['__op_add']($add1=adjust_lat,$add2=latitude);
			adjust_lon = $p['__op_add']($add3=adjust_lon,$add4=longitude);
		}
		return $p['tuple']([adjust_lat, adjust_lon]);
	};
	$m['transform_from_wgs_to_gcj']['__name__'] = 'transform_from_wgs_to_gcj';

	$m['transform_from_wgs_to_gcj']['__bind_type__'] = 0;
	$m['transform_from_wgs_to_gcj']['__args__'] = [null,null,['latitude'],['longitude']];
	$m['is_location_out_of_china'] = function(latitude, longitude) {
		var $or4,$or1,$or3,$or2;
		if ($p['bool'](($p['bool']($or1=($p['cmp'](longitude, 72.004) == -1))?$or1:($p['bool']($or2=($p['cmp'](longitude, 137.8347) == 1))?$or2:($p['bool']($or3=($p['cmp'](latitude, 0.8293) == -1))?$or3:($p['cmp'](latitude, 55.8271) == 1)))))) {
			return true;
		}
		return false;
	};
	$m['is_location_out_of_china']['__name__'] = 'is_location_out_of_china';

	$m['is_location_out_of_china']['__bind_type__'] = 0;
	$m['is_location_out_of_china']['__args__'] = [null,null,['latitude'],['longitude']];
	$m['transform_lat'] = function(x, y) {
		var $mul39,$add22,$add21,$div16,$add13,$div11,$div22,$add19,$div15,$div12,$div13,$mul38,$mul62,$add20,$mul60,$mul61,$mul48,$mul49,$mul64,$mul65,$mul44,$mul45,$mul46,$mul47,$mul40,$mul41,$mul42,$mul43,$add24,$mul68,$add26,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul58,$mul21,$mul63,$mul67,$add23,$mul66,$add14,$mul35,$add16,$add17,$add10,$add11,$add12,$mul34,lat,$div17,$add25,$add18,$mul37,$div19,$div21,$div20,$mul59,$mul36,$div18,$add15,$mul53,$mul52,$mul51,$mul50,$mul57,$mul56,$mul55,$mul54,$div14,$add6,$add7,$add5,$add8,$add9,$mul31,$mul30,$mul33,$mul32;
		lat = $p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9=$p['__op_add']($add7=$p['__op_add']($add5=(typeof ($usub1=100.0)=='number'?
			-$usub1:
			$p['op_usub']($usub1)),$add6=(typeof ($mul21=2.0)==typeof ($mul22=x) && typeof $mul21=='number'?
			$mul21*$mul22:
			$p['op_mul']($mul21,$mul22))),$add8=(typeof ($mul23=3.0)==typeof ($mul24=y) && typeof $mul23=='number'?
			$mul23*$mul24:
			$p['op_mul']($mul23,$mul24))),$add10=(typeof ($mul27=(typeof ($mul25=0.2)==typeof ($mul26=y) && typeof $mul25=='number'?
			$mul25*$mul26:
			$p['op_mul']($mul25,$mul26)))==typeof ($mul28=y) && typeof $mul27=='number'?
			$mul27*$mul28:
			$p['op_mul']($mul27,$mul28))),$add12=(typeof ($mul31=(typeof ($mul29=0.1)==typeof ($mul30=x) && typeof $mul29=='number'?
			$mul29*$mul30:
			$p['op_mul']($mul29,$mul30)))==typeof ($mul32=y) && typeof $mul31=='number'?
			$mul31*$mul32:
			$p['op_mul']($mul31,$mul32))),$add14=(typeof ($mul33=0.2)==typeof ($mul34=$m['sqrt']($p['abs'](x))) && typeof $mul33=='number'?
			$mul33*$mul34:
			$p['op_mul']($mul33,$mul34)));
		lat = $p['__op_add']($add17=lat,$add18=(typeof ($div11=(typeof ($mul47=$p['__op_add']($add15=(typeof ($mul39=20.0)==typeof ($mul40=$m['sin']((typeof ($mul37=(typeof ($mul35=6.0)==typeof ($mul36=x) && typeof $mul35=='number'?
			$mul35*$mul36:
			$p['op_mul']($mul35,$mul36)))==typeof ($mul38=$m['pi']) && typeof $mul37=='number'?
			$mul37*$mul38:
			$p['op_mul']($mul37,$mul38)))) && typeof $mul39=='number'?
			$mul39*$mul40:
			$p['op_mul']($mul39,$mul40)),$add16=(typeof ($mul45=20.0)==typeof ($mul46=$m['sin']((typeof ($mul43=(typeof ($mul41=2.0)==typeof ($mul42=x) && typeof $mul41=='number'?
			$mul41*$mul42:
			$p['op_mul']($mul41,$mul42)))==typeof ($mul44=$m['pi']) && typeof $mul43=='number'?
			$mul43*$mul44:
			$p['op_mul']($mul43,$mul44)))) && typeof $mul45=='number'?
			$mul45*$mul46:
			$p['op_mul']($mul45,$mul46))))==typeof ($mul48=2.0) && typeof $mul47=='number'?
			$mul47*$mul48:
			$p['op_mul']($mul47,$mul48)))==typeof ($div12=3.0) && typeof $div11=='number' && $div12 !== 0?
			$div11/$div12:
			$p['op_div']($div11,$div12)));
		lat = $p['__op_add']($add21=lat,$add22=(typeof ($div15=(typeof ($mul57=$p['__op_add']($add19=(typeof ($mul51=20.0)==typeof ($mul52=$m['sin']((typeof ($mul49=y)==typeof ($mul50=$m['pi']) && typeof $mul49=='number'?
			$mul49*$mul50:
			$p['op_mul']($mul49,$mul50)))) && typeof $mul51=='number'?
			$mul51*$mul52:
			$p['op_mul']($mul51,$mul52)),$add20=(typeof ($mul55=40.0)==typeof ($mul56=$m['sin']((typeof ($mul53=(typeof ($div13=y)==typeof ($div14=3.0) && typeof $div13=='number' && $div14 !== 0?
			$div13/$div14:
			$p['op_div']($div13,$div14)))==typeof ($mul54=$m['pi']) && typeof $mul53=='number'?
			$mul53*$mul54:
			$p['op_mul']($mul53,$mul54)))) && typeof $mul55=='number'?
			$mul55*$mul56:
			$p['op_mul']($mul55,$mul56))))==typeof ($mul58=2.0) && typeof $mul57=='number'?
			$mul57*$mul58:
			$p['op_mul']($mul57,$mul58)))==typeof ($div16=3.0) && typeof $div15=='number' && $div16 !== 0?
			$div15/$div16:
			$p['op_div']($div15,$div16)));
		lat = $p['__op_add']($add25=lat,$add26=(typeof ($div21=(typeof ($mul67=$p['__op_add']($add23=(typeof ($mul61=160.0)==typeof ($mul62=$m['sin']((typeof ($mul59=(typeof ($div17=y)==typeof ($div18=12.0) && typeof $div17=='number' && $div18 !== 0?
			$div17/$div18:
			$p['op_div']($div17,$div18)))==typeof ($mul60=$m['pi']) && typeof $mul59=='number'?
			$mul59*$mul60:
			$p['op_mul']($mul59,$mul60)))) && typeof $mul61=='number'?
			$mul61*$mul62:
			$p['op_mul']($mul61,$mul62)),$add24=(typeof ($mul65=320)==typeof ($mul66=$m['sin']((typeof ($div19=(typeof ($mul63=y)==typeof ($mul64=$m['pi']) && typeof $mul63=='number'?
			$mul63*$mul64:
			$p['op_mul']($mul63,$mul64)))==typeof ($div20=30.0) && typeof $div19=='number' && $div20 !== 0?
			$div19/$div20:
			$p['op_div']($div19,$div20)))) && typeof $mul65=='number'?
			$mul65*$mul66:
			$p['op_mul']($mul65,$mul66))))==typeof ($mul68=2.0) && typeof $mul67=='number'?
			$mul67*$mul68:
			$p['op_mul']($mul67,$mul68)))==typeof ($div22=3.0) && typeof $div21=='number' && $div22 !== 0?
			$div21/$div22:
			$p['op_div']($div21,$div22)));
		return lat;
	};
	$m['transform_lat']['__name__'] = 'transform_lat';

	$m['transform_lat']['__bind_type__'] = 0;
	$m['transform_lat']['__args__'] = [null,null,['x'],['y']];
	$m['transform_long'] = function(x, y) {
		var $add44,$mul99,$mul98,$mul97,$mul96,$mul95,$mul94,$mul93,$mul92,$mul91,$mul90,$div27,$div29,$mul114,$mul113,$add41,$mul111,$mul110,$div23,$add29,$add28,$div30,$div31,$div34,$add48,$div28,$add46,$add45,$mul69,lon,$add42,$add27,$add40,$add43,$add47,$mul80,$mul81,$mul82,$mul83,$mul84,$mul85,$mul86,$mul87,$mul88,$mul89,$div32,$add38,$div33,$mul104,$mul105,$mul106,$add39,$mul100,$mul101,$mul102,$mul103,$div25,$mul108,$mul109,$div24,$mul71,$mul70,$mul73,$mul72,$mul75,$mul74,$mul77,$mul76,$add32,$mul78,$add30,$add31,$add36,$add37,$add34,$add35,$mul79,$mul107,$add33,$div26,$mul112;
		lon = $p['__op_add']($add35=$p['__op_add']($add33=$p['__op_add']($add31=$p['__op_add']($add29=$p['__op_add']($add27=300.0,$add28=x),$add30=(typeof ($mul69=2.0)==typeof ($mul70=y) && typeof $mul69=='number'?
			$mul69*$mul70:
			$p['op_mul']($mul69,$mul70))),$add32=(typeof ($mul73=(typeof ($mul71=0.1)==typeof ($mul72=x) && typeof $mul71=='number'?
			$mul71*$mul72:
			$p['op_mul']($mul71,$mul72)))==typeof ($mul74=x) && typeof $mul73=='number'?
			$mul73*$mul74:
			$p['op_mul']($mul73,$mul74))),$add34=(typeof ($mul77=(typeof ($mul75=0.1)==typeof ($mul76=x) && typeof $mul75=='number'?
			$mul75*$mul76:
			$p['op_mul']($mul75,$mul76)))==typeof ($mul78=y) && typeof $mul77=='number'?
			$mul77*$mul78:
			$p['op_mul']($mul77,$mul78))),$add36=(typeof ($mul79=0.1)==typeof ($mul80=$m['sqrt']($p['abs'](x))) && typeof $mul79=='number'?
			$mul79*$mul80:
			$p['op_mul']($mul79,$mul80)));
		lon = $p['__op_add']($add39=lon,$add40=(typeof ($div23=(typeof ($mul93=$p['__op_add']($add37=(typeof ($mul85=20.0)==typeof ($mul86=$m['sin']((typeof ($mul83=(typeof ($mul81=6.0)==typeof ($mul82=x) && typeof $mul81=='number'?
			$mul81*$mul82:
			$p['op_mul']($mul81,$mul82)))==typeof ($mul84=$m['pi']) && typeof $mul83=='number'?
			$mul83*$mul84:
			$p['op_mul']($mul83,$mul84)))) && typeof $mul85=='number'?
			$mul85*$mul86:
			$p['op_mul']($mul85,$mul86)),$add38=(typeof ($mul91=20.0)==typeof ($mul92=$m['sin']((typeof ($mul89=(typeof ($mul87=2.0)==typeof ($mul88=x) && typeof $mul87=='number'?
			$mul87*$mul88:
			$p['op_mul']($mul87,$mul88)))==typeof ($mul90=$m['pi']) && typeof $mul89=='number'?
			$mul89*$mul90:
			$p['op_mul']($mul89,$mul90)))) && typeof $mul91=='number'?
			$mul91*$mul92:
			$p['op_mul']($mul91,$mul92))))==typeof ($mul94=2.0) && typeof $mul93=='number'?
			$mul93*$mul94:
			$p['op_mul']($mul93,$mul94)))==typeof ($div24=3.0) && typeof $div23=='number' && $div24 !== 0?
			$div23/$div24:
			$p['op_div']($div23,$div24)));
		lon = $p['__op_add']($add43=lon,$add44=(typeof ($div27=(typeof ($mul103=$p['__op_add']($add41=(typeof ($mul97=20.0)==typeof ($mul98=$m['sin']((typeof ($mul95=x)==typeof ($mul96=$m['pi']) && typeof $mul95=='number'?
			$mul95*$mul96:
			$p['op_mul']($mul95,$mul96)))) && typeof $mul97=='number'?
			$mul97*$mul98:
			$p['op_mul']($mul97,$mul98)),$add42=(typeof ($mul101=40.0)==typeof ($mul102=$m['sin']((typeof ($mul99=(typeof ($div25=x)==typeof ($div26=3.0) && typeof $div25=='number' && $div26 !== 0?
			$div25/$div26:
			$p['op_div']($div25,$div26)))==typeof ($mul100=$m['pi']) && typeof $mul99=='number'?
			$mul99*$mul100:
			$p['op_mul']($mul99,$mul100)))) && typeof $mul101=='number'?
			$mul101*$mul102:
			$p['op_mul']($mul101,$mul102))))==typeof ($mul104=2.0) && typeof $mul103=='number'?
			$mul103*$mul104:
			$p['op_mul']($mul103,$mul104)))==typeof ($div28=3.0) && typeof $div27=='number' && $div28 !== 0?
			$div27/$div28:
			$p['op_div']($div27,$div28)));
		lon = $p['__op_add']($add47=lon,$add48=(typeof ($div33=(typeof ($mul113=$p['__op_add']($add45=(typeof ($mul107=150.0)==typeof ($mul108=$m['sin']((typeof ($mul105=(typeof ($div29=x)==typeof ($div30=12.0) && typeof $div29=='number' && $div30 !== 0?
			$div29/$div30:
			$p['op_div']($div29,$div30)))==typeof ($mul106=$m['pi']) && typeof $mul105=='number'?
			$mul105*$mul106:
			$p['op_mul']($mul105,$mul106)))) && typeof $mul107=='number'?
			$mul107*$mul108:
			$p['op_mul']($mul107,$mul108)),$add46=(typeof ($mul111=300.0)==typeof ($mul112=$m['sin']((typeof ($mul109=(typeof ($div31=x)==typeof ($div32=30.0) && typeof $div31=='number' && $div32 !== 0?
			$div31/$div32:
			$p['op_div']($div31,$div32)))==typeof ($mul110=$m['pi']) && typeof $mul109=='number'?
			$mul109*$mul110:
			$p['op_mul']($mul109,$mul110)))) && typeof $mul111=='number'?
			$mul111*$mul112:
			$p['op_mul']($mul111,$mul112))))==typeof ($mul114=2.0) && typeof $mul113=='number'?
			$mul113*$mul114:
			$p['op_mul']($mul113,$mul114)))==typeof ($div34=3.0) && typeof $div33=='number' && $div34 !== 0?
			$div33/$div34:
			$p['op_div']($div33,$div34)));
		return lon;
	};
	$m['transform_long']['__name__'] = 'transform_long';

	$m['transform_long']['__bind_type__'] = 0;
	$m['transform_long']['__args__'] = [null,null,['x'],['y']];
	return this;
}; /* end pogom.transform */


/* end module: pogom.transform */


/*
PYJS_DEPS: ['math.sqrt', 'math', 'math.sin', 'math.cos']
*/
