var t, timer_is_on = 0, am="a.m.", pm="p.m.";

function timedCount() {
    var ahora = new Date();
    preHora = ahora.getHours();
    if (preHora > 12) {
        hora = preHora - 12;
	} else {
		hora = preHora;
	}
	preMinutos = ahora.getMinutes();
	if (preMinutos < 10) {
		minutos = "0" + preMinutos;
	} else {
		minutos = preMinutos;
	}
	ya = hora + ":" + minutos;
	document.getElementById('hora').innerHTML = ya;
	if (preHora > 12) {
		document.getElementById('hora2').innerHTML = pm;
	} else {
		document.getElementById('hora2').innerHTML = am;
	}
	t = setTimeout("timedCount()", 1000);
}

function doTimer() {
	if (!timer_is_on) {
		timer_is_on = 1;
		timedCount();
	}
}