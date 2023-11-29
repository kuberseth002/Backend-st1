const express = require('express')
const mongoose = require('mongoose')
const Book = require('./model/booksmodel')
const book = require('./model/booksmodel')

const app = express()

app.use(express.json())


//routes
// get operation

app.get('/books', async(req,res)=>{
    try{
        const book = await Book.find({});
        res.status(200).json(products)
       }catch(error){
        res.status(500).json({message: error.message})
    
       }
    })


    //Read operation 

app.post('/books/:id', async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        res.status(200).json(product)
       }catch(error){
        res.status(500).json({message: error.message})
    
       }
    })


    //update operation

app.put('/books/:id',async(req, res)=>{
    try{
        const {id} = req.params;
        const product = await Book.findByIdAndUpdate(id,req.body);
         //we cannot find any product in database
         if(!book){
            return res.status(404).json({message:`cannot find any product with ID ${id}`})
        }
        const updateBook = await Book.findById(id);
        res.status(200).json(updateBook);

    }catch(error){
        res.status(500).json({message:error.message});
      
    }
})


//delete operation

app.delete('/books/:id',async(req,res)=>{
    try{
        const{id}=req.params;
        const book=await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({message:`cannot find any book ${id}`})
        }
        res.status(200).json(book);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})



 
app.listen(3000,()=>{
    console.log(`Node Api is running on port 3000`)
})


mongoose.connect('mongodb+srv://kuber0804:dw40SH2ATNXT6iFd@cluster0.ghs3cuq.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to Mongodb')
}).catch((error)=>{
    console.log(error)
})





