zip deploy.zip -r ./src # 소스 압축
aws lambda update-function-code --function-name express_test --zip-file ./deploy.zip # 소스 배포
rm deploy.zip # 배포용 소스 삭제
