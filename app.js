var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {
        name: "Mosquito Creek campground",
        image: "https://www.pc.gc.ca/en/pn-np/ab/banff/activ/camping/~/media/802FD4AF791F4C6886E18CBF4A2B81B2.ashx?w=595&h=396&as=1"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    },
    {
        name: "Lazy K campground",
        image: "https://lazykcamping.com/assets/Slide-3-Field.jpg"
    }
];

app.get("/", function (req, res) {
    res.redirect("/campgrounds");
});

app.get("/campgrounds", function (req, res) {
    res.render("index", {campgrounds: campgrounds, cssFile: "index"});
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new", {cssFile: "new"});
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(3000, function () {
    console.log("Server has started!!");
});

