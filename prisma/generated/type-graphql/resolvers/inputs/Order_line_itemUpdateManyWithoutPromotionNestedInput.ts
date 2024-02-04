import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyPromotionInputEnvelope } from "../inputs/Order_line_itemCreateManyPromotionInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutPromotionInput } from "../inputs/Order_line_itemCreateOrConnectWithoutPromotionInput";
import { Order_line_itemCreateWithoutPromotionInput } from "../inputs/Order_line_itemCreateWithoutPromotionInput";
import { Order_line_itemScalarWhereInput } from "../inputs/Order_line_itemScalarWhereInput";
import { Order_line_itemUpdateManyWithWhereWithoutPromotionInput } from "../inputs/Order_line_itemUpdateManyWithWhereWithoutPromotionInput";
import { Order_line_itemUpdateWithWhereUniqueWithoutPromotionInput } from "../inputs/Order_line_itemUpdateWithWhereUniqueWithoutPromotionInput";
import { Order_line_itemUpsertWithWhereUniqueWithoutPromotionInput } from "../inputs/Order_line_itemUpsertWithWhereUniqueWithoutPromotionInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemUpdateManyWithoutPromotionNestedInput", {})
export class Order_line_itemUpdateManyWithoutPromotionNestedInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutPromotionInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutPromotionInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpsertWithWhereUniqueWithoutPromotionInput], {
    nullable: true
  })
  upsert?: Order_line_itemUpsertWithWhereUniqueWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyPromotionInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyPromotionInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateWithWhereUniqueWithoutPromotionInput], {
    nullable: true
  })
  update?: Order_line_itemUpdateWithWhereUniqueWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemUpdateManyWithWhereWithoutPromotionInput], {
    nullable: true
  })
  updateMany?: Order_line_itemUpdateManyWithWhereWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_line_itemScalarWhereInput[] | undefined;
}
