import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutTheme_mediaInput } from "../inputs/MediaCreateWithoutTheme_mediaInput";
import { MediaUpdateWithoutTheme_mediaInput } from "../inputs/MediaUpdateWithoutTheme_mediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutTheme_mediaInput", {})
export class MediaUpsertWithoutTheme_mediaInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutTheme_mediaInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutTheme_mediaInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutTheme_mediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutTheme_mediaInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
