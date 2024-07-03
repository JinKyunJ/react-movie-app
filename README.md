### React Movie App

---

-   Movie API URL : https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year

---

#### github pages 업로드 패키지

-   $ npm i gh-pages

        -  package.json 파일

            - "homepage": "https://JinkyunJ.github.io/react-movie-app/"

             - "deploy": "gh-pages -d bulid",

             - "predeploy": "npm run build",

            - $ git remote -v

            - "script: $ npm run deploy
            -> Node.js가 predeploy먼저 실행 후
            -> predeploy가 react-scripts build 실행
            -> gh-pages -d bulid 실행

    homepage 웹사이트에 업로드
