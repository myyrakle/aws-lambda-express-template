tar.exe -a -c -f deploy.zip src/express src/index.js src/node_modules
aws lambda update-function-code --function-name express_test --zip-file fileb://./deploy.zip 
del deploy.zip 

