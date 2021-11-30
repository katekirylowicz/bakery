const getAssetPath = function getAbsoluteAssetPath(assetFileName) {
  return `${process.env.PUBLIC_URL}/assets/${assetFileName}`;
}

export default getAssetPath;