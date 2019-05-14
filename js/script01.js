function create_shader(id) {
  // シェーダを格納する変数
	var shader;
  // HTMLからscriptタグへの参照を取得
	var scriptElement = document.getElementById(id);

  // scriptタグが存在しない場合は抜ける
	if(!scriptElement) {return;}

  // scriptタグのtype属性をチェック
	switch(scriptElement.type) {
    // 頂点シェーダの場合
		case 'x-shader/x-certex':
			shader = gl.createShader(gl.VERTEX_SHADER);
			break;

    // フラグメントシェーダの場合
		case 'x-shader/x-fragment':
			shader = gl.createShader(gl.FRAGMENT_SHADER);
			break;

		default :
			return;
	}
  // 生成されたシェーダにソースを割り当てる
	gl.shaderSource(shader, scriptElement.text);
  // シェーダをコンパイルする
	gl.compileShader(shader);

  // シェーダが正しくコンパイルされたかチェック
	if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // 成功していたらシェーダを返して終了
		return shader;
	} else {
    // 失敗していたらエラーログをアラートする
		alert(gl.getShaderInfoLog(shader));
	}
}