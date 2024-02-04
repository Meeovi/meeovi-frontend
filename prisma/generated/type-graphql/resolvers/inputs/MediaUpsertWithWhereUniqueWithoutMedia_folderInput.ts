import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutMedia_folderInput } from "../inputs/MediaCreateWithoutMedia_folderInput";
import { MediaUpdateWithoutMedia_folderInput } from "../inputs/MediaUpdateWithoutMedia_folderInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpsertWithWhereUniqueWithoutMedia_folderInput", {})
export class MediaUpsertWithWhereUniqueWithoutMedia_folderInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutMedia_folderInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutMedia_folderInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutMedia_folderInput, {
    nullable: false
  })
  create!: MediaCreateWithoutMedia_folderInput;
}
