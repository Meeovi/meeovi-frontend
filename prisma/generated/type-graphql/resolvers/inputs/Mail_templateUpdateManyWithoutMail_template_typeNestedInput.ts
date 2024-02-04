import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateManyMail_template_typeInputEnvelope } from "../inputs/Mail_templateCreateManyMail_template_typeInputEnvelope";
import { Mail_templateCreateOrConnectWithoutMail_template_typeInput } from "../inputs/Mail_templateCreateOrConnectWithoutMail_template_typeInput";
import { Mail_templateCreateWithoutMail_template_typeInput } from "../inputs/Mail_templateCreateWithoutMail_template_typeInput";
import { Mail_templateScalarWhereInput } from "../inputs/Mail_templateScalarWhereInput";
import { Mail_templateUpdateManyWithWhereWithoutMail_template_typeInput } from "../inputs/Mail_templateUpdateManyWithWhereWithoutMail_template_typeInput";
import { Mail_templateUpdateWithWhereUniqueWithoutMail_template_typeInput } from "../inputs/Mail_templateUpdateWithWhereUniqueWithoutMail_template_typeInput";
import { Mail_templateUpsertWithWhereUniqueWithoutMail_template_typeInput } from "../inputs/Mail_templateUpsertWithWhereUniqueWithoutMail_template_typeInput";
import { Mail_templateWhereUniqueInput } from "../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.InputType("Mail_templateUpdateManyWithoutMail_template_typeNestedInput", {})
export class Mail_templateUpdateManyWithoutMail_template_typeNestedInput {
  @TypeGraphQL.Field(_type => [Mail_templateCreateWithoutMail_template_typeInput], {
    nullable: true
  })
  create?: Mail_templateCreateWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateCreateOrConnectWithoutMail_template_typeInput], {
    nullable: true
  })
  connectOrCreate?: Mail_templateCreateOrConnectWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateUpsertWithWhereUniqueWithoutMail_template_typeInput], {
    nullable: true
  })
  upsert?: Mail_templateUpsertWithWhereUniqueWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_templateCreateManyMail_template_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_templateCreateManyMail_template_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_templateWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateUpdateWithWhereUniqueWithoutMail_template_typeInput], {
    nullable: true
  })
  update?: Mail_templateUpdateWithWhereUniqueWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateUpdateManyWithWhereWithoutMail_template_typeInput], {
    nullable: true
  })
  updateMany?: Mail_templateUpdateManyWithWhereWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_templateScalarWhereInput[] | undefined;
}
