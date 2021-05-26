$("#botao").click(()=>{   

    const data = $("#data").val()


   const urlApod = `https://api.nasa.gov/planetary/apod?api_key=T9fC1RUatCZ7B5DuobkyJFigiKefkQVoOHQ0RQGc&date=${data}`

   $.ajax({

    url : urlApod,
    success: (resposta)=>{
      

        $('#img').attr('src', resposta.hdurl)
        $('#text').text(resposta.explanation)
    }

   })
  
})
