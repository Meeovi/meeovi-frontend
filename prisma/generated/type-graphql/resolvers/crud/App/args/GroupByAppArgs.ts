import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppOrderByWithAggregationInput } from "../../../inputs/AppOrderByWithAggregationInput";
import { AppScalarWhereWithAggregatesInput } from "../../../inputs/AppScalarWhereWithAggregatesInput";
import { AppWhereInput } from "../../../inputs/AppWhereInput";
import { AppScalarFieldEnum } from "../../../../enums/AppScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAppArgs {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AppOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AppOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "path" | "author" | "copyright" | "license" | "privacy" | "version" | "base_app_url" | "active" | "allow_disable" | "configurable" | "icon" | "app_secret" | "modules" | "main_module" | "cookies" | "allowed_hosts" | "integration_id" | "acl_role_id" | "created_at" | "updated_at" | "template_load_priority">;

  @TypeGraphQL.Field(_type => AppScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AppScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
