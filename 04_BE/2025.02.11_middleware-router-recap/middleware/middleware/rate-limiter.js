import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 Minuten
    max: 10, // Limitiert jede ip auf 10 Anfragen (hier für 15 Minuten)
    standardHeaders: true,
    legacyHeaders: false,
    message: "Das Anfragelimit wurde erreicht, mach mal Pause!"
})