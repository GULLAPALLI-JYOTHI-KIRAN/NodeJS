/* Creating Controllers for routes */


const Book=require("../Models/books")
const getAllBooks=async(req,res)=>{

    try{

const allBooks=await Book.find({});
if(allBooks.length>0){
    res.status(200).json({
        success:true,
        message:"All Book in the Store",
        data:allBooks
    })
}else{
    res.status(200).json({
        success:true,
        message:"No records available in the store",

    })
}
    }catch(e){
    res.status(500).json({success:false,message:`Something went Wrong .Please try again. `,
        error:e.message
    })
}
    
}

const getSingleBooksByID=async(req,res)=>{
    try{
        const BookId=req.params.id
    
    const findBookById=await Book.findById(BookId);
if(findBookById){
    res.status(200).json({
        success:true,
        message:"Record Found.",
        data:findBookById,
    })
}
else{
    res.status(200).json({
        success:true,
        message:"No Records Found",
    })
}
    }catch(e){
    res.status(500).json({success:false,message:`Something went Wrong .Please try again. `,
        error:e.message
    })
}


}

const AddNewBook=async(req,res)=>{
try{

    console.log(req.body)
    const newBookData=req.body;
    const addedBook=await Book.create(newBookData);
    if(!newBookData){
        res.status(403).json({
            success:false,
            message:"Book Not added to DB,form data not passed properly."
        })
    }else{
        res.status(201).json({
            success:true,
            message:"New Book is added to DB",
            data:addedBook
        })
    }

}catch(e){
    res.status(500).json({success:false,message:`Something went Wrong .Please try again. `,
        error:e.message
    })
}

}

const UpdateBook=async(req,res)=>{
    try{
         const BookId=req.params.id
         const updateBody=req.body;

         const UpdatedBook=await Book.findByIdAndUpdate(BookId,updateBody,{new:true})
         if(UpdatedBook){
            res.status(201).json({
                success:true,
                message:"Content Updated.",
                data:UpdatedBook
            })
         }

    }catch(e){
         res.status(500).json({success:false,message:`Something went Wrong .Please try again. `,
        error:e.message
    })
    }

}

const DeleteBook=async(req,res)=>{

    try{

        const BookId=req.params.id
        const deletedBook=await Book.findByIdAndDelete(BookId,{new:true});
        if(deletedBook){
             res.status(200).json({
            success:true,
            message:"Book is removed from DB",
            data:deletedBook
        })
        }

    }catch(e){
         res.status(500).json({success:false,message:`Something went Wrong .Please try again. `,
        error:e.message
    })
    }

}


module.exports={getAllBooks,getSingleBooksByID,AddNewBook,UpdateBook,DeleteBook}
