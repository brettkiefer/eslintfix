let foo;
exports.foobar = (foo = function(bar) {
      if (bar.baz) { return "barbaz"; } else { return "not really barbaz"; }
});
