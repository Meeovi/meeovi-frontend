import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetOrderByWithAggregationInput } from "../../../inputs/App_administration_snippetOrderByWithAggregationInput";
import { App_administration_snippetScalarWhereWithAggregatesInput } from "../../../inputs/App_administration_snippetScalarWhereWithAggregatesInput";
import { App_administration_snippetWhereInput } from "../../../inputs/App_administration_snippetWhereInput";
import { App_administration_snippetScalarFieldEnum } from "../../../../enums/App_administration_snippetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereInput, {
    nullable: true
  })
  where?: App_administration_snippetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_administration_snippetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "app_id" | "locale_id" | "value" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => App_administration_snippetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_administration_snippetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
