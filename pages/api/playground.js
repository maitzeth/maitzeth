import axios from "axios";
import useApiErrorHandler from "../../helpers/useApiErrorHandler";

const token = "6c2252cd43c93195e151e912234f84342ae888c6";

const handlePlayground = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const GIT_URL = "https://api.github.com";
    const response = await axios.get(`${GIT_URL}/users/maitzeth/repos`, config);

    res.status(200).json(response.data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default useApiErrorHandler(handlePlayground);
