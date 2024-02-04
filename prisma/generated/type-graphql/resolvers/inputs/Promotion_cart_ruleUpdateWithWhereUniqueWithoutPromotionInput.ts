import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleUpdateWithoutPromotionInput } from "../inputs/Promotion_cart_ruleUpdateWithoutPromotionInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpdateWithWhereUniqueWithoutPromotionInput", {})
export class Promotion_cart_ruleUpdateWithWhereUniqueWithoutPromotionInput {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_cart_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleUpdateWithoutPromotionInput, {
    nullable: false
  })
  data!: Promotion_cart_ruleUpdateWithoutPromotionInput;
}
