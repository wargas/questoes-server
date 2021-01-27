import connect from "../../utils/database"

export default async (req, res) => {
    const { db } = await connect();

    const total = await db.collection('questoes').countDocuments();
    
    res.send({total})
}