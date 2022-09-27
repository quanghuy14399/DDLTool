const tableListReposistory = require("src/reposistories/table.list.repository.js");
const tableRegistrationReposistory = require("src/reposistories/table.registration.repository.js");
const sqlConstant = require("src/constants/sql.constant.js");
const msgConstant = require("src/constants/messages.constant.js");

let createTableMst = async (resBody) => {
  let strDRPTBL = "";
  let strDRPIDX01 = "";
  let strDRPIDX02 = "";
  let strDRPIDX03 = "";
  let strDRPIDX04 = "";
  // let strCRE;
  // IDX04 = "";
  let strTBLNM = ""; // ﾃδｰﾃ古榲吮督ｼﾂ湘・
  let strTBL = ""; // ﾃδｰﾃ古榲吮凖ｨ窶ｹ`窶督ｼ
  let optSeqKeyFlg = 0; // ﾂ「OPTIMIZE_FOR_SEQUENTIAL_KEYﾂ」窶堙個「ON, OFFﾂ」ﾆ稚ﾆ停ｰﾆ丹
  let strDB = "";
  let strDBchk = "";
  // let comKm;
  // let OutFn;
  let chkExistTable; // TBLext TBL存在チェック
  // let strPKY = "";
  // let strTablePK = "";
  // let arrPKeys = [];
  let arrTableColInfos = [];
  console.log(" Running function createTableMst... ");
  //------------------------
  //  ﾆ恥ﾆ停ｰﾆ陳・ーﾆ耽ﾂ静昶凖ｨ
  // ------------------------
  // DB窶督ｼ
  try {
    // if (shoriKbn !== 1 && shoriKbn !== 2) {
    //   return await msgConstant.getError93(strTBL, strDB);
    // }
    RtnCd = 0;
    strDB += resBody.databaseName;
    if (strDB == "") {
      strDB = "SagawaCoreSystem";
    } else {
      strDBchk += strDB.replace("_", "");
      var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (format.test(strDBchk)) {
        return await msgConstant.getError91(strTBL, strDB);
      }
    }
    // 窶ｹﾂ､窶凖環坂ぎ窶禿堋（1ﾂ：ﾅｽg窶廃ﾂ）
    // comKm = resBody.cmnItemFlg;
    // ﾂ出窶氾哉稚ﾆ叩ﾆ辰ﾆ停ｹ窶督ｼﾂ（1ﾂ：ﾆ弾ﾂーﾆ置ﾆ停ｹ窶督ｼﾂ、ﾋ・闇Oﾂ：ﾆ歎ﾂーﾆ暖窶督ｼﾂ）
    // OutFn = "1";
    // TBL窶伉ｶﾂ催敞蛋ﾆ巽ﾆ鍛ﾆ誰窶堙娯牌ﾂ・窶｢s窶牌
    chkExistTable = resBody.checkExistTable;
    // =================
    // ﾂ・ﾃδｰﾃ古榲吮督ｼﾂ湘・
    // ﾂ・ﾃδｰﾃ古榲吮凖ｨ窶ｹ`
    // =================
    strTBLNM += resBody.tableName;
    strTBL += resBody.tableDefinitionName;

    // if (ShoriKbn === 2) {
    //   strTBLNM = strTBLNM + sqlConstant.CNS_RRKNM;
    //   strTBL = sqlConstant.CNS_RRK + "_" + strTBL;
    // }

    // DROP窶｢ﾂｶ
    if (chkExistTable == 1) {
      strDRPTBL += sqlConstant.CNS_DRPTBL + strTBL + sqlConstant.CNS_KK2;
    } else {
      strDRPTBL += sqlConstant.CNS_DRPTBL2 + strTBL + sqlConstant.CNS_KK2;
    }
    // CREATE窶｢ﾂｶ
    // strCreateTable = sqlConstant.CNS_CRE + strTBL + sqlConstant.CNS_KK2;
    await resBody.tableColInfos.forEach((element) => {
      let strCreteColumn =
        sqlConstant.CNS_KK1 +
        element.columnDefineName +
        sqlConstant.CNS_KK2 +
        sqlConstant.CNS_SPC +
        sqlConstant.CNS_KK1 +
        element.dataType +
        sqlConstant.CNS_KK2;

      if (
        element.size !== null &&
        element.size !== "null" &&
        element.size !== ""
      ) {
        strCreteColumn +=
          sqlConstant.CNS_SPC +
          sqlConstant.CNS_KK3 +
          element.size +
          sqlConstant.CNS_KK4;
      }

      if (element.allowNulls === null) {
        strCreteColumn += sqlConstant.CNS_SPC + "NULL";
      } else {
        strCreteColumn += sqlConstant.CNS_SPC + "NOT NULL";
      }

      if (element.defaultValue != null && element.defaultValue !== "null") {
        strCreteColumn += sqlConstant.CNS_SPC + "DEFAULT" + sqlConstant.CNS_KK3;
        if (element.defaultValue === "") {
          strCreteColumn += "''";
        } else {
          strCreteColumn += element.defaultValue;
        }
        strCreteColumn += sqlConstant.CNS_KK4;
      }

      if (element.identity !== null) {
        optSeqKeyFlg = 1;
      }
      arrTableColInfos.push(strCreteColumn);
    });

    if (resBody.fieldKey.s1.length > 0) {
      strDRPIDX01 += await getStrDropIndex(
        chkExistTable,
        "IDX01",
        resBody.tableName
      );
    }
    if (resBody.fieldKey.s2.length > 0) {
      strDRPIDX02 += await getStrDropIndex(
        chkExistTable,
        "IDX02",
        resBody.tableName
      );
    }
    if (resBody.fieldKey.s3.length > 0) {
      strDRPIDX03 += await getStrDropIndex(
        chkExistTable,
        "IDX03",
        resBody.tableName
      );
    }
    if (resBody.fieldKey.s4.length > 0) {
      strDRPIDX04 += await getStrDropIndex(
        chkExistTable,
        "IDX04",
        resBody.tableName
      );
    }
    return {
      strDB: strDB,
      strTBLNM: strTBLNM,
      strTBL: strTBL,
      strDRPTBL: strDRPTBL,
      arrTableColInfos: arrTableColInfos,
      arrP: resBody.fieldKey.p,
      arrS1: resBody.fieldKey.s1,
      arrS2: resBody.fieldKey.s2,
      arrS3: resBody.fieldKey.s3,
      arrS4: resBody.fieldKey.s4,
      arrColumnInfos: resBody.tableColInfos,
      optSeqKeyFlg: optSeqKeyFlg,
      excuteDate: resBody.excuteDate,
      strDRPIDX01: strDRPIDX01,
      strDRPIDX02: strDRPIDX02,
      strDRPIDX03: strDRPIDX03,
      strDRPIDX04: strDRPIDX04,
    };
  } catch {}
};

const getStrDropIndex = async (chkFlag, strIdx, tableName) => {
  let strDRPIDX = "";
  if (chkFlag === 1) {
    strDRPIDX += sqlConstant.CNS_DRPIDX + strIdx + tableName;
  } else {
    strDRPIDX += sqlConstant.CNS_DRPIDX02 + strIdx + tableName;
  }
  strDRPIDX += sqlConstant.CNS_CRE2 + tableName + sqlConstant.CNS_KK2;
  return strDRPIDX;
};

const executeTableRegistrationService = async (req) => {
  console.log(" Start table registration service... ");
  try {
    for (const iterator of req.body) {
      const tableColInfo = await createTableMst(iterator);
      const result =
        await tableRegistrationReposistory.executeTableRegistrationRepository(
          tableColInfo
        );
      if (result.httpStatuscode === 200) {
        console.log(" Start inserting history... ");
        const insertParams = {
          databaseName: iterator.databaseName,
          tableName: iterator.tableDefinitionName,
          description: iterator.remarks,
          tableInfo: iterator,
        };
        return await tableListReposistory.insertTableListRepository(
          insertParams
        );
      } else {
        return {
          httpStatuscode: 200,
          data: {
            statusCode: result.httpStatuscode,
            errorCode: result.data.errorCode,
            errorMessage: result.data.errorMessage,
          },
        };
      }
    }
    // await req.body.forEach(async (element) => {

    // });
  } catch (error) {
    console.log(" Table registration service ERROR!!!", error.message);
    return {
      httpStatuscode: 200,
      data: {
        statusCode: 400,
        errorCode: "SQL-ERROR",
        errorMessage: error.message,
      },
    };
  }
};

module.exports = {
  executeTableRegistrationService,
};
