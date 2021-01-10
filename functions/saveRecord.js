require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_API_BASE);
const table = base.table(process.env.AIRTABLE_API_TABLE);

exports.handler = async (event) => {
  try {
    await table.create([
      {
        fields: {
          name: 'Ruairidh Flint',
          temperament_type: 'ENTJ',
          extroversion: 7,
          introversion: 3,
          sensing: 5,
          intuition: 15,
          thinking: 15,
          feeling: 5,
          judging: 14,
          perceiving: 6,
          self_EI: 2,
          self_SN: 4,
          self_TF: 3,
          self_JP: 2,
        },
      },
      {
        fields: {
          name: 'Ruairidh Flint',
          temperament_type: 'ENTJ',
          extroversion: 7,
          introversion: 3,
          sensing: 5,
          intuition: 15,
          thinking: 15,
          feeling: 5,
          judging: 14,
          perceiving: 6,
          self_EI: 2,
          self_SN: 4,
          self_TF: 3,
          self_JP: 2,
        },
      },
    ]);
    return {
      statusCode: 201,
      body: JSON.stringify('Hello!')
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify('goodbye! - ', err),
    };
  }
};
