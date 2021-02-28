const number = () => 2;

const promise = new Promise((resolve, reject) => {
  const one = number();
  if (one === 1) {
    resolve(one);
  } else {
    reject(one);
  }
});

const onResolve = smth => {
  console.log('resolve', smth);
};

const onReject = smth => {
  console.log('rejected', smth);
};

// promise.then(onResolve, onReject);
promise.then(onResolve).catch(onReject);
