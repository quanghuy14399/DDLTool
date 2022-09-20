let getError90 = async (strTBL) => {
  return {
    httpStatuscode: 400,
    rtnCd: 90,
    MsgBox:
      "ﾆ弾ﾂーﾆ置ﾆ停ｹ窶凖ｨ窶ｹ`窶督ｼﾂ：" + strTBL + "DDLﾂ催ｬﾂ青ｬﾆ竪ﾆ停ｰﾂーﾂ：90 ",
  };
};

let getError91 = async (strTBL, strDB) => {
  return {
    httpStatuscode: 400,
    rtnCd: 91,
    MsgBox:
      "ﾆ弾ﾂーﾆ置ﾆ停ｹ窶凖ｨ窶ｹ`窶督ｼﾂ：" +
      strTBL +
      "窶敖ｼﾅp窶ｰpﾂ絶敘ｽﾅ｡ﾆ蛋ﾆ巽ﾆ鍛ﾆ誰ﾆ竪ﾆ停ｰﾂーﾂ： " +
      strDB,
  };
};

let getError92 = async (strTBL, ErrShnm) => {
  return {
    httpStatuscode: 400,
    rtnCd: 92,
    MsgBox:
      "ﾆ弾ﾂーﾆ置ﾆ停ｹ窶凖ｨ窶ｹ`窶督ｼﾂ：" +
      strTBL +
      "INDEXﾂ絶昶堙娯卍ｴ窶ｰﾃ淅竪ﾆ停ｰﾂーﾂ。 " +
      "窶佚寂ｰﾅｾ窶ｰﾃや拿INDEXﾂ絶昶堙・0窶堙懌堙・。" +
      "ﾆ歎ﾂーﾆ暖ﾂ：" +
      ErrShnm,
  };
};

let getError93 = async (strTBL, strDB) => {
  return {
    httpStatuscode: 400,
    rtnCd: 93,
    MsgBox:
      "ﾆ弾ﾂーﾆ置ﾆ停ｹ窶凖ｨ窶ｹ`窶督ｼﾂ：" +
      strTBL +
      "ﾂ祥・板昶ｹﾃｦ窶｢ﾂｪﾆ竪ﾆ停ｰﾂーﾂ：" +
      strDB,
  };
};

let getError94 = async (strTBL) => {
  return {
    httpStatuscode: 400,
    rtnCd: 94,
    MsgBox:
      "ﾆ弾ﾂーﾆ置ﾆ停ｹ窶凖ｨ窶ｹ`窶督ｼﾂ：" +
      strTBL +
      "IDENTITY 窶｢ﾂ｡ﾂ絶敘ｽw窶凖ｨﾆ竪ﾆ停ｰﾂー",
  };
};

module.exports = { getError90, getError91, getError92, getError93, getError94 };
