# AGENTS.md — Portfólio de Pedro

## Escopo

Estas instruções orientam o trabalho neste repositório. O projeto é um portfólio pessoal de uma página, em português do Brasil, com identidade escura, tipografia moderna, animações e apresentação profissional com personalidade.

## Fonte de verdade

- Siga as instruções mais recentes de Pedro e as referências visuais que ele fornecer.
- Consulte PROMPT-CODEX.md para o contexto inicial de implementação.
- Não afirme ter analisado uma imagem ou arquivo que não esteja acessível.
- Não reinvente a direção visual durante tarefas pontuais. Resolva detalhes pequenos com bom senso; apresente mudanças relevantes de direção antes de implementá-las.

## Etapas

1. A etapa inicial é o mobile: estrutura, conteúdo provisório, navegação e animações.
2. Ao concluir o mobile, entregue o resultado para revisão e aguarde uma instrução de Pedro para iniciar o desktop.
3. No desktop, mantenha a estrutura aprovada e use um container com largura máxima, centralizado horizontalmente e com margens amplas. O fundo ocupa a janela; o conteúdo tem largura limitada.
4. Corrija regressões de mobile ao adaptar o desktop.

## Regras visuais permanentes

- Fundo quase preto e texto branco ou branco suave; tons de cinza podem apoiar a hierarquia.
- Header com identificação textual de Pedro à esquerda e links de navegação. A logo será fornecida depois.
- Título “Pedro dev web”, com queda em cascata e letras de “dev” visualmente separadas.
- Sobre com texto curto e humano, pensado para cerca de três a quatro linhas no mobile, sem forçar quebras em todas as telas.
- Projetos empilhados verticalmente na etapa mobile.
- Rodapé com “Vamos criar algo juntos” e “Entre em contato”.
- Não inserir a frase “Código com propósito. Experiência com personalidade.”, indicação “Role para explorar”, linhas horizontais ou rótulos numerados como “01 / Sobre mim” e “02 / Projetos”.
- Não acrescentar seções, slogans, efeitos decorativos ou cores de destaque sem uma solicitação que justifique a mudança.

## Implementação

- Antes de editar, inspecione estrutura, package.json, scripts e convenções disponíveis.
- Preserve a stack e o gerenciador de pacotes existentes. Em um projeto vazio, a base sugerida é Next.js App Router, TypeScript e Tailwind CSS.
- Faça alterações focadas no pedido e preserve mudanças existentes do usuário.
- Use componentes pequenos e claros; mantenha textos, projetos e contatos fáceis de substituir.
- Evite abstrações prematuras e dependências para problemas que CSS ou APIs nativas resolvem bem.
- Em Next.js, limite componentes cliente às partes que precisam de estado, eventos ou APIs do navegador.
- Evite alturas fixas para blocos de texto e soluções que apenas escondam problemas de overflow.
- Use imagens com dimensões ou proporções definidas para reduzir mudanças de layout.
- Não criar backend, autenticação, banco, CMS ou envio de formulário sem necessidade solicitada.

## Movimento e acessibilidade

- Animações devem reforçar a composição sem atrasar a navegação ou a leitura.
- Entrada do título em cascata, sem loop; revelações ao rolar e interações discretas nos projetos.
- Priorize transform e opacity; preserve a rolagem nativa e evite movimento contínuo desnecessário.
- Respeite prefers-reduced-motion e garanta conteúdo visível quando a animação for reduzida ou desativada.
- Não condicione informação ou ações a hover; mantenha a experiência funcional por toque e teclado.
- Preserve HTML semântico, hierarquia de títulos, nome acessível das regiões, foco visível e contraste.
- Ao dividir o título em letras para animar, mantenha uma leitura acessível contínua e evite anúncio duplicado.
- Limpe listeners e observers ao desmontar componentes.

## Conteúdo e links

- Não inventar credenciais, experiência profissional, clientes, métricas, projetos reais ou contatos.
- Exemplos devem ser identificados como demonstrativos; conteúdo provisório deve ser fácil de localizar na fonte de dados.
- Não usar href="#" ou URLs inventadas como destino de ações.
- Se um contato ou URL estiver ausente, evitar ação enganosa e informar a pendência na entrega.
- Não expor segredos em código, exemplos, logs ou arquivos versionados.

## Verificação

- Inspecione o mobile em 320, 375, 390 e 430 px, quando houver ferramenta de navegador disponível.
- Verifique overflow, legibilidade, navegação interna, foco, toque, imagens e preferência por movimento reduzido.
- Na etapa desktop, acrescente inspeção em larguras como 1024 e 1440 px e confirme o limite de largura e a centralização.
- Rode os scripts existentes de lint, tipos e build pertinentes. Não criar uma suíte de testes apenas para espelhar alterações visuais simples.
- Não declarar inspeção visual ou comandos como concluídos sem executá-los. Relate bloqueios e falhas preexistentes com clareza.

## Comunicação e entrega

- Comunique-se com Pedro em português, de forma direta.
- Informe o que mudou, as verificações realizadas e pendências relevantes.
- Não publicar, implantar ou configurar infraestrutura como parte de uma tarefa de layout, salvo solicitação de Pedro.
- Nos estudos sobre tecnologia, não use projetos pessoais de Pedro como referência, a menos que ele peça um exemplo com eles. Essa preferência não impede trabalhar diretamente neste portfólio quando esse for o pedido.
