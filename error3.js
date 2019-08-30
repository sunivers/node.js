// uncaughtException 이벤트는 예외처리 최후의 수단
// 이벤트 발생 후 다음 동작 보장 못함.
process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다.');
}, 2000);