class ApiError extends Error {
  statusCode: number;
  message: string;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.stack = process.env.NODE_ENV === "development" ? this.stack : "";
  }
}

export default ApiError;
