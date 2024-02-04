import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionUpdateWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionUpdateWithoutOrder_deliveryInput";
import { Order_delivery_positionWhereUniqueInput } from "../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_deliveryInput", {})
export class Order_delivery_positionUpdateWithWhereUniqueWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_delivery_positionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateWithoutOrder_deliveryInput, {
    nullable: false
  })
  data!: Order_delivery_positionUpdateWithoutOrder_deliveryInput;
}
