function escapeRegex(values) {
  return values.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

module.exports = escapeRegex;
