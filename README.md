# git init

git으로 사용할 폴더 경로에서 실행하면 git 폴더로 초기화

# git remote add origin URL

내 github repository와 연결

- git remote -v 이용해서 설정되었는지 확인

# git branch

내 현재 branch 확인

# git branch feature/newBranchName

새로운 branch 생성, `newBranchName` 부분에 원하는 branch명 입력

# git checkout feature/newBranchName

원하는 branch로 이동

# git add (path)

github에 파일을 추가 하고 싶을 때 사용
**예시**

- git add . : 현재 경로에 있는 모든 파일을 변경한다고 선언
- git add test.js : test.js 파일을 변경한다고 선언

# git status

github에 추가할 파일이 제대로 설정 되었는지 확인

# git commit

git add 를 사용해서 추가한 파일의 변경을 확정짓는 명령어
**사용법**

1. commit 진행 후, i 눌러서 commit 메세지 입력
2. 입력 완료 후, shift + ;
3. wq를 입력해서 쓰고 나가기

# git log

git commit이 제대로 완료 되었는지 확인

# git push origin feature/BranchName

현재 branch에 push, origin 뒤에 push할 branch명 입력하면 됨
**예시**

- git push origin master
- git push origin feature/seonghwanCho
