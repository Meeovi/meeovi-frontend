import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryUpdateWithoutOrder_delivery_positionInput } from "../inputs/Order_deliveryUpdateWithoutOrder_delivery_positionInput";
import { Order_deliveryWhereInput } from "../inputs/Order_deliveryWhereInput";

@TypeGraphQL.InputType("Order_deliveryUpdateToOneWithWhereWithoutOrder_delivery_positionInput", {})
export class Order_deliveryUpdateToOneWithWhereWithoutOrder_delivery_positionInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  where?: Order_deliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateWithoutOrder_delivery_positionInput, {
    nullable: false
  })
  data!: Order_deliveryUpdateWithoutOrder_delivery_positionInput;
}
