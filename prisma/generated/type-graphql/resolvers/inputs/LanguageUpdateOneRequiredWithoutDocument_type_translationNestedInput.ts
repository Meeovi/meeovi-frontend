import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutDocument_type_translationInput } from "../inputs/LanguageCreateOrConnectWithoutDocument_type_translationInput";
import { LanguageCreateWithoutDocument_type_translationInput } from "../inputs/LanguageCreateWithoutDocument_type_translationInput";
import { LanguageUpdateToOneWithWhereWithoutDocument_type_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutDocument_type_translationInput";
import { LanguageUpsertWithoutDocument_type_translationInput } from "../inputs/LanguageUpsertWithoutDocument_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutDocument_type_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutDocument_type_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutDocument_type_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutDocument_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutDocument_type_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutDocument_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutDocument_type_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutDocument_type_translationInput | undefined;
}
