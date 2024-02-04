import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope } from "../inputs/Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope";
import { Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput";
import { Mail_header_footer_translationCreateWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationCreateWithoutMail_header_footerInput";
import { Mail_header_footer_translationScalarWhereInput } from "../inputs/Mail_header_footer_translationScalarWhereInput";
import { Mail_header_footer_translationUpdateManyWithWhereWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationUpdateManyWithWhereWithoutMail_header_footerInput";
import { Mail_header_footer_translationUpdateWithWhereUniqueWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationUpdateWithWhereUniqueWithoutMail_header_footerInput";
import { Mail_header_footer_translationUpsertWithWhereUniqueWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationUpsertWithWhereUniqueWithoutMail_header_footerInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footer_translationUpdateManyWithoutMail_header_footerNestedInput", {})
export class Mail_header_footer_translationUpdateManyWithoutMail_header_footerNestedInput {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateWithoutMail_header_footerInput], {
    nullable: true
  })
  create?: Mail_header_footer_translationCreateWithoutMail_header_footerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput], {
    nullable: true
  })
  connectOrCreate?: Mail_header_footer_translationCreateOrConnectWithoutMail_header_footerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationUpsertWithWhereUniqueWithoutMail_header_footerInput], {
    nullable: true
  })
  upsert?: Mail_header_footer_translationUpsertWithWhereUniqueWithoutMail_header_footerInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_header_footer_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationUpdateWithWhereUniqueWithoutMail_header_footerInput], {
    nullable: true
  })
  update?: Mail_header_footer_translationUpdateWithWhereUniqueWithoutMail_header_footerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationUpdateManyWithWhereWithoutMail_header_footerInput], {
    nullable: true
  })
  updateMany?: Mail_header_footer_translationUpdateManyWithWhereWithoutMail_header_footerInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footer_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Mail_header_footer_translationScalarWhereInput[] | undefined;
}
