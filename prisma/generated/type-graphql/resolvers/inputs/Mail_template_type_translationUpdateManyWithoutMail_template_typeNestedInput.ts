import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCreateManyMail_template_typeInputEnvelope } from "../inputs/Mail_template_type_translationCreateManyMail_template_typeInputEnvelope";
import { Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput";
import { Mail_template_type_translationCreateWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationCreateWithoutMail_template_typeInput";
import { Mail_template_type_translationScalarWhereInput } from "../inputs/Mail_template_type_translationScalarWhereInput";
import { Mail_template_type_translationUpdateManyWithWhereWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationUpdateManyWithWhereWithoutMail_template_typeInput";
import { Mail_template_type_translationUpdateWithWhereUniqueWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationUpdateWithWhereUniqueWithoutMail_template_typeInput";
import { Mail_template_type_translationUpsertWithWhereUniqueWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationUpsertWithWhereUniqueWithoutMail_template_typeInput";
import { Mail_template_type_translationWhereUniqueInput } from "../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_type_translationUpdateManyWithoutMail_template_typeNestedInput", {})
export class Mail_template_type_translationUpdateManyWithoutMail_template_typeNestedInput {
  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateWithoutMail_template_typeInput], {
    nullable: true
  })
  create?: Mail_template_type_translationCreateWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationUpsertWithWhereUniqueWithoutMail_template_typeInput], {
    nullable: true
  })
  upsert?: Mail_template_type_translationUpsertWithWhereUniqueWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateManyMail_template_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_type_translationCreateManyMail_template_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationUpdateWithWhereUniqueWithoutMail_template_typeInput], {
    nullable: true
  })
  update?: Mail_template_type_translationUpdateWithWhereUniqueWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationUpdateManyWithWhereWithoutMail_template_typeInput], {
    nullable: true
  })
  updateMany?: Mail_template_type_translationUpdateManyWithWhereWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_template_type_translationScalarWhereInput[] | undefined;
}
