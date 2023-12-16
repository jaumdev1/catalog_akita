import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import Tree from 'react-d3-tree';
import './TreeComponent.css'

const CustomNodeElement = ({ nodeDatum, toggleNode }) => {
  const handleClick = () => {
    if (nodeDatum.url) {
      window.open(nodeDatum.url, '_blank');
    }
  };

  return (
    <g onClick={() => toggleNode && toggleNode(nodeDatum)}>
      <circle r={15} fill={nodeDatum.children ? '#00008b' : '#87ceeb'} />
      <text x="30" y="0" onClick={handleClick} style={{ cursor: 'pointer', color: "white", fill:"#111", stroke:"none" }}>
        {nodeDatum.name}
      </text>
      
    </g>
  );
};
const TreeComponent = () => {
  const [treeDimensions, setTreeDimensions] = useState({ width: 0, height: 0 });
  const treeContainerRef = useRef(null);

  useEffect(() => {
    const updateTreeDimensions = () => {
      if (treeContainerRef.current) {
        const containerWidth = treeContainerRef.current.offsetWidth;
        const containerHeight = treeContainerRef.current.offsetHeight;

        setTreeDimensions({
          width: containerWidth,
          height: containerHeight
        });
      }
    };

    window.addEventListener('resize', updateTreeDimensions);
    updateTreeDimensions();

    return () => window.removeEventListener('resize', updateTreeDimensions);
  }, []);

  const akita = {
    name: 'Fábio Akita',
    children: [
      {
        name: 'Desenvolvimento de Software',
        children: [
          { name: 'Configurando Docker Compose, Postgres, com Testes de Carga - Parte Final da Rinha de Backend', url: 'https://www.youtube.com/results?search_query=Configurando+Docker+Compose,+Postgres,+com+Testes+de+Carga+-+Parte+Final+da+Rinha+de+Backend' },
          { name: '16 Linguagens em 16 Dias: Minha Saga da Rinha de Backend', url: 'https://www.youtube.com/results?search_query=16+Linguagens+em+16+Dias:+Minha+Saga+da+Rinha+de+Backend' },
          { name: 'Modelagem de Software é Difícil? | "Ver" vs "Enxergar"', url: 'https://www.youtube.com/results?search_query=Modelagem+de+Software+%C3%A9+Dif%C3%ADcil?+|%22Ver%22+vs+%22Enxergar%22' },
          { name: 'Python? Java? Rust? Qual a Diferença? | Discutindo Linguagens', url: 'https://www.youtube.com/results?search_query=Python?+Java?+Rust?+Qual+a+Diferen%C3%A7a?+|%7C+Discutindo+Linguagens' },
          { name: 'Entendendo Funcionamento de Containers', url: 'https://www.youtube.com/results?search_query=Entendendo+Funcionamento+de+Containers' },
          { name: 'Subindo Aplicações Web em Produção | Aprendendo HEROKU', url: 'https://www.youtube.com/results?search_query=Subindo+Aplica%C3%A7%C3%B5es+Web+em+Produ%C3%A7%C3%A3o+|%7C+Aprendendo+HEROKU' },
          { name: 'ChatGPT Consegue te Substituir? | Entendendo Jobs Assíncronos', url: 'https://www.youtube.com/results?search_query=ChatGPT+Consegue+te+Substituir?+|%7C+Entendendo+Jobs+Ass%C3%ADncronos' },
          { name: 'Como Funciona o Boot de um Linux? | O que tem num LiveCD?', url: 'https://www.youtube.com/results?search_query=Como+Funciona+o+Boot+de+um+Linux?+|%7C+O+que+tem+num+LiveCD?' },
          { name: 'Todos os Sistemas de Arquivos: de FAT a ZFS', url: 'https://www.youtube.com/results?search_query=Todos+os+Sistemas+de+Arquivos:+de+FAT+a+ZFS' },
          { name: 'Entendendo Sistemas de Arquivos: FAT', url: 'https://www.youtube.com/results?search_query=Entendendo+Sistemas+de+Arquivos:+FAT' }
        ]
      },
      {
        name: 'Redes e Segurança',
        children: [
          { name: 'Discutindo sobre Banco de Dados - Dos primórdios a Big Data', url: 'https://www.youtube.com/results?search_query=Discutindo+sobre+Banco+de+Dados+-+Dos+prim%C3%B3rdios+a+Big+Data' },
          { name: 'Entendendo Como ChatGPT Funciona - Rodando sua Própria IA', url: 'https://www.youtube.com/results?search_query=Entendendo+Como+ChatGPT+Funciona+-+Rodando+sua+Pr%C3%B3pria+IA' },
          { name: 'Criando uma Rede Segura | Introdução a Redes Parte 6 - VPN e NAS', url: 'https://www.youtube.com/results?search_query=Criando+uma+Rede+Segura+|%20Introdu%C3%A7%C3%A3o+a+Redes+Parte+6+-+VPN+e+NAS' },
          { name: 'Burlando Proxies e Firewalls | Introdução a Redes Parte 5 - SSH', url: 'https://www.youtube.com/results?search_query=Burlando+Proxies+e+Firewalls+|%20Introdu%C3%A7%C3%A3o+a+Redes+Parte+5+-+SSH' },
          { name: 'Como Funciona Sockets, Cliente, Servidor e a Web? | Introdução a Redes Parte 4', url: 'https://www.youtube.com/results?search_query=Como+Funciona+Sockets,+Cliente,+Servidor+e+a+Web?+|%20Introdu%C3%A7%C3%A3o+a+Redes+Parte+4' },
          { name: 'Como sua Internet Funciona | Introdução a Redes Parte 3', url: 'https://www.youtube.com/results?search_query=Como+sua+Internet+Funciona+|%20Introdu%C3%A7%C3%A3o+a+Redes+Parte+3' },
          { name: 'Detecção e Correção de Erros | Introdução a Redes Parte 2', url: 'https://www.youtube.com/results?search_query=Detec%C3%A7%C3%A3o+e+Corre%C3%A7%C3%A3o+de+Erros+|%20Introdu%C3%A7%C3%A3o+a+Redes+Parte+2' },
          { name: 'Introdução a Redes: Como Dados viram Ondas? | Parte 1', url: 'https://www.youtube.com/results?search_query=Introdu%C3%A7%C3%A3o+a+Redes:+Como+Dados+viram+Ondas?+|%20Parte+1' }
        ]
      },
      {
        name: 'Tecnologias e Ferramentas',
        children: [
          { name: 'Games em Máquina Virtual com GPU Passthrough | Entendendo QEMU, KVM, Libvirt', url: 'https://www.youtube.com/results?search_query=Games+em+M%C3%A1quina+Virtual+com+GPU+Passthrough+|%20Entendendo+QEMU,+KVM,+Libvirt' },
          { name: 'Top 3 Distros Linux | Qual Recomendo?', url: 'https://www.youtube.com/results?search_query=Top+3+Distros+Linux+|%20Qual+Recomendo?' },
          { name: 'Tornando sua App Web Mais Rápida! | 4 Técnicas de Otimização', url: 'https://www.youtube.com/results?search_query=Tornando+sua+App+Web+Mais+R%C3%A1pida!+|%204+T%C3%A9cnicas+de+Otimiza%C3%A7%C3%A3o' },
          { name: 'Mostrando meu Setup de Gravação | Aprendendo sobre CODECs', url: 'https://www.youtube.com/results?search_query=Mostrando+meu+Setup+de+Grava%C3%A7%C3%A3o+|%20Aprendendo+sobre+CODECs' },
          { name: 'Respondendo suas Perguntas sobre Carreira | via Instagram', url: 'https://www.youtube.com/results?search_query=Respondendo+suas+Perguntas+sobre+Carreira+|%20via+Instagram' }
        ]
      },
      {
        name: 'Hardware e Sistemas Operacionais',
        children: [
          { name: 'Apanhando do Gentoo | Melhor Linux???', url: 'https://www.youtube.com/results?search_query=Apanhando+do+Gentoo+|%20Melhor+Linux???' },
          { name: 'Como Funciona o Boot de um Linux? | O que tem num LiveCD?', url: 'https://www.youtube.com/results?search_query=Como+Funciona+o+Boot+de+um+Linux?+|%20O+que+tem+num+LiveCD?' },
          { name: 'De 5 Tera a 25 Giga | Compressão de Dados', url: 'https://www.youtube.com/results?search_query=De+5+Tera+a+25+Giga+|%20Compress%C3%A3o+de+Dados' },
          { name: 'ChatGPT Consegue te Substituir? | Entendendo Jobs Assíncronos', url: 'https://www.youtube.com/results?search_query=ChatGPT+Consegue+te+Substituir?+|%20Entendendo+Jobs+Ass%C3%ADncronos' },
          { name: 'Turing Complete, Emuladores e o Chip ARM M1', url: 'https://www.youtube.com/results?search_query=Turing+Complete,+Emuladores+e+o+Chip+ARM+M1' },
          { name: 'O Computador de Turing e Von Neumann | Por que calculadoras não são computadores?', url: 'https://www.youtube.com/results?search_query=O+Computador+de+Turing+e+Von+Neumann+%7C+Por+que+calculadoras+n%C3%A3o+s%C3%A3o+computadores?' },
          { name: 'A Longa História de CPUs e GPUs | Jogos de Windows em Linux??', url: 'https://www.youtube.com/results?search_query=A+Longa+Hist%C3%B3ria+de+CPUs+e+GPUs+|%20Jogos+de+Windows+em+Linux??' },
          { name: 'Só Precisamos de 640 kB de Memória? | 16-bits até 64-bits!', url: 'https://www.youtube.com/results?search_query=S%C3%B3+Precisamos+de+640+kB+de+Mem%C3%B3ria?+|%2016-bits+at%C3%A9+64-bits!' },
          { name: 'Estrada do Futuro em 1996 | Meus 19 Anos', url: 'https://www.youtube.com/results?search_query=Estrada+do+Futuro+em+1996+%7C+Meus+19+Anos' }
        ]
      },
      {
        name: 'Programação e Desenvolvimento Pessoal',
        children: [
          { name: 'Linguagem Compilada vs Interpretada | Qual é melhor?', url: 'https://www.youtube.com/results?search_query=Linguagem+Compilada+vs+Interpretada+|+Qual+é+melhor?' },
          { name: 'Fiz um servidor de "SQL"?? | Entendendo Banco de Dados', url: 'https://www.youtube.com/results?search_query=Fiz+um+servidor+de+"SQL"??+|+Entendendo+Banco+de+Dados' },
          { name: 'RANT: Aprendizado na Beira do Caos | Rated R', url: 'https://www.youtube.com/results?search_query=RANT:+Aprendizado+na+Beira+do+Caos+|+Rated+R' },
          { name: 'Hello World Como Você Nunca Viu! | Entendendo C', url: 'https://www.youtube.com/results?search_query=Hello+World+Como+Você+Nunca+Viu!+|+Entendendo+C' },
          { name: 'Concorrência e Paralelismo (Parte 2) | Entendendo Back-end para Iniciantes (Parte 4)', url: 'https://www.youtube.com/results?search_query=Concorrência+e+Paralelismo+(Parte+2)+|+Entendendo+Back-end+para+Iniciantes+(Parte+4)' },
          { name: 'Concorrência e Paralelismo (Parte 1) | Entendendo Back-End para Iniciantes (Parte 3)', url: 'https://www.youtube.com/results?search_query=Concorrência+e+Paralelismo+(Parte+1)+|+Entendendo+Back-End+para+Iniciantes+(Parte+3)' },
          { name: 'Entendendo "Devops" para Iniciantes em Programação (Parte 2) | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=Entendendo+"Devops"+para+Iniciantes+em+Programação+(Parte+2)+|+Série+"Começando+aos+40"' },
          { name: 'Entendendo "Devops" para Iniciantes em Programação (Parte 1) | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=Entendendo+"Devops"+para+Iniciantes+em+Programação+(Parte+1)+|+Série+"Começando+aos+40"' },
          { name: 'Gerenciamento de Memória (Parte 2) | Entendendo Back-end para Iniciantes (Parte 6)', url: 'https://www.youtube.com/results?search_query=Gerenciamento+de+Memória+(Parte+2)+|+Entendendo+Back-end+para+Iniciantes+(Parte+6)' },
          { name: 'Gerenciamento de Memória (Parte 1) | Entendendo Back-end para Iniciantes (Parte 5)', url: 'https://www.youtube.com/results?search_query=Gerenciamento+de+Memória+(Parte+1)+|+Entendendo+Back-end+para+Iniciantes+(Parte+5)' },
          { name: 'Entendendo Back-End para Iniciantes em Programação (Parte 2) | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=Entendendo+Back-End+para+Iniciantes+em+Programação+(Parte+2)+|+Série+"Começando+aos+40"' },
          { name: 'Entendendo Back-End para Iniciantes em Programação (Parte 1) | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=Entendendo+Back-End+para+Iniciantes+em+Programação+(Parte+1)+|+Série+"Começando+aos+40"' },
          { name: 'A História do Front-End para Iniciantes em Programação | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=A+História+do+Front-End+para+Iniciantes+em+Programação+|+Série+"Começando+aos+40"' },
          { name: 'Basic Knowledge for Beginners in Programming.', url: 'https://www.youtube.com/results?search_query=Basic+Knowledge+for+Beginners+in+Programming.' },
          { name: 'A Dimensão do TEMPO para Iniciantes em Programação | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=A+Dimensão+do+TEMPO+para+Iniciantes+em+Programação+|+Série+"Começando+aos+40"' },
          { name: 'O Mercado de TI para Iniciantes em Programação | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=O+Mercado+de+TI+para+Iniciantes+em+Programação+|+Série+"Começando+aos+40"' },
          { name: 'Pequena retrospectiva 2018 e previsões 2019', url: 'https://www.youtube.com/results?search_query=Pequena+retrospectiva+2018+e+previsões+2019' },
          { name: 'Você não sabe nada de Enterprise. Conhecendo a SAP!', url: 'https://www.youtube.com/results?search_query=Você+não+sabe+nada+de+Enterprise.+Conhecendo+a+SAP!' },
          { name: 'Como eu aprendi Inglês? E entendendo "padrões"!', url: 'https://www.youtube.com/results?search_query=Como+eu+aprendi+Inglês?+E+entendendo+"padrões"!' },
          { name: 'Manifesto Anti-Parasita: Seja um Criador', url: 'https://www.youtube.com/results?search_query=Manifesto+Anti-Parasita:+Seja+um+Criador' }
        ]
      },
      {
        name: 'Tecnologia e Sociedade',
        children: [
          { name: 'Rant: A Bolha de Startups Estourou?', url: 'https://www.youtube.com/results?search_query=Rant:+A+Bolha+de+Startups+Estourou?' },
          { name: 'A COVID-19 matou minha Startup? | Entendendo Criptomoedas', url: 'https://www.youtube.com/results?search_query=A+COVID-19+matou+minha+Startup?+|+Entendendo+Criptomoedas' },
          { name: 'Mercado Financeiro Pós-Pandemia: A Tempestade Perfeita?', url: 'https://www.youtube.com/results?search_query=Mercado+Financeiro+Pós-Pandemia:+A+Tempestade+Perfeita?' },
          { name: 'Quebrei 3 HDs: Entendendo Armazenamento', url: 'https://www.youtube.com/results?search_query=Quebrei+3+HDs:+Entendendo+Armazenamento' },
          { name: 'The MM-M: O Melhor Livro de Software?', url: 'https://www.youtube.com/results?search_query=The+MM-M:+O+Melhor+Livro+de+Software?' },
          { name: 'Blockchains servem pra Eleições?', url: 'https://www.youtube.com/results?search_query=Blockchains+servem+pra+Eleições?' },
          { name: 'O Mundo Hoje É PIOR?', url: 'https://www.youtube.com/results?search_query=O+Mundo+Hoje+É+PIOR?' },
          { name: 'Problemas de Confiança para Pessoas Inseguras', url: 'https://www.youtube.com/results?search_query=Problemas+de+Confiança+para+Pessoas+Inseguras' },
          { name: 'O que vem DEPOIS da COVID-19?', url: 'https://www.youtube.com/results?search_query=O+que+vem+DEPOIS+da+COVID-19?' }
        ]
      },
      {
        name: 'Criptografia e Segurança da Informação',
        children: [
          { name: 'Criptografia na Prática - Certificados, BitTorrent, Git, Bitcoin', url: 'https://www.youtube.com/results?search_query=Criptografia+na+Prática+-+Certificados,+BitTorrent,+Git,+Bitcoin' },
          { name: 'Protegendo e Recuperando Dados Perdidos - Git, Backup, BTRFS', url: 'https://www.youtube.com/results?search_query=Protegendo+e+Recuperando+Dados+Perdidos+-+Git,+Backup,+BTRFS' },
          { name: 'Sua Segurança é uma DROGA | Gerenciadores de Senhas, 2FA, Encriptação', url: 'https://www.youtube.com/results?search_query=Sua+Segurança+é+uma+DROGA+|+Gerenciadores+de+Senhas,+2FA,+Encriptação' },
          { name: 'Entendendo Conceitos Básicos de CRIPTOGRAFIA | Parte 2/2', url: 'https://www.youtube.com/results?search_query=Entendendo+Conceitos+Básicos+de+CRIPTOGRAFIA+|+Parte+2/2' },
          { name: 'Entendendo Conceitos Básicos de CRIPTOGRAFIA | Parte 1/2', url: 'https://www.youtube.com/results?search_query=Entendendo+Conceitos+Básicos+de+CRIPTOGRAFIA+|+Parte+1/2' },
          { name: 'Entendendo Supremacia Quântica', url: 'https://www.youtube.com/results?search_query=Entendendo+Supremacia+Quântica' },
          { name: 'RANT: Selo de Segurança é Marketing | Entendendo o Fator Humano', url: 'https://www.youtube.com/results?search_query=RANT:+Selo+de+Segurança+é+Marketing+|+Entendendo+o+Fator+Humano' }
        ]
      },
      {
        name: 'Empreendedorismo e Carreira',
        children: [
          { name: 'Discutindo Gestão', url: 'https://www.youtube.com/results?search_query=Discutindo+Gest%C3%A3o' },
          { name: 'Programa de Trainee CodeMiner 42 | Sua Primeira Oportunidade', url: 'https://www.youtube.com/results?search_query=Programa+de+Trainee+CodeMiner+42+|+Sua+Primeira+Oportunidade' },
          { name: 'RANT: Média Salarial NÃO Existe | Entendendo Power Laws', url: 'https://www.youtube.com/results?search_query=RANT:+M%C3%A9dia+Salarial+N%C3%83O+Existe+|+Entendendo+Power+Laws' },
          { name: 'Como fazer o Ingresso.com escalar? | Conceitos Intermediários de Web', url: 'https://www.youtube.com/results?search_query=Como+fazer+o+Ingresso.com+escalar?+|+Conceitos+Intermedi%C3%A1rios+de+Web' },
          { name: 'Aprendendo sobre Computadores com Super Mario (do jeito Hardcore++)', url: 'https://www.youtube.com/results?search_query=Aprendendo+sobre+Computadores+com+Super+Mario+(do+jeito+Hardcore++)' },
          { name: 'O Guia +Hardcore de Introdução à COMPUTAÇÃO', url: 'https://www.youtube.com/results?search_query=O+Guia+%2BHardcore+de+Introdu%C3%A7%C3%A3o+%C3%A0+COMPUTA%C3%87%C3%83O' },
          { name: 'Bate-Papo com Fernando Ulrich | Entendendo Economia', url: 'https://www.youtube.com/results?search_query=Bate-Papo+com+Fernando+Ulrich+|+Entendendo+Economia' },
          { name: 'A História de Ruby on Rails | Por que deu certo?', url: 'https://www.youtube.com/results?search_query=A+Hist%C3%B3ria+de+Ruby+on+Rails+|+Por+que+deu+certo?' },
          { name: 'Aniversário de UM ANO!! | Bastidores do Canal', url: 'https://www.youtube.com/results?search_query=Anivers%C3%A1rio+de+UM+ANO!!+|+Bastidores+do+Canal' },
          { name: 'The DEFINITIVE Guide for Organizations | Deconstructing the Spotify Model [RATED R]', url: 'https://www.youtube.com/results?search_query=The+DEFINITIVE+Guide+for+Organizations+|+Deconstructing+the+Spotify+Model+[RATED+R]' },
          { name: 'Falando um pouco de MAC, LINUX e WINDOWS | Qual eu devo escolher?', url: 'https://www.youtube.com/results?search_query=Falando+um+pouco+de+MAC,+LINUX+e+WINDOWS+|+Qual+eu+devo+escolher?' },
          { name: 'Refletindo sobre RESOLUÇÃO de Problemas | O bug do Premiere', url: 'https://www.youtube.com/results?search_query=Refletindo+sobre+RESOLU%C3%87%C3%83O+de+Problemas+|+O+bug+do+Premiere' },
          { name: 'The DEFINITIVE UBUNTU Guide for Beginning Devs', url: 'https://www.youtube.com/results?search_query=The+DEFINITIVE+UBUNTU+Guide+for+Beginning+Devs' },
          { name: '10 Mitos sobre Tech Startups | Parte 2 [Rated R]', url: 'https://www.youtube.com/results?search_query=10+Mitos+sobre+Tech+Startups+|+Parte+2+[Rated+R]' },
          { name: '10 Mitos sobre Tech Startups | Parte 1', url: 'https://www.youtube.com/results?search_query=10+Mitos+sobre+Tech+Startups+|+Parte+1' },
          { name: 'Esqueça Metodologias "Ágeis" | [Rated R]', url: 'https://www.youtube.com/results?search_query=Esque%C3%A7a+Metodologias+"%C3%81geis"+|%5BRated+R%5D' },
          { name: 'A Bolha de Startups vai Estourar? | Winter is Coming', url: 'https://www.youtube.com/results?search_query=A+Bolha+de+Startups+vai+Estourar?+|+Winter+is+Coming' },
          { name: 'Devo usar NOSQL? | "ENDGAME" para Iniciantes em Programação | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=Devo+usar+NOSQL?+|+"ENDGAME"+para+Iniciantes+em+Programa%C3%A7%C3%A3o+|+S%C3%A9rie+"Come%C3%A7ando+aos+40"' },
          { name: 'Entendendo "Devops" para Iniciantes em Programação (Parte 2) | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=Entendendo+"Devops"+para+Iniciantes+em+Programa%C3%A7%C3%A3o+(Parte+2)+|%20S%C3%A9rie+"Come%C3%A7ando+aos+40"' },
          { name: 'Entendendo "Devops" para Iniciantes em Programação (Parte 1) | Série "Começando aos 40"', url: 'https://www.youtube.com/results?search_query=Entendendo+"Devops"+para+Iniciantes+em+Programa%C3%A7%C3%A3o+(Parte+1)+|%20S%C3%A9rie+"Come%C3%A7ando+aos+40"' }
        ]
      },
      {
        name: 'Reflexões e Filosofia da Tecnologia',
        children: [
          { name: 'RANT: A Realidade do "Software Livre"', url: 'https://www.youtube.com/results?search_query=RANT:+A+Realidade+do+"Software+Livre"' },
          { name: 'RANT: Programação NÃO É Fácil', url: 'https://www.youtube.com/results?search_query=RANT:+Programa%C3%A7%C3%A3o+N%C3%83O+%C3%89+F%C3%A1cil' },
          { name: 'Usando Git Direito | Limpando seus Commits!', url: 'https://www.youtube.com/results?search_query=Usando+Git+Direito+|%20Limpando+seus+Commits!' },
          { name: 'Entendendo GIT | (não é um tutorial!)', url: 'https://www.youtube.com/results?search_query=Entendendo+GIT+%7C+(n%C3%A3o+%C3%A9+um+tutorial!)' },
          { name: 'Respondendo suas Perguntas sobre Carreira | via Instagram', url: 'https://www.youtube.com/results?search_query=Respondendo+suas+Perguntas+sobre+Carreira+%7C+via+Instagram' },
          { name: 'RANT: Empreendendo com Software do JEITO ERRADO!', url: 'https://www.youtube.com/results?search_query=RANT:+Empreendendo+com+Software+do+JEITO+ERRADO!' },
          { name: 'O que os Cursos NÃO te Ensinam sobre Mercados', url: 'https://www.youtube.com/results?search_query=O+que+os+Cursos+N%C3%83O+te+Ensinam+sobre+Mercados' },
          { name: 'Introdução a Videogames e Emuladores', url: 'https://www.youtube.com/results?search_query=Introdu%C3%A7%C3%A3o+a+Videogames+e+Emuladores' },
          { name: 'RANT: Selo de Segurança é Marketing | Entendendo o Fator Humano', url: 'https://www.youtube.com/results?search_query=RANT:+Selo+de+Seguran%C3%A7a+%C3%A9+Marketing+%7C+Entendendo+o+Fator+Humano' }
        ]
      },
      {
        name: 'Diversos',
        children: [
          { name: '"Os Rumores da Minha Morte foram Exagerados" 🤣', url: 'https://www.youtube.com/results?search_query="Os+Rumores+da+Minha+Morte+foram+Exagerados"+🤣' },
          { name: 'Aprendendo "Fotografês" | Brinquedos de Miami', url: 'https://www.youtube.com/results?search_query=Aprendendo+"Fotograf%C3%AAs"+|%20Brinquedos+de+Miami' },
          { name: 'Meus Primeiros 5 Anos | 1990-1995', url: 'https://www.youtube.com/results?search_query=Meus+Primeiros+5+Anos+|%201990-1995' },
          { name: 'Entendendo WSL 2 | E uma curta história sobre Windows NT', url: 'https://www.youtube.com/results?search_query=Entendendo+WSL+2+%7C+E+uma+curta+hist%C3%B3ria+sobre+Windows+NT' },
          { name: 'Emacs vs Java | Oracle vs Google', url: 'https://www.youtube.com/results?search_query=Emacs+vs+Java+%7C+Oracle+vs+Google' },
          { name: 'The MM-M: O Melhor Livro de Software?', url: 'https://www.youtube.com/results?search_query=The+MM-M:+O+Melhor+Livro+de+Software?' },
          { name: 'Blockchains servem pra Eleições?', url: 'https://www.youtube.com/results?search_query=Blockchains+servem+pra+Elei%C3%A7%C3%B5es?' },
          { name: 'Devo fazer Faculdade? (Eu, 22 anos depois)', url: 'https://www.youtube.com/results?search_query=Devo+fazer+Faculdade?+(Eu,+22+anos+depois)' },
          { name: 'Motivação: O Diário de Henry Jones', url: 'https://www.youtube.com/results?search_query=Motiva%C3%A7%C3%A3o:+O+Di%C3%A1rio+de+Henry+Jones' },
          { name: 'Sua Linguagem NÃO É Especial! (Parte 2)', url: 'https://www.youtube.com/results?search_query=Sua+Linguagem+N%C3%83O+%C3%89+Especial!+(Parte+2)' },
          { name: 'Sua Linguagem NÃO É Especial! (Parte 1)', url: 'https://www.youtube.com/results?search_query=Sua+Linguagem+N%C3%83O+%C3%89+Especial!+(Parte+1)' },
          { name: 'Dúvida! Devo Fazer Faculdade?', url: 'https://www.youtube.com/results?search_query=D%C3%BAvida!+Devo+Fazer+Faculdade?' },
          { name: 'Projetos: Aprendendo a Priorizar', url: 'https://www.youtube.com/results?search_query=Projetos:+Aprendendo+a+Priorizar' },
          { name: '9 Dicas para Palestrantes: Venda sua Caneta!', url: 'https://www.youtube.com/results?search_query=9+Dicas+para+Palestrantes:+Venda+sua+Caneta!' },
          { name: '7 Recomendações de Shows para pessoas de Tech', url: 'https://www.youtube.com/results?search_query=7+Recomenda%C3%A7%C3%B5es+de+Shows+para+pessoas+de+Tech' },
          { name: 'Procure o que você Ama ... SÓ QUE NÃO!', url: 'https://www.youtube.com/results?search_query=Procure+o+que+voc%C3%AA+Ama+...+S%C3%93+QUE+N%C3%83O!' },
          { name: 'A Controvérsia da Lerna vs ICE', url: 'https://www.youtube.com/results?search_query=A+Controv%C3%A9rsia+da+Lerna+vs+ICE' }
        ]
      }
    ]
  };

  const treeConfig = {
    orientation: 'vertical',
    
    nodeSize: { x: 380, y:100}, 
    separation: { siblings: 0.5, nonSiblings:1 },

  };

  const translateX = 50;
  const translateY = treeDimensions.height / 2;

  return (
    <div
      ref={treeContainerRef}
      style={{
        width: '100%',
      
      }}
    >

      
       <Tree
        data={akita}
        translate={{ x: translateX, y: translateY }}
        separation={treeConfig.separation}
        nodeSize={treeConfig.nodeSize}
        renderCustomNodeElement={(rd3tProps) => (
          <CustomNodeElement {...rd3tProps} />
        )}
        initialDepth={1}
      />
    </div>
  );
};

export default TreeComponent;