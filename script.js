

    function escapeHtml(text) {
        let element = document.createElement('div');
        element.innerText = text;
        return element.innerHTML;
    }



    function formatLists() {
        // 入力されたテキストを取得
        let inputText = document.getElementById('inputTextarea').value;
        // 改行で分割して配列にする
        let lines = inputText.split('\n');
        // 出力用のテキストを初期化
        let outputText = '<code>\n<ol style=" padding-left: 5px; list-style:decimal-leading-zero outside;in-left:0;padding-left:36px;margin:0;background-color:#1E1E1E;color:#ffffff; font-size:16px; width: 605px; height: 450px; white-space: nowrap;  overflow: auto;">\n';

        // 各行ごとに処理して <li> で囲んで出力用テキストに追加する
        lines.forEach(function (line) {
            // 空白も含めて処理するため、trim() を使用しない
            if (line !== '') { // 空行を無視する


                let escapedLine = escapeHtml(line);

                escapedLine = escapedLine.replace(/ /g, '&nbsp;');

                outputText += '<li style="margin-left:7px">' + escapedLine + '</li>\n';
            }
            else if (line.trim() === '') {
                outputText += '<li style="margin-left:7px;"></li>\n';
            }
        });

        outputText += '</ol>\n</code>';

        // 入力に応じて ul または ol タグで囲んで出力用テキストに追加する
        if (document.getElementById('inputTextarea').value.trim() !== '') {
            if (document.getElementById('useOl').checked) {
                outputText = '<ol>\n' + outputText + '</ol>';
            } else {
                // outputText = '<ul>\n' + outputText + '</ul>';
            }
        }

        const preview = document.getElementById("preview")

        // 出力用のテキストエリアに結果を表示する
        document.getElementById('outputTextarea').value = outputText;
        preview.innerHTML = outputText
    }




    // Accordion

    // DOMの読み込みが完了したら実行する
    document.addEventListener("DOMContentLoaded", function () {
        // 全てのアコーディオン要素を取得する
        const accordions = document.querySelectorAll(".accordion");

        // 各アコーディオン要素に対してクリックイベントを設定する
        accordions.forEach(function (accordion) {
            // アコーディオンのヘッダー要素を取得する
            const header = accordion.querySelector(".accordion-header");

            // クリックイベントを設定する
            header.addEventListener("click", function () {
                // クリックされたアコーディオンのコンテンツ要素を取得する
                const content = accordion.querySelector(".accordion-content");

                // コンテンツの表示・非表示を切り替える
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });
    });



