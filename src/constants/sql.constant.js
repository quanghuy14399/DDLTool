module.exports = {
  CNS_SQL: "Create_Table",
  CNS_KCHO: ".sql",

  CNS_GO: "GO",
  CNS_USE1: "USE [",
  CNS_USE2: "]",
  CNS_CMTS: "/****** ",
  CNS_CMT1: "Object:  Table [dbo].[", // MST_XXX
  CNS_CMTX: "Object:  Index [", //IDX_MST_XXX
  CNS_CMT2: "]    Script Date: ", //2021/10/01 10:10:00
  CNS_CMTCNSE: " ******/",
  CNS_SET1: "SET ANSI_NULLS ON",
  CNS_SET2: "SET QUOTED_IDENTIFIER ON",
  CNS_DRPTBL: "DROP TABLE IF EXISTS [dbo].[",
  CNS_DRPTBL2: "DROP TABLE [dbo].[",
  CNS_DRPIDX: "DROP INDEX IF EXISTS [",
  CNS_DRPIDX2: "DROP INDEX [",
  CNS_CRE: "CREATE TABLE [dbo].[",
  CNS_CRE1: "CREATE NONCLUSTERED INDEX [",
  CNS_CRE2: "] ON [dbo].[",
  CNS_KK1: "[",
  CNS_KK2: "]",
  CNS_KK3: "(",
  CNS_KK4: ")",
  CNS_SPC: "  ",
  CNS_COM: ",",
  CNS_SLS: "/",
  CNS_ASC: " ASC",
  CNS_RRK: "RRK",
  CNS_RRKNM: "窶版｡窶氾ｰ",
  CNS_KARAM: "窶ｹﾃｳ", //窶ｹﾃｳ窶｢ﾂｶﾅｽﾅ｡窶敖ｻ窶凖ｨ窶廃
  CNS_NANOSEC: "(7)", //100ﾆ段ﾆ知窶｢b

  CNS_PKY0: " PRIMARY KEY CLUSTERED ",
  CNS_PKY1:
    ")WITH (PAD_INDEX : OFF, STATISTICS_NORECOMPUTE : OFF, IGNORE_DUP_KEY : OFF",
  CNS_PKY2: ", ALLOW_ROW_LOCKS : ON, ALLOW_PAGE_LOCKS : ON",
  CNS_PKY31: ", OPTIMIZE_FOR_SEQUENTIAL_KEY : ON) ON [PRIMARY]",
  CNS_PKY32: ", OPTIMIZE_FOR_SEQUENTIAL_KEY : OFF) ON [PRIMARY]",

  CNS_IDX0: "IDX0",
  CNS_IDX1:
    ")WITH (PAD_INDEX : OFF, STATISTICS_NORECOMPUTE : OFF, SORT_IN_TEMPDB : OFF",
  CNS_IDX2:
    ", DROP_EXISTING : OFF, ONLINE : OFF, ALLOW_ROW_LOCKS : ON, ALLOW_PAGE_LOCKS : ON",
  CNS_IDX31: ", OPTIMIZE_FOR_SEQUENTIAL_KEY : ON) ON [PRIMARY]",
  CNS_IDX32: ", OPTIMIZE_FOR_SEQUENTIAL_KEY : OFF) ON [PRIMARY]",

  CNS_TBL1:
    "EXEC sys.sp_addextendedproperty @name:N'MS_Description', @value:N'",
  CNS_TBL2:
    "' , @level0type:N'SCHEMA',@level0name:N'dbo', @level1type:N'TABLE',@level1name:N'",
  CNS_TBL3: "', @level2type:N'COLUMN',@level2name:N'",

  CNS_ROWE1: 7, //窶｢ﾃ陳集ﾂ行
  CNS_COLE1: 3, //窶｢ﾃ陳集窶氾ｱ
  CNS_ROWT1: 7, //ﾃδｰﾃ古榲卩Jﾅｽnﾂ行
  CNS_COLT1: 7, //ﾃδｰﾃ古榲吮督ｼﾂ湘・
  CNS_COLT2: 23, //ﾃδｰﾃ古榲吮凖ｨ窶ｹ`窶督ｼ

  CNS_ROW0: 11, //INDEX窶氾ｱﾂ絶・
  CNS_ROW1: 13, //ﾂ坂ぎ窶禿塲Jﾅｽnﾂ行
  CNS_COL1: 4, //ﾂ坂ぎ窶禿壺督ｼﾂ湘・
  CNS_COL2: 17, //ﾂ坂ぎ窶禿壺凖ｨ窶ｹ`窶督ｼ
  CNS_COL3: 27, //窶伉ｮﾂ青ｫ
  CNS_COL4: 31, //窶｢ﾂｶﾅｽﾅ｡ﾂ絶・
  CNS_COL5: 36, //KEY(P)
  CNS_COL6: 46, //NULL
  CNS_COL7: 49, //ﾂ鞘ｰﾅﾃｺ窶冤
  CNS_COL8: 52, //IDENTITY
  CNS_COLX: 38, //INDEX
};
