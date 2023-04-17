let s = new Set();

s.add(10);
s.add(20);
s.add(30);
s.add("sarthak");
s.add(false);
s.add(undefined);
s.add(null);

s.forEach((item) => {
  console.log(item);
});

console.log(s.keys());

console.log(s.entries());

console.log(s.values());
//s.clear();

s.delete(false);
console.log(s);
