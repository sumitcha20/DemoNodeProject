/** Email Module Start**/

var transporter = nodeMailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sumit.cha20@gmail.com',
    pass: '2012sumit'
  }
});

transporter.sendMail({
  from: 'Sumit Chaturvedi <sumit.cha20@gmail.com>',
  to: 'rv.sumit20@gmail.com',
  subject: 'Test Mail',
  text: 'hello world!'
});