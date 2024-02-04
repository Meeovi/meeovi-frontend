import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Media_tagOrderByWithRelationAndSearchRelevanceInput";
import { Media_tagWhereInput } from "../../../inputs/Media_tagWhereInput";
import { Media_tagWhereUniqueInput } from "../../../inputs/Media_tagWhereUniqueInput";
import { Media_tagScalarFieldEnum } from "../../../../enums/Media_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMedia_tagOrThrowArgs {
  @TypeGraphQL.Field(_type => Media_tagWhereInput, {
    nullable: true
  })
  where?: Media_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Media_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Media_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"media_id" | "tag_id"> | undefined;
}
