import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_cms_block_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_cms_block_translationOrderByWithRelationAndSearchRelevanceInput";
import { App_cms_block_translationWhereInput } from "../../../inputs/App_cms_block_translationWhereInput";
import { App_cms_block_translationWhereUniqueInput } from "../../../inputs/App_cms_block_translationWhereUniqueInput";
import { App_cms_block_translationScalarFieldEnum } from "../../../../enums/App_cms_block_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_cms_block_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => App_cms_block_translationWhereInput, {
    nullable: true
  })
  where?: App_cms_block_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_cms_block_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_cms_block_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"label" | "app_cms_block_id" | "language_id" | "created_at" | "updated_at"> | undefined;
}
