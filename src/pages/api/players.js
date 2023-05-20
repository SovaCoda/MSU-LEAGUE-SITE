import { connectToDb, getDb } from ".//dbinfo";

export default async function handler(req, res) {
    try {
        // Ensure the database is connected
        if (!getDb()) {
            await connectToDb();
        }
        const { name } = req.query;

        const db = getDb();
        const collection = db.collection("players");
        let player = await collection.findOne({ name });

        if (!player) {
            let newPlayer = {
                name: name,
            };
            await collection.insertOne(newPlayer);
            player = newPlayer;
        }
        
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}