import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_administration_snippetOrderByWithRelationAndSearchRelevanceInput";
import { App_administration_snippetWhereInput } from "../../../inputs/App_administration_snippetWhereInput";
import { App_administration_snippetWhereUniqueInput } from "../../../inputs/App_administration_snippetWhereUniqueInput";
import { App_administration_snippetScalarFieldEnum } from "../../../../enums/App_administration_snippetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereInput, {
    nullable: true
  })
  where?: App_administration_snippetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_administration_snippetOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_administration_snippetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_administration_snippetScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_id" | "locale_id" | "value" | "created_at" | "updated_at"> | undefined;
}
