var content = [{title: "A little ditty about a girl and a wolf", message: "The wolf huffed and he puffed but the house wouldn't budge."},
				{title: "Grocery List", message: "<li>eggs</li><li>pizza dough</li><li>sauce</li><li>almond milk</li><li>bacon</li>"},
				{title: "To-Do", message: "Pick up the kids from soccer practice, 8 p.m."},
				{title: "Jack and Diane", message: "John Kruger Melloncamp is the death of me. I am dead."},
				{title: "Fostering a dog", message: "<li>Chocolate Lab</li><li>Labradoodle</li><li>Beagle-hound mix</li>"},
				{title: "Moving List", message: "<li>meet new landlord</li><li>book truck rental</li><li>send rent check</li><li>switch electric provider</li>"},
				{title: "Green Eggs and Ham", message: "You can eat it on Sunday. You can eat it on Monday. You can eat it on bread..."},
				{title: "The Adventurers Book Report", message: "Due Friday, October 12th."},
				{title: "30Rock Binge-watch Marathon", message: "This is the last time. You promised yourself!"}]

var LogoView = Backbone.View.extend({
	className: "logo",
	tagName: "h1",
	template: _.template("<%= logo %>"),
	initialize: function(data) {
		this.render(data);
	},
	render: function(data) {
		var data = {logo: "Brett Haymaker"};
		this.$el.html(this.template(data));
		row = $('.row')[0];
		$(row).html(this.$el);
	}

});

var CardViewHalf = Backbone.View.extend({
	className: "block-half shadow",
	tagName: "article",
	template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
	initialize: function(data) {
		this.render(data);
	},
	render: function(data) {
		var data = content[Math.floor(content.length*Math.random())];
		red = Math.floor(Math.random()*255);
		green = Math.floor(Math.random()*255);
		blue = Math.floor(Math.random()*255);
		this.$el.css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
		this.$el.html(this.template(data));
		row = $('.row')[0];
		$(row).append(this.$el);
	}
});


var CardViewThird = Backbone.View.extend({
	className: "block-third shadow",
	tagName: "article",
	template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
	initialize: function(data) {
		this.render(data);
	},
	render: function(data) {
		var data = content[Math.floor(content.length*Math.random())];
		red = Math.floor(Math.random()*255);
		green = Math.floor(Math.random()*255);
		blue = Math.floor(Math.random()*255);
		this.$el.css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
		this.$el.html(this.template(data));
		row = $('.row')[1];
		$(row).append(this.$el);
	}
});


var CardViewQuarter = Backbone.View.extend({
	className: "block-quarter shadow",
	tagName: "article",
	template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
	initialize: function(data) {
		this.render(data);
	},
	render: function(data) {
		var data = content[Math.floor(content.length*Math.random())];
		red = Math.floor(Math.random()*255);
		green = Math.floor(Math.random()*255);
		blue = Math.floor(Math.random()*255);
		this.$el.css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
		this.$el.html(this.template(data));
		row = $('.row')[2];
		$(row).append(this.$el);
	}
});


$(document).ready(function(event) {
var logo = new LogoView();
var card00 = new CardViewHalf();
var card01 = new CardViewHalf();
var card02 = new CardViewThird();
var card03 = new CardViewThird();
var card04 = new CardViewThird();
var card05 = new CardViewQuarter();
var card06 = new CardViewQuarter();
var card07 = new CardViewQuarter();
var card08 = new CardViewQuarter();
});