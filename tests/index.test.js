const request = require("supertest")

const {app,server} = require("../src/index")


afterAll((done) => {
    server.close(() => {
      console.log("Server closed.");
      done();
    });
  });


describe("Express app tests", ()=>{


describe("GET /",()=>{
    it("should return Hello World!!",async ()=>{
        const response = await request(app).get("/");
         // Log the response to see what was returned
      console.log("Response Status:", response.status);
      console.log("Response Body:", response.body);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({msg:"Hello World!!"})
    })
})    


describe("GET /greet/:name" , ()=>{
    const names=["Dimitris","Sakis","Alekos"]
   for (const name of names){
    it(`Should greet ${name} with the correct message`,async ()=>{
        const response = await request(app).get(`/greet/${name}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ msg: `Hello ${name}!` });
    })
   }
})

describe("GET /greeting",()=>{
    const users =[
        {name:"John",age:35},
        {name: "Alice",age:30},
        {name: "Tom",age:55}
    ]

    users.forEach((user)=>{
        it(`Should greet ${user.name} with afe ${user.age}`,async ()=>{
            const response =await request(app).get(`/greeting?name=${user.name}&age=${user.age}`)
            expect(response.status).toBe(200)
            expect(response.body).toEqual({msg:`Hello my name is ${user.name} and I'm ${user.age} years old.`})
        })
    })
})


describe("POST /greet",()=>{
    const users =[
        {name:"John",age:35},
        {name: "Alice",age:30},
        {name: "Tom",age:55}
    ]

    users.forEach((user)=>{
        it(`should greet ${user.name} with age ${user.age}`, async()=>{
            const response =await request(app).post("/greet").send({name:user.name,age:user.age});

            expect(response.status).toBe(200)
            expect(response.body).toEqual({
                msg: `Hello my name is ${user.name} and I'm ${user.age} years old.` 
            })
        })
    })
})

})