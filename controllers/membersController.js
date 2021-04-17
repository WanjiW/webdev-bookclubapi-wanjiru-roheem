// the functions for our functions
import Member from "../models/Members.js";


// add a member // old syntax for functions
// export makes the function accessible
// export function addMember(req, res){
//     console.log(req.body);
//     res.send(req.body);
// }

// new as of march7
export async function addMember(req, res){
    try{
        let member = await Member.create(req.body);
        if(member){
            res.status(200).json ({// if memeber is created successfully
                success: true,
                message: "Member created successfully",
                data: member
            })
        }else {
            res.status(200).json({
                success: true,
                message: "Member could not be created at this time"
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
export async function viewMember(req, res){
    try{
        let allmembers = await Member.findAll({where: {MemberID: req.params.id}});
        if (allmembers){
            res.json({
                success: true,
                message: "Member list retrieved successfully",
                data: allmembers
            })
        } else{
            res.json({
                success: true,
                message: "Member list not found"
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
export async function viewAllMembers (req, res){
    try{
        let allmembers = await Member.findAll();
        if (allmembers){
            res.json({
                success: true,
                message: "Member list retrieved successfully",
                data: allmembers
            })
        } else{
            res.json({
                success: true,
                message: "Member list not found"
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

// export function updateMember(req, res){
//         console.log(req.body);
//         res.send(req.body);
//     }

export async function updateMember (req, res){
    try{
        let updatemember = await Member.update(req.body, {where: {MemberID: req.params.id}})
        if (updatemember){
            res.json({ 
                success: true,
                message: "Feature has been changed",
                data: updatemember
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


export async function deleteMember (req, res){
    try{
        let themember = await Member.destroy({where: {MemberID: req.params.id}});
        if (themember){
            res.json({
                success: true,
                message: "Member has been deleted",
                data: themember
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