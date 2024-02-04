import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_groupOrderByWithAggregationInput } from "../../../inputs/Property_groupOrderByWithAggregationInput";
import { Property_groupScalarWhereWithAggregatesInput } from "../../../inputs/Property_groupScalarWhereWithAggregatesInput";
import { Property_groupWhereInput } from "../../../inputs/Property_groupWhereInput";
import { Property_groupScalarFieldEnum } from "../../../../enums/Property_groupScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProperty_groupArgs {
  @TypeGraphQL.Field(_type => Property_groupWhereInput, {
    nullable: true
  })
  where?: Property_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_groupOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Property_groupOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Property_groupScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "sorting_type" | "display_type" | "created_at" | "updated_at" | "filterable" | "visible_on_product_detail_page">;

  @TypeGraphQL.Field(_type => Property_groupScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Property_groupScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
