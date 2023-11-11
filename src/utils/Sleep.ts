export default async function Sleep(time: number) {
  await new Promise((res, _) => {
    setTimeout(() => {
      res(undefined);
    }, time);
  });
}
