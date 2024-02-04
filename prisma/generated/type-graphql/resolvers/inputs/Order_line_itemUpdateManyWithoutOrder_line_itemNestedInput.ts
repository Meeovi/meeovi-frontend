import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyOrder_line_itemInputEnvelope } from "../inputs/Order_line_itemCreateManyOrder_line_itemInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/Order_line_itemCreateOrConnectWithoutOrder_line_itemInput";
import { Order_line_itemCreateWithoutOrder_line_itemInput } from "../inputs/Order_line_itemCreateWithoutOrder_line_itemInput";
import { Order_line_itemScalarWhereInput } from "../inputs/Order_line_itemScalarWhereInput";
import { Order_line_itemUpdateManyWithWhereWithoutOrder_line_itemInput } from "../inputs/Order_line_itemUpdateManyWithWhereWithoutOrder_line_itemInput";
import { Order_line_itemUpdateWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_line_itemUpdateWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_line_itemUpsertWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_line_itemUpsertWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpdateManyWithoutOrder_line_itemNestedInput", {})
export class Order_line_itemUpdateManyWithoutOrder_line_itemNestedInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutOrder_line_itemInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutOrder_line_itemInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpsertWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  upsert?: Order_line_itemUpsertWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyOrder_line_itemInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyOrder_line_itemInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  update?: Order_line_itemUpdateWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateManyWithWhereWithoutOrder_line_itemInput], {
    nullable: true
  })
  updateMany?: Order_line_itemUpdateManyWithWhereWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_line_itemScalarWhereInput[] | undefined;
}
