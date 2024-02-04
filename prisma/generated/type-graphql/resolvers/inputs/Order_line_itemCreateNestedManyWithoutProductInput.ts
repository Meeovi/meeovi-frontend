import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyProductInputEnvelope } from "../inputs/Order_line_itemCreateManyProductInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutProductInput } from "../inputs/Order_line_itemCreateOrConnectWithoutProductInput";
import { Order_line_itemCreateWithoutProductInput } from "../inputs/Order_line_itemCreateWithoutProductInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateNestedManyWithoutProductInput", {})
export class Order_line_itemCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutProductInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput[] | undefined;
}
