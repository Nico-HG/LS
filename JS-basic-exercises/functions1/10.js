
let extractRegion = code => {
  console.log(code.split('_')[1].split('.')[0]);
}




extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16')