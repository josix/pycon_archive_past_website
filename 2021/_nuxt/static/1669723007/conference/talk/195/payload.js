__NUXT_JSONP__("/conference/talk/195", (function(a){return {data:[{speechData:{id:195,begin_time:"2021-10-02T02:40:00Z",end_time:"2021-10-02T03:25:00Z",is_remote:false,location:"6-r2",youtube_id:"aaPkvbZj6WU",title:"DAFunctor: Symbolic translator from NumPy\u002FPyTorch ND-Array operations to C",category:"OTHER",language:"ZHEN",python_level:"EXPERIENCED",recording_policy:true,abstract:"DAFunctor aims to reduce the increasing gap between science and engineering. ND-Array is a crucial part of modern algorithm design. It reduces the mental burden for designers and bypasses Python's slow loop. However, using lower-level languages like C\u002FC++ is sometimes unavoidable on productization. Some strict development guidelines like MISRA even forbid dynamic memory allocation, making engineering more difficult. Manual translation to C\u002FC++ usually introduces human errors. Other function-to-function auto translators generate lots of boilerplate code and require many intermediate buffers. On the contrary symbolic translation generates only the essential logic. Imperative programming style makes the performance directly depends on the implementation; symbolic translation can also eliminate part of the inefficiency caused by the programmer, thus make benchmarking more normalized. The making of DAFunctor also involves fun low-level hacks on the Python interpreter.",detailed_description:"* What is the problem? Why DAFunctor? How does it look?\r\n  * Purpose\r\n  * Other approaches\r\n  * DAFunctor\r\n* Concepts:\r\n  * Functor vs. Function\r\n  * Generative function vs. Aggregate function\r\n* Decomposition of generative functions\r\n* Python black magic\r\n  * shadow object: data view wrapper \r\n  * __assign__: let the object know its name\r\n  * @jit decorator: wrap all the procedures translating python function to native function\r\n* The rest of the transpiler\r\n* Testing system",slide_link:"https:\u002F\u002Fwww.slideshare.net\u002FBuganini\u002Fdafunctor-250351849",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002Fbsomdb51",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FByS9zeYfK\u002Fedit",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F0f\u002F91\u002F0f918c0cd71fed1878036029d6c2b005.jpg",name:"Buganini",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fbuganini",twitter_profile_url:a,facebook_profile_url:a,bio:"Pythonista since 2008"}],event_type:"talk"}}],fetch:{},mutations:[]}}("")));