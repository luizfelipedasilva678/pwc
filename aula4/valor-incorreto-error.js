class ValorIncorretoError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValorIncorretoError";
  }
}
