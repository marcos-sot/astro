
export const getPosts = async () => {
   await new Promise(r => setTimeout(r, 2000)); // Simula una espera de red o DB
  return [
    {
      title: 'Post 1',
      content: 'Hola mundo\nEste es el post 1'
    },
    {
      title: 'Post 2',
      content: 'Bienvenido\nEste es el post 2'
    }
  ];
};
