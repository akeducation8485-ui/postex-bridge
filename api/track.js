export default async function handler(req, res) {
  const tracking = req.query.tracking || "no-tracking";
  res.status(200).json({
    ok: true,
    tracking: tracking
  });
}
