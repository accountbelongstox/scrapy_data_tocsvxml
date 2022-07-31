class C{
	run(){
		let 
			that =this,
			data = {
				base:{
                    globalShortcut:{//快捷键注册事件
                        "Alt+F4":{
                        	event:"quit"
						},
                        "Alt+F12":{
                            event:"openDevTools"
                        },
                        "F11":{
                            event:"windowmaxmin"
                        },
					},
                    version:"2.0"//软件版本号
				},
				supportWebURL:{
				
                    "h_47_98_99_208_8091":{
                        "url":"http://47.98.99.208:8091/login",
                        "dataSource":{
                            "allData":{
                                "description":"所有用户",
                                "url":`http://47.98.99.208:8091/api/mgmt/agents/customers?registBeginDate=2010-10-20&registBeginEnd=<%r%>toDayTimeA<%/r%>&pageNum=1&pageSize=1000000`
                            }
                        },
                        isLogin:{//用来判断是否登陆
                            getURL: {
                                "url": `http://47.98.99.208:8091/api/mgmt/agents/optionalParents`,//用来请求判断是否登陆的URL
                                method:"POST",
                                callback: (data, callback) => {//请求后的回调,以便于判断是否登陆
                                    callback(true);
                                }//通过读取URL判断是否登陆
                            }
                        },
                        isReadyLogin:{//用来判断是否可以登陆
                            name:["username","password"],
                        }
                    }
				},
				software:{
					updateURL:"www.ddweb.com.cn/service/software/update.php?software_name=getData",
                    downURL:"www.ddweb.com.cn/service/software/update/getData"
				}
			}
		;

		return data;
	}
}

module.exports = C;