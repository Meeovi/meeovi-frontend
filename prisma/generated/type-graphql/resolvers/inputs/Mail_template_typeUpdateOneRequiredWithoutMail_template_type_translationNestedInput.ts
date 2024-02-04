import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeCreateOrConnectWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeCreateOrConnectWithoutMail_template_type_translationInput";
import { Mail_template_typeCreateWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeCreateWithoutMail_template_type_translationInput";
import { Mail_template_typeUpdateToOneWithWhereWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeUpdateToOneWithWhereWithoutMail_template_type_translationInput";
import { Mail_template_typeUpsertWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeUpsertWithoutMail_template_type_translationInput";
import { Mail_template_typeWhereUniqueInput } from "../inputs/Mail_template_typeWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_typeUpdateOneRequiredWithoutMail_template_type_translationNestedInput", {})
export class Mail_template_typeUpdateOneRequiredWithoutMail_template_type_translationNestedInput {
  @TypeGraphQL.Field(_type => Mail_template_typeCreateWithoutMail_template_type_translationInput, {
    nullable: true
  })
  create?: Mail_template_typeCreateWithoutMail_template_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeCreateOrConnectWithoutMail_template_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: Mail_template_typeCreateOrConnectWithoutMail_template_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeUpsertWithoutMail_template_type_translationInput, {
    nullable: true
  })
  upsert?: Mail_template_typeUpsertWithoutMail_template_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Mail_template_typeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeUpdateToOneWithWhereWithoutMail_template_type_translationInput, {
    nullable: true
  })
  update?: Mail_template_typeUpdateToOneWithWhereWithoutMail_template_type_translationInput | undefined;
}
