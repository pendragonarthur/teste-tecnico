function calculate(number) {
  let result = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
      console.log("Valores inteiros divisíveis por 3 ou 5: " + i);
    }
  }
  return result;
}

// Para testar, troque o 10 pelo número desejado!
console.log(calculate(10));
