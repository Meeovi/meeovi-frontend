import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyMail_templateInputEnvelope } from "../inputs/Mail_template_mediaCreateManyMail_templateInputEnvelope";
import { Mail_template_mediaCreateOrConnectWithoutMail_templateInput } from "../inputs/Mail_template_mediaCreateOrConnectWithoutMail_templateInput";
import { Mail_template_mediaCreateWithoutMail_templateInput } from "../inputs/Mail_template_mediaCreateWithoutMail_templateInput";
import { Mail_template_mediaScalarWhereInput } from "../inputs/Mail_template_mediaScalarWhereInput";
import { Mail_template_mediaUpdateManyWithWhereWithoutMail_templateInput } from "../inputs/Mail_template_mediaUpdateManyWithWhereWithoutMail_templateInput";
import { Mail_template_mediaUpdateWithWhereUniqueWithoutMail_templateInput } from "../inputs/Mail_template_mediaUpdateWithWhereUniqueWithoutMail_templateInput";
import { Mail_template_mediaUpsertWithWhereUniqueWithoutMail_templateInput } from "../inputs/Mail_template_mediaUpsertWithWhereUniqueWithoutMail_templateInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaUpdateManyWithoutMail_templateNestedInput", {})
export class Mail_template_mediaUpdateManyWithoutMail_templateNestedInput {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateWithoutMail_templateInput], {
    nullable: true
  })
  create?: Mail_template_mediaCreateWithoutMail_templateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateOrConnectWithoutMail_templateInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_mediaCreateOrConnectWithoutMail_templateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpsertWithWhereUniqueWithoutMail_templateInput], {
    nullable: true
  })
  upsert?: Mail_template_mediaUpsertWithWhereUniqueWithoutMail_templateInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateManyMail_templateInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_mediaCreateManyMail_templateInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpdateWithWhereUniqueWithoutMail_templateInput], {
    nullable: true
  })
  update?: Mail_template_mediaUpdateWithWhereUniqueWithoutMail_templateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaUpdateManyWithWhereWithoutMail_templateInput], {
    nullable: true
  })
  updateMany?: Mail_template_mediaUpdateManyWithWhereWithoutMail_templateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_template_mediaScalarWhereInput[] | undefined;
}
