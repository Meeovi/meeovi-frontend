import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateManyMediaInputEnvelope } from "../inputs/Media_translationCreateManyMediaInputEnvelope";
import { Media_translationCreateOrConnectWithoutMediaInput } from "../inputs/Media_translationCreateOrConnectWithoutMediaInput";
import { Media_translationCreateWithoutMediaInput } from "../inputs/Media_translationCreateWithoutMediaInput";
import { Media_translationScalarWhereInput } from "../inputs/Media_translationScalarWhereInput";
import { Media_translationUpdateManyWithWhereWithoutMediaInput } from "../inputs/Media_translationUpdateManyWithWhereWithoutMediaInput";
import { Media_translationUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Media_translationUpdateWithWhereUniqueWithoutMediaInput";
import { Media_translationUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Media_translationUpsertWithWhereUniqueWithoutMediaInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationUpdateManyWithoutMediaNestedInput", {})
export class Media_translationUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Media_translationCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Media_translationCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Media_translationCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Media_translationUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_translationCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Media_translationCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Media_translationUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Media_translationUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Media_translationScalarWhereInput[] | undefined;
}
