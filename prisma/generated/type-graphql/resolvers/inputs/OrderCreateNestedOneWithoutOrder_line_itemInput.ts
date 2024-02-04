import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/OrderCreateOrConnectWithoutOrder_line_itemInput";
import { OrderCreateWithoutOrder_line_itemInput } from "../inputs/OrderCreateWithoutOrder_line_itemInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutOrder_line_itemInput", {})
export class OrderCreateNestedOneWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrder_line_itemInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrder_line_itemInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
