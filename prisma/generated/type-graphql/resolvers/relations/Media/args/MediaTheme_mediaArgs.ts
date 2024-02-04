import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Theme_mediaOrderByWithRelationAndSearchRelevanceInput";
import { Theme_mediaWhereInput } from "../../../inputs/Theme_mediaWhereInput";
import { Theme_mediaWhereUniqueInput } from "../../../inputs/Theme_mediaWhereUniqueInput";
import { Theme_mediaScalarFieldEnum } from "../../../../enums/Theme_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MediaTheme_mediaArgs {
  @TypeGraphQL.Field(_type => Theme_mediaWhereInput, {
    nullable: true
  })
  where?: Theme_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_mediaOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Theme_mediaOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Theme_mediaWhereUniqueInput, {
    nullable: true
  })
  cursor?: Theme_mediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Theme_mediaScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"theme_id" | "media_id"> | undefined;
}
