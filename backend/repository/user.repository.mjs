import User from "../models/user.model.mjs";
import { REGEX } from "../constants/constants.mjs";

const saveUser = async (user) => {
	try {
		const savedUser = await User.create(user);
		return savedUser;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

const getUserById = async (id) => {
    try {
        // Step 1: Validate the MongoDB ObjectId
        const validationResult = validateMongoObjectID(id);

        // Check if validation failed based on the returned object's structure
        if (validationResult.errors) {
            // Return a structured error object for an invalid ID
            return {
                user: null,
                error: {
                    statusCode: 400,
                    message: validationResult.message,
                    errors: validationResult.errors
                }
            };
        }

        // Step 2: Query the database for the user
        const user = await User.findById(id).select("-password");

        // Step 3: Handle user not found case
        if (!user) {
            // Return a structured error for a user not found
            return {
                user: null,
                error: {
                    statusCode: 404,
                    message: "User not found"
                }
            };
        }

        // Step 4: Return the user on success
        return { user, error: null };

    } catch (error) {
        // Step 5: Handle unexpected server-side errors
        console.error("[Repository Error] getUserById:", error);
        return {
            user: null,
            error: {
                statusCode: 500,
                message: "Internal server error"
            }
        };
    }
};

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const checkUserExists = async (email) => {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export { saveUser, getUserById, getUserByEmail, checkUserExists };