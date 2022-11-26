const container = document.getElementById('container1');
console.log(container);
let myArticle = `
<div id="article" class="row justify-content-center pb-4">
                    <div class="col-9 ">
                        <div class="h-25 row">
                            <div class="d-flex flex-row font-small align-items-center">
                                <div><img src="img-2.png" alt="..." /></div>
                                <div>
                                    <p class="m-0 p-1">
                                        <b id="author-name"></b> <small class="text-muted">in</small>
                                        <b id="topic-name"></b> <small class="text-muted" id="article-date"></small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="h-25 row">
                            <h1 id="title"></h1>
                        </div>

                        <div class="h-25 row">
                            <p class="col-10 desription id="description"> </p>
                        </div>

                        <div class="h-25 row">
                            <div class="col-6 font-small d-flex justify-content-between align-items-end">
                                <button class="javascript">JavaScript</button>
                                <small id="time-to-read" class="text-muted">12 min read</small>
                                <b>·</b>
                                <small class="text-muted">Selected for you</small>
                            </div>

                            <div class="col-5 d-flex align-items-end flex-row-reverse">
                                <div id="icon"><img src="Icon.png" alt="..." /></div>
                                <div id="icon"><img src="Icon.png" alt="..." /></div>
                                <div id="icon"><img src="Icon.png" alt="..." /></div>
                            </div>

                        </div>

                    </div>
                    <div class="col-3">
                        <img id="article-img" class="img-fluid" alt="..." />
                    </div>
                </div>
                <hr />
                `

  const getTopStories = async () => {

    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=VAcPTCcmOkltQOL6yRk9He0vQANapP9C')
    if(!response.ok && response.status==='404'){
      console.log('запрос составлен неправильно!')
    }

    const articles = await response.json();
    console.log(typeof(articles))

    articles['results'].forEach(resultItem=> {
      const myNewArticle = myArticle
      .replace(
        `id="topic-name">`,
        `id="topic-name">${resultItem.section}`
      )
      .replace(
        `id="author-name">`,
        `id="author-name">${resultItem.byline}`
      )
      .replace(
        `id="article-date">`,
        `id="article-date">${resultItem.updated_date}`
      )
      .replace(
        `id="title">`,
        `id="title">${resultItem.title}`
      )
      .replace(
        `id="description">`,
        `id="description">${resultItem.abstract}`
      )
      .replace(
        `id="article-img"`,
        `id="article-img" src=${resultItem['multimedia'][1]['url']}`
        
      );
      container.innerHTML += myNewArticle;
      
    });
    console.log(articles.results[0])
  };
  
  getTopStories();
  console.log('END')
                
      