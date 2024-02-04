import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_optionOrderByWithAggregationInput } from "../../../inputs/Property_group_optionOrderByWithAggregationInput";
import { Property_group_optionScalarWhereWithAggregatesInput } from "../../../inputs/Property_group_optionScalarWhereWithAggregatesInput";
import { Property_group_optionWhereInput } from "../../../inputs/Property_group_optionWhereInput";
import { Property_group_optionScalarFieldEnum } from "../../../../enums/Property_group_optionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProperty_group_optionArgs {
  @TypeGraphQL.Field(_type => Property_group_optionWhereInput, {
    nullable: true
  })
  where?: Property_group_optionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_group_optionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Property_group_optionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Property_group_optionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "property_group_id" | "color_hex_code" | "media_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Property_group_optionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Property_group_optionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
