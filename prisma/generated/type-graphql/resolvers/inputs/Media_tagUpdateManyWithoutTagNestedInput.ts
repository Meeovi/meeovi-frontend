import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCreateManyTagInputEnvelope } from "../inputs/Media_tagCreateManyTagInputEnvelope";
import { Media_tagCreateOrConnectWithoutTagInput } from "../inputs/Media_tagCreateOrConnectWithoutTagInput";
import { Media_tagCreateWithoutTagInput } from "../inputs/Media_tagCreateWithoutTagInput";
import { Media_tagScalarWhereInput } from "../inputs/Media_tagScalarWhereInput";
import { Media_tagUpdateManyWithWhereWithoutTagInput } from "../inputs/Media_tagUpdateManyWithWhereWithoutTagInput";
import { Media_tagUpdateWithWhereUniqueWithoutTagInput } from "../inputs/Media_tagUpdateWithWhereUniqueWithoutTagInput";
import { Media_tagUpsertWithWhereUniqueWithoutTagInput } from "../inputs/Media_tagUpsertWithWhereUniqueWithoutTagInput";
import { Media_tagWhereUniqueInput } from "../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.InputType("Media_tagUpdateManyWithoutTagNestedInput", {})
export class Media_tagUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [Media_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Media_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Media_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: Media_tagUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Media_tagCreateManyTagInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Media_tagUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: Media_tagUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: Media_tagUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Media_tagScalarWhereInput[] | undefined;
}
