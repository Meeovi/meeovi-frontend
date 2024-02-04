import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput";
import { Media_thumbnail_sizeWhereInput } from "../../../inputs/Media_thumbnail_sizeWhereInput";
import { Media_thumbnail_sizeWhereUniqueInput } from "../../../inputs/Media_thumbnail_sizeWhereUniqueInput";
import { Media_thumbnail_sizeScalarFieldEnum } from "../../../../enums/Media_thumbnail_sizeScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMedia_thumbnail_sizeOrThrowArgs {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  where?: Media_thumbnail_sizeWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereUniqueInput, {
    nullable: true
  })
  cursor?: Media_thumbnail_sizeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "width" | "height" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
