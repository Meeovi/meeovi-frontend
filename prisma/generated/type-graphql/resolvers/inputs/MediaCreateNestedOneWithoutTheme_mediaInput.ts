import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutTheme_mediaInput } from "../inputs/MediaCreateOrConnectWithoutTheme_mediaInput";
import { MediaCreateWithoutTheme_mediaInput } from "../inputs/MediaCreateWithoutTheme_mediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutTheme_mediaInput", {})
export class MediaCreateNestedOneWithoutTheme_mediaInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutTheme_mediaInput, {
    nullable: true
  })
  create?: MediaCreateWithoutTheme_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutTheme_mediaInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutTheme_mediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
