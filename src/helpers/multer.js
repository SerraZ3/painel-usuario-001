const multer = require("multer");
const crypto = require("crypto");
const uploadConfig = require("../config/upload");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadConfig.path);
  },
  filename: (req, file, cb) => {
    // Pegar extensão do arquivo
    const extension = file.originalname.split(".")[1];
    // Gera string randomica
    const newName = crypto.randomBytes(10).toString("hex");
    // Altera o nome do arquivo para a string randomica
    cb(null, `${newName}.${extension}`);
  },
});
// const upload = multer({ dest:uploadConfig.path });
const upload = multer({ storage });

module.exports = upload;
