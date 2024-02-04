import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutKlarna_order_extensionInput } from "../inputs/OrderCreateOrConnectWithoutKlarna_order_extensionInput";
import { OrderCreateWithoutKlarna_order_extensionInput } from "../inputs/OrderCreateWithoutKlarna_order_extensionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutKlarna_order_extensionInput", {})
export class OrderCreateNestedOneWithoutKlarna_order_extensionInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutKlarna_order_extensionInput, {
    nullable: true
  })
  create?: OrderCreateWithoutKlarna_order_extensionInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutKlarna_order_extensionInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutKlarna_order_extensionInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
