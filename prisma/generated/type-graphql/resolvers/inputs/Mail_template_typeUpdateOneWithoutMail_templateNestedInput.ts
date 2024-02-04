import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeCreateOrConnectWithoutMail_templateInput } from "../inputs/Mail_template_typeCreateOrConnectWithoutMail_templateInput";
import { Mail_template_typeCreateWithoutMail_templateInput } from "../inputs/Mail_template_typeCreateWithoutMail_templateInput";
import { Mail_template_typeUpdateToOneWithWhereWithoutMail_templateInput } from "../inputs/Mail_template_typeUpdateToOneWithWhereWithoutMail_templateInput";
import { Mail_template_typeUpsertWithoutMail_templateInput } from "../inputs/Mail_template_typeUpsertWithoutMail_templateInput";
import { Mail_template_typeWhereInput } from "../inputs/Mail_template_typeWhereInput";
import { Mail_template_typeWhereUniqueInput } from "../inputs/Mail_template_typeWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_typeUpdateOneWithoutMail_templateNestedInput", {})
export class Mail_template_typeUpdateOneWithoutMail_templateNestedInput {
  @TypeGraphQL.Field(_type => Mail_template_typeCreateWithoutMail_templateInput, {
    nullable: true
  })
  create?: Mail_template_typeCreateWithoutMail_templateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeCreateOrConnectWithoutMail_templateInput, {
    nullable: true
  })
  connectOrCreate?: Mail_template_typeCreateOrConnectWithoutMail_templateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeUpsertWithoutMail_templateInput, {
    nullable: true
  })
  upsert?: Mail_template_typeUpsertWithoutMail_templateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  disconnect?: Mail_template_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  delete?: Mail_template_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Mail_template_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeUpdateToOneWithWhereWithoutMail_templateInput, {
    nullable: true
  })
  update?: Mail_template_typeUpdateToOneWithWhereWithoutMail_templateInput | undefined;
}
