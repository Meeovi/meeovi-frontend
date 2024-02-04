import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_translationOrderByWithAggregationInput } from "../../../inputs/Property_group_translationOrderByWithAggregationInput";
import { Property_group_translationScalarWhereWithAggregatesInput } from "../../../inputs/Property_group_translationScalarWhereWithAggregatesInput";
import { Property_group_translationWhereInput } from "../../../inputs/Property_group_translationWhereInput";
import { Property_group_translationScalarFieldEnum } from "../../../../enums/Property_group_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProperty_group_translationArgs {
  @TypeGraphQL.Field(_type => Property_group_translationWhereInput, {
    nullable: true
  })
  where?: Property_group_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Property_group_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Property_group_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Property_group_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"property_group_id" | "language_id" | "name" | "description" | "position" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Property_group_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Property_group_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
