import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Plugin_translationOrderByWithRelationAndSearchRelevanceInput";
import { Plugin_translationWhereInput } from "../../../inputs/Plugin_translationWhereInput";
import { Plugin_translationWhereUniqueInput } from "../../../inputs/Plugin_translationWhereUniqueInput";
import { Plugin_translationScalarFieldEnum } from "../../../../enums/Plugin_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationWhereInput, {
    nullable: true
  })
  where?: Plugin_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Plugin_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Plugin_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"plugin_id" | "language_id" | "label" | "description" | "manufacturer_link" | "support_link" | "changelog" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
