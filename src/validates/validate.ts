export enum VALIDATE {
  MAX_LENGTH_EMAIL = 100,
  SPECIAL_PASSWORD = /(^([a-zA-Z\d@#$%&?!"])+)$/,
  FORMAT_PASSWORD = /(^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&?!"])(?=.*[a-zA-Z@#$%&?!"]).{8,32}|(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}|(?=.*\d)(?=.*[A-Z])(?=.*[@#$%&?!"])(?=.*[A-Z@#$%&?!"]).{8,32}|(?=.*\d)(?=.*[a-z])(?=.*[@#$%&?!"])(?=.*[a-z@#$%&?!"]).{8,32}$)/,
  REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}
