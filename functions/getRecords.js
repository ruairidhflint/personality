require('dotenv').config()
const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_API_BASE);
const table = base.table(process.env.AIRTABLE_API_TABLE);

exports.handler = async (event) => {
  const records = await table.select({}).firstPage();
  return {
    statusCode: 200,
    body: JSON.stringify(records),
  };
};
