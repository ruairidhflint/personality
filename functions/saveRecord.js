require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_API_BASE);
const table = base.table(process.env.AIRTABLE_API_TABLE);

exports.handler = async (event) => {
  try {
    await table.create(
      JSON.parse(event.body)
    );
    return {
      statusCode: 201,
      body: JSON.stringify('Success'),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify('goodbye! - ', err),
    };
  }
};
