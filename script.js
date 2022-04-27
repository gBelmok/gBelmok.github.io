var new_html = `
<h2>INFORMAÇÕES GERAIS DA SOLICITAÇÃO</h2>
<p>Informações iniciais requeridas para correto direcionamento da solicitação.</p>
<div class="item">
<label for="name">Nome do Solicitante<span>*</span></label>
<input id="name" type="text" name="name" placeholder="Nome do Solicitante">
</div>
<div class="item">
<label for="bdate">Date de Entrega<span>*</span></label>
<input id="bdate" type="date" name="bdate">
<i class="fas fa-calendar-alt"></i>
</div>
<div class="item">
<div class="name-item">
<div>
  <label for="email">E-mail<span>*</span></label>
  <input id="email" type="email" name="email">
</div>
<div>
  <label for="number">Telefone</label>
  <input id="number" type="tel" name="number">
</div>
</div>
</div>
`;
var x =`

<h2>TIPO DE INSTALAÇÃO</h2>
<P>A que se destina o material a ser solicitado?</P>
<div class="check">
    <input onclick="selecionarFormNI()" type="checkbox" id="ni" name="ni" value="ni" checked>
    <label for="ni"> Nova Implementação</label><br>
    <input  onclick="selecionarFormMAN()" type="checkbox" id="man" name="man" value="man">
    <label for="man">Manuntenção</label><br>
    <input onclick="selecionarFormREP()" type="checkbox" id="rep" name="rep" value="rep">
    <label for="rep">Reposição</label><br>
</div>

<div class="item">

<h2>NOVA IMPLANTAÇÃO</h2>
                
<p>O material solicitado destina-se ao atendimento de uma nova implantação.

    Após o processamento da solicitação, o setor MPL entrará em contato para informar sobre a preparação do 
    material solicitado e sobre a disponibilidade para a retirada, bem como para esclarecer eventuais dúvidas.</p>

<div class="name-item">
  <div>
    <label for="cliente">Cliente<span>*</span></label>
    <input id="cliente" type="text" name="cliente" />
  </div>
  <div>
    <label for="unidade">Unidade</label>
    <input id="unidade" type="text" name="unidade" />
  </div>
</div>
</div>

<div class="item">
<div class="name-item">
  <div>
    <label for="uf">UF<span>*</span></label>
    <input id="uf" type="text" name="uf" />
  </div>
  <div>
    <label for="cidade">Cidade</label>
    <input id="cidade" type="text" name="cidade" />
  </div>
  <div>
    <label for="cep">CEP</label>
    <input id="cep" type="text" name="cep" />
  </div>
  <div>
    <label for="endereco">Endereço</label>
    <input id="endereco" type="text" name="endereco" />
  </div>
</div>
</div>
`;

var tipo = `

<h2>TIPO DE DESTINATÁRIO</h2>
<P>Especifique o tipo de recebedor.</P>

<div class="check">
    <input onclick="selecionarFormPJ()" type="checkbox" id="pj" name="pj" value="pj">
    <label for="pj"> Parceiro DIEL pessoa jurídica</label><br>

    <input onclick="selecionarFormPF()" type="checkbox" id="pf" name="pf" value="pf">
    <label for="pf">Parceiro DIEL pessoa física</label><br>

    <input onclick="selecionarFormCL()" type="checkbox" id="cl" name="cl" value="cl">
    <label for="cl">Próprio cliente (não-recomendado)</label><br>
</div>
`;

var inst = `
<h2>TIPO DE INSTALAÇÃO</h2>
<p>A que se destina o material a ser solicitado?</p>
<div class="check">
    <input onclick="selecionarFormNI()" type="checkbox" id="ni" name="ni" value="ni">
    <label for="ni"> Nova Implementação</label><br>
    <input onclick="selecionarFormMAN()" type="checkbox" id="man" name="man" value="man">
    <label for="man">Manuntenção</label><br>
    <input onclick="selecionarFormREP()" type="checkbox" id="rep" name="rep" value="rep">
    <label for="rep">Reposição</label><br>
</div>
`;

var man = `
<div class="item">

<H2>TIPO DE INSTALAÇÃO</H2>
<P>A que se destina o material a ser solicitado?</P>
<div class="check">
    <input onclick="selecionarFormNI()" type="checkbox" id="ni" name="ni" value="ni">
    <label for="ni"> Nova Implementação</label><br>
    <input  onclick="selecionarFormMAN()" type="checkbox" id="man" name="man" value="man" checked>
    <label for="man">Manuntenção</label><br>
    <input onclick="selecionarFormREP()" type="checkbox" id="rep" name="rep" value="rep">
    <label for="rep">Reposição</label><br>
</div>

<h2>MANUNTENÇÃO</h2>

<p>O material solicitado destina-se ao atendimento de um chamado de manutenção.

    Após o processamento da solicitação, o setor MPL entrará em contato para informar sobre 
    a preparação do material solicitado e sobre a disponibilidade para entrega, bem como para
     esclarecer eventuais dúvidas.</p>

<div class="check">

    <h3>SUGESTÃO DE URGÊNCIA</h3>
    
    <p>A sugestão de urgência é uma orientação ao setor MPL sobre a importância do atendimento 
        à solicitação (em relação à conclusão da atividade de manutenção). 
        A escolha da categoria da urgência deve ser feita com bom senso pelo 
        supervisor de campo solicitante (sempre após análise da solicitação 
        prévia feita pelos técnicos em campo), de modo a não atrapalhar o fluxo de trabalho do 
        setor e garantir o atendimento de todas as solicitações. Apesar da sugestão de urgência, 
        o atendimento estará sujeito ao fluxo de trabalho já existente do setor MPL.</p>

    <input type="checkbox" id="baixa" name="baixa" value="baixa">
    <label for="baixa">Baixa (o atendimento da solicitação não é crítico, podendo ocorrer em até 24 h) </label><br>
    <input type="checkbox" id="media" name="media" value="media">
    <label for="media">Média (o atendimento da solicitação não é crítico, podendo ocorrer no próximo período útil)</label><br>
    <input type="checkbox" id="alta" name="alta" value="alta">
    <label for="alta">Alta (o atendimento é crucial à finalização de atividade, devendo ocorrer ainda no mesmo período)</label><br>
</div>
<div class="name-item">
  <div>
    <label for="cliente">Cliente<span>*</span></label>
    <input id="cliente" type="text" name="cliente" />
  </div>
  <div>
    <label for="unidade">Unidade</label>
    <input id="unidade" type="text" name="unidade" />
  </div>
</div>
</div>

<div class="item">
<div class="name-item">
  <div>
    <label for="uf">UF<span>*</span></label>
    <input id="uf" type="text" name="uf" />
  </div>
  <div>
    <label for="cidade">Cidade</label>
    <input id="cidade" type="text" name="cidade" />
  </div>
  <div>
    <label for="cep">CEP</label>
    <input id="cep" type="text" name="cep" />
  </div>
  <div>
    <label for="endereco">Endereço</label>
    <input id="endereco" type="text" name="endereco" />
  </div>
</div>
</div>
`;

var rep = `

<h2>TIPO DE INSTALAÇÃO</h2>
<P>A que se destina o material a ser solicitado?</P>
<div class="check">
    <input onclick="selecionarFormNI()" type="checkbox" id="ni" name="ni" value="ni">
    <label for="ni"> Nova Implementação</label><br>
    <input  onclick="selecionarFormMAN()" type="checkbox" id="man" name="man" value="man">
    <label for="man">Manuntenção</label><br>
    <input onclick="selecionarFormREP()" type="checkbox" id="rep" name="rep" value="rep"  checked>
    <label for="rep">Reposição</label><br>
</div>

<h2>REPOSIÇÃO PARA COLABORADOR</h2>
<p>O material destina-se à reposição do kit de insumos para um colaborador credenciado.

    Após o processamento da solicitação, o setor MPL entrará em contato para informar sobre a preparação do 
    material solicitado e sobre a disponibilidade para a retirada, bem como para esclarecer eventuais dúvidas.</p>
<div class="item">
    <div class="name-item">
      <div>
        <label for="nome_rep">Nome do Colaborador<span>*</span></label>
        <input id="nome_rep" type="text" name="nome_rep" />
      </div>
      <div>
        <label for="cont_rep">Contato do Colaborador</label>
        <input id="cont_rep" type="text" name="cont_rep" />
      </div>
    <div>
</div>

`;

var pj = `
<h2>TIPO DE DESTINATÁRIO</h2>
<P>Especifique o tipo de recebedor.</P>
<div class="check">
    <input onclick="selecionarFormPJ()" type="checkbox" id="pj" name="pj" value="pj" checked>
    <label for="pj"> Parceiro DIEL pessoa jurídica</label><br>

    <input onclick="selecionarFormPF()" type="checkbox" id="pf" name="pf" value="pf">
    <label for="pf">Parceiro DIEL pessoa física</label><br>

    <input onclick="selecionarFormCL()" type="checkbox" id="cl" name="cl" value="cl">
    <label for="cl">Próprio cliente (não-recomendado)</label><br>
</div>

<h2>DESTINATÁRIO PESSOA JURÍDICA</h2>
<p>O material solicitado será recebido por um parceiro pessoa jurídica.</p>
<div class="item">
<div class="name-item">
  <div>
    <label for="cnpj_pj">CNPJ<span>*</span></label>
    <input id="cnpj_pj" type="text" name="cnpj_pj" />
  </div>
  <div>
    <label for="razao_pj">Razão Social</label>
    <input id="razao_pj" type="text" name="razao_pj" />
  </div>
</div>
</div>
<div class="item">
<label for="cont_dest_pj">Contato do destinatário<span>*</span></label>
<input id="cont_dest_pj" type="text" name="cont_dest_pj"/>
</div>
`;

var pf = `
<h2>TIPO DE DESTINATÁRIO</h2>
<P>Especifique o tipo de recebedor.</P>
<div class="check">
    <input onclick="selecionarFormPJ()" type="checkbox" id="pj" name="pj" value="pj">
    <label for="pj"> Parceiro DIEL pessoa jurídica</label><br>

    <input onclick="selecionarFormPF()" type="checkbox" id="pf" name="pf" value="pf" checked>
    <label for="pf">Parceiro DIEL pessoa física</label><br>

    <input onclick="selecionarFormCL()" type="checkbox" id="cl" name="cl" value="cl">
    <label for="cl">Próprio cliente (não-recomendado)</label><br>
</div>

<h2>DESTINATÁRIO PESSOA FÍSICA</h2>
<p>O material solicitado será recebido por um parceiro pessoa física.</p>
<div class="item">
<div class="name-item">
  <div>
    <label for="nome_dest_pf">Nome do destinatário<span>*</span></label>
    <input id="nome_dest_pf" type="text" name="nome_dest_pf" />
  </div>
  <div>
    <label for="cont_dest_pf">Contato do destinatário</label>
    <input id="cont_dest_pf" type="text" name="cont_dest_pf" />
  </div>
</div>
</div>
`;
var cl = `
<h2>TIPO DE DESTINATÁRIO</h2>
<P>Especifique o tipo de recebedor.</P>
<div class="check">
    <input onclick="selecionarFormPJ()" type="checkbox" id="pj" name="pj" value="pj">
    <label for="pj"> Parceiro DIEL pessoa jurídica</label><br>

    <input onclick="selecionarFormPF()" type="checkbox" id="pf" name="pf" value="pf">
    <label for="pf">Parceiro DIEL pessoa física</label><br>

    <input onclick="selecionarFormCL()" type="checkbox" id="cl" name="cl" value="cl" checked>
    <label for="cl">Próprio cliente (não-recomendado)</label><br>
</div>

<h2>DESTINATÁRIO PRÓPRIO CLIENTE</h2>
<p>O material solicitado será recebido pelo próprio cliente.</p>
<div class="item">
<div class="name-item">
  <div>
    <label for="cliente">Cliente<span>*</span></label>
    <input id="cliente" type="text" name="cliente" />
  </div>
  <div>
    <label for="unidade">Unidade</label>
    <input id="unidade" type="text" name="unidade" />
  </div>
</div>
</div>
<div class="item">
<label for="cont_dest_clt">Contato do destinatário<span>*</span></label>
<input id="cont_dest_clt" type="text" name="cont_dest_clt"/>
</div>
`;

let aux1 = x + tipo;
let aux2 = man + tipo;
let aux3 = rep;

function carregar(){
    let html = document.getElementById("aux")
    html.innerHTML += inst;
}


function selecionarFormNI(){
    let resto = document.getElementById("resto");

    let html = document.getElementById("aux");
    html.innerHTML = new_html;
    resto.innerHTML = aux1;

}

function selecionarFormMAN(){
    let resto = document.getElementById("resto");

    let html = document.getElementById("aux");
    html.innerHTML = new_html;

    resto.innerHTML = aux2;

}

function selecionarFormREP(){
    let resto = document.getElementById("resto");
    
    let html = document.getElementById("aux");
    html.innerHTML = new_html;
    resto.innerHTML = aux3;

}

function selecionarFormPJ(){

    let resto = document.getElementById("resto");

    if(document.getElementById("ni").checked){
        resto.innerHTML = x;
    }
    else if(document.getElementById("man").checked){
        resto.innerHTML = man;
    }
    else{
        resto.innerHTML = rep;
    }
    
    let chkbox = document.getElementById("pj");

    resto.innerHTML += pj;

}

function selecionarFormPF(){
    let resto = document.getElementById("resto");

    if(document.getElementById("ni").checked){
        resto.innerHTML = x;
    }
    else if(document.getElementById("man").checked){
        resto.innerHTML = man;
    }
    else{
        resto.innerHTML = rep;
    }
    
    let chkbox = document.getElementById("pj");

    resto.innerHTML += pf;

}

function selecionarFormCL(){
    let resto = document.getElementById("resto");

    if(document.getElementById("ni").checked){
        resto.innerHTML = x;
    }
    else if(document.getElementById("man").checked){
        resto.innerHTML = man;
    }
    else{
        resto.innerHTML = rep;
    }
    
    let chkbox = document.getElementById("pj");

    resto.innerHTML += cl;

}
