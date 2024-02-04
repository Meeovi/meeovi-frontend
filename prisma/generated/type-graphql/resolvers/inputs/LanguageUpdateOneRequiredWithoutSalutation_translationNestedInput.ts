import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSalutation_translationInput } from "../inputs/LanguageCreateOrConnectWithoutSalutation_translationInput";
import { LanguageCreateWithoutSalutation_translationInput } from "../inputs/LanguageCreateWithoutSalutation_translationInput";
import { LanguageUpdateToOneWithWhereWithoutSalutation_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutSalutation_translationInput";
import { LanguageUpsertWithoutSalutation_translationInput } from "../inputs/LanguageUpsertWithoutSalutation_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutSalutation_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutSalutation_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSalutation_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSalutation_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSalutation_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSalutation_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutSalutation_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutSalutation_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutSalutation_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutSalutation_translationInput | undefined;
}
