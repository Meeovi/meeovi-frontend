import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateManyPromotionInput } from "../inputs/Promotion_cart_ruleCreateManyPromotionInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateManyPromotionInputEnvelope", {})
export class Promotion_cart_ruleCreateManyPromotionInputEnvelope {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateManyPromotionInput], {
    nullable: false
  })
  data!: Promotion_cart_ruleCreateManyPromotionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
