function isValidHexColor(color) {
  return /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(color);
}

function formatColorName(name) {
  return name.trim().toLowerCase();
}

module.exports = {
  isValidHexColor,
  formatColorName,
};