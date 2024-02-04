import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateManyUser_media_user_idTouserInputEnvelope } from "../inputs/MediaCreateManyUser_media_user_idTouserInputEnvelope";
import { MediaCreateOrConnectWithoutUser_media_user_idTouserInput } from "../inputs/MediaCreateOrConnectWithoutUser_media_user_idTouserInput";
import { MediaCreateWithoutUser_media_user_idTouserInput } from "../inputs/MediaCreateWithoutUser_media_user_idTouserInput";
import { MediaScalarWhereInput } from "../inputs/MediaScalarWhereInput";
import { MediaUpdateManyWithWhereWithoutUser_media_user_idTouserInput } from "../inputs/MediaUpdateManyWithWhereWithoutUser_media_user_idTouserInput";
import { MediaUpdateWithWhereUniqueWithoutUser_media_user_idTouserInput } from "../inputs/MediaUpdateWithWhereUniqueWithoutUser_media_user_idTouserInput";
import { MediaUpsertWithWhereUniqueWithoutUser_media_user_idTouserInput } from "../inputs/MediaUpsertWithWhereUniqueWithoutUser_media_user_idTouserInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateManyWithoutUser_media_user_idTouserNestedInput", {})
export class MediaUpdateManyWithoutUser_media_user_idTouserNestedInput {
  @TypeGraphQL.Field(_type => [MediaCreateWithoutUser_media_user_idTouserInput], {
    nullable: true
  })
  create?: MediaCreateWithoutUser_media_user_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaCreateOrConnectWithoutUser_media_user_idTouserInput], {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutUser_media_user_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaUpsertWithWhereUniqueWithoutUser_media_user_idTouserInput], {
    nullable: true
  })
  upsert?: MediaUpsertWithWhereUniqueWithoutUser_media_user_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => MediaCreateManyUser_media_user_idTouserInputEnvelope, {
    nullable: true
  })
  createMany?: MediaCreateManyUser_media_user_idTouserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  set?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  delete?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereUniqueInput], {
    nullable: true
  })
  connect?: MediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaUpdateWithWhereUniqueWithoutUser_media_user_idTouserInput], {
    nullable: true
  })
  update?: MediaUpdateWithWhereUniqueWithoutUser_media_user_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaUpdateManyWithWhereWithoutUser_media_user_idTouserInput], {
    nullable: true
  })
  updateMany?: MediaUpdateManyWithWhereWithoutUser_media_user_idTouserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MediaScalarWhereInput[] | undefined;
}
