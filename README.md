# dasom-test-server
프론트엔드 전용 **테스트서버(백엔드)** 입니다

=>프론트엔드 포트: 3000

=>백엔드 포트: 5000

# 데이터 송수신
프론트=> 로그인버튼 클릭 시 **post방식**으로 **URL/login** 경로로 **데이터(id/pw)** 전송

백엔드=> **post방식**으로 **/login** 경로에 **req.body**로 데이터 수신

모듈은 axios를 사용하였고, 데이터 형식은 json형식입니다
