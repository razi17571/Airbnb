const User = require("../models/User.js");

module.exports = {
    renderSignupForm: (req, res) => {
        res.render("users/signup.ejs");
    },

    signup: async (req, res) => {
        try {
            let { username, email, password } = req.body;
    
            // Check if a user with the same email or username already exists
            let existingUser = await User.findOne({ $or: [{ email: email }, { username: username }] });
            if (existingUser) {
                if (existingUser.username === username) {
                    req.flash("error", "Username already exists");
                } else {
                    req.flash("error", "Email already exists");
                }
                return res.redirect("/signup");
            }
    
            let newUser = new User({ email, username });
            const registerUser = await User.register(newUser, password);
            console.log(registerUser);
            req.login(registerUser, (err) => {
                if (err) {
                    return next(err);
                }
                req.flash("success", "Welcome to TravelNest!");
                res.redirect("/listings");
            });
        } catch (e) {
            req.flash("error", e.message);
            res.redirect("/signup");
        }
    },

    renderLoginForm: (req, res) => {
        res.render("users/login.ejs");
    },

    login: async (req, res) => {
        req.flash("success", "Welcome back to TravelNest!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl); // Fixing the redirection here
    },

    logout: (req, res, next) => {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "You are logged out.");
            res.redirect("/listings");
        });
    }
};
