import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope } from "../inputs/Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope";
import { Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput";
import { Order_line_item_downloadCreateWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadCreateWithoutOrder_line_itemInput";
import { Order_line_item_downloadScalarWhereInput } from "../inputs/Order_line_item_downloadScalarWhereInput";
import { Order_line_item_downloadUpdateManyWithWhereWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadUpdateManyWithWhereWithoutOrder_line_itemInput";
import { Order_line_item_downloadUpdateWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadUpdateWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_line_item_downloadUpsertWithWhereUniqueWithoutOrder_line_itemInput } from "../inputs/Order_line_item_downloadUpsertWithWhereUniqueWithoutOrder_line_itemInput";
import { Order_line_item_downloadWhereUniqueInput } from "../inputs/Order_line_item_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_item_downloadUpdateManyWithoutOrder_line_itemNestedInput", {})
export class Order_line_item_downloadUpdateManyWithoutOrder_line_itemNestedInput {
  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateWithoutOrder_line_itemInput], {
    nullable: true
  })
  create?: Order_line_item_downloadCreateWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_item_downloadCreateOrConnectWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadUpsertWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  upsert?: Order_line_item_downloadUpsertWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_item_downloadCreateManyOrder_line_itemInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  set?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_item_downloadWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadUpdateWithWhereUniqueWithoutOrder_line_itemInput], {
    nullable: true
  })
  update?: Order_line_item_downloadUpdateWithWhereUniqueWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadUpdateManyWithWhereWithoutOrder_line_itemInput], {
    nullable: true
  })
  updateMany?: Order_line_item_downloadUpdateManyWithWhereWithoutOrder_line_itemInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_item_downloadScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_line_item_downloadScalarWhereInput[] | undefined;
}
