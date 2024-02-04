import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutUser_media_user_idTouserInput } from "../inputs/MediaCreateWithoutUser_media_user_idTouserInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutUser_media_user_idTouserInput", {})
export class MediaCreateOrConnectWithoutUser_media_user_idTouserInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutUser_media_user_idTouserInput, {
    nullable: false
  })
  create!: MediaCreateWithoutUser_media_user_idTouserInput;
}
