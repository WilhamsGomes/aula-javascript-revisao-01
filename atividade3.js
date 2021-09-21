/* 3) Os alunos da turma de Front-end estão estudando em horários diferentes:

a) Se o horário for o matutino, mostrar a mensagem "Bom Dia!".
b) Se o horário for vespertino, mostrar "Boa Tarde!".
c) Se o horário for noturno, mostrar "Boa Noite!".
d) Se não houver informação, mostrar  "Valor Inválido!".

*/

var horario = "Manhã"

if (horario == "Manhã"){
    console.log("Bom dia!")
} else if (horario == "Tarde") {
    console.log("Boa tarde!")
} else if (horario == "Noite"){
    console.log("Boa noite!")
} else {
    console.log("Valor inválido")
}