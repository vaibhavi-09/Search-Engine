
module.exports= (request,response) => {
    
    return response.status(201).send({
        "Sno": request.body.Sno,
        "Title":request.body.Title,
        "Tags" : request.body.Tags,
        "Description": request.body.Description,
        "Likes": request.body.Likes
    });
}