import express, { NextFunction, Request, Response } from 'express'
const app = express();
const port = 3000;



//parsers
app.use(express.json());
app.use(express.text());


//app router in express

const userRouter = express.Router();
app.use("/api/v1/users", userRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
const user = req.body;
console.log(user);
res.json({
    success:true,
    message:"User is created successfully",
    data:user,
})
})

//express middle wire
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}


// app.get("/", (req:Request, res:Response)=>{
//     res.send("Hello world my")
// });

//get url using params

// app.get("/:UserId",(req:Request, res:Response)=>{
//     console.log(req.params)
// });

//query
app.get("/", logger,  async(req: Request, res: Response, next:NextFunction) => {
   try{
    res.send("something")
   }catch(error){
   
    next(error)
   }
});

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: "Successfully received data"
    })
})

//rout error
app.all("*", (req:Request, res:Response)=>{
    res.status(400).json({
        success:false,
        message:"Route is not found"
    })
})


//global error handler
app.use((error:any, req:Request, res:Response, next:NextFunction)=>{
   if(error){
    res.status(400).json({
        success:false,
        message:"Something went wrong"
    })
   }
})

export default app;