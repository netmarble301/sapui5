# sapui5

sap fiori 중 sapui5 application 개발 목표(for practice)


visual studio code에 sap 기능 확장 -> sap fiori tools-extension pack을 설치


npm install '해 줘' (package.json 참고)


OData란? abap 백엔드 서버에 있는 데이터를 sapui5로 안전하고 표준화된 방식으로 가져오기 위해 사용하는 웹 통신 프로토콜


manifest.json 나중에 odata 서비스 주소 생기면 해당 uri에 기입


제공 받은 localService(로컬 odata 서비스)는 항공 예약(Flight Booking) 및 고객 관리와 관련된 데이터 모델임


SAPUI5 전용 툴링인 UI5 CLI 서빙 방식 쓰기


npm install --save-dev @ui5/cli@latest //UI5 CLI 최신 버전으로 업데이트 명령어


ui serve //UI5 CLI 도구(@ui5/cli)가 이미 설치되어 있어서, 시스템이 ui5라는 명령어의 위치를 바로 찾아 실행하는 방식


npx ui5 serve //npx는 Node.js를 설치할 때 같이 딸려오는 일회성 실행 도구입니다. 컴퓨터에 UI5 도구가 전역으로 설치되어 있지 않더라도, 현재 프로젝트의 node_modules 폴더 안에 숨어 있는(로컬에 설치된) UI5 도구를 찾아서 일시적으로 빌려 실행해 주는 역할을 합니다. 컴퓨터 전역에 이것저것 복잡하게 설치할 필요 없이, 프로젝트 폴더 안(package.json 등)에 설정된 의존성만 가지고 안전하게 실행할 수 있어서 실무나 튜토리얼에서 아주 권장되는 방식입니다.


npx ui5 serve -> 웹 브라우저에 제공 받은 uri 링크ㄱ


ctrl + c //작업 종료


made jjh
