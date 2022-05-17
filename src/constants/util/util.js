import { tabList } from "../../constants";

function formatCurrency(price) {
  const formattedPrice = price.toLocaleString('it-IT', {
      style: 'currency',
      currency: 'VND'
    })
    .replace("VND", "₫")
    .replace(/\s+/g, '');
  return formattedPrice
}


function splitMulti(str, tokens) {
  var tempChar = tokens[0];
  for (let i = 1; i < tokens.length; i++) {
    str = str.split(tokens[i]).join(tempChar);
  }
  str = str.split(tempChar);
  return str;
}

function getWindowHref() {
  let href = window.location.href
  const splitHrefArr = splitMulti(href, ['/', '?'])
  if (splitHrefArr[splitHrefArr.length - 1] === '') {
    if (splitHrefArr[3] === '') {
      return {
        direct: tabList.HOME_NO_ACCENTS, //Lấy thẳng cái đường dẫn cuối luôn
        arrPathSplit: splitHrefArr,
        page: tabList.HOME_NO_ACCENTS,
        tab2: splitHrefArr[4],
        pageAssistance: splitHrefArr[5]
      }
    } else {
      return {
        direct: splitHrefArr[splitHrefArr.length - 1], //Lấy thẳng cái đường dẫn cuối luôn
        arrPathSplit: splitHrefArr,
        page: splitHrefArr[3],
        tab2: splitHrefArr[4],
        pageAssistance: splitHrefArr[5]
      }
    }

  } else {
    if (splitHrefArr[3] === '') {
      return {
        direct: tabList.HOME_NO_ACCENTS, //Lấy thẳng cái đường dẫn cuối luôn
        arrPathSplit: splitHrefArr,
        page: tabList.HOME_NO_ACCENTS,
        tab2: splitHrefArr[4],
        pageAssistance: splitHrefArr[5]
      }
    } else {
      return {
        direct: splitHrefArr[splitHrefArr.length - 1], //Lấy thẳng cái đường dẫn cuối luôn
        arrPathSplit: splitHrefArr,
        page: splitHrefArr[3],
        tab2: splitHrefArr[4],
        pageAssistance: splitHrefArr[5]
      }
    }

  }
}

export default {formatCurrency, splitMulti, getWindowHref}