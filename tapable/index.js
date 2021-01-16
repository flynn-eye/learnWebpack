const {
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
 } = require("tapable");
// init
 const hook = {
    SyncHook: new SyncHook(['arg1']),
	SyncBailHook: new SyncBailHook(['arg1']),
	SyncWaterfallHook: new SyncWaterfallHook(['arg1']),
	SyncLoopHook: new SyncLoopHook(['arg1']),
	AsyncParallelHook: new AsyncParallelHook(['arg1']),
	AsyncParallelBailHook: new AsyncParallelBailHook(['arg1']),
	AsyncSeriesHook: new AsyncSeriesHook(['arg1','callback']),
	AsyncSeriesBailHook: new AsyncSeriesBailHook(['arg1']),
	AsyncSeriesWaterfallHook: new AsyncSeriesWaterfallHook(['arg1'])
 }
 // bind
 hook.SyncLoopHook.intercept({
      // 在添加拦截器的配置对象中启用 context
  context: true,
    // 注册时执行
    
register(tap) {
  console.log('register', tap);
  return tap;
},
// 触发事件时执行
call(...args) {
  console.log('call', args);
},
// 在 call 拦截器之后执行& loop钩子每次循环都会执行
loop(...args) {
  console.log('loop', args);
},
// 事件回调调用前执行
tap(ctx,tap) {
  console.log('tap', tap,ctx);
},
})
 hook.SyncHook.tap('SyncHook',(arg1)=>{
     console.log(arg1,'SyncHook')
 }),
 hook.SyncHook.tap('SyncHook222',(arg1)=>{
    console.log(arg1,'SyncHook222')
}),
 hook.SyncBailHook.tap('SyncBailHook',(arg1)=>{
    console.log(arg1,'SyncBailHook')
}),
 hook.SyncWaterfallHook.tap('SyncWaterfallHook',(arg1)=>{
    console.log(arg1,'SyncWaterfallHook')
});
// 让循环两次
let flag = 2;
hook.SyncLoopHook.tap('SyncLoopHook',(arg1)=>{
    console.log(arg1,'SyncLoopHook',flag)
    flag--;
    return flag?flag:undefined;
}),
 hook.AsyncParallelHook.tapAsync('AsyncParallelHook',(arg1)=>{
    console.log(arg1,'AsyncParallelHook')
}),
 hook.AsyncParallelBailHook.tapAsync('AsyncParallelBailHook',(arg1)=>{
    console.log(arg1,'AsyncParallelBailHook')
}),
 hook.AsyncSeriesHook.tapAsync('AsyncSeriesHook',(arg1,callback)=>{
    console.log(arg1,'AsyncSeriesHook',callback);
    callback();
}),
 hook.AsyncSeriesBailHook.tapAsync('AsyncSeriesBailHook',(arg1)=>{
    console.log(arg1,'AsyncSeriesBailHook')
}),
 hook.AsyncSeriesWaterfallHook.tapAsync('AsyncSeriesWaterfallHook',(arg1)=>{
    console.log(arg1,'AsyncSeriesWaterfallHook')
})

// call
hook.SyncHook.call('SyncHook'),
hook.SyncBailHook.call('SyncBailHook'),
hook.SyncWaterfallHook.call('SyncWaterfallHook'),
hook.SyncLoopHook.call('SyncLoopHook'),
hook.AsyncParallelHook.callAsync('AsyncParallelHook'),
hook.AsyncParallelBailHook.callAsync('AsyncParallelBailHook','AsyncParallelBailHook'),
hook.AsyncSeriesHook.callAsync('AsyncSeriesHook',(err)=>{
    console.log(err,'err!!')
}),
hook.AsyncSeriesBailHook.callAsync('AsyncSeriesBailHook'),
hook.AsyncSeriesWaterfallHook.callAsync('AsyncSeriesWaterfallHook');