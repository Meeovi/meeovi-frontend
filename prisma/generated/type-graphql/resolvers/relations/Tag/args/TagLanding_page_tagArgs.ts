import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_page_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Landing_page_tagOrderByWithRelationAndSearchRelevanceInput";
import { Landing_page_tagWhereInput } from "../../../inputs/Landing_page_tagWhereInput";
import { Landing_page_tagWhereUniqueInput } from "../../../inputs/Landing_page_tagWhereUniqueInput";
import { Landing_page_tagScalarFieldEnum } from "../../../../enums/Landing_page_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TagLanding_page_tagArgs {
  @TypeGraphQL.Field(_type => Landing_page_tagWhereInput, {
    nullable: true
  })
  where?: Landing_page_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Landing_page_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Landing_page_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"landing_page_id" | "landing_page_version_id" | "tag_id"> | undefined;
}
