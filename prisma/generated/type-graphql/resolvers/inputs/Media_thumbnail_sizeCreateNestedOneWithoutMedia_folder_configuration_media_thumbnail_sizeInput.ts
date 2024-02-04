import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_thumbnail_sizeWhereUniqueInput } from "../inputs/Media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.InputType("Media_thumbnail_sizeCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput", {})
export class Media_thumbnail_sizeCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: true
  })
  create?: Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: true
  })
  connectOrCreate?: Media_thumbnail_sizeCreateOrConnectWithoutMedia_folder_configuration_media_thumbnail_sizeInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereUniqueInput, {
    nullable: true
  })
  connect?: Media_thumbnail_sizeWhereUniqueInput | undefined;
}
