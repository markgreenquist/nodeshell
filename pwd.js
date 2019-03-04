module.exports = function pwd () {
  const pwd = process.cwd();
  process.stdout.write(`${pwd}`);
  process.stdout.write('\nprompt > ');
}
