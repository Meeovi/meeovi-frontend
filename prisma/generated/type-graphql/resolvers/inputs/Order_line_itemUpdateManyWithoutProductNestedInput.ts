import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyProductInputEnvelope } from "../inputs/Order_line_itemCreateManyProductInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutProductInput } from "../inputs/Order_line_itemCreateOrConnectWithoutProductInput";
import { Order_line_itemCreateWithoutProductInput } from "../inputs/Order_line_itemCreateWithoutProductInput";
import { Order_line_itemScalarWhereInput } from "../inputs/Order_line_itemScalarWhereInput";
import { Order_line_itemUpdateManyWithWhereWithoutProductInput } from "../inputs/Order_line_itemUpdateManyWithWhereWithoutProductInput";
import { Order_line_itemUpdateWithWhereUniqueWithoutProductInput } from "../inputs/Order_line_itemUpdateWithWhereUniqueWithoutProductInput";
import { Order_line_itemUpsertWithWhereUniqueWithoutProductInput } from "../inputs/Order_line_itemUpsertWithWhereUniqueWithoutProductInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpdateManyWithoutProductNestedInput", {})
export class Order_line_itemUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutProductInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: Order_line_itemUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  set?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: Order_line_itemUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: Order_line_itemUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_line_itemScalarWhereInput[] | undefined;
}
