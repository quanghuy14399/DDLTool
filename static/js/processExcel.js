import { readSheetNames } from 'read-excel-file'
import readXlsxFile from 'read-excel-file'

export const readFile = async () => {
    console.log('vô hàm rồi');
    const input = document.getElementById('input')

    await readSheetNames(input.files[0]).then((sheetNames) => {
        this.sheetNames = sheetNames
    })
    this.sheetNames.forEach((element) => {
        if (constant.DEFINE_UNUSED_TABLE.includes(element)) {
            return false
        }
        readXlsxFile(input.files[0], { sheet: element }).then((rows) => {
            console.log(rows)
        })
    })
}

export const nullToEmptyString = (value) => {
    return value === null ? '' : value
}