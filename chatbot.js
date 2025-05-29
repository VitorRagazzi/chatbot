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
    
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|Dia|Tarde|Noite|teste)/i) && msg.from.endsWith('@c.us')) { //comando com palavras chave de ativação

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //delay de 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'🤖 - Olá! '+ name.split(" ")[0] + 'Sou o Defesinha! Sou o assistente virtual da Defesa Civil. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Exemplo\n2 - Dúvida\n3 - Falha de acesso\n4 - solicitação\n5 - teste'); //Primeira mensagem de texto

    
        
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
        await client.sendMessage(msg.from, 'teste');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'teste');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); //simulando digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'teste');
        
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