# Dimensionamento de Medição – Grupo A

Ferramenta da Executiva de Perdas Sul e Sudoeste (Equatorial Goiás) para dimensionar a medição de
ligações novas e reativações de UC do Grupo A a partir da nota de serviço em PDF:
TC/TP (RTC, RTP e constante), medidor, chave de aferição, remota de telemetria, materiais
e relatório em PDF com localização no Google Maps e verificação de sinal no mapa de cobertura.

## Arquivos

| Arquivo / pasta | O que é | Quando mexer |
|---|---|---|
| `padroes.js` | Padrões: relações de TC, especificações, medidores, remotas, materiais, fotos e exemplo | **É o arquivo do dia a dia** |
| `fotos/` | Fotos dos equipamentos (.jpg) | Para trocar uma foto |
| `index.html` | A ferramenta (tela, cálculo, leitura da nota e PDF) | Só quando receber uma versão nova |
| `cobertura.html` | Mapa de cobertura de sinal (Goiás + DF) | Só quando receber uma versão nova |
| `img/` | Logo e ícones do app | Raramente |
| `manifest.json` | Nome e ícone ao instalar no celular | Raramente |

## Como editar pelo site do GitHub

1. Abra o arquivo (por exemplo `padroes.js`) e clique no **lápis** (Edit this file).
2. Faça a alteração. Mantenha as aspas `'...'` e as vírgulas no fim das linhas.
3. Clique em **Commit changes** e confirme.
4. Em 1 a 2 minutos a página publicada é atualizada. No celular, feche e abra a página de novo.

### Exemplos comuns em `padroes.js`

- **Mudar o limite de medição em BT:** altere `c_limite:'300'`.
- **Mudar as relações de TC janela:** altere `c_tcbt:'200, 400, 800'`.
- **Mudar a especificação do medidor:** altere `c_med_irrigante` ou `c_med_industria`.
- **Mudar a lista de materiais:** edite `c_mat_bt` ou `c_mat_mt` (uma linha por item: `'Descrição ; quantidade ; unidade',`).
- **Mudar a remota:** edite o bloco `REMS` (nome, código CAS e especificação).

### Trocar uma foto

1. Abra a pasta `fotos`, clique em **Add file → Upload files**.
2. Envie a foto nova **com o mesmo nome** da antiga (ex.: `medidor.jpg`).
3. Clique em **Commit changes**.

## Receber uma versão nova do Claude

Quando o Claude gerar um `index.html` (ou outro arquivo) novo:
**Add file → Upload files**, arraste o arquivo e clique em **Commit changes**.
O GitHub substitui o antigo e guarda o histórico: se algo der errado, dá para voltar
em **History** no arquivo.

> Este repositório é público. Não coloque dados reais de clientes em nenhum arquivo.
