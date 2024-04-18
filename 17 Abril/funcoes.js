function nome(name) {
    console.log("Meu nome é " + name);  // Parâmetro (name)
}

function soma(num1, num2) { // Parâmetro (num1, num2)
    console.log("O valor da soma é " + parseInt(num1 + num2));  // o parseInt transformou ele em um número inteiro
}

function subt(num1, num2){
    console.log("O valor da subtração é " + (num1 - num2)); 
    //console.log(`O valor da subtração é ${num1 - num2}`); // ou pode ser feito desse jeito também
}

function mult(num1, num2){
    console.log("O valor da multiplicação é " + (num1 * num2));
}

function divisao(num1, num2){
    console.log("O valor da divisão é " + (num1 / num2));
}





nome("Joao Michael."); // Chamada da função que está sendo reutilizada.
nome("Carla.");
nome("Felipe.");

soma(5, 5);
subt(10, 5);
mult(2, 5);
divisao(50, 10)