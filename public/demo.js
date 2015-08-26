cast.$on('test', function(data){
	console.log('data:', data);
});

function clickTest(){
	cast.$broadcast('test', {
		message: 'Test success',
	});
}