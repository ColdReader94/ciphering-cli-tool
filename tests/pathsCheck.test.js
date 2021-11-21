import pathsCheck from "../src/pathsCheck.js";

describe('Provided paths check', () => {
   const mockConsoleOutput = jest.spyOn(process, 'exit').mockReturnValue(0);
   const mockConsoleOutputWrong = jest.spyOn(process, 'exit');

    it('should throw repeated arguments error', () => {
       process.argv = ['node', 'index.js', '-c', 'A-C1', '-c', 'A-R0', '-i', 'input.txt', '-o', 'output.txt']      
       expect(done => { pathsCheck(); 
         done()}).toThrowError("Arguments must not repeat!");
    })

    it('should throw wrong input path error', () => {
       process.argv = ['node', 'index.js', '-c', 'A-C1', '-i', 'sdfdsfs.txt', '-o', 'output.txt']      
       expect(done => { pathsCheck(); 
       done()}).toThrowError("ENOENT: no such file or directory, stat 'sdfdsfs.txt'");
    });

    
    it('should throw wrong output path error', () => {
       process.argv = ['node', 'index.js', '-c', 'A-C1', '-i', 'input.txt', '-o', 'dfsasfdaf.txt']      
       expect(done => { pathsCheck();
       done()}).toThrowError("ENOENT: no such file or directory, stat 'dfsasfdaf.txt'");
    })

   it('should execute ok', () => {
      process.argv = ['node', 'index.js', '-c', 'A-C1', '-i', 'input.txt', '-o', 'output.txt'];
      expect(
         mockConsoleOutput()).toBe(0)
   })
  })