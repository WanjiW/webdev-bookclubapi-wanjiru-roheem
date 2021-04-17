// the functions for our functions
import Books from "../models/Books.js";

// add a member // old syntax for functions
// export makes the function accessible
// export function addMember(req, res){
//     console.log(req.body);
//     res.send(req.body);
// }

// new as of march7
export async function addBook(req, res){
    try{
        let book = await Books.create(req.body);
        if(book){
            res.status(200).json ({// if memeber is created successfully
                success: true,
                message: "Book Added Successfully",
                data: book
            })
        }else {
            res.status(200).json({
                success: true,
                message: "Book could not be added"
            })
        }
        } catch (err) {
        console.log(err);
        res.status(500).json({
           success: false,
           message: "Something is wrong" 
        })
    }
}

// view a member
export async function viewBook(req, res){
    try{
        let specificbook = await Books.findAll({where: {ISBN: req.params.id}});
        if (specificbook){
            res.json({
                success: true,
                message: "Book retrieved",
                data: specificbook
            })
        } else{
            res.json({
                success: true,
                message: "Book not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
           success: false,
           message: "Something is wrong" 
        })
    }
}

// view all members
// why async?
export async function viewAllBooks (req, res){
    try{
        let allbooks = await Books.findAll();
        if (allbooks){
            res.json ({
                success: true,
                message: "Book list retrieved successfully",
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: "Book list not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
           success: false,
           message: "Something is wrong" 
        })
    }
}

//update member
export async function updateBook (req, res){
    try{
        let updatebook = await Books.update(req.body, {where: {ISBN: req.params.id}})
        if (updatebook){
            res.json({ 
                success: true,
                message: "Feature has been changed",
                data: updatebook
            })
        } else{
            res.json({
                success: true,
                message: "Member was not deleted"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong" 
        })
    }
}


// delete member
export async function deleteBook (req, res){
    try{
        let thebook = await Books.destroy({where: {ISBN: req.params.id}});
        if (thebook){
            res.json({
                success: true,
                message: "Member has been deleted",
                data: thebook
            })
        } else{
            res.json({
                success: true,
                message: "Member was not deleted"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong" 
        })
    }
}