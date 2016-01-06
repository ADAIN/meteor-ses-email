# SES Email
send email with npm nodemailer, nodemailer-ses-transport in meteor

## Installation (replace meteor top email package)
- Copy this package to your project packages folder
- modify package.js
```javascript
Package.describe({
  name: 'email',
  version: "1.0.8"
});
```

## Installation (as package)
```bash
$ meteor add adain:meteor-ses-email
```

## Usage
```javascript
// server side
if(Meteor.isServer){
  Email.setting = {
    region: 'us-west-2',
    accessKeyId: "key",
    secretAccessKey: "secret key"
  };
  
  var mailOptions = {
      from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
      to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world ✔', // plaintext body
      html: '<b>Hello world ✔</b>' // html body
  };
  
  Email.send(mailOptions);
}
```
See https://github.com/nodemailer/nodemailer, https://github.com/andris9/nodemailer-ses-transport for more detail.
