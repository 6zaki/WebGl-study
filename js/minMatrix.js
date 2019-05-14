function create_program(vs, fs) {
  // プログラムオブジェクトの生成
	var program = gl.createProgram();

  // プログラムオブジェクトにシェーダを割り当てる
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);

  // シェーダをリンク
	gl.linkProgram(program);

  // シェーダのリンクが正しく行なわれたかチェック
	if(gl.getProgramParameter(program, gl.LINK_STATUS)) {
    // 成功していたらプログラムオブジェクトを有効にする
		gl.userProgram(program);
    // プログラムオブジェクトを返して終了
		return program;
	} else {
    // 失敗していたらエラーログをアラートする
		alert(gl.getProgramInfoLog(program));
	}
}