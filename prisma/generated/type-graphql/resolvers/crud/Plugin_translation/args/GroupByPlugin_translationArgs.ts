import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationOrderByWithAggregationInput } from "../../../inputs/Plugin_translationOrderByWithAggregationInput";
import { Plugin_translationScalarWhereWithAggregatesInput } from "../../../inputs/Plugin_translationScalarWhereWithAggregatesInput";
import { Plugin_translationWhereInput } from "../../../inputs/Plugin_translationWhereInput";
import { Plugin_translationScalarFieldEnum } from "../../../../enums/Plugin_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationWhereInput, {
    nullable: true
  })
  where?: Plugin_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Plugin_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"plugin_id" | "language_id" | "label" | "description" | "manufacturer_link" | "support_link" | "changelog" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Plugin_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Plugin_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
