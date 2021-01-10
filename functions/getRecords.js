const Airtable = require('airtable');

Airtable.configure({
  apiKey: 'keyCFPmGZJ0oj5oRP',
});

const base = Airtable.base('appJa8gspUJ2J8kJG');
const table = base.table('Table1');

exports.handler = async (event) => {
  const records = await table.select({}).firstPage();
  return {
    statusCode: 200,
    body: JSON.stringify(records),
  };
};
