import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { MediaRelationFilter } from "../inputs/MediaRelationFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("Media_tagWhereInput", {})
export class Media_tagWhereInput {
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
