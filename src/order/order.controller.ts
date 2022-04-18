import { Controller, Inject, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateOrderRequestDto } from './order.dto';
import { OrderService } from './order.service';
import {
  ORDER_SERVICE_NAME,
  ORDER_PACKAGE_NAME,
  CreateOrderResponse,
} from './proto/order.pb';

@Controller('order')
export class OrderController {
  @Inject(OrderService)
  private readonly service: OrderService;
  private logger = new Logger('OrderController');

  @GrpcMethod(ORDER_SERVICE_NAME, 'CreateOrder')
  private async createOrder(
    data: CreateOrderRequestDto,
  ): Promise<CreateOrderResponse> {
    this.logger.log('Call ' + this.createOrder.name);
    return this.service.createOrder(data);
  }
}
