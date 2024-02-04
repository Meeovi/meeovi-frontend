import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_deliveryInput } from "../inputs/OrderCreateOrConnectWithoutOrder_deliveryInput";
import { OrderCreateWithoutOrder_deliveryInput } from "../inputs/OrderCreateWithoutOrder_deliveryInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrder_deliveryInput", {})
export class OrderCreateNestedOneWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_deliveryInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_deliveryInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_deliveryInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
