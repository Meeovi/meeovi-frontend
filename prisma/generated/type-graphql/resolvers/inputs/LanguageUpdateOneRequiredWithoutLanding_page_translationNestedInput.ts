import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutLanding_page_translationInput } from "../inputs/LanguageCreateOrConnectWithoutLanding_page_translationInput";
import { LanguageCreateWithoutLanding_page_translationInput } from "../inputs/LanguageCreateWithoutLanding_page_translationInput";
import { LanguageUpdateToOneWithWhereWithoutLanding_page_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutLanding_page_translationInput";
import { LanguageUpsertWithoutLanding_page_translationInput } from "../inputs/LanguageUpsertWithoutLanding_page_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutLanding_page_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutLanding_page_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutLanding_page_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutLanding_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutLanding_page_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLanding_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutLanding_page_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutLanding_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutLanding_page_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutLanding_page_translationInput | undefined;
}
