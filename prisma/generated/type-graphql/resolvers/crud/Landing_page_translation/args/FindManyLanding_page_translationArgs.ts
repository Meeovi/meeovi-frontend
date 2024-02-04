import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Landing_page_translationOrderByWithRelationAndSearchRelevanceInput";
import { Landing_page_translationWhereInput } from "../../../inputs/Landing_page_translationWhereInput";
import { Landing_page_translationWhereUniqueInput } from "../../../inputs/Landing_page_translationWhereUniqueInput";
import { Landing_page_translationScalarFieldEnum } from "../../../../enums/Landing_page_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyLanding_page_translationArgs {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereInput, {
    nullable: true
  })
  where?: Landing_page_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Landing_page_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Landing_page_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"landing_page_id" | "landing_page_version_id" | "language_id" | "name" | "url" | "meta_title" | "meta_description" | "keywords" | "custom_fields" | "slot_config" | "created_at" | "updated_at"> | undefined;
}
