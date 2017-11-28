$(document).ready( function () {
    var currentPage = 1;
    var url = 'http://content.guardianapis.com/search?page={{1}}&api-key=test';

    getRequest(url.replace(/{{.}}/, currentPage));
    $('#pageInput').val(currentPage);
    $('.pagePrev').attr('disabled', true)

    $("#pageInput").on("keydown",function search(e) {
        if(e.keyCode == 13) {
            inputPage = $(this).val();

            if ($.isNumeric(inputPage)){
                inputPage = parseInt($("#pageInput").val());

                if (inputPage >= 1 && inputPage <= 1124) {
                    currentPage = inputPage;
                    getRequest(url.replace(/{{.}}/, currentPage));
                } else {
                    $('#pageInput').val(currentPage);
                    alert('Please input number higher than 1 and less than 1124!');
                }
            } else {
                $('#pageInput').val(currentPage);
                alert('Please input number only!');
            }

            buttonDisable(currentPage);
        }
    });

    $('.pageSkip').on('click', function(e) {

        e.preventDefault();

        var $this = $(this);

        if( $this.hasClass('pageNext') ) {
            currentPage = currentPage + 1;
        } else if( $this.hasClass('pagePrev') ) {
            currentPage = currentPage - 1;
        }

        buttonDisable(currentPage);
        getRequest(url.replace(/{{.}}/, currentPage));
        $('#pageInput').val(currentPage);
    });
});

function getRequest(url) {
    $.ajax({
        url: url,
        method: 'get',
        data: {},
        async: false,
        dataType: 'json',
        success: function (response) {
            if (response.response.results != null) {
                var res = response.response.results;
                temp = "";
                for (var i = 0; i < res.length; i++) {
                    temp = temp + '<li>' +
                        '<div class="accordion-heading" id="' + i + '">' +
                        '<h3>' + res[i].webTitle + '</h3>' +
                        '<i class="fa fa-angle-down">' + '</i>' +
                        '</div>' +
                        '<div class="accordion-content">' +
                        '<p class="news-content"></p>' +
                        '<a href="' + res[i].webUrl + '">Read full news </a>' +
                        '</div>' +
                        '</li>';


                }
                function getNews(id, res) {
                    document.getElementById(id).innerHTML = res;
                }

                getNews("temp", temp);

                $('.accordion-heading').click(function () {
                    var newsContent = $('.accordion-content');
                    var id = $(this).attr('id');
                    var urlAddress = res[id].apiUrl;
                    urlAddress = urlAddress.replace('https', 'http') + '?show-blocks=body&api-key=test';
                    $.ajax({
                        url: urlAddress,
                        method: 'get',
                        data: {},
                        dataType: 'json',
                        success: function (data) {
                            textContent = data.response.content.blocks;
                            if (textContent.totalBodyBlocks > 0) {
                                $('.news-content').text(textContent.body[0].bodyTextSummary);
                            }
                        },
                        error: function (err) {
                            alert(err);
                        }
                    });
                    $(this).next().slideToggle(300);
                    newsContent.not($(this).next()).slideUp(300);
                    $(this).toggleClass('active');
                    $('.accordion-heading').not($(this)).removeClass('active');
                });
            }
            else {
                resultElement.html('Sorry, we couldn`t find news for you. Please try again later.');
            }
        },
        error: function (err) {
            alert(err);
        }
    });
};

function buttonDisable(currentPage) {
    if(currentPage === 1124){
        $('.pageNext').attr('disabled', true);
    }

    if(currentPage === 1){
        $('.pagePrev').attr('disabled', true);
    }

    if(currentPage > 1){
        $('.pagePrev').attr('disabled', false);
    }

    if(currentPage < 1124){
        $('.pageNext').attr('disabled', false);
    }
}

function myFunction() {
    location.reload();
};
