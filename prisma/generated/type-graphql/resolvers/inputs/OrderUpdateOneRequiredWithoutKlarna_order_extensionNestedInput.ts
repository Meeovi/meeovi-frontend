import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutKlarna_order_extensionInput } from "../inputs/OrderCreateOrConnectWithoutKlarna_order_extensionInput";
import { OrderCreateWithoutKlarna_order_extensionInput } from "../inputs/OrderCreateWithoutKlarna_order_extensionInput";
import { OrderUpdateToOneWithWhereWithoutKlarna_order_extensionInput } from "../inputs/OrderUpdateToOneWithWhereWithoutKlarna_order_extensionInput";
import { OrderUpsertWithoutKlarna_order_extensionInput } from "../inputs/OrderUpsertWithoutKlarna_order_extensionInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutKlarna_order_extensionNestedInput", {})
export class OrderUpdateOneRequiredWithoutKlarna_order_extensionNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutKlarna_order_extensionInput, {
    nullable: true
  })
  create?: OrderCreateWithoutKlarna_order_extensionInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutKlarna_order_extensionInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutKlarna_order_extensionInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutKlarna_order_extensionInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutKlarna_order_extensionInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateToOneWithWhereWithoutKlarna_order_extensionInput, {
    nullable: true
  })
  update?: OrderUpdateToOneWithWhereWithoutKlarna_order_extensionInput | undefined;
}
