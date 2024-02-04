import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnailCreateManyMediaInputEnvelope } from "../inputs/Media_thumbnailCreateManyMediaInputEnvelope";
import { Media_thumbnailCreateOrConnectWithoutMediaInput } from "../inputs/Media_thumbnailCreateOrConnectWithoutMediaInput";
import { Media_thumbnailCreateWithoutMediaInput } from "../inputs/Media_thumbnailCreateWithoutMediaInput";
import { Media_thumbnailScalarWhereInput } from "../inputs/Media_thumbnailScalarWhereInput";
import { Media_thumbnailUpdateManyWithWhereWithoutMediaInput } from "../inputs/Media_thumbnailUpdateManyWithWhereWithoutMediaInput";
import { Media_thumbnailUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Media_thumbnailUpdateWithWhereUniqueWithoutMediaInput";
import { Media_thumbnailUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Media_thumbnailUpsertWithWhereUniqueWithoutMediaInput";
import { Media_thumbnailWhereUniqueInput } from "../inputs/Media_thumbnailWhereUniqueInput";

@TypeGraphQL.InputType("Media_thumbnailUpdateManyWithoutMediaNestedInput", {})
export class Media_thumbnailUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Media_thumbnailCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Media_thumbnailCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Media_thumbnailCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Media_thumbnailUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Media_thumbnailCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailWhereUniqueInput], {
    nullable: true
  })
  set?: Media_thumbnailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Media_thumbnailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailWhereUniqueInput], {
    nullable: true
  })
  delete?: Media_thumbnailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_thumbnailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Media_thumbnailUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Media_thumbnailUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Media_thumbnailScalarWhereInput[] | undefined;
}
