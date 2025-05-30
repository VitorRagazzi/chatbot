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
    
    if (msg.body.match(/(menu|Demetrio|Demétrio|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|Dia|Tarde|Noite|Opa|opa|teste)/i) && msg.from.endsWith('@c.us')) { //comando com palavras chave de ativação

        const chat = await msg.getChat();

        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(1000); //delay de 1 segundo
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'🤖 - Olá! '+ name.split(" ")[0] + '👋 Sou o Defesinha, seu assistente virtual da Defesa Civil. 🚨\nEstou aqui para te ajudar com informações, orientações e suporte no que for preciso.\nPor favor, escolha uma das opções abaixo para começarmos:\n\n1 - Tenho uma dúvida\n2 - Estou com problema de acesso\n3 - Quero fazer uma solicitação\n4 - Outros\n5 - Sair\nDigite o número correspondente à opção desejada. 😉'); //Primeira mensagem de texto

    
        
    }





    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); //simulando digitação
        await delay(1000); //delay de 1 segundo
        await client.sendMessage(msg.from, '🤖 - Certo! Para que eu possa te ajudar da melhor forma possível, por favor, descreva sua dúvida com o máximo de detalhes possível. 😊\nInclua, se puder:\n- O que você está tentando fazer\n- Qual é exatamente a sua dúvida ou dificuldade\n- Encaminhe um print ou foto de qualquer mensagem de erro que tenha aparecido (se for o caso)\nAssim consigo te orientar de forma mais rápida e precisa! 👍\n🤖 - Após realizar todos os procedimentos, seu atendimento já estará em análise! Basta aguardar, que o técnico responsável irá atendê-lo em breve. Obrigado pela paciência! 😊');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); //simulando digitação
        await delay(1000); //delay de 1 segundo
        await client.sendMessage(msg.from, '🤖 - Entendido! Para te ajudar com o problema de acesso, precso de algumas informações.\nPor favor, descreva com o máximo de detalhes possível:\n- O que você está tentando acessar\n- Encaminhe um print ou foto de qualquer mensagem de erro que tenha aparecido (se for o caso)\n🤖 - Após realizar todos os procedimentos, seu atendimento já estará em análise! Basta aguardar, que o técnico responsável irá atendê-lo em breve. Obrigado pela paciência! 😊');
        

    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); //simulando digitação
        await delay(1000); //delay de 1 segundo
        await client.sendMessage(msg.from, '🤖 - Entendido! Para te ajudar da melhor forma possível, preciso que você descreva a solicitação com o máximo de detalhes possível.\nPor favor informe:\n- O que você deseja solicitar\n- Informações adicionais que possam nos ajudar a entender melhor (como prazos, contexto, referências, etc.)\n🤖 - Após realizar todos os procedimentos, seu atendimento já estará em análise! Basta aguardar, que o técnico responsável irá atendê-lo em breve. Obrigado pela paciência! 😊');


    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); //simulando digitação
        await delay(1000); //delay de 1 segundo
        await client.sendMessage(msg.from, '🤖 - Tudo certo! Para continuar e te ajudar com o que você deseja fazer, preciso de mais alguns detalhes.\nPor favor, descreva de forma clara e detalhada:\n- O que exatamente você deseja fazer\n- Quais informações ou recursos você já tem disponíveis\nAssim conseguimos entender melhor e te orientar da melhor forma possível!\n🤖 - Após realizar todos os procedimentos, seu atendimento já estará em análise! Basta aguardar, que o técnico responsável irá atendê-lo em breve. Obrigado pela paciência! 😊');


    }

        if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(1000); //delay de 1 segundo
        await chat.sendStateTyping(); //simulando digitação
        await delay(1000); //delay de 1 segundo
        await client.sendMessage(msg.from, '🤖 - Você escolheu sair!\nSe você tiver outras dúvidas, requisições ou precisar de mais informações, por favor, entre em contato conosco novamente.\nEstou à disposição para ajudar!\nTenha um bom dia! 😊');


    }


//🤖 - Pronto! Basta aguardar, que o técnico responsável irá atendê-lo em breve. Obrigado pela paciência! 😊






});