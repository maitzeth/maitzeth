import axios from 'axios';


export default async (req, res) => {

  const GIT_URL = 'https://api.github.com'

  const response = await axios.get(`${GIT_URL}/orgs/octokit/repos`);


  res.status(200).json(response.data);
};