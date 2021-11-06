const withAuth = (req, res, next) => {
    // request callback fx checking for session property
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    //   if res.session.user_id exists, call next()
    // another middleware or final fx that renders template
    next();
  }
};

module.exports = withAuth;