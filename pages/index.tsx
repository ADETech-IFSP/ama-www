import Head from 'next/head'

export default function Home() {
  return (
      <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="images/logo.png" type="image/x-icon"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="css/styles.css"/>

        <meta property="type" content="website"/>
        <meta property="url" content="https://www.amemais.tech/"/>
        <meta property="title" content="Ame Mais Animais - Home"/>
        <meta property="description" content="Cuide melhor de seus bichinhos de estimação. Um app incrível e completo para gestão e cuidados."/>
        <meta property="image" content="https://www.amemais.tech/images/background.png"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.amemais.tech/"/>
        <meta property="og:title" content="Ame Mais Animais - Home"/>
        <meta property="og:description" content="Cuide melhor de seus bichinhos de estimação. Um app incrível e completo para gestão e cuidados."/>
        <meta property="og:image" content="https://www.amemais.tech/images/background.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.amemais.tech/"/>
        <meta property="twitter:title" content="Ame Mais Animais - Home"/>
        <meta property="twitter:description" content="Cuide melhor de seus bichinhos de estimação. Um app incrível e completo para gestão e cuidados."/>
        <meta property="twitter:image" content="https://www.amemais.tech/images/background.png" />

        <title>Ame Mais Animais - Home</title>
      </Head>

      <header>
          <div className="content">
              <img src="images/logo_texto.png" alt="Ame Mais Animais" className="logo" />
              <a href="#download">
                  <img src="images/android.png" alt="Download" />
              </a>
          </div>
      </header>
      <section className="manage">
          <h2>
              Uma maneira simples e alternativa de gerenciamento
          </h2>
          <ul>
              <li>
                  <img src="images/icon/ficha.png" alt="Fichas" className="icon" />
                  <div className="description">
                      <h3>Fichas cadastrais</h3>
                      <p>
                          De uma manueira rápida e fácil, visualize todos os seus pets e como preferir.
                      </p>
                  </div>
              </li>
              <li>
                  <img src="images/icon/gestao.png" alt="Gestão" className="icon" />
                  <div className="description">
                      <h3>Gestão de atividades</h3>
                      <p>
                          O app lhe informa sobre horários de atividades, remédios e cuidados! Além de estatísticas completas.
                      </p>
                  </div>
              </li>
              <li>
                  <img src="images/icon/forum.png" alt="Fórum" className="icon" />
                  <div className="description">
                      <h3>Fórum de ajuda</h3>
                      <p>
                          Tire suas dúvidas e receba dicas através do fórum da comunidade que te aproxima de outros usuários.
                      </p>
                  </div>
              </li>
          </ul>
      </section>
      <section className="download" id="download">
          <div className="thumbnail">
              <img src="images/mockup.png" alt="App" />
          </div>
          <div className="card">
              <h3>
                  Comece a usar agora mesmo!
              </h3>
              <p>
                  Sem qualquer custo ou valor, baixe agora mesmo de graça e comece a usar.
              </p>
              <p className="danger">
                  *Nota: Disponível apenas para celulares android! Antes de seguir o passo a passo, verifique se seu smartphone já está configurado para instalar apps de fontes alternativas! Se não, siga este tutorial: Como habilitar instalação de APK
              </p>
              <p className="item">
                  1 - Clique em “Download” abaixo;
              </p>
              <p className="item">
                  2 - Abra o arquivo e clique em instalar;
              </p>
              <p className="item">
                  3 - Comece a usar!
              </p>

              <div className="button">
                  <img src="images/icon/download.png" alt="DOWNLOAD" /> DOWNLOAD
              </div>

          </div>
      </section>
      <section className="whois">
          <h2>
              Quem somos?
          </h2>
          <p>
              Conheça a nossa equipe!
          </p>
          <div className="employers">
              <div className="profile-card">
                  <div className="photo">
                      <img src="images/icon/user.png" alt="User" />
                  </div>
                  <p>Adryan Alencar</p>
                  <p>SP1852582</p>
                  <p className="tag">BackEnd & App</p>
              </div>
              <div className="profile-card">
                  <div className="photo">
                      <img src="images/icon/user.png" alt="User" />
                  </div>
                  <p>Breno Ferreira</p>
                  <p>SP1852523</p>
                  <p className="tag">BackEnd & Banco de Dados</p>
              </div>
              <div className="profile-card">
                  <div className="photo">
                      <img src="images/icon/user.png" alt="User" />
                  </div>
                  <p>David</p>
                  <p>SP1852884</p>
                  <p className="tag">BackEnd & Banco de Dados</p>
              </div>
              <div className="profile-card">
                  <div className="photo">
                      <img src="images/icon/user.png" alt="User" />
                  </div>
                  <p>Érick Monteiro</p>
                  <p>SP3032701</p>
                  <p className="tag">FrontEnd & App</p>
              </div>
              <div className="profile-card two">
                  <div className="photo">
                      <img src="images/icon/user.png" alt="User" />
                  </div>
                  <p>Jonathas</p>
                  <p>SP1850865</p>
                  <p className="tag">FrontEnd & App</p>
              </div>
              <div className="profile-card three">
                  <div className="photo">
                      <img src="images/icon/user.png" alt="User" />
                  </div>
                  <p>Miguel Carvalho</p>
                  <p>SP1852876</p>
                  <p className="tag">BackEnd & FrontEnd</p>
              </div>
          </div>
      </section>
      <footer>
          <div className="row">
              <div className="col">
                  <h3>
                      Links
                      <ul>
                          <li><a target="_blank" href="https://adesource.wordpress.com">Blog ADESource</a></li>
                          <li><a target="_blank" href="github.com/adETech-IFSP">GitHub ADETech</a></li>
                          <li><a target="_blank" href="https://www.youtube.com/channel/UCpm6X6-GkXFyRDjevkJdDlw">YouTuber ADETech</a></li>
                      </ul>
                  </h3>
              </div>
              <div className="col">
                  <a target="_blank" href="https://spo.ifsp.edu.br">
                      <img src="images/ifsp.png" alt="" />
                  </a>

              </div>
              <div className="col">
                  <a target="_blank" href="https://www.amemais.tech">
                      <img src="images/adetech.png" alt="" />
                  </a>

              </div>
              <div className="col">
                  <a target="_blank" href="https://dicas.ivanfm.com">
                      <img src="images/www.png" alt="" />
                  </a>

                  <p>dicas.ivanfm.com</p>
              </div>
          </div>
          <p>
              Feito com muito ☕ e com o ❤️. ADETech 2021.
          </p>
      </footer>
    </>
  )
}
