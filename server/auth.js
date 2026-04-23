const jwt = require("jsonwebtoken");

function getJwtSecret() {
  return process.env.JWT_SECRET || "dev-only-secret-change-me";
}

function signAuthToken(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, role: user.role, displayName: user.displayName },
    getJwtSecret(),
    { expiresIn: "7d" }
  );
}

function requireAuth(req, res, next) {
  const auth = req.headers.authorization || "";
  const [scheme, token] = auth.split(" ");
  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    req.user = jwt.verify(token, getJwtSecret());
    next();
  } catch (_err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

function requireRole(roles) {
  return function roleGuard(req, res, next) {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
    next();
  };
}

module.exports = {
  signAuthToken,
  requireAuth,
  requireRole
};
