import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_blockOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_cms_blockOrderByWithRelationAndSearchRelevanceInput";
import { App_cms_blockWhereInput } from "../../../inputs/App_cms_blockWhereInput";
import { App_cms_blockWhereUniqueInput } from "../../../inputs/App_cms_blockWhereUniqueInput";
import { App_cms_blockScalarFieldEnum } from "../../../../enums/App_cms_blockScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyApp_cms_blockArgs {
  @TypeGraphQL.Field(_type => App_cms_blockWhereInput, {
    nullable: true
  })
  where?: App_cms_blockWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_cms_blockOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_cms_blockWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_id" | "name" | "block" | "template" | "styles" | "created_at" | "updated_at"> | undefined;
}
