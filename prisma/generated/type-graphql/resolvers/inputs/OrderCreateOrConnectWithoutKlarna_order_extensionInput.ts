import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutKlarna_order_extensionInput } from "../inputs/OrderCreateWithoutKlarna_order_extensionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateOrConnectWithoutKlarna_order_extensionInput", {})
export class OrderCreateOrConnectWithoutKlarna_order_extensionInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutKlarna_order_extensionInput, {
    nullable: false
  })
  create!: OrderCreateWithoutKlarna_order_extensionInput;
}
