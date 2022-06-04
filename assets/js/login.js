$(function(){
$('#link-reg').on('click',function(){
$('.login-box').hide()
$('.reg-box').show()
})
$('#link-login').on('click',function(){
    $('.login-box').show()
    $('.reg-box').hide()
})
// 从layui 中获取form对象
var form =layui .form
var layer=layui.layer
// 通过form自定义校验
form .verify({
pwd:[
    /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'
  ] ,
  repwd : function(value){
    var pwd=  $('.reg-box [name=password]').val()
    if(pwd!==value){
        return '两次密码不一致'
    }

  }
})
// 监听注册表单的注册事项
$('#form_reg').on('submit',function(e){
    e.preventDefault()
    var data={
        username: $('#form_reg [name="username"]').val(),
        password: $('#form_reg [name="password"]').val()
    }
    $.post('http://www.liulongbin.top:3007/api/reguser',data,function(res){
        if(res.status !==0){
            return layer.msg(res.message)
        }
        layer.msg('注册成功，请登录！')
        $('#link_login').click()
    })



})
$('#form_login').submit(function(e){ 
    e.preventDefault()
    $.ajax({
        url:' https://www.showdoc.cc/escook?page_id=3707158761215217/api/login',
        method:'POST',
        data:$(this).serialize(),
        success:function(res){
            if(res.status!==0){
                return layer.msg('登录失败')
            }layer.msg('登录成功')
localStorage.setItem('token',res.token)
            
            location.href='index.html'
        }

    })
 })

})
