const allowList: string[] = ["http://localhost:5173"]

export const corsOptions = {
  origin: function (
    origin: string | undefined, 
    callback: (err: Error | null, allow?: boolean
  ) => void) {

    if (!origin || allowList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allows by CORS"))
    }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}