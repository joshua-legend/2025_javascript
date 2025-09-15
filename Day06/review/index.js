function quiz1(alphabet) {
  if (alphabet == alphabet.toUpperCase()) {
    return `${alphabet}는(은) 대문자입니다.`;
  } else {
    return `${alphabet}는(은) 소문자입니다.`;
  }
}

function quiz2(x, y) {
  if (x.includes(y)) {
    return `${x}에는(는) ${y}가 포함되어 있습니다.`;
  } else {
    return `${x}에는(는) ${y}가 포함되어 않습니다.`;
  }
}

function quiz3(email) {
  if (email.includes("@")) {
    return `${email}은(는) 올바른 이메일 형식입니다.`;
  } else {
    return `${email}은(는) 올바르지 않은 이메일 형식입니다.`;
  }
}
