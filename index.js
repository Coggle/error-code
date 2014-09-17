
Error.prototype.code = function(val) {
  if (val) {
    this._errorCode = val;
    return this;
  } else return this._errorCode ? this._errorCode : 500;
}