import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionCreateWithoutOrder_deliveryInput } from "../inputs/Order_delivery_positionCreateWithoutOrder_deliveryInput";
import { Order_delivery_positionWhereUniqueInput } from "../inputs/Order_delivery_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput", {})
export class Order_delivery_positionCreateOrConnectWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_delivery_positionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionCreateWithoutOrder_deliveryInput, {
    nullable: false
  })
  create!: Order_delivery_positionCreateWithoutOrder_deliveryInput;
}
