let myArticle = `
<div class="row justify-content-center pb-4">
                    <div class="col-9 ">
                        <div class="h-25 row">
                            <div class="d-flex flex-row font-small align-items-center">
                                <div><img src="img-2.png" alt="..." /></div>
                                <div>
                                    <p class="m-0 p-1">
                                        <b id="author-name">Author name</b> <small class="text-muted">in</small>
                                        <b>Topics name ·</b> <small class="text-muted">7th July</small>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="h-25 row">
                            <h1 id="title"></h1>
                        </div>

                        <div class="h-25 row">
                            <p class="col-10 desription"> </p>
                        </div>

                        <div class="h-25 row">
                            <div class="col-6 font-small d-flex justify-content-between align-items-end">
                                <button class="javascript">JavaScript</button>
                                <small class="text-muted">12 min read</small>
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
                        <img src="img.png" class="img-fluid" alt="..." />
                    </div>
                </div>
                <hr />
                `
myArticle = 
function loadArticles() {
    const promiseArticles = new Promise((resolve, reject) => {
      setTimeout(() => resolve(myArticles), 3000);
    });
  
    promiseArticles
      .then((result) => {
        const container = document.getElementById("container");
  
        if (result && result.length > 0) {
          result.forEach((resItem) => {
            // resItem ===>  { id: 1, title: "7 Practical CSS Tips" }
  
            const myNewArticle = myArticle.replace(
              id="ar-title">,
              id="ar-title">${resItem.title}
            );
  
            container.innerHTML += myNewArticle;
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }