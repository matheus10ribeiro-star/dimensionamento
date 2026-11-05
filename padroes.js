/* =====================================================================
   PADRÕES DA FERRAMENTA DE DIMENSIONAMENTO – Grupo A
   ---------------------------------------------------------------------
   Este é o arquivo para editar no dia a dia. Tudo aqui é texto simples:
   - mantenha as aspas simples '...' em volta dos textos;
   - mantenha a vírgula no fim de cada linha de uma lista;
   - nas especificações, {TC}, {VP} e {CLASSE} são trocados
     automaticamente pela relação do TC, a tensão primária do TP e a
     classe de tensão (15 / 24,2 / 36,2 kV).
   Depois de salvar (Commit changes) no GitHub, a página atualiza em
   1 a 2 minutos. No celular, feche e abra de novo a página.
   ===================================================================== */

// Não altere estas duas linhas
window.__STANDALONE__ = true;
window.__FOTOS_HINT__ = 'Fotos fixas desta versão. Para trocar uma foto, substitua o arquivo na pasta "fotos" do GitHub (mesmo nome).';

/* ---------- 1. FOTOS DOS EQUIPAMENTOS ----------
   Cada item aponta para um arquivo da pasta "fotos".
   Para trocar a foto: envie um novo arquivo .jpg com o MESMO nome.
   Para usar outra foto num item: troque o nome do arquivo na linha dele. */
window.__EMBED_FOTOS__ = {
  tcbt_200:    'fotos/tc-janela-200.jpg',       // TC janela 200/5
  tcbt_400:    'fotos/tc-janela-400-800.jpg',   // TC janela 400/5
  tcbt_800:    'fotos/tc-janela-400-800.jpg',   // TC janela 800/5
  tcmt_h_15:   'fotos/tc-externo.jpg',          // TC externo · estrutura H · 15 kV
  tcmt_h_36:   'fotos/tc-externo.jpg',          // TC externo · estrutura H · 36,2 kV
  tp_h_15:     'fotos/tp-externo.jpg',          // TP externo · estrutura H · 15 kV
  tp_h_36:     'fotos/tp-externo.jpg',          // TP externo · estrutura H · 36,2 kV
  tcmt_cub_15: 'fotos/tc-interno.jpg',          // TC interno · cubículo GD · 15 kV
  tcmt_cub_36: 'fotos/tc-interno.jpg',          // TC interno · cubículo GD · 36,2 kV
  tp_cub_15:   'fotos/tp-interno.jpg',          // TP interno · cubículo GD · 15 kV
  tp_cub_36:   'fotos/tp-interno.jpg',          // TP interno · cubículo GD · 36,2 kV
  blindada:    'fotos/medicao-blindada.jpg',    // Conjunto de medição blindada
  med_irrigante: 'fotos/medidor.jpg',             // Medidor · irrigante
  med_industria: 'fotos/medidor.jpg',             // Medidor · indústria
  chave:       'fotos/chave-afericao.jpg',      // Chave de aferição
  rem_MAX:     'fotos/remota-4g-max.jpg',       // Remota RS2000 Lite DS 4G Max
  rem_CATM:    'fotos/remota-nb-catm.jpg',      // Remota RS2000 Lite NB Cat-M
  rem_ETH:     'fotos/remota-ethernet.jpg',     // Remota RS2000 Ultra Lite Ethernet
};

/* ---------- 2. PADRÕES DE DIMENSIONAMENTO ----------
   Mapa de cobertura, remotas, relações de TC, especificações de
   TC/TP/medidor/chave e listas de materiais.
   c_limite = potência máxima (kVA) para medição em BT.
   Listas de materiais: uma linha por item, no formato
   'Descrição ; quantidade ; unidade', */
const COB_ARTIFACT='cobertura.html';
const REMS={MAX:{n:'RS2000 Lite DS 4G Max',cod:'100.0177.00',spec:'Módulo de comunicação celular LTE Cat1 + 3G + 2G, duplo SIM, antena externa (TNC), RS232 com o medidor'},
  CATM:{n:'RS2000 Lite NB Cat-M',cod:'100.0171.00',spec:'Módulo de comunicação IoT LTE Cat-M1 / NB-IoT com fallback 2G, duplo SIM, antena externa (TNC), RS232 com o medidor'},
  ETH:{n:'RS2000 Ultra Lite Ethernet',cod:'100.0039.00',spec:'Módulo de comunicação Ethernet (RJ45) ligado a terminal de satélite (1ª opção Telespazio, 2ª Starlink) ou rede local; fonte externa 90–240 VCA'}};
const DEFAULTS={
  c_limite:'300', c_fator:'1.0',
  c_tcbt:'200, 400, 800',
  c_tcmt:'5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200, 300',
  c_spec_tcbt:'TC tipo janela (passante), 0,6 kV, {TC}/5 A, classe 0,3 C12,5, uso interno/externo',
  c_spec_tcmt_h:'TC de MT para estrutura H, uso externo (isolamento para intempérie), {CLASSE} kV, {TC}/5 A, classe 0,3 C12,5',
  c_spec_tp_h:'TP de MT para estrutura H, uso externo (isolamento para intempérie), {CLASSE} kV, {VP}/115 V, classe 0,3 P75, grupo de ligação 2 (fase-terra)',
  c_spec_tcmt_cub:'TC de MT para cubículo de medição (GD), uso interno, {CLASSE} kV, {TC}/5 A, classe 0,3 C12,5',
  c_spec_tp_cub:'TP de MT para cubículo de medição (GD), uso interno, {CLASSE} kV, {VP}/115 V, classe 0,3 P75, grupo de ligação 2 (fase-terra)',
  c_chave:'Chave de aferição (bloco de aferição) 10 polos, 3 elementos – circuitos de corrente com curto-circuito automático e circuitos de tensão',
  c_med_irrigante:'Medidor eletrônico multifunção, 3 elementos, 4 fios, 2,5(10) A, faixa estendida de tensão, classe 0,5S, 4 quadrantes, memória de massa, tarifa horária com programação do horário reservado (irrigação noturna) e saída para telemetria',
  c_med_industria:'Medidor eletrônico multifunção, 3 elementos, 4 fios, 2,5(10) A, faixa estendida de tensão, classe 0,5S (0,2S quando exigido), 4 quadrantes, memória de massa, tarifa horária (ponta/fora ponta) e saída para telemetria',
  c_spec_blindada:'Conjunto de medição blindada trifásico, TC e TP integrados em invólucro polimérico, uso externo, {CLASSE} kV, TC {TC}/5 A, TP {VP}/115 V, classe 0,3, com cabos de controle blindados',
  c_cob_url:COB_ARTIFACT,
  c_mat_bt:[
    'Caixa de medição indireta padrão Grupo A (com visor) ; 1 ; un',
    'Cabo de cobre flexível 4 mm² 750 V – circuito de corrente (preto/branco) ; 30 ; m',
    'Cabo de cobre flexível 2,5 mm² 750 V – circuito de tensão ; 20 ; m',
    'Cabo de cobre flexível 2,5 mm² 750 V – neutro (azul) ; 10 ; m',
    'Eletroduto PVC rígido 3/4" com conexões ; 6 ; m',
    'Terminal tipo pino/olhal p/ cabo 4 mm² ; 12 ; un',
    'Terminal tipo pino/olhal p/ cabo 2,5 mm² ; 12 ; un',
    'Antena externa celular com cabo (conector TNC) ; 1 ; un',
    'Chip de dados (SIM) para telemetria ; 2 ; un',
    'Selo / lacre de segurança ; 10 ; un',
    'Abraçadeira de nylon / identificadores de condutor ; 1 ; kit'
  ].join('\n'),
  c_mat_mt:[
    'Caixa de medição indireta padrão Grupo A (com visor) ; 1 ; un',
    'Suporte / cruzeta para fixação de TC e TP em poste ; 1 ; conj',
    'Cabo de controle multipolar 4 mm² – circuito de corrente ; 30 ; m',
    'Cabo de controle multipolar 2,5 mm² – circuito de tensão ; 30 ; m',
    'Eletroduto de aço galvanizado 1" com conexões ; 6 ; m',
    'Conector / terminal para ligação primária de TC e TP ; 12 ; un',
    'Terminal tipo pino/olhal p/ cabo 4 mm² ; 12 ; un',
    'Terminal tipo pino/olhal p/ cabo 2,5 mm² ; 12 ; un',
    'Aterramento da carcaça e secundários (haste + cabo) ; 1 ; conj',
    'Antena externa celular com cabo (conector TNC) ; 1 ; un',
    'Chip de dados (SIM) para telemetria ; 2 ; un',
    'Selo / lacre de segurança ; 14 ; un'
  ].join('\n')
};

/* ---------- 3. EXEMPLO MOSTRADO AO ABRIR A PÁGINA ----------
   Dados fictícios. Não coloque dados reais de clientes aqui:
   este arquivo é público. */
const EXAMPLE={f_ss:'000000000',f_data:'01/01/2026',f_servico:'LIGAÇÃO NOVA (EXEMPLO)',
  f_cliente:'CLIENTE EXEMPLO',f_endereco:'FAZENDA EXEMPLO – ZONA RURAL',
  f_localidade:'PALMEIRAS DE GOIAS',f_telefone:'(62) 00000-0000',
  f_classe:'INDUSTRIAL',f_atividade:'EXEMPLO',f_tipolig:'TRIFÁSICO (26 kW EM DIANTE)',f_ramal:'AÉREO',
  f_kva:'112,5',f_tforn:'2',f_tiposerv:'nova'};
