// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body;

  if (!body.email) {
    return res.status(400).json({ message: "Email was not set" });
  }
  res.status(200).json({ message: "Success" });
}
