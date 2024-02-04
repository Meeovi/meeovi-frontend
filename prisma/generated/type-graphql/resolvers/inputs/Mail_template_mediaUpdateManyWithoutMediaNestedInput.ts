import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyMediaInputEnvelope } from "../inputs/Mail_template_mediaCreateManyMediaInputEnvelope";
import { Mail_template_mediaCreateOrConnectWithoutMediaInput } from "../inputs/Mail_template_mediaCreateOrConnectWithoutMediaInput";
import { Mail_template_mediaCreateWithoutMediaInput } from "../inputs/Mail_template_mediaCreateWithoutMediaInput";
import { Mail_template_mediaScalarWhereInput } from "../inputs/Mail_template_mediaScalarWhereInput";
import { Mail_template_mediaUpdateManyWithWhereWithoutMediaInput } from "../inputs/Mail_template_mediaUpdateManyWithWhereWithoutMediaInput";
import { Mail_template_mediaUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Mail_template_mediaUpdateWithWhereUniqueWithoutMediaInput";
import { Mail_template_mediaUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Mail_template_mediaUpsertWithWhereUniqueWithoutMediaInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaUpdateManyWithoutMediaNestedInput", {})
export class Mail_template_mediaUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Mail_template_mediaCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_mediaCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Mail_template_mediaUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_mediaCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_mediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Mail_template_mediaUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Mail_template_mediaUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_template_mediaScalarWhereInput[] | undefined;
}
