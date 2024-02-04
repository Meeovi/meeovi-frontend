import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_set_relationOrderByWithAggregationInput } from "../../../inputs/Custom_field_set_relationOrderByWithAggregationInput";
import { Custom_field_set_relationScalarWhereWithAggregatesInput } from "../../../inputs/Custom_field_set_relationScalarWhereWithAggregatesInput";
import { Custom_field_set_relationWhereInput } from "../../../inputs/Custom_field_set_relationWhereInput";
import { Custom_field_set_relationScalarFieldEnum } from "../../../../enums/Custom_field_set_relationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustom_field_set_relationArgs {
  @TypeGraphQL.Field(_type => Custom_field_set_relationWhereInput, {
    nullable: true
  })
  where?: Custom_field_set_relationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Custom_field_set_relationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_set_relationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "set_id" | "entity_name" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Custom_field_set_relationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Custom_field_set_relationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
