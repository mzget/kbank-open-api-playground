import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let { method, body } = req;

  switch (method) {
    case "GET":
      res.status(200).json({});
      break;
    case "POST":
      console.log(body);
      res.writeHead(301, { Location: "/path" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
