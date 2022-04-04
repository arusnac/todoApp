
async function main() {
    const uri = "mongodb+srv://arusnac:W6pUBmFMe@rvi79@cluster0.vd33s.mongodb.net/todo?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);