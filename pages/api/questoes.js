import connect from "../../utils/database"


export default async (req, res) => {
    const {db} = await connect();
    const { aula = 0 } = req.query;   

    console.log(aula)

    const data = await db
        .collection('questoes')
        .find()
        .filter({aula_id: parseInt(aula)})
        .toArray();

    res.send(data)
}