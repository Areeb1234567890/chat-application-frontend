export const getFileType = (setFileType, setDisplayFile, file) => {
  const fileType = file.type;

  if (fileType.startsWith("image/")) {
    setFileType("image");
    const reader = new FileReader();
    reader.onload = (e) => {
      setDisplayFile(e.target.result);
    };
    reader.readAsDataURL(file);
  } else if (fileType.startsWith("video/")) {
    setFileType("video");
    const reader = new FileReader();
    reader.onload = (e) => {
      setDisplayFile(e.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    setFileType("document");
    setDisplayFile(URL.createObjectURL(file));
  }
};
