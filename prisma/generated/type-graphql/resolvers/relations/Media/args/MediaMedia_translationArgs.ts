import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Media_translationOrderByWithRelationAndSearchRelevanceInput";
import { Media_translationWhereInput } from "../../../inputs/Media_translationWhereInput";
import { Media_translationWhereUniqueInput } from "../../../inputs/Media_translationWhereUniqueInput";
import { Media_translationScalarFieldEnum } from "../../../../enums/Media_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MediaMedia_translationArgs {
  @TypeGraphQL.Field(_type => Media_translationWhereInput, {
    nullable: true
  })
  where?: Media_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Media_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Media_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Media_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"media_id" | "language_id" | "alt" | "title" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
