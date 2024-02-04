import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_option_translationOrderByWithAggregationInput } from "../../../inputs/Property_group_option_translationOrderByWithAggregationInput";
import { Property_group_option_translationScalarWhereWithAggregatesInput } from "../../../inputs/Property_group_option_translationScalarWhereWithAggregatesInput";
import { Property_group_option_translationWhereInput } from "../../../inputs/Property_group_option_translationWhereInput";
import { Property_group_option_translationScalarFieldEnum } from "../../../../enums/Property_group_option_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProperty_group_option_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_option_translationWhereInput, {
    nullable: true
  })
  where?: Property_group_option_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_group_option_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Property_group_option_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Property_group_option_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"property_group_option_id" | "language_id" | "name" | "position" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Property_group_option_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Property_group_option_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
