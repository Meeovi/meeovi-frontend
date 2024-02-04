import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Promotion_discount_ruleScalarWhereInput", {})
export class Promotion_discount_ruleScalarWhereInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereInput], {
    nullable: true
  })
  AND?: Promotion_discount_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereInput], {
    nullable: true
  })
  OR?: Promotion_discount_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleScalarWhereInput], {
    nullable: true
  })
  NOT?: Promotion_discount_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  discount_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  rule_id?: BytesFilter | undefined;
}
