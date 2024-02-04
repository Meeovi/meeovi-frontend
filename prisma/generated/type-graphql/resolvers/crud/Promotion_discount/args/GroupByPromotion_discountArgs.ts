import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountOrderByWithAggregationInput } from "../../../inputs/Promotion_discountOrderByWithAggregationInput";
import { Promotion_discountScalarWhereWithAggregatesInput } from "../../../inputs/Promotion_discountScalarWhereWithAggregatesInput";
import { Promotion_discountWhereInput } from "../../../inputs/Promotion_discountWhereInput";
import { Promotion_discountScalarFieldEnum } from "../../../../enums/Promotion_discountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPromotion_discountArgs {
  @TypeGraphQL.Field(_type => Promotion_discountWhereInput, {
    nullable: true
  })
  where?: Promotion_discountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discountOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Promotion_discountOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discountScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "promotion_id" | "scope" | "type" | "value" | "created_at" | "updated_at" | "consider_advanced_rules" | "max_value" | "sorter_key" | "applier_key" | "usage_key" | "picker_key">;

  @TypeGraphQL.Field(_type => Promotion_discountScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Promotion_discountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
