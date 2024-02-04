import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrder_addressInput } from "../inputs/OrderCreateWithoutOrder_addressInput";
import { OrderUpdateWithoutOrder_addressInput } from "../inputs/OrderUpdateWithoutOrder_addressInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutOrder_addressInput", {})
export class OrderUpsertWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrder_addressInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_addressInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrder_addressInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
