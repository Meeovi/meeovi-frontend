import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutKlarna_order_extensionInput } from "../inputs/OrderCreateWithoutKlarna_order_extensionInput";
import { OrderUpdateWithoutKlarna_order_extensionInput } from "../inputs/OrderUpdateWithoutKlarna_order_extensionInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutKlarna_order_extensionInput", {})
export class OrderUpsertWithoutKlarna_order_extensionInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutKlarna_order_extensionInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutKlarna_order_extensionInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutKlarna_order_extensionInput, {
    nullable: false
  })
  create!: OrderCreateWithoutKlarna_order_extensionInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
