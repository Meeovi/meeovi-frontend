import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_field_setOrderByWithAggregationInput } from "../../../inputs/Custom_field_setOrderByWithAggregationInput";
import { Custom_field_setScalarWhereWithAggregatesInput } from "../../../inputs/Custom_field_setScalarWhereWithAggregatesInput";
import { Custom_field_setWhereInput } from "../../../inputs/Custom_field_setWhereInput";
import { Custom_field_setScalarFieldEnum } from "../../../../enums/Custom_field_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustom_field_setArgs {
  @TypeGraphQL.Field(_type => Custom_field_setWhereInput, {
    nullable: true
  })
  where?: Custom_field_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Custom_field_setOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_field_setScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "config" | "active" | "app_id" | "position" | "global" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Custom_field_setScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Custom_field_setScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
