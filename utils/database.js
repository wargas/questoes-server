import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connect = async () => {
    if(!client.isConnected()) await client.connect();

    const db = await client.db('concursos');

    return {db, client};
}

export default connect;