import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { MediaRelationFilter } from "../inputs/MediaRelationFilter";
import { Media_tagWhereInput } from "../inputs/Media_tagWhereInput";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { media_tagMedia_idTag_idCompoundUniqueInput } from "../inputs/media_tagMedia_idTag_idCompoundUniqueInput";

@TypeGraphQL.InputType("Media_tagWhereUniqueInput", {})
export class Media_tagWhereUniqueInput {
  @TypeGraphQL.Field(_type => media_tagMedia_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  media_id_tag_id?: media_tagMedia_idTag_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereInput], {
    nullable: true
  })
  AND?: Media_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereInput], {
    nullable: true
  })
  OR?: Media_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereInput], {
    nullable: true
  })
  NOT?: Media_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => MediaRelationFilter, {
    nullable: true
  })
  media?: MediaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
