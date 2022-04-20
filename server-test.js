import { Client } from 'pg';

const config = {
    host: 'mg-serve.postgres.database.azure.com',
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: 'serveradmin',
    password: 'VPig9GK7RUKXuT2',
    database: 'postgres',
    port: 5432,
    ssl: true
};

const client = new Client(config);

client.connect(err => {
    if (err) throw err;
    else queryDatabase();
});

function queryDatabase() {

    console.log(`Running query to PostgreSQL server: ${config.host}`);

    const query = 'SELECT * FROM articles;';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            console.log(rows)

            rows.map(row => {
                console.log(`Read: ${JSON.stringify(row)}`);
            });

            process.exit();
        })
        .catch(err => {
            console.log(err);
        });
}