export class ColumnApi {
  public static async getOne(columnId: number | string) {
    try {
      const req = await fetch(`http://localhost:3000/api/column/${columnId}`, {
        method: 'GET',
      });

      if (!req.ok) {
        throw new Error(`Request failed: ${req.statusText}`);
      }

      const res = await req.json();

      if (res.statusCode) {
        throw new Error(`Request failed - ${res.message}`);
      }
      
      return res;
    } catch (err) {
      throw new Error(`Error fetch data: ${err instanceof Error ? err.message : 'Unknown Error'}`);
    }
  }
  public static async getMany() {
    try {
      const req = await fetch(`http://localhost:3000/api/column`, {
        method: 'GET',
      });

      if (!req.ok) {
        throw new Error(`Request failed: ${req.statusText}`);
      }

      const res = await req.json();

      if (res.statusCode) {
        throw new Error(`Request failed - ${res.message}`);
      }
      
      return res;
    } catch (err) {
      throw new Error(`Error fetch data: ${err instanceof Error ? err.message : 'Unknown Error'}`);
    }
  }
  public static async create(payload: { title: string, viewIndex: number, }) {
    try {
      const req = await fetch(`http://localhost:3000/api/column`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(payload),
      });

      if (!req.ok) {
        throw new Error(`Request failed: ${req.statusText}`);
      }

      const res = await req.json();

      if (res.statusCode) {
        throw new Error(`Request failed - ${res.message}`);
      }
      
      return res;
    } catch (err) {
      throw new Error(`Error fetch data: ${err instanceof Error ? err.message : 'Unknown Error'}`);
    }
  }
  public static async update(
    columnId: number | string,
    payload: {
      title?: string,
      viewIndex?: number,
    }
  ) {
    try {
      const req = await fetch(`http://localhost:3000/api/column/${columnId}`, {
        method: 'PATCH',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(payload),
      });

      if (!req.ok) {
        throw new Error(`Request failed: ${req.statusText}`);
      }

      const res = await req.json();

      if (res.statusCode) {
        throw new Error(`Request failed - ${res.message}`);
      }
      
      return res;
    } catch (err) {
      throw new Error(`Error fetch data: ${err instanceof Error ? err.message : 'Unknown Error'}`);
    }
  }
  public static async remove(columnId: number | string) {
    try {
      const req = await fetch(`http://localhost:3000/api/column/${columnId}`, {
        method: 'DELETE',
      });

      if (!req.ok) {
        throw new Error(`Request failed: ${req.statusText}`);
      }

      const res = await req.json();

      if (res.statusCode) {
        throw new Error(`Request failed - ${res.message}`);
      }
      
      return res;
    } catch (err) {
      throw new Error(`Error fetch data: ${err instanceof Error ? err.message : 'Unknown Error'}`);
    }
  }
}