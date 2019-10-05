var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 1. 현재 라우터에서만 title 접근 가능
  // res.render('index', { title: 'Express' });

  // 2. 다른 미들웨어에서도 res.locals 객체 접근 가능 (title 변수 사용 가능)
  res.locals.title = 'Express';
  res.render('index');
});

module.exports = router;
