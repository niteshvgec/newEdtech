const jwt=require("jsonwebtoken");
require("dotenv").config();
const User=require("../models/User");

exports.auth = async (req, res, next) => {
	try {
		// Extracting JWT from request cookies, body or header
        console.log("heloo i am in auth middlewares")
		const token =
			req.cookies.token ||req.body.token ||req.header("Authorization").replace("Bearer ", "");

		// If JWT is missing, return 401 Unauthorized response
		if (!token) {
			return res.status(401).json({ success: false, message: `Token Missing` });
		}

		try {
			// Verifying the JWT using the secret key stored in environment variables
			const decode = await jwt.verify(token, process.env.JWT_SECRET);
			console.log( "your decode value",decode);
			// Storing the decoded JWT payload in the request object for further use
			req.user = decode;
		} catch (error) {
			// If JWT verification fails, return 401 Unauthorized response
			return res
				.status(401)
				.json({ success: false, message: "token is invalid" });
		}

		// If JWT is valid, move on to the next middleware or request handler
		next();
	} catch (error) {
		// If there is an error during the authentication process, return 401 Unauthorized response
		return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
	}
};

 exports.isStudent=async(req,res,next)=>{
    try{
if(req.user.accountType!=="Student"){
return res.status(401).json({
    success:false,
    message:'this is a protected routes for students only'
})
}
next();
    }
    catch(error){
return res.status(500).json({
    success:false,
    message:"user role cannot be verified"
})
    }
 }
 exports.isInstructor=async(req,res,next)=>{
    try{
        console.log("hello i am in istructor ")
        if(req.user.accountType!=="Instructor"){
        return res.status(401).json({
            success:false,
            message:'this is a protected routes for Instructors only'
        })
        }
        next();
            }
            catch(error){
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified"
        })
            }
        }


        exports.isAdmin = async (req, res, next) => {
            try {
                console.log("i am in admin section")
                const userDetails = await User.findOne({ email: req.user.email });
        
                if (userDetails.accountType !== "Admin") {
                    return res.status(401).json({
                        success: false,
                        message: "This is a Protected Route for Admin",
                    });
                }
                next();
            } catch (error) {
                return res
                    .status(500)
                    .json({ success: false, message: `User Role Can't be Verified` });
            }
        };