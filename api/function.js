export default async function handler(req, res) {
    try {
        const apiKey = process.env.API_KEY;
        const { prompt } = req.query;
        // Fetch data
        const response = await fetch(`https://api.okeymeta.com.ng/api/ssailm/model/okeyai3.0-vanguard/okeyai?input=${prompt}`, {
            method: "GET",
            headers: {
                "Authorization": apiKey
            }
        });
        const data = await response.text();
        data = JSON.parse(data);
        // Send data to frontend
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}