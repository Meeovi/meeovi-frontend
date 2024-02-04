import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput";
import { MediaCreateWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaCreateWithoutUser_user_avatar_idTomediaInput";
import { MediaUpdateToOneWithWhereWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaUpdateToOneWithWhereWithoutUser_user_avatar_idTomediaInput";
import { MediaUpsertWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaUpsertWithoutUser_user_avatar_idTomediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutUser_user_avatar_idTomediaNestedInput", {})
export class MediaUpdateOneWithoutUser_user_avatar_idTomediaNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutUser_user_avatar_idTomediaInput, {
    nullable: true
  })
  create?: MediaCreateWithoutUser_user_avatar_idTomediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutUser_user_avatar_idTomediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutUser_user_avatar_idTomediaInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutUser_user_avatar_idTomediaInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  disconnect?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  delete?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutUser_user_avatar_idTomediaInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutUser_user_avatar_idTomediaInput | undefined;
}
