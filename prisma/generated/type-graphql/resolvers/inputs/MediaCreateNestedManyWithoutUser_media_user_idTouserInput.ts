import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateManyUser_media_user_idTouserInputEnvelope } from "../inputs/MediaCreateManyUser_media_user_idTouserInputEnvelope";
import { MediaCreateOrConnectWithoutUser_media_user_idTouserInput } from "../inputs/MediaCreateOrConnectWithoutUser_media_user_idTouserInput";
import { MediaCreateWithoutUser_media_user_idTouserInput } from "../inputs/MediaCreateWithoutUser_media_user_idTouserInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedManyWithoutUser_media_user_idTouserInput", {})
export class MediaCreateNestedManyWithoutUser_media_user_idTouserInput {
  @TypeGraphQL.Field(_type => [MediaCreateWithoutUser_media_user_idTouserInput], {
    nullable: true
  })
  create?: MediaCreateWithoutUser_media_user_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaCreateOrConnectWithoutUser_media_user_idTouserInput], {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutUser_media_user_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => MediaCreateManyUser_media_user_idTouserInputEnvelope, {
    nullable: true
  })
  createMany?: MediaCreateManyUser_media_user_idTouserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  connect?: MediaWhereUniqueInput[] | undefined;
}
