export default function handler(req, res, next) {
    // ONLY ALLOW GET REQUESTS
    if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET');
        return res.status(405).json({
            error: 'Method not allowed',
        });
    }
    next();
}
