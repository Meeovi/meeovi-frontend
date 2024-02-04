import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCreateManyMediaInputEnvelope } from "../inputs/Media_tagCreateManyMediaInputEnvelope";
import { Media_tagCreateOrConnectWithoutMediaInput } from "../inputs/Media_tagCreateOrConnectWithoutMediaInput";
import { Media_tagCreateWithoutMediaInput } from "../inputs/Media_tagCreateWithoutMediaInput";
import { Media_tagScalarWhereInput } from "../inputs/Media_tagScalarWhereInput";
import { Media_tagUpdateManyWithWhereWithoutMediaInput } from "../inputs/Media_tagUpdateManyWithWhereWithoutMediaInput";
import { Media_tagUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Media_tagUpdateWithWhereUniqueWithoutMediaInput";
import { Media_tagUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Media_tagUpsertWithWhereUniqueWithoutMediaInput";
import { Media_tagWhereUniqueInput } from "../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.InputType("Media_tagUpdateManyWithoutMediaNestedInput", {})
export class Media_tagUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Media_tagCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Media_tagCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Media_tagCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Media_tagUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_tagCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Media_tagCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereUniqueInput], {
    nullable: true
  })
  set?: Media_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Media_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereUniqueInput], {
    nullable: true
  })
  delete?: Media_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_tagWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Media_tagUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Media_tagUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Media_tagScalarWhereInput[] | undefined;
}
