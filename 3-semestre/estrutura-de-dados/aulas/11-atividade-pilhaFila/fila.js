function intercalarFilas(fila1, fila2) {
    let filaIntercalada = [];
  
    while (fila1.length > 0 || fila2.length > 0) {
      if (fila1.length > 0) {
        filaIntercalada.push(fila1.shift());
      }
      if (fila2.length > 0) {
        filaIntercalada.push(fila2.shift());
      }
    }
  
    return filaIntercalada;
  }
  
  // Exemplo de uso:
  let fila1 = [1, 3, 5];
  let fila2 = [2, 4, 6];
  let filaIntercalada = intercalarFilas(fila1, fila2);
  console.log("Fila Intercalada:", filaIntercalada);
  

