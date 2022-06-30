require("dotenv").config();
const Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_API_BASE);
const table = base.table(process.env.AIRTABLE_API_TABLE);

exports.handler = async () => {
  try {
    const records = await table
      .select({
        sort: [{ field: "created_at", direction: "desc" }],
        maxRecords: 50,
      })
      .firstPage();
    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
