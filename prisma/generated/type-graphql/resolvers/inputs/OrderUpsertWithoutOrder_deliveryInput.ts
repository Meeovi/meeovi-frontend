import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_deliveryInput } from "../inputs/OrderCreateWithoutOrder_deliveryInput";
import { OrderUpdateWithoutOrder_deliveryInput } from "../inputs/OrderUpdateWithoutOrder_deliveryInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutOrder_deliveryInput", {})
export class OrderUpsertWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_deliveryInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrder_deliveryInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_deliveryInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_deliveryInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
