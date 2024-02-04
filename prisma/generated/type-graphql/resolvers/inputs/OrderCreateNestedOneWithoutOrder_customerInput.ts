import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_customerInput } from "../inputs/OrderCreateOrConnectWithoutOrder_customerInput";
import { OrderCreateWithoutOrder_customerInput } from "../inputs/OrderCreateWithoutOrder_customerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrder_customerInput", {})
export class OrderCreateNestedOneWithoutOrder_customerInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_customerInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_customerInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_customerInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
