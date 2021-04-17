import Borrowrequests from "../models/Borrowrequests.js";
import Member from "../models/Members.js";

// create a borrow request
export async function addBorrowRequest(req, res){
    try{
        let borrowrequest = await Borrowrequests.create(req.body);
        if(borrowrequest){
            res.status(200).json ({
                success: true,
                message: "Borrow request added Successfully",
                data: borrowrequest
            })
        }else {
            res.status(200).json({
                success: true,
                message: "Borrow request could not be added"
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

export async function viewBorrowRequest(req, res){
    try{
        let specificborrowrequest = await Borrowrequests.findAll({where: {RequestNumber: req.params.id}});
        if (specificborrowrequest){
            res.json({
                success: true,
                message: "Borrow request retrieved",
                data: specificborrowrequest
            })
        }else {
            res.status(200).json({
                success: true,
                message: "Borrow request could not be retrieved"
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

export async function viewAllBorrowRequests (req, res){
    try{
        let allborrowrequests = await Borrowrequests.findAll();
        if (allborrowrequests){
            res.json ({
                success: true,
                message: "Borrow request list retrieved successfully",
                data: allborrowrequests
            })
        } else {
            res.json({
                success: true,
                message: "Borrow request list not found"
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
export async function updateBorrowRequest (req, res){
    try{
        let updateborrowrequest = await Borrowrequests.update(req.body, {where: {RequestNumber: req.params.id}})
        if (updateborrowrequest){
            res.json({ 
                success: true,
                message: "Feature has been changed",
                data: updateborrowrequest
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


//view and something else

export async function viewMemberBorrowings(req, res) {
    try {
        let member = await Borrowrequests.findAll({where: {MemberID: req.params.id}});
        if (member) {
            res.json({
                success: true,
                message: 'Borrow requests retrieved successfully',
                data: member
            })
        } else {
            res.json({
                success: true,
                message: 'Borrow requests not retrieved',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: " Something is wrong"
        })
    }
}