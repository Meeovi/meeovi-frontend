import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateWithoutPromotionInput } from "../inputs/Promotion_cart_ruleCreateWithoutPromotionInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateOrConnectWithoutPromotionInput", {})
export class Promotion_cart_ruleCreateOrConnectWithoutPromotionInput {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_cart_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateWithoutPromotionInput, {
    nullable: false
  })
  create!: Promotion_cart_ruleCreateWithoutPromotionInput;
}
