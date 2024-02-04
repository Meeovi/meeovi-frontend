import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Promotion_cart_ruleScalarWhereInput", {})
export class Promotion_cart_ruleScalarWhereInput {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleScalarWhereInput], {
    nullable: true
  })
  AND?: Promotion_cart_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleScalarWhereInput], {
    nullable: true
  })
  OR?: Promotion_cart_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleScalarWhereInput], {
    nullable: true
  })
  NOT?: Promotion_cart_ruleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  promotion_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  rule_id?: BytesFilter | undefined;
}
