
  
  const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  };
  
  const MESSAGES = {
    SUCCESS: "Operation successful.",
    USER_NOT_FOUND: "User not found.",
    UNAUTHORIZED: "You are not authorized to perform this action.",
    FORBIDDEN: "Access denied.",
    INVALID_INPUT: "Invalid input provided.",
    SERVER_ERROR: "Server Error, please try again later.",
    USER_ALREADY_EXISTS: "User already exists.",
  };
  
  const AUTH = {
    ACCESS_TOKEN_EXPIRY: "4h",
    REFRESH_TOKEN_EXPIRY: "7d",
  };
  
  const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100,
  };
  
  
  const UPLOADS = {
    MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_FILE_TYPES: ["image/jpeg", "image/png", "application/pdf"],
  };
  
  const ENV = {
    DEV: "development",
    PROD: "production",
    TEST: "test",
  };

  const REGEX = {
    EMAIL: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    PHONE: /^[1-9]\d{9}$/, 
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;:'",.<>/?~`])(?=.{8,})/,
    MONGO_ID: /^[a-fA-F\d]{24}$/,
    MONGO_ID_2: /^[a-f\d]{24}$/i,
  };
  
  
  export {
    HTTP_STATUS,
    MESSAGES,
    AUTH,
    PAGINATION,
    UPLOADS,
    ENV,
    REGEX
  };
  