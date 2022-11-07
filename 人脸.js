var body = $response.body.replace(/"canFaceOcr":\w+/g, '"canFaceOcr":false')
$done({ body });