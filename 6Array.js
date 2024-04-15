var meu_array = [1,2,3,"texto",true,false,[1,2,3]];

console.log(meu_array[6][2])

meu_array.push("Novo valor")

console.log(meu_array)

var dado_removido = meu_array.pop()
console.log(meu_array)
console.log(dado_removido)

var posicao = meu_array.indexOf("texto")
console.log(posicao)

console.log(meu_array.sort((a,b) => a-b))