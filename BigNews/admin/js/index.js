$(function () {
    // 项目的基地址就是:http://localhost:8080/api/v1

    // 接口说明
    // - 用户登录后，接口认证统一使用 Token 认证
    // - 需要授权的 API ，必须在请求头中使用 Authorization 字段提供 token 令牌

    // 获取用户信息
    // 请求地址：/admin/user/info
    // 请求方式：get
    // 请求参数：无
    // 返回数据：
    // 名称   	  类型  	说明    
    // nickname	string	用户昵称  
    // userPic 	string	用户图片地址

    // 功能一：登录用户
    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/v1/admin/user/info",
        headers: {
            Authorization: localStorage.getItem('token')
        },
        dataType: "json",
        success: function (response) {
            // console.log(response);
            if (response.code === 200) {
                // 获取用户名称
                const userName = response.data.nickname;
                // 获取用户图片
                const userPic = response.data.userPic;
                // 替换用户的名称和图片
                $('.user_info img,.user_center_link img').attr({src:userPic});
                $('.user_info span strong').html(userName);
            }
        }
    });

    // 功能二：退出功能
    $('.logout').click(function(){
        // 移除token
        localStorage.removeItem('token');
        // 跳转回主页
        location.href="./login.html"
    })
})