import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AppOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/AppOrderByWithRelationAndSearchRelevanceInput";
import { AppWhereInput } from "../../../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../../../inputs/AppWhereUniqueInput";
import { AppScalarFieldEnum } from "../../../../enums/AppScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class IntegrationAppArgs {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AppOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: AppOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  cursor?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AppScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "path" | "author" | "copyright" | "license" | "privacy" | "version" | "base_app_url" | "active" | "allow_disable" | "configurable" | "icon" | "app_secret" | "modules" | "main_module" | "cookies" | "allowed_hosts" | "integration_id" | "acl_role_id" | "created_at" | "updated_at" | "template_load_priority"> | undefined;
}
