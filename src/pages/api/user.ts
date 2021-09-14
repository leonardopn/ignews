import { NextApiRequest, NextApiResponse } from "next";

export default function route(req: NextApiRequest, res: NextApiResponse) {
    const user = [
        { id: 1, name: "Leonardo" },
        { id: 2, name: "Diego" },
        { id: 3, name: "Júlia" },
    ];
    res.json(user);
}
