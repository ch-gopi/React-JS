/*
DATABASE ENCRYPTION:-
const secretKey = "ThisIsMySecretKey.";
userSchema.plugin(encrypt, {secret: secretKey, encryptedFields: ["password"]});
// No changes to app.post();



MD5 HASHING:-
const md5 = require("md5");
md5(req.body.password);



BCRYPT HASHING AND SALTING:-
const saltRounds = 10;

app.post("/register", function(req, res){
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    const user = new User({
      username: req.body.username,
      password: hash
    });
    user.save(function(err){
      if(err){
        console.log(err);
      }else{
        res.render("secrets");
      }
    });
  });
});

app.post("/login", function(req, res){
  // console.log( md5(req.body.password));
  User.findOne({username: req.body.username}, function(err, foundUser){
    if(err){
      console.log(err);
    }else{
      if(foundUser){
        bcrypt.compare(req.body.password, foundUser.password, function(err, result) {
          if(result===true){
            res.render("secrets");
          }
        });
      }
    }
  });
});



COOKIES AND SESSIONS:-
1. require all the packages

2. set up our session (before mongoose.connect)
    app.use(session({
      secret: 'This is our secret key.',
      resave: false,
      saveUninitialized: true
    }));

3. initialize and start using passport (initialize after initializing session)
    app.use(passport.initialize());
    app.use(passport.session());

4. set up passport-local-mongoose(After the user schema)
    userSchema.plugin(passportLocalMongoose);

5. Passport-local-configuration(after the mongoose model)
    passport.use(User.createStrategy());
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());


*/
