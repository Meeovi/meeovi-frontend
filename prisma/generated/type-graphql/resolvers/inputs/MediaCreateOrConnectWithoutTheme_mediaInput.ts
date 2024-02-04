import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutTheme_mediaInput } from "../inputs/MediaCreateWithoutTheme_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutTheme_mediaInput", {})
export class MediaCreateOrConnectWithoutTheme_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutTheme_mediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutTheme_mediaInput;
}
