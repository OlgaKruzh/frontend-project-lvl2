
const getFileContent = (filePath) => fs.readFileSync(filePath, 'utf8');

const getExtension = (filePath) => {
    const basename = filePath.split(/[\\/]/).pop();
    const pos = basename.lastIndexOf('.');
    if (basename === '' || pos < 1) return '';
    return basename.slice(pos + 1);
  };

  