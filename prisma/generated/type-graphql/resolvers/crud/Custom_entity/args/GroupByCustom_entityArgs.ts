import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_entityOrderByWithAggregationInput } from "../../../inputs/Custom_entityOrderByWithAggregationInput";
import { Custom_entityScalarWhereWithAggregatesInput } from "../../../inputs/Custom_entityScalarWhereWithAggregatesInput";
import { Custom_entityWhereInput } from "../../../inputs/Custom_entityWhereInput";
import { Custom_entityScalarFieldEnum } from "../../../../enums/Custom_entityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustom_entityArgs {
  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  where?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Custom_entityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "fields" | "app_id" | "created_at" | "updated_at" | "flags" | "plugin_id" | "custom_fields_aware" | "label_property" | "deleted_at">;

  @TypeGraphQL.Field(_type => Custom_entityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Custom_entityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
