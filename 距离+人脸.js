var body = $response.body.replace(/"effectiveRangeRadius":100/g, '"effectiveRangeRadius":99999999').replace(/"canFaceOcr":\w+/g, '"canFaceOcr":false')
$done({ body });