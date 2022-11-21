import { RealUuidGenerator } from './src/adapters/secondary/realUuidGenerator'
import { InMemoryClientGateway } from './src/adapters/secondary/InMemoryClientsGateway'
import { InMemoryDocumentGateway } from './src/adapters/secondary/InMemoryDocumentGateway'
import { DocumentGateway } from './src/coreLogic/gateways/DocumentGateway'
import { ClientGateway } from './src/coreLogic/gateways/ClientGateway'
import { Document } from './src/coreLogic/gateways/document'

export const clientGateway = (): ClientGateway => {
//   return new JsonServerProductGateway()
  const client1 = { id: '123HJK', name: 'Lea de Amorin' }
  const client2 = { id: '123MNB', name: 'Samir Chalal' }

  const uuidGenerator = new RealUuidGenerator()
  const gateway = new InMemoryClientGateway(uuidGenerator)
  gateway.feedWith(client1, client2)

  return gateway
}

export const documentGateway = (): DocumentGateway => {
    const client1 = { id: '123HJK', name: 'Lea de Amorin' }
    const client2 = { id: '123MNB', name: 'Samir Chalal' }
    const doc1: Document = { id: '1', name: 'Passeport verso', type: 'document administratif', clientId: client1.id }
    const doc2: Document = { id: '2', name: 'Passeport recto', type: 'document administratif', clientId: client2.id }
    const uuidGenerator = new RealUuidGenerator()
    const gateway = new InMemoryDocumentGateway(uuidGenerator)
    gateway.feedWith(doc1, doc2)
  
    return gateway
  }