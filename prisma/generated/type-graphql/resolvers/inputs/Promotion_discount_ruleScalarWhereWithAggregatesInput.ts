import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Promotion_discount_ruleScalarWhereWithAggregatesInput", {})
export class Promotion_discount_ruleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Promotion_discount_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Promotion_discount_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Promotion_discount_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  discount_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  rule_id?: BytesWithAggregatesFilter | undefined;
}
