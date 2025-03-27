require('dotenv').config();

export default async function handler(req, res) {
  const sheetUrl = process.env.SPREADSHEET_URL;

  try {
    const response = await fetch(sheetUrl);
    const text = await response.text();

    const jsonText = text.replace(/^[^\(]+\(/, '').replace(/\);$/, '');
    const data = JSON.parse(jsonText);

    res.status(200).json(data.table);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data', error: error.toString() });
  }
}
