var meses = [0, 31, 59, 90, 120, 151, 181, 212, 243, 13, 44, 74];
var sumaAnio;
var fechaHoy = new Date();
document.getElementById("fecha").value = fechaHoy.toJSON().slice(0, 10);

function prueba() {
  const fecha = document.getElementById("fecha").value;
  let arrayFecha = fecha.split("-");
  let year = parseInt(arrayFecha[0]);
  let mes = parseInt(arrayFecha[1]);
  let day = parseInt(arrayFecha[2]);
  let numMes = meses[mes - 1];
  let anios = year % 52;

  switch (anios) {
    case 30:
      sumaAnio = 2;
      break;
    case 35:
      sumaAnio = 7;
      break;
    case 40:
      sumaAnio = 12;
      break;
    case 45:
      sumaAnio = 17;
      break;
    case 50:
      sumaAnio = 22;
      break;
    case 3:
      sumaAnio = 27;
      break;
    case 8:
      sumaAnio = 32;
      break;
    case 13:
      sumaAnio = 37;
      break;
    case 18:
      sumaAnio = 42;
      break;
    case 23:
      sumaAnio = 47;
      break;
    case 28:
      sumaAnio = 52;
      break;
    case 32:
      sumaAnio = 57;
      break;
    case 38:
      sumaAnio = 62;
      break;
    case 42:
      sumaAnio = 67;
      break;
    case 48:
      sumaAnio = 72;
      break;
    case 1:
      sumaAnio = 76;
      break;
    case 6:
      sumaAnio = 82;
      break;
    case 11:
      sumaAnio = 87;
      break;
    case 16:
      sumaAnio = 92;
      break;
    case 21:
      sumaAnio = 97;
      break;
    case 26:
      sumaAnio = 102;
      break;
    case 31:
      sumaAnio = 107;
      break;
    case 36:
      sumaAnio = 112;
      break;
    case 41:
      sumaAnio = 117;
      break;
    case 46:
      sumaAnio = 122;
      break;
    case 51:
      sumaAnio = 127;
      break;
    case 4:
      sumaAnio = 132;
      break;
    case 9:
      sumaAnio = 137;
      break;
    case 14:
      sumaAnio = 142;
      break;
    case 19:
      sumaAnio = 147;
      break;
    case 24:
      sumaAnio = 152;
      break;
    case 29:
      sumaAnio = 157;
      break;
    case 34:
      sumaAnio = 162;
      break;
    case 39:
      sumaAnio = 167;
      break;
    case 44:
      sumaAnio = 172;
      break;
    case 49:
      sumaAnio = 177;
      break;
    case 2:
      sumaAnio = 182;
      break;
    case 7:
      sumaAnio = 187;
      break;
    case 12:
      sumaAnio = 192;
      break;
    case 17:
      sumaAnio = 197;
      break;
    case 22:
      sumaAnio = 202;
      break;
    case 27:
      sumaAnio = 207;
      break;
    case 32:
      sumaAnio = 212;
      break;
    case 37:
      sumaAnio = 217;
      break;
    case 42:
      sumaAnio = 222;
      break;
    case 47:
      sumaAnio = 227;
      break;
    case 0:
      sumaAnio = 232;
      break;
    case 5:
      sumaAnio = 237;
      break;
    case 10:
      sumaAnio = 242;
      break;
    case 15:
      sumaAnio = 247;
      break;
    case 20:
      sumaAnio = 252;
      break;
    case 25:
      sumaAnio = 257;
      break;
  }
  let kin = day + numMes + sumaAnio;
  if (kin > 260) {
    kin = kin - 260;
  }
  document.getElementById("kin").value = kin;
}
