import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateManyOrder_deliveryInput } from "../inputs/Order_delivery_positionCreateManyOrder_deliveryInput";

@TypeGraphQL.InputType("Order_delivery_positionCreateManyOrder_deliveryInputEnvelope", {})
export class Order_delivery_positionCreateManyOrder_deliveryInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_delivery_positionCreateManyOrder_deliveryInput], {
    nullable: false
  })
  data!: Order_delivery_positionCreateManyOrder_deliveryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
