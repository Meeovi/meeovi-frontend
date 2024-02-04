import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_addressInput } from "../inputs/OrderCreateOrConnectWithoutOrder_addressInput";
import { OrderCreateWithoutOrder_addressInput } from "../inputs/OrderCreateWithoutOrder_addressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrder_addressInput", {})
export class OrderCreateNestedOneWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_addressInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_addressInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_addressInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
