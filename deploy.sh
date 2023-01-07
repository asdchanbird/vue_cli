#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

剛剛成功推上去的所有指令都貼過來
# !!進入build好的部署資料夾!!
 1  cd dist
# 複製dist/index.html並改名404.html
# 用途：讓github page重新整理正常(沒有複製則會到github的預設404 page)git bush
    2  cp index.html 404.html
    # deploy編譯後的檔案名為亂數，由於檔名不重複會無限增多檔案，因此在進入資料夾後先初始化git
    3  git init
    4  git add -A
    5  git commit -m 'Deploy 20221105測試'
# 1.申請GitHub Personal access tokens，記得不要將這個檔案推到git，token會暴露
# 2.將dist資料夾中的內容推送至遠端gh-pages分支中

# 將舊有的目錄內容強制取代成目前內容（指令 git push -f)
    6  git push -f https://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@github.com/asdchanbird/test_cli_coomend.git master:gh-pages   
    7  history