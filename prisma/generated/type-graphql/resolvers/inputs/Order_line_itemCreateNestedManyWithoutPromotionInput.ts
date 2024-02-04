import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyPromotionInputEnvelope } from "../inputs/Order_line_itemCreateManyPromotionInputEnvelope";
import { Order_line_itemCreateOrConnectWithoutPromotionInput } from "../inputs/Order_line_itemCreateOrConnectWithoutPromotionInput";
import { Order_line_itemCreateWithoutPromotionInput } from "../inputs/Order_line_itemCreateWithoutPromotionInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateNestedManyWithoutPromotionInput", {})
export class Order_line_itemCreateNestedManyWithoutPromotionInput {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateWithoutPromotionInput], {
    nullable: true
  })
  create?: Order_line_itemCreateWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemCreateOrConnectWithoutPromotionInput], {
    nullable: true
  })
  connectOrCreate?: Order_line_itemCreateOrConnectWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateManyPromotionInputEnvelope, {
    nullable: true
  })
  createMany?: Order_line_itemCreateManyPromotionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_line_itemWhereUniqueInput[] | undefined;
}
