export default function () {
  return `
  @page {
    margin: 0 10mm;
  }
  .measureSty {
    margin-top: 10mm;
  }
  .personSty {
    height: 65mm;
    > :first-child {
      margin: 15mm 0 !important;
    }
  }
  .tableSty {
    height: 70mm;
    margin-top: 5mm;
    .tip {
      font-size: 3mm !important;
    }
  }
  /*最后一列*/
  .el-table th.el-table__cell > .cell,.el-table td.el-table__cell div {
    width: 49.3mm;
  }
  /* 第一列  */ 
  .el-table--border .el-table__cell:first-child .cell {
    width: 31.5mm;
  }
  /* 检测意见 */ 
  .resSty {
    height: 60mm;
    justify-content: center;
  }
  /* 检测意见标题 */ 
  .titNav {
    font-size: 5mm !important;
  }
  /* 最后一行 */ 
  .docSty {
    height: 14mm;
    font-size: 3mm;
  }
  `
}
