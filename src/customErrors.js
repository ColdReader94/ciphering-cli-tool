export class WrongConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "Config is wrong! Check config!";
    this.message = message;
  }
}

export class MissedConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "Config is not found!";
    this.message = message;
  }
}

export class WrongInputError extends Error {
  constructor(message) {
    super(message);
    this.name = "Wrong path for input!";
    this.message = message;
  }
}

export class WrongOutputError extends Error {
  constructor(message) {
    super(message);
    this.name = "Wrong path for output!";
    this.message = message;
  }
}

export class WrongAtbashCipher extends Error {
  constructor(message) {
    super(message);
    this.name =
      'Atbash cipher config shouldn`t contains any other symbols after "A"';
  }
}

export class WrongCaeserCipher extends Error {
  constructor(message) {
    super(message);
    this.name = 'Caeser cipher config should contains number 0 or 1 after "C"';
  }
}

export class WrongRot8Cipher extends Error {
  constructor(message) {
    super(message);
    this.name = 'ROT8 cipher config should contains number 0 or 1 after "R"';
    this.message = message;
  }
}

export class CliArgumentRepeatError extends Error {
  constructor(message) {
    super(message);
    this.name = "Arguments must not repeat!";
    this.message = message;
  }
}
