import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { PromotionRelationFilter } from "../inputs/PromotionRelationFilter";
import { Promotion_cart_ruleWhereInput } from "../inputs/Promotion_cart_ruleWhereInput";
import { RuleRelationFilter } from "../inputs/RuleRelationFilter";
import { promotion_cart_rulePromotion_idRule_idCompoundUniqueInput } from "../inputs/promotion_cart_rulePromotion_idRule_idCompoundUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleWhereUniqueInput", {})
export class Promotion_cart_ruleWhereUniqueInput {
  @TypeGraphQL.Field(_type => promotion_cart_rulePromotion_idRule_idCompoundUniqueInput, {
    nullable: true
  })
  promotion_id_rule_id?: promotion_cart_rulePromotion_idRule_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereInput], {
    nullable: true
  })
  AND?: Promotion_cart_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereInput], {
    nullable: true
  })
  OR?: Promotion_cart_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereInput], {
    nullable: true
  })
  NOT?: Promotion_cart_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  promotion_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  rule_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => PromotionRelationFilter, {
    nullable: true
  })
  promotion?: PromotionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RuleRelationFilter, {
    nullable: true
  })
  rule?: RuleRelationFilter | undefined;
}
