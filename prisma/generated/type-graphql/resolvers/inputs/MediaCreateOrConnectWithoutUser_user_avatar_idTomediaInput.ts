import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaCreateWithoutUser_user_avatar_idTomediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput", {})
export class MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutUser_user_avatar_idTomediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutUser_user_avatar_idTomediaInput;
}
