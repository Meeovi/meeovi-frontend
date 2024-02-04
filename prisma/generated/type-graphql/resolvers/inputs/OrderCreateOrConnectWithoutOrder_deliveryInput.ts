import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_deliveryInput } from "../inputs/OrderCreateWithoutOrder_deliveryInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutOrder_deliveryInput", {})
export class OrderCreateOrConnectWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_deliveryInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_deliveryInput;
}
