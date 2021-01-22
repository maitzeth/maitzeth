const useApiErrorHandler = (fn) => async (req, res) => {
  try {
    const response = await fn(req, res);
    return response;
  } catch (error) {
    console.log(error);

    if (error.response) {
      return res.status(error.response.status).json({
        status: error.response.status,
        message: error.message,
        token: process.env.GITHUB_SECRET,
      });
    }

    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export default useApiErrorHandler;
