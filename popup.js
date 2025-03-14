document.addEventListener("DOMContentLoaded", () => {
  const pickColorBtn = document.getElementById("pickColorBtn");
  const colorBox = document.getElementById("colorBox");
  const colorCode = document.getElementById("colorCode");
  const copyBtn = document.getElementById("copyBtn");

  pickColorBtn.addEventListener("click", async () => {
    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();
      colorBox.style.backgroundColor = result.sRGBHex;
      colorCode.textContent = result.sRGBHex;
    } catch (err) {
      console.error("Color selection failed", err);
    }
  });

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.textContent).then(() => {
      alert("Color copied!");
    });
  });
});
