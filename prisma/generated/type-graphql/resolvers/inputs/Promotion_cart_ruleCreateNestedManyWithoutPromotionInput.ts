import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateManyPromotionInputEnvelope } from "../inputs/Promotion_cart_ruleCreateManyPromotionInputEnvelope";
import { Promotion_cart_ruleCreateOrConnectWithoutPromotionInput } from "../inputs/Promotion_cart_ruleCreateOrConnectWithoutPromotionInput";
import { Promotion_cart_ruleCreateWithoutPromotionInput } from "../inputs/Promotion_cart_ruleCreateWithoutPromotionInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateNestedManyWithoutPromotionInput", {})
export class Promotion_cart_ruleCreateNestedManyWithoutPromotionInput {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateWithoutPromotionInput], {
    nullable: true
  })
  create?: Promotion_cart_ruleCreateWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateOrConnectWithoutPromotionInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_cart_ruleCreateOrConnectWithoutPromotionInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateManyPromotionInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_cart_ruleCreateManyPromotionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_cart_ruleWhereUniqueInput[] | undefined;
}
