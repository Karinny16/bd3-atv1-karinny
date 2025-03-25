/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('BD3-NoSQL-AtlasMongoDB');

///////////////////////////////////////////////////////////////////////////////primeiro exercicio///////////////////////////////////////////////////////////////////////////////

db.getCollection("bd3-nosql-atv1").insertOne({
   "cod_turma": 1,
    "cod_aluno": 1,
    "nome": "João",
    "cpf": "123.456.789-00",  
    "rg": "45.345.678-9",     
    "telefone_aluno": "987654321",  
    "telefone_responsavel": "123456789",  
    "email": "joao1@gmail.com",  
    "data_nascimento": "2000-01-01" 
});

db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 2,
    "cod_aluno": 2,
    "nome": "Apollo",
    "cpf": "234.567.890-12",  
    "rg": "56.456.789-1",     
    "telefone_aluno": "987654322",  
    "telefone_responsavel": "123456780",  
    "email": "Apollo2@gmail.com",  
    "data_nascimento": "2029-08-02" 
 });

 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 3,
    "cod_aluno": 3,
    "nome": "Carlos",
    "cpf": "345.678.901-23",  
    "rg": "67.567.890-2",     
    "telefone_aluno": "987654323",  
    "telefone_responsavel": "123456781",  
    "email": "carlosmedeiros3@gmail.com",  
    "data_nascimento": "1984-03-21" 
 });
 
 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 4,
    "cod_aluno": 4,
    "nome": "Ana",
    "cpf": "456.789.012-34",  
    "rg": "78.678.901-3",     
    "telefone_aluno": "987654324",  
    "telefone_responsavel": "123456782",  
    "email": "anaclara4@gmail.com",  
    "data_nascimento": "2007-05-04" 
 });
 
 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 5,
    "cod_aluno": 5,
    "nome": "Felipe",
    "cpf": "567.890.123-45",  
    "rg": "89.789.012-4",     
    "telefone_aluno": "987654325",  
    "telefone_responsavel": "123456783",  
    "email": "felipe5@gmail.com",  
    "data_nascimento": "2002-05-08" 
 });
 
 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 6,
    "cod_aluno": 6,
    "nome": "Juliana",
    "cpf": "678.901.234-56",  
    "rg": "90.890.123-5",     
    "telefone_aluno": "987654326",  
    "telefone_responsavel": "123456784",  
    "email": "juliana6@gmail.com",  
    "data_nascimento": "2003-07-09" 
 });
 
 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 7,
    "cod_aluno": 7,
    "nome": "Lucas",
    "cpf": "789.012.345-67",  
    "rg": "12.901.234-6",     
    "telefone_aluno": "987654327",  
    "telefone_responsavel": "123456785",  
    "email": "lucas7@gmail.com",  
    "data_nascimento": "2004-06-02" 
 });
 
 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 8,
    "cod_aluno": 8,
    "nome": "Edineide",
    "cpf": "890.123.456-78",  
    "rg": "23.012.345-7",     
    "telefone_aluno": "987654328",  
    "telefone_responsavel": "123456786",  
    "email": "Di8@gmail.com",  
    "data_nascimento": "1975-08-05" 
 });
 
 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 9,
    "cod_aluno": 9,
    "nome": "Kamilly",
    "cpf": "901.234.567-89",  
    "rg": "34.123.456-8",     
    "telefone_aluno": "987654329",  
    "telefone_responsavel": "123456787",  
    "email": "Vitoria9@gmail.com",  
    "data_nascimento": "2015-09-07" 
 });
 
 db.getCollection("bd3-nosql-atv1").insertOne({
    "cod_turma": 10,
    "cod_aluno": 10,
    "nome": "Karinny",
    "cpf": "012.345.678-90",  
    "rg": "45.234.567-9",     
    "telefone_aluno": "987654330",  
    "telefone_responsavel": "123456788",  
    "email": "Kah10@gmail.com",  
    "data_nascimento": "2008-10-12" 
    
 });

/////////////////////////////////////////////////////////////////////////////segundo exercicio///////////////////////////////////////////////////////////////////////////////
// db.getCollection("bd3-nosql-atv1").find();


///////////////////////////////////////////////////////////////////////////////terceiro exercicio///////////////////////////////////////////////////////////////////////////////
// db.getCollection("bd3-nosql-atv1").findOne(
//     { "cpf": "012.345.678-90" }       
// );

///////////////////////////////////////////////////////////////////////////////quarto exercicio///////////////////////////////////////////////////////////////////////////////
// db.getCollection("bd3-nosql-atv1").findOne(
//     { "cpf": "012.345.678-90" },   { "cod_aluno": 0 }        
// );
