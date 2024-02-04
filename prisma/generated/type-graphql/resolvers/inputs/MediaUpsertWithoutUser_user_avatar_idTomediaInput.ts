import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaCreateWithoutUser_user_avatar_idTomediaInput";
import { MediaUpdateWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaUpdateWithoutUser_user_avatar_idTomediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutUser_user_avatar_idTomediaInput", {})
export class MediaUpsertWithoutUser_user_avatar_idTomediaInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutUser_user_avatar_idTomediaInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutUser_user_avatar_idTomediaInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutUser_user_avatar_idTomediaInput, {
    nullable: false
  })
  create!: MediaCreateWithoutUser_user_avatar_idTomediaInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
