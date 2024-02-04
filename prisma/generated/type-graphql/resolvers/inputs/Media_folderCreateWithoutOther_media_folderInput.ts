import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedManyWithoutMedia_folderInput } from "../inputs/MediaCreateNestedManyWithoutMedia_folderInput";
import { Media_default_folderCreateNestedOneWithoutMedia_folderInput } from "../inputs/Media_default_folderCreateNestedOneWithoutMedia_folderInput";
import { Media_folderCreateNestedOneWithoutOther_media_folderInput } from "../inputs/Media_folderCreateNestedOneWithoutOther_media_folderInput";

@TypeGraphQL.InputType("Media_folderCreateWithoutOther_media_folderInput", {})
export class Media_folderCreateWithoutOther_media_folderInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  child_count?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_folder_configuration_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  use_parent_configuration?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedManyWithoutMedia_folderInput, {
    nullable: true
  })
  media?: MediaCreateNestedManyWithoutMedia_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderCreateNestedOneWithoutMedia_folderInput, {
    nullable: true
  })
  media_default_folder?: Media_default_folderCreateNestedOneWithoutMedia_folderInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateNestedOneWithoutOther_media_folderInput, {
    nullable: true
  })
  media_folder?: Media_folderCreateNestedOneWithoutOther_media_folderInput | undefined;
}
