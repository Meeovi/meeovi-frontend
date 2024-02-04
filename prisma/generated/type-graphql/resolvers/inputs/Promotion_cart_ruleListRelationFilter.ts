import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleWhereInput } from "../inputs/Promotion_cart_ruleWhereInput";

@TypeGraphQL.InputType("Promotion_cart_ruleListRelationFilter", {})
export class Promotion_cart_ruleListRelationFilter {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereInput, {
    nullable: true
  })
  every?: Promotion_cart_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereInput, {
    nullable: true
  })
  some?: Promotion_cart_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereInput, {
    nullable: true
  })
  none?: Promotion_cart_ruleWhereInput | undefined;
}
