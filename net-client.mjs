import net, { createConnection } from "net";

const client = net.createConnection({
    port : 3000,
    host : "localhost"
});

client.on("data", (data)=>{
    console.log(`receive data from server ; ${data.toString()}`)
});

setInterval(()=>{
    client.write("Yossi \r\n");
}, 2000);

