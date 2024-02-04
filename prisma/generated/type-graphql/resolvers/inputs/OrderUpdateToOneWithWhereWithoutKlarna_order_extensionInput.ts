import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutKlarna_order_extensionInput } from "../inputs/OrderUpdateWithoutKlarna_order_extensionInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutKlarna_order_extensionInput", {})
export class OrderUpdateToOneWithWhereWithoutKlarna_order_extensionInput {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutKlarna_order_extensionInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutKlarna_order_extensionInput;
}
