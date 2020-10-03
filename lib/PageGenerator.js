const fs = require('fs');

function generateHtml(employees)
{
    const preProcessing = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
</head>
<body>
    <div class="jumbotron bg-dark rounded-0">
        <h1 class="display-4 text-light text-center">Team Page</h1>
    </div>
    <div class="container-fluid">
        <div class="row d-flex justify-content-around">
`;

    const postProcessing = 
`        </div>
    </div>
</body>
</html>`;

    var html = preProcessing;
    employees.forEach(item => 
    {
        if(item.type === 'Manager')
        {
            html += 
`            <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3">
                <div class="card">
                    <div class="card-header bg-success text-light">
                        <h4 class="card-title mb-2">${item.name}</h4>
                        <h5 class="card-subtitle"><i class="fas fa-chess-king"></i> Manager</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group my-0">
                            <h6 class="list-group-item mb-0">ID: ${item.id}</h6>
                            <h6 class="list-group-item mb-0">Email: <a href="mailto:${item.email}">${item.email}</a></h6>
                            <h6 class="list-group-item mb-0">Office Number: ${item.office}</h6>
                        </div>
                    </div>
                </div>
            </div>
`;
        }
        else if(item.type === 'Engineer')
        {
            html +=
`            <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3">
                <div class="card">
                    <div class="card-header bg-info text-light">
                        <h4 class="card-title mb-2">${item.name}</h4>
                        <h5 class="card-subtitle"><i class="fas fa-chess-knight"></i> Engineer</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <h6 class="list-group-item mb-0">ID: ${item.id}</h6>
                            <h6 class="list-group-item mb-0">Email: <a href="mailto:${item.email}">${item.email}</a></h6>
                            <h6 class="list-group-item mb-0">Github: <a href="https://github.com/${item.github}" target="_blank">${item.github}</a></h6>
                        </div>
                    </div>
                </div>
            </div>
`;
        }
        else if(item.type === 'Intern')
        {
            html +=
`            <div class="col-12 col-sm-6 col-md-4 col-lg-3 px-2 mb-3">
                <div class="card">
                    <div class="card-header bg-secondary text-light">
                        <h4 class="card-title mb-2">${item.name}</h4>
                        <h5 class="card-subtitle"><i class="fas fa-chess-pawn"></i> Intern</h5>
                    </div>
                    <div class="card-body">
                        <div class="list-group">
                            <h6 class="list-group-item mb-0">ID: ${item.id}</h6>
                            <h6 class="list-group-item mb-0">Email: <a href="mailto:${item.email}">${item.email}</a></h6>
                            <h6 class="list-group-item mb-0">School: ${item.school}</h6>
                        </div>
                    </div>
                </div>
            </div>
`;
        }
    });
    html += postProcessing;
    fs.writeFile('generated.html', html, (err) =>
    {
        if(err)
        {
            console.log(err);
        }
    });
}

module.exports = generateHtml;