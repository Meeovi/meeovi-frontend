import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateNestedManyWithoutMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeCreateNestedManyWithoutMedia_thumbnail_sizeInput";

@TypeGraphQL.InputType("Media_thumbnail_sizeCreateInput", {})
export class Media_thumbnail_sizeCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  width!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  height!: number;

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

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeCreateNestedManyWithoutMedia_thumbnail_sizeInput, {
    nullable: true
  })
  media_folder_configuration_media_thumbnail_size?: Media_folder_configuration_media_thumbnail_sizeCreateNestedManyWithoutMedia_thumbnail_sizeInput | undefined;
}
