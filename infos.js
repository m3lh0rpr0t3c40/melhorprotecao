function redirectToLinkIndex() {
    // Redireciona para o link desejado
    window.location.href = "index.html";
}
function redirectToLinkInfos() {
    // Redireciona para o link desejado
    window.location.href = "infos.html";
}
function redirectToLinkArea() {
    // Redireciona para o link desejado
    window.location.href = "area.html";
}


function mensagemUm(){
    let divMensagem = document.getElementById("texto1");
    let divFechar = document.getElementById("fecharUm");
    
    divMensagem.innerHTML = `<hr><br>Para sua comodidade escolha a forma de contato para emissão da segunda via do seu boleto que melhor lhe convém:
    <a href="infos.html">Área do associado</a>
    <a href="https://wa.me/558130949494" class="" target="_blank">por whatsapp</a> (atendimento das 12h as 18h)
    Pelo telefone: (81) 3094-9494, de segunda a sexta das 08h Às 17h00. 
    Ou ainda pelo nosso aplicativo nas principais lojas de aplicativo, <a href="https://play.google.com/store/apps/details?id=com.nortemobile.melhorprotecao&hl=pt_BR&gl=US" target="_blank">Google Play</a> ou <a href="https://apps.apple.com/br/app/melhor-prote%C3%A7%C3%A3o/id1141114630" target="_blank">Apple Store</a>`;
    divMensagem.style.display = "block";
    divMensagem.style.paddingBottom = '15px'
    divMensagem.style.paddingLeft = '15px'
    divMensagem.style.paddingRight = '15px'
    divMensagem.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto = document.getElementsById("info1")
    cardTexto.style.height = '500px'; 
}

function fecharMensagemUm(){
    let divMensagem = document.getElementById("texto1");
    let divFechar = document.getElementById("fecharUm");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemDois(){
    let divMensagem2 = document.getElementById("texto2");
    let divFechar = document.getElementById("fecharDois");
    divMensagem2.innerHTML = `<hr><br>Para sua comodidade escolha a forma de contato para emissão da segunda via do seu boleto que melhor lhe convém:
    <a href="infos.html">Área do associado</a>
    <a href="https://wa.me/558130949494" class="" target="_blank">Por whatsapp</a> (atendimento das 12h as 18h)
    Pelo telefone: (81) 3094-9494, de segunda a sexta das 08h Às 17h00. 
    Ou ainda pelo nosso aplicativo nas principais lojas de aplicativo, <a href="https://play.google.com/store/apps/details?id=com.nortemobile.melhorprotecao&hl=pt_BR&gl=US" target="_blank">Google Play</a> ou <a href="https://apps.apple.com/br/app/melhor-prote%C3%A7%C3%A3o/id1141114630" target="_blank">Apple Store</a>`;
    divMensagem2.style.display = "block";
    divMensagem2.style.paddingBottom = '15px'
    divMensagem2.style.paddingLeft = '15px'
    divMensagem2.style.paddingRight = '15px'
    divMensagem2.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem2.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto2 = document.getElementByClassName("info2")
    cardTexto2.style.height = '500px' 
}

function fecharMensagemDois(){
    let divMensagem = document.getElementById("texto2");
    let divFechar = document.getElementById("fecharDois");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemTres(){
    let divMensagem3 = document.getElementById("texto3");
    let divFechar = document.getElementById("fecharTres");

    divMensagem3.innerHTML = `<hr><br>Ao aderir ao programa, o associado se compromete a contribuir com as cotas necessárias referentes às despesas apuradas para a consecução dos benefícios através do MUTUALISMO, ou seja, repartição proporcional das despesas referentes aos eventos danosos já ocorridos, através de rateio. 

    A integralidade das despesas e custos decorrentes dos benefícios concedidos aos associados do programa são apurados mensalmente e rateados entre todos os associados participantes no mês de referência.
        
    A repartição dos prejuízos será feita pelo rateio do valor correspondente, entre todos os associados participantes do Programa de Auxílio Mútuo, obedecendo ao índice de rateio do veículo, de acordo com a tabela constante no regulamento do programa.`;
    divMensagem3.style.display = "block";
    divMensagem3.style.paddingBottom = '15px'
    divMensagem3.style.paddingLeft = '15px'
    divMensagem3.style.paddingRight = '15px'
    divMensagem3.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem3.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto3 = document.getElementByClassName("info3")
    cardTexto3.style.height = '500px' 
}

function fecharMensagemTres(){
    let divMensagem = document.getElementById("texto3");
    let divFechar = document.getElementById("fecharTres");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemQuatro(){
    let divMensagem4 = document.getElementById("texto4");
    let divFechar = document.getElementById("fecharQuatro");

    divMensagem4.innerHTML = `<hr><br>Caso a inspeção do seu veículo não tenha sido realizada dentro das 48h úteis previstas para a Região Metropolitana e 72h úteis para as demais regiões, e nenhum contato feito nesse prazo nos contate pelo telefone: (81) 3094-9494.
    Ou ainda pelo <a href="https://wa.me/558130949494" class="" target="_blank">whatsapp.</a>
    Lembramos que nosso atendimento funciona de segunda a sexta-feira, das 08h às 17h00.`;
    divMensagem4.style.display = "block";
    divMensagem4.style.paddingBottom = '15px'
    divMensagem4.style.paddingLeft = '15px'
    divMensagem4.style.paddingRight = '15px'
    divMensagem4.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem4.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto4 = document.getElementByClassName("info4")
    cardTexto4.style.height = '500px' 
}

function fecharMensagemQuatro(){
    let divMensagem = document.getElementById("texto4");
    let divFechar = document.getElementById("fecharQuatro");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemCinco(){
    let divMensagem5 = document.getElementById("texto5");
    let divFechar = document.getElementById("fecharCinco");

    divMensagem5.innerHTML = `<hr><br>O atendimento de emergência, a assistência 24 horas (como o guincho, por exemplo) é realizado exclusivamente através do 0800 200 2031, 0800 941 8282, ou 0800 200 2032, qualquer dificuldade de contato com a Central de Assistência 24h deve ser comunicada a nós através do nosso <a href="https://wa.me/558130949494" class="" target="_blank">whatsapp</a>, ou ligue para (81) 3094-9494`;
    divMensagem5.style.display = "block";
    divMensagem5.style.paddingBottom = '15px'
    divMensagem5.style.paddingLeft = '15px'
    divMensagem5.style.paddingRight = '15px'
    divMensagem5.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem5.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto5 = document.getElementByClassName("info5")
    cardTexto5.style.height = '500px' 
}

function fecharMensagemCinco(){
    let divMensagem = document.getElementById("texto5");
    let divFechar = document.getElementById("fecharCinco");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemSeis(){
    let divMensagem6 = document.getElementById("texto6");
    let divFechar = document.getElementById("fecharSeis");

    divMensagem6.innerHTML = `<hr><br>A opção de escolha da oficina é do associado (livre escolha). Porém, o valor não poderá ultrapassar o valor do orçamento regulado pela Melhor, se preferir levar em uma Oficina Referenciada, poderá contar com a prestação do serviço qualificada que será monitorada pela Equipe da Melhor Proteção, acompanhando a qualidade nos reparos e pontualidade na entrega do veículo.
    <br>
    No nosso aplicativo o associado encontra a relação sempre atualizada das oficinas referenciadas.`;
    divMensagem6.style.display = "block";
    divMensagem6.style.paddingBottom = '15px'
    divMensagem6.style.paddingLeft = '15px'
    divMensagem6.style.paddingRight = '15px'
    divMensagem6.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem6.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto6 = document.getElementByClassName("info6")
    cardTexto6.style.height = '500px' 
}

function fecharMensagemSeis(){
    let divMensagem = document.getElementById("texto6");
    let divFechar = document.getElementById("fecharSeis");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}
function mensagemSete(){
    let divMensagem7 = document.getElementById("texto7");
    let divFechar = document.getElementById("fecharSete");

    divMensagem7.innerHTML = `<hr><br>O associado que desejar se desfiliar do Programa de Auxílio Mútuo deverá encaminhar um requerimento escrito à associação, devendo o associado estar adimplente com todas as suas obrigações relativas ao Programa de Auxílio Mútuo. O requerimento deverá conter as seguintes informações:
    <br>
    • Nome completo<br>
    • CPF<br>
    • Modelo do veículo<br>
    • Placa<br>
    • Motivo do desfiliamento.`;
    divMensagem7.style.display = "block";
    divMensagem7.style.paddingBottom = '15px'
    divMensagem7.style.paddingLeft = '15px'
    divMensagem7.style.paddingRight = '15px'
    divMensagem7.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem7.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto7 = document.getElementByClassName("info7")
    cardTexto7.style.height = '500px' 
}

function fecharMensagemSete(){
    let divMensagem = document.getElementById("texto7");
    let divFechar = document.getElementById("fecharSete");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemOito(){
    let divMensagem8 = document.getElementById("texto8");
    let divFechar = document.getElementById("fecharOito");

    divMensagem8.innerHTML = `<hr><br>A inspeção inicial obrigatória poderá ser dispensada caso o veículo seja 0km, desde que certificado pela concessionária que o veículo encontra-se em seu pátio no momento da adesão, e condicionado à Nota Fiscal com data de emissão não superior a 30 dias da data da adesão.`;
    divMensagem8.style.display = "block";
    divMensagem8.style.paddingBottom = '15px'
    divMensagem8.style.paddingLeft = '15px'
    divMensagem8.style.paddingRight = '15px'
    divMensagem8.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem8.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto8 = document.getElementByClassName("info8")
    cardTexto8.style.height = '500px' 
}

function fecharMensagemOito(){
    let divMensagem = document.getElementById("texto8");
    let divFechar = document.getElementById("fecharOito");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemNove(){
    let divMensagem9 = document.getElementById("texto9");
    let divFechar = document.getElementById("fecharNove");

    divMensagem9.innerHTML = `<hr><br>Sim, qualquer pessoa pode se associar e usufruir dos benefícios oferecidos pela MELHOR PROTEÇÃO, desde que esta seja indicada por outro associado.`;
    divMensagem9.style.display = "block";
    divMensagem9.style.paddingBottom = '15px'
    divMensagem9.style.paddingLeft = '15px'
    divMensagem9.style.paddingRight = '15px'
    divMensagem9.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem9.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto9 = document.getElementByClassName("info9")
    cardTexto9.style.height = '500px' 
}

function fecharMensagemNove(){
    let divMensagem = document.getElementById("texto9");
    let divFechar = document.getElementById("fecharNove");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemDez(){
    let divMensagem10 = document.getElementById("texto10");
    let divFechar = document.getElementById("fecharDez");

    divMensagem10.innerHTML = `<hr><br>Sua proteção independe do condutor, contudo, ele precisa ser habilitado. Logo, qualquer pessoa habilitada pode dirigir seu carro que terá proteção.`;
    divMensagem10.style.display = "block";
    divMensagem10.style.paddingBottom = '15px'
    divMensagem10.style.paddingLeft = '15px'
    divMensagem10.style.paddingRight = '15px'
    divMensagem10.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem10.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto10 = document.getElementByClassName("info10")
    cardTexto10.style.height = '500px' 
}

function fecharMensagemDez(){
    let divMensagem = document.getElementById("texto10");
    let divFechar = document.getElementById("fecharDez");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemOnze(){
    let divMensagem11 = document.getElementById("texto11");
    let divFechar = document.getElementById("fecharOnze");

    divMensagem11.innerHTML = `<hr><br>A transferência se dará da seguinte forma:
    Será cancelado o contrato anterior e feito um novo contrato em nome do novo associado.`;
    divMensagem11.style.display = "block";
    divMensagem11.style.paddingBottom = '15px'
    divMensagem11.style.paddingLeft = '15px'
    divMensagem11.style.paddingRight = '15px'
    divMensagem11.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem11.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto11 = document.getElementByClassName("info11")
    cardTexto11.style.height = '500px' 
}

function fecharMensagemOnze(){
    let divMensagem = document.getElementById("texto11");
    let divFechar = document.getElementById("fecharOnze");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemDoze(){
    let divMensagem12 = document.getElementById("texto12");
    let divFechar = document.getElementById("fecharDoze");

    divMensagem12.innerHTML = `<hr><br>A substituição será realizada sem nenhuma cobrança de taxas caso o processo de substituição seja feito na sede da MELHOR, mas caso solicite que um consultor externo vá até você, poderá ser cobrada uma taxa de deslocamento de até R$ 100,00 (cem reais), a cargo do consultor.
    Só é possível realizar a substituição do veículo se o boleto mensal estiver quitado. Será feito um novo termo de filiação ao PAM para cadastro do novo veículo na nossa base de dados. A proteção do seu novo veículo estará vigente na 00h do dia da realização da vistoria.
    Poderá solicitar a substituição do veículo <a href="https://wa.me/558130949494" class="" target="_blank">pelo whatsapp</a> ou ligue para 81 3094.9494, retornaremos seu contato com todas as informações necessária à realização do procedimento.`;
    divMensagem12.style.display = "block";
    divMensagem12.style.paddingBottom = '15px'
    divMensagem12.style.paddingLeft = '15px'
    divMensagem12.style.paddingRight = '15px'
    divMensagem12.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem12.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto12 = document.getElementByClassName("info12")
    cardTexto12.style.height = '500px' 
}

function fecharMensagemDoze(){
    let divMensagem = document.getElementById("texto12");
    let divFechar = document.getElementById("fecharDoze");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemTreze(){
    let divMensagem13 = document.getElementById("texto13");
    let divFechar = document.getElementById("fecharTreze");

    divMensagem13.innerHTML = `<hr><br>O prazo de recusa de veículo é de 30 dias, caso já tenha recebido a recusa do seu veículo, será informado a forma e o prazo do seu reembolso. Dúvidas entre em contato pelo telefone 81 3094.9494 ou <a href="https://wa.me/558130949494" class="" target="_blank">pelo whatsapp</a>.`;
    divMensagem13.style.display = "block";
    divMensagem13.style.paddingBottom = '15px'
    divMensagem13.style.paddingLeft = '15px'
    divMensagem13.style.paddingRight = '15px'
    divMensagem13.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem13.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto13 = document.getElementByClassName("info13")
    cardTexto13.style.height = '500px' 
}

function fecharMensagemTreze(){
    let divMensagem = document.getElementById("texto13");
    let divFechar = document.getElementById("fecharTreze");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemQuatorze(){
    let divMensagem14 = document.getElementById("texto14");
    let divFechar = document.getElementById("fecharQuatorze");

    divMensagem14.innerHTML = `<hr><br>A MELHOR é uma ASSOCIAÇÃO DE SOCORRO MÚTUO, com base legal na Constituição Federal em seu artigo 5º, inc. XVII, XVIII, XIX, XX, XXI, Código Civil, em seu artigo 53 e seguintes, artigo 143, § 1º Decreto Lei nº 73/66 e Decreto Lei 2.063/40.`;
    divMensagem14.style.display = "block";
    divMensagem14.style.paddingBottom = '15px'
    divMensagem14.style.paddingLeft = '15px'
    divMensagem14.style.paddingRight = '15px'
    divMensagem14.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem14.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto14 = document.getElementByClassName("info14")
    cardTexto14.style.height = '500px' 
}

function fecharMensagemQuatorze(){
    let divMensagem = document.getElementById("texto14");
    let divFechar = document.getElementById("fecharQuatorze");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemQuinze(){
    let divMensagem15 = document.getElementById("texto15");
    let divFechar = document.getElementById("fecharQuinze");

    divMensagem15.innerHTML = `<hr><br>A MELHOR não é um seguro empresarial, não contém uma apólice e não pratica o contrato de seguro. Trata de uma associação civil que possibilita o rateio de despesas já ocorridas (certas e passadas) exclusivamente entre os associados.`;
    divMensagem15.style.display = "block";
    divMensagem15.style.paddingBottom = '15px'
    divMensagem15.style.paddingLeft = '15px'
    divMensagem15.style.paddingRight = '15px'
    divMensagem15.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem15.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto15 = document.getElementByClassName("info15")
    cardTexto15.style.height = '500px' 
}

function fecharMensagemQuinze(){
    let divMensagem = document.getElementById("texto15");
    let divFechar = document.getElementById("fecharQuinze");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemDezesseis(){
    let divMensagem16 = document.getElementById("texto16");
    let divFechar = document.getElementById("fecharDezesseis");

    divMensagem16.innerHTML = `<hr><br>Não. A filiação é apenas mediante a indicação de quem já é membro da MELHOR, além da aprovação do corpo diretivo. Como é um grupo fechado, a indicação é requisito obrigatório para a filiação ao grupo de rateio.`;
    divMensagem16.style.display = "block";
    divMensagem16.style.paddingBottom = '15px'
    divMensagem16.style.paddingLeft = '15px'
    divMensagem16.style.paddingRight = '15px'
    divMensagem16.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem16.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto16 = document.getElementByClassName("info16")
    cardTexto16.style.height = '500px' 
}

function fecharMensagemDezesseis(){
    let divMensagem = document.getElementById("texto16");
    let divFechar = document.getElementById("fecharDezesseis");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

function mensagemDezessete(){
    let divMensagem17 = document.getElementById("texto17");
    let divFechar = document.getElementById("fecharDezessete");

    divMensagem17.innerHTML = `<hr><br>Ao filiar a associação, o associado se compromete a contribuir com as cotas necessárias referentes às despesas apuradas, a repartição proporcional das despesas já ocorridas, através de rateio por meio de cotas. 
    A integralidade das despesas e custos decorrentes dos benefícios concedidos aos associados do programa são apurados mensalmente e rateados entre todos os associados participantes no mês de referência, inclusive com aquele que teve a despesa.
    A repartição das despesas será feita pelo rateio do valor correspondente, entre todos os associados participantes, obedecendo a cota de rateio.`;
    divMensagem17.style.display = "block";
    divMensagem17.style.paddingBottom = '15px'
    divMensagem17.style.paddingLeft = '15px'
    divMensagem17.style.paddingRight = '15px'
    divMensagem17.classList.add("show-line"); // Adiciona a classe "show-line" ao elemento
    divMensagem17.scrollIntoView({ behavior: 'smooth' });
    divFechar.innerHTML = "FECHAR";
    divFechar.style.display = "block";
    divFechar.style.paddingBottom = '15px';

    let cardTexto17 = document.getElementByClassName("info17")
    cardTexto17.style.height = '500px' 
}

function fecharMensagemDezessete(){
    let divMensagem = document.getElementById("texto17");
    let divFechar = document.getElementById("fecharDezessete");
    divMensagem.style.display = "none";
    divFechar.style.display = "none";
}

//abre menu dropdown
document.addEventListener("DOMContentLoaded", function(){
    const menuIcon = document.querySelector(".hamburger-icon");
    const menuDropdown = document.querySelector(".menu-dropdown");
  
    menuIcon.addEventListener("click", function(){
      menuDropdown.classList.toggle("show");
    });
  });
  
  //fecha menu dropdown
  const menuItems = menuDropdown.querySelector("a");
  menuItems.forEach(function(item){
    item.addEventListener("click", function(){
      menuDropdown.classList.remove("show");
    });
  });

  const imagemResponsive = document.getElementById("banner3");

  // função responsável por atualizar a imagem
function atualizarImagem (){
  if(window.innerWidth >= 768){
    imagemResponsive.src = "banner-infos.png";
  } else{
    imagemResponsive.src = "infomobile.png";
  }
}

atualizarImagem();

window.addEventListener("resize", atualizarImagem);