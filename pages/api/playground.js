import axios from 'axios';
import useApiErrorHandler from '../../helpers/useApiErrorHandler'

const handlePlayground = async (req, res) => {
  const { method } = req;

  if (method === "GET") {
    const GIT_URL = 'https://api.github.com'
    const response = await axios.get(`${GIT_URL}/users/maitzeth/repos`);

    console.log(response);

    res.status(200).json(response.data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default useApiErrorHandler(handlePlayground);