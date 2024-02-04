import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput";
import { MediaCreateWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaCreateWithoutUser_user_avatar_idTomediaInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutUser_user_avatar_idTomediaInput", {})
export class MediaCreateNestedOneWithoutUser_user_avatar_idTomediaInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutUser_user_avatar_idTomediaInput, {
    nullable: true
  })
  create?: MediaCreateWithoutUser_user_avatar_idTomediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
