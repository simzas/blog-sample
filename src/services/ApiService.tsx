'use server';

class ApiService {
  private url: string;
  private static apiServiceInstance: ApiService;

  private constructor(url: string) {
    this.url = url;
  }

  public static getInstance(): ApiService {
    if (!ApiService.apiServiceInstance) {
      ApiService.apiServiceInstance = new ApiService(
        'https://jsonplaceholder.typicode.com'
      );
    }

    return ApiService.apiServiceInstance;
  }

  private async fetchData(
    endpoint: string,
    options: RequestInit
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    try {
      const response = await fetch(`${this.url}/${endpoint}`, options);
      if (!response.ok) {
        throw new Error(`Error loading ${endpoint}: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return null;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async get(endpoint: string): Promise<any> {
    const options = {
      method: 'GET'
    };
    return this.fetchData(endpoint, options);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  public async post(endpoint: string, body: any): Promise<any> {
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.fetchData(endpoint, options);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  public async put(endpoint: string, body: any): Promise<any> {
    const options = {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return this.fetchData(endpoint, options);
  }

  public async delete(endpoint: string): Promise<void> {
    const options = {
      method: 'DELETE'
    };
    return this.fetchData(endpoint, options);
  }

  public async getPosts(): Promise<Post[]> {
    const plainPosts: Post[] = await this.get('posts');
    const users: User[] = await this.get('users');
    try {
      const posts: Post[] = plainPosts.map((post: Post) => {
        const { userId, id, title, body } = post;
        const user = users[userId - 1];
        const username = user ? user.username : '';
        const website = user ? user.website : '';
        const city = user ? user.address.city : '';

        return {
          id,
          userId,
          title,
          body,
          username,
          website,
          city
        };
      });
      return posts;
    } catch (e) {
      return [];
    }
  }

  public async getUserProfile(id: number): Promise<User> {
    const user: User = await this.get(`users/${id}`);
    return user;
  }
}

export default ApiService;
