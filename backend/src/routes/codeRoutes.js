import express from "express";

const router = express.Router();

router.post("/run-code", async (req, res) => {
  try {
    const { code, language } = req.body;

    res.json({
      success: true,
      output: `Code received successfully!\n\nLanguage: ${language}\n\n${code}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;