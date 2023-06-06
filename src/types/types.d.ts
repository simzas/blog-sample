type Post = {
  id: number;
  userId: number;
  title: string;
  username: string;
  website: string;
  body: string;
};

type PostProps = {
  post: Post;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type ApiServiceHookReturnType<TData extends Record<string, unknown>> = {
  isLoading: boolean;
  isError: boolean;
  data?: TData;
  error?: Error;
};
