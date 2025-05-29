// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); //função para criar delay entre uma ação e outra


client.on('message', async msg => {
    
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|Dia|Tarde|Noite|Opa|opa|teste)/i) && msg.from.endsWith('@c.us')) { //comando com palavras chave de ativação

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'🤖 - Olá! '+ name.split(" ")[0] + '👋 Sou o Defesinha, seu assistente virtual da Defesa Civil.\nEstou aqui para te ajudar com informações, orientações e suporte no que for preciso.\nPor favor, escolha uma das opções abaixo para começarmos:\n\n1 - exemplo\n2 - Tenho uma dúvida\n3 - Estou com problema de acesso\n4 - Quero fazer uma solicitação\n5 - Outros\nDigite o número correspondente à opção desejada. 😉'); //Primeira mensagem de texto

    
        
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'exemplo');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'exemplo');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'exemplo');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🤖 - Certo! Para que eu possa te ajudar da melhor forma possível, por favor, descreva sua dúvida com o máximo de detalhes possível. 😊\nInclua, se puder:\n- O que você está tentando fazer\n- Qual é exatamente a sua dúvida ou dificuldade\n- Qualquer mensagem de erro que tenha aparecido (se for o caso)\nAssim consigo te orientar de forma mais rápida e precisa! 👍');

    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, '🤖 - Entendido! Para te ajudar com o problema de acesso, precso de algumas informações.\nPor favor, descreva com o máximo de detalhes possível:\n-O que você está tentando acessar\nQual mensagem de erro aparece (se houver)');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'exemplo');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'exemplo');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'exemplo');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp');


    }








});