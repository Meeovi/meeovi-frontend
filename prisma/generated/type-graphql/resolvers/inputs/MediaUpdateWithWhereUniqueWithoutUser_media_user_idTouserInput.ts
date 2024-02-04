import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutUser_media_user_idTouserInput } from "../inputs/MediaUpdateWithoutUser_media_user_idTouserInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateWithWhereUniqueWithoutUser_media_user_idTouserInput", {})
export class MediaUpdateWithWhereUniqueWithoutUser_media_user_idTouserInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutUser_media_user_idTouserInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutUser_media_user_idTouserInput;
}
