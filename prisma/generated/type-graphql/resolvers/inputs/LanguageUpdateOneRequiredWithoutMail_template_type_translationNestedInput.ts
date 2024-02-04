import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMail_template_type_translationInput } from "../inputs/LanguageCreateOrConnectWithoutMail_template_type_translationInput";
import { LanguageCreateWithoutMail_template_type_translationInput } from "../inputs/LanguageCreateWithoutMail_template_type_translationInput";
import { LanguageUpdateToOneWithWhereWithoutMail_template_type_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutMail_template_type_translationInput";
import { LanguageUpsertWithoutMail_template_type_translationInput } from "../inputs/LanguageUpsertWithoutMail_template_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutMail_template_type_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutMail_template_type_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_template_type_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMail_template_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMail_template_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMail_template_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutMail_template_type_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutMail_template_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutMail_template_type_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutMail_template_type_translationInput | undefined;
}
