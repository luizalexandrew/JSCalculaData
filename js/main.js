window.onload = function () {
	document.getElementById("btbAddDia").onclick = function(){
		var vdataFinal = new Date(document.getElementById("dataFinal").value);
		var vdataInicio = new Date();
		var DataContagem = {
			id: vdataInicio.getTime(), // ID == milisegundos desde Jan 1, 1970
			diaInicio: vdataInicio.getDate(),
			mesInicio: vdataInicio.getMonth(),
			anoInicio: vdataInicio.getFullYear(),
			diaFinal: vdataFinal.getDate(), 
			mesFinal: vdataFinal.getMonth(), 
			anoFinal: vdataFinal.getFullYear(),
			getDI : function() {
				//Obtem um objeto com o dia Dia Inicial
				var DiaInicio={
					dia: this.diaInicio,
					mes: this.mesInicio,
					ano: this.anoInicio
				}
				return DiaInicio;
			},
			getDF : function() {
				//Obtem um objeto com o dia Dia Final
				var DiaFinal={
					dia: this.diaFinal,
					mes: this.mesFinal,
					ano: this.anoFinal
				}
				return DiaFinal;
			}
		};		
		console.log(calcularDiferencaDatas(DataContagem.getDF(), DataContagem.getDI()));
	}
}

function getDiaAtual() {
	var dia = new Date();
	var diaAtual = {
		dia: dia.getDate(), 
		mes: dia.getMonth(), 
		ano: dia.getFullYear()
	};
	return DiaAtual;
}

function calcularDiferencaDatas (DiaFinalc, DiaAtualc) {
	var DiaFinal = new Date(DiaFinalc.ano, DiaFinalc.mes, DiaFinalc.dia);
	var DiaAtual = new Date(DiaAtualc.ano, DiaAtualc.mes, DiaAtualc.dia);
	return Math.floor ((DiaFinal - DiaAtual) / (1000 * 60 * 60 * 24))
}


