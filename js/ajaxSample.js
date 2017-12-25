$( function() {
	$('#btn1').click(
	function(){
		$("#out1").html("データ取得中です");

		// 1.$.postメソッドで通信を行う
		//  $.post(通信先,送信するデータ)
		//  送信するデータは、フォームの内容をserialize()している
		//  →serialize()の内容は、cs1=custom1&cs2=custom2
		$.post('http://httpbin.org/post',$("#form1").serialize())

			// 2. doneは、通信に成功した時に実行される
			//  引数のdata1は、通信で取得したデータ
			.done(function(data1) {

				// 3. キーを指定して値を表示 (テキストボックス１の値)
				$("#out1").html(data1["form"]["cs1"]);
				})

			// 4. failは、通信に失敗した時に実行される
			.fail(function() {
				$("#out1").html("取得に失敗しました");
			})

			// 5. alwaysは、成功/失敗に関わらず実行される
			.always(function() {
				$("#out2").html("完了しました");
			});
	});
} );
