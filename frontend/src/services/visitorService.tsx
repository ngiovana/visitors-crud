import axios from 'axios'
import React, { useContext } from 'react'

export const API_BASE_URL = "http://localhost:9080/api/v1/visitors"

export const VisitorContext = React.createContext<any>(null)

export const useVisitorContext = () => {
  const context = useContext(VisitorContext)
  if (!context) {
    throw new Error("useVisitorContext must be used within a VisitorProvider")
  }
  return context
}

interface VisitorProps {
  id?: number;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  password?: string;
}

export const getVisitors = async() => {
  return await axios.get(API_BASE_URL).then(res => res.data).then((data) => data)
}

export const createVisitor = (visitor: VisitorProps) => {
  return axios.post(API_BASE_URL, visitor);
}

export const getVisitorById = async(visitorId: number) => {
  return await axios.get(API_BASE_URL + '/' + visitorId).then(res => res.data).then((data) => data)
}

export const updateVisitor = (visitor: VisitorProps, visitorId: number) => {
  return axios.put(API_BASE_URL + '/' + visitorId, visitor);
}

export const deleteVisitor = (visitorId: number) => {
  return axios.delete(API_BASE_URL + '/' + visitorId);
}


// export const VisitorProvider: React.FC<VisitorProviderProps> = ({ children }) => {
//   const getVisitors = () => {
//     return axios.get(API_BASE_URL);
//   }

//   const createVisitor = (visitor: VisitorProps) => {
//     return axios.post(API_BASE_URL, visitor);
//   }

//   const getVisitorById = (visitorId: number) => {
//     return axios.get(API_BASE_URL + '/' + visitorId);
//   }

//   const updateVisitor = (visitor: VisitorProps, visitorId: number) => {
//     return axios.put(API_BASE_URL + '/' + visitorId, visitor);
//   }

//   const deleteVisitor = (visitorId: number) => {
//     return axios.delete(API_BASE_URL + '/' + visitorId);
//   }

//   const value = {
//     getVisitors,
//     createVisitor,
//     getVisitorById,
//     updateVisitor,
//     deleteVisitor
//   }

//   return (
//     <VisitorContext.Provider value={value}>{children}</VisitorContext.Provider>
//   )
// }

// export const useVisitorService = () => useVisitorContext()
