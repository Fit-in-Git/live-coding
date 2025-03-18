export const roleCheck = (allowedRoles) => {
  return (req, res, next) => {
    try {
      if (!req.user) return res.status(401).json({ message: "Unauthorized" });

      const userRoles = req.user.userRoles || [];
      const hasPermission = userRoles.some((r) => allowedRoles.includes(r));

      if (!hasPermission)
        return res.status(403).json({ message: "Insufficient Permission." });
      next();
    } catch (error) {
      console.error("Role Check Error:", error.message);
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
};
