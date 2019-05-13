//読み込みが完了したら
onload = function() {
	//camvasエレメント取得
	var c = document.getElementById('canvas');
	c.width = 500;
	c.height = 300;

	//webglコンテキストを取得　その他2d, webgl2, bitmaprenderがある
	var gl = c.getContext('webgl');

	//canvasを黒で初期化（クリア）する
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
};