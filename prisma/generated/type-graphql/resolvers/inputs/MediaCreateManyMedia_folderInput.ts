import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MediaCreateManyMedia_folderInput", {})
export class MediaCreateManyMedia_folderInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  user_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mime_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file_extension?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  file_size?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_data?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file_name?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_type?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  thumbnails_ro?: Buffer | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  private?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  uploaded_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | undefined;
}
