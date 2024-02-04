import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMail_header_footer_translationInput } from "../inputs/LanguageCreateOrConnectWithoutMail_header_footer_translationInput";
import { LanguageCreateWithoutMail_header_footer_translationInput } from "../inputs/LanguageCreateWithoutMail_header_footer_translationInput";
import { LanguageUpdateToOneWithWhereWithoutMail_header_footer_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutMail_header_footer_translationInput";
import { LanguageUpsertWithoutMail_header_footer_translationInput } from "../inputs/LanguageUpsertWithoutMail_header_footer_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutMail_header_footer_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutMail_header_footer_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutMail_header_footer_translationInput | undefined;
}
