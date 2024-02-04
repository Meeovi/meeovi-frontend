import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyOrderInputEnvelope } from "../inputs/Order_line_itemCreateManyOrderInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutOrderInput } from "../inputs/Order_line_itemCreateOrConnectWithoutOrderInput";
import { Order_line_itemCreateWithoutOrderInput } from "../inputs/Order_line_itemCreateWithoutOrderInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateNestedManyWithoutOrderInput", {})
export class Order_line_itemCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutOrderInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput[] | undefined;
}
