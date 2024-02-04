import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleWhereInput } from "../inputs/Promotion_discount_ruleWhereInput";

@TypeGraphQL.InputType("Promotion_discount_ruleListRelationFilter", {})
export class Promotion_discount_ruleListRelationFilter {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereInput, {
    nullable: true
  })
  every?: Promotion_discount_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereInput, {
    nullable: true
  })
  some?: Promotion_discount_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereInput, {
    nullable: true
  })
  none?: Promotion_discount_ruleWhereInput | undefined;
}
