import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutUser_user_avatar_idTomediaInput } from "../inputs/MediaUpdateWithoutUser_user_avatar_idTomediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutUser_user_avatar_idTomediaInput", {})
export class MediaUpdateToOneWithWhereWithoutUser_user_avatar_idTomediaInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutUser_user_avatar_idTomediaInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutUser_user_avatar_idTomediaInput;
}
