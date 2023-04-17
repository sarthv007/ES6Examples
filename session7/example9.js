let ws = new WeakSet();

ws.add({ firstName: "sarthak" });
ws.add({ lastName: "vaidya" });
ws.add({ middleName: "yashwant" });
ws.add({ phone: "535345" });
ws.add(Symbol());

console.log(ws);
