import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutTheme_mediaInput } from "../inputs/MediaUpdateWithoutTheme_mediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutTheme_mediaInput", {})
export class MediaUpdateToOneWithWhereWithoutTheme_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutTheme_mediaInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutTheme_mediaInput;
}
